/* eslint-disable @typescript-eslint/no-require-imports */
const readline = require('readline');
const path = require('path');
const { PassThrough } = require('stream');
const localShell = require('./localShell');
const semanticReleaseGit = require('semantic-release/lib/git');
semanticReleaseGit.verifyAuth = async () => {};
semanticReleaseGit.fetch = async () => {};
const semanticRelease = require('semantic-release');

const { repository } = require('../package.json');

module.exports = async (options = {}) => {
  const workspace = path.resolve(`${__dirname}/../`);

  await localShell.exec('git checkout master && git pull', {
    cwd: workspace,
  });

  const tagList = await localShell
    .exec('git tag -l', {
      cwd: workspace,
    })
    .then(res => res.info.trim().split('\n'))
    .catch((err) => {
      console.error(err);
      return [];
    });
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < tagList.length; i += 1) {
    await localShell.exec(`git tag -d ${tagList[i]}`, {
      cwd: workspace,
    });
  }

  await localShell.exec('git fetch -t', {
    cwd: workspace,
  });

  const stdoutPipe = new PassThrough();
  readline.createInterface(stdoutPipe).on('line', info => console.log(info));

  const stderrPipe = new PassThrough();
  readline.createInterface(stderrPipe).on('line', err => console.log(`[ERROR] ${err}`));

  const result = await semanticRelease(
    {
      branch: 'master',
      // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
      repositoryUrl: repository && repository.url,
      ...options,
      dryRun: true,
      plugins: ['@semantic-release/release-notes-generator', '@semantic-release/commit-analyzer'],
    },
    {
      cwd: workspace,
      stdout: stdoutPipe,
      stderr: stderrPipe,
    },
  );

  if (result === false) {
    console.error('autotag 没有在提交记录中没有找到需要更新的版本. 本次 push 没有增加新的 tag');
    return;
  }

  if (!result.nextRelease) {
    throw new Error('autotag 在计算版本号时出错. 具体原因请查看日志');
  }

  const { type, gitHead, gitTag, notes } = result.nextRelease;
  console.log(`Applying tag ${gitTag} for next ${type} release at ${gitHead}`);
  if (options.releaseNotes) {
    await localShell.exec(`git tag -a ${gitTag} -m "${notes}"`, { cwd: workspace });
  } else {
    await localShell.exec(`git tag ${gitTag}`, { cwd: workspace });
  }

  console.log('Pushing tags to git repository');
  await localShell.exec('git push --tags', { cwd: workspace });
};

module.exports.localShell = localShell;

module.exports({});
