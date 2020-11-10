/* eslint-disable @typescript-eslint/no-require-imports */
const { spawn } = require('child_process');

const CONSTANTS = {
  // Master: 超过这个时间必然中断脚本执行，且报错
  MASTER_TIMEOUT_MAX: 300 * 1000,
  // Master: 如果这个时间没有输出，那么中断脚本执行，且报错
  MASTER_TIMEOUT_PERIOD: 60 * 1000,
  // Master: 标准输出流和标准错误流混合后的最大buffer size
  MASTER_INFO_MAX_BUFFER: 500 * 1024,
};

module.exports = {
  exec: async (shell, options = {}) => {
    const killSignal = 9;

    const { cwd, input, env, logOrigin = true } = options;
    return new Promise((resolve, reject) => {
      const task = spawn(shell, {
        shell: true,
        env: { ...process.env, ...env },
        cwd,
      });
      task.response = {
        code: 0,
        message: '成功',
        // 把标准输出流和标准错误流按照时间先后混合出来的buffer
        info: '',
        stderr: '',
        stdout: '',
      };

      task.maxTid = setTimeout(() => {
        task.kill(`${killSignal}`);
        task.response.code = killSignal;
        task.response.message = `shell脚本因执行超过最大超时时间(${CONSTANTS.MASTER_TIMEOUT_MAX}ms)而被强制关闭`;
      }, CONSTANTS.MASTER_TIMEOUT_MAX);

      const updatePeriod = () => {
        if (task.tid) clearTimeout(task.tid);

        task.tid = setTimeout(() => {
          task.kill(`${killSignal}`);

          task.response.code = killSignal;
          task.response.message = `shell脚本因执行超过(${CONSTANTS.MASTER_TIMEOUT_PERIOD}ms)没有任何输出而被强制关闭`;
        }, CONSTANTS.MASTER_TIMEOUT_PERIOD);
      };

      updatePeriod();

      const streamData = (data, type) => {
        const validBuffer = (buffer) => {
          if (Buffer.from(buffer).length > CONSTANTS.MASTER_INFO_MAX_BUFFER) {
            return false;
          }
          return true;
        };

        if (validBuffer(task.response.info + data)) {
          task.response.info += data;
          task.response[type] += data;
          updatePeriod();
        } else {
          task.kill(`${killSignal}`);
          task.response.code = killSignal;
          const msg = `任务输出数据量超过最大buffer(${CONSTANTS.MASTER_INFO_MAX_BUFFER}bytes)而被强制关闭`;
          task.response.message = msg;
        }
      };

      task.stdout.on('data', (data) => {
        streamData(data, 'stdout');
      });
      task.stderr.on('data', (data) => {
        streamData(data, 'stderr');
      });

      task.on('close', (code, signal) => {
        if (logOrigin) {
          console.log(task.response.info);
        }
        clearTimeout(task.maxTid);
        clearTimeout(task.tid);

        if (signal === 'SIGKILL') {
          reject(task.response);
          return;
        }

        if (code === 0) {
          resolve(task.response);
        } else {
          task.response.code = code;
          task.response.message = `任务执行失败，返回码：${code}`;
          reject(task.response);
        }
      });

      if (typeof input === 'string') {
        task.stdin.write(input);
        task.stdin.end();
      }
    });
  },
};
