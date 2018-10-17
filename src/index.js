'use strict';

const config = hexo.config;
const fs = require('fs');
const log = hexo.log || console;

const gitDir = config.gitCommitStatistics.gitDir;

if (!fs.existsSync(gitDir) || !gitDir.endsWith('.git')) {
  log.error('hexo-generator-git-commit-statistics: Not a git repository');
  return;
}

const defaultFileName = { fileName: 'commitStatistics.json' };
const defaultEnableStatistics = {
  byPerDayOfMonth: true,
  byPerMonth: true,
  byPerWeekDays: true,
  byPerYear: true,
  byPerDayHour: true
};

config.gitCommitStatistics = Object.assign(defaultFileName, config.gitCommitStatistics.fileName);
config.enableStatistics = Object.assign(defaultEnableStatistics, config.gitCommitStatistics.enableStatistics);

hexo.extend.generator.register('hexo-generator-git-commit-statistics', require('./generator'));
