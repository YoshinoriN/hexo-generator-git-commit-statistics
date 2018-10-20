'use strict';

const config = hexo.config;
const fs = require('fs');
const gitDir = config.gitCommitStatistics.gitDir;
const log = hexo.log || console;

if (!fs.existsSync(gitDir) || !gitDir.endsWith('.git')) {
  log.error('hexo-generator-git-commit-statistics: Not a git repository');
  return;
}

const defaultEnableStatistics = {
  byPerDayOfMonth: true,
  byPerMonth: true,
  byPerWeekDays: true,
  byPerYear: true,
  byPerDayHour: true
};

if (config.gitCommitStatistics.path === '' || config.gitCommitStatistics.path === undefined) {
  config.gitCommitStatistics.path = 'commitStatistics.json';
}
config.gitCommitStatistics.enableStatistics = Object.assign(defaultEnableStatistics, config.gitCommitStatistics.enableStatistics);

hexo.extend.generator.register('hexo-generator-git-commit-statistics', require('./generator'));
