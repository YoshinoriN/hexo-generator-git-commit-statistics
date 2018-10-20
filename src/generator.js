'use strict';

module.exports = function() {

  const config = this.config.gitCommitStatistics;
  const CommitStatistics = require('git-commit-statistics');
  const cs = new CommitStatistics(config.gitDir);

  let result = [];
  if (config.enableStatistics.byPerDayOfMonth) {
    result.push({byPerDayOfMonth: cs.getByPerDayOfMonth()});
  }

  if (config.enableStatistics.byPerMonth) {
    result.push({byPerMonth: cs.getByPerMonth()});
  }

  if (config.enableStatistics.byPerWeekDays) {
    result.push({byPerWeekDays: cs.getByPerWeekDay()});
  }

  if (config.enableStatistics.byPerYear) {
    result.push({byPerYear: cs.getByPerYear()});
  }

  if (config.enableStatistics.byPerDayHour) {
    result.push({byPerDayHour: cs.getByDayHour()});
  }

  return {
    path: config.path,
    data: JSON.stringify(result)
  };
};
