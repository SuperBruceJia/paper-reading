import path from 'path';
import assert from 'assert';
import { CLIEngine } from 'eslint';
import { NAMESPACE_CONFIG, Namespace } from '../config';

const cli = new CLIEngine({});

const goodReport = cli.executeOnFiles([
  './**/good.js',
  // './**/good.jsx',
  './**/good.ts',
  // './**/good.vue'
]);

goodReport.results.forEach((goodReportForOneFile) => {
  const { errorCount, filePath } = goodReportForOneFile;
  assert.equal(errorCount, 0, `${filePath} should have no error`);
});

const badReport = cli.executeOnFiles([
  './**/bad.js',
  // './**/bad.jsx',
  './**/bad.ts',
  // './**/bad.vue'
]);

// 忽略这些规则的报错信息
const badWhitelist = ['react/jsx-uses-react', 'react/jsx-uses-vars', 'vue/jsx-uses-vars'];

badReport.results.forEach((badReportForOneFile) => {
  const { errorCount, warningCount, filePath, messages } = badReportForOneFile;

  const dirList = path.dirname(filePath).split(path.sep);
  const ruleName = dirList.pop();
  const namespace = dirList.pop() as Namespace;

  // TODO: 待讨论：是否需要根据配置来决定是至少有一个error还是至少有一个warn？
  assert(
    errorCount > 0 || warningCount > 0,
    `${filePath} should have at least one error or one warn`,
  );

  messages.forEach((message) => {
    const fullRuleName = NAMESPACE_CONFIG[namespace].rulePrefix + ruleName;
    if (badWhitelist.includes(fullRuleName)) {
      return;
    }
    if (message.ruleId !== fullRuleName) {
      assert.equal(
        message.ruleId,
        fullRuleName,
        `${filePath} should only have error ${fullRuleName}, but got ${message.ruleId}`,
      );
    }
  });
});
