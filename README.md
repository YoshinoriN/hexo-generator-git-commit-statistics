# hexo-generator-git-commit-statistics

[git-commit-statistics](https://www.npmjs.com/package/git-commit-statistics) wrapper for Hexo.

## Installation

```sh
npm install hexo-generator-git-commit-statistics --save
```

## Configuration

Add the following snippet in `_config.yml`

```js
gitCommitStatistics:
  gitDir: 'yourGitDirectory/.git'
  path: commitStatistics.json
  enableStatistics:
    byPerDayOfMonth: true
    byPerMonth: true
    byPerWeekDays: true
    byPerYear: true
    byPerDayHour: true
    byPerDayHourOfWeekDay: true
```

* gitDir: Set your git repository path.
* path: Out put file's path. Default is `commitStatistics.json`.

Other options please see [git-commit-statistics](https://www.npmjs.com/package/git-commit-statistics) what is mean.

## Example of Result

```json
[
  {
    "byPerDayOfMonth": [
      {
        "day": 1,
        "count": 37
      },
      {
        "day": 2,
        "count": 26
      },
...
      {
        "day": 30,
        "count": 19
      },
      {
        "day": 31,
        "count": 22
      }
    ]
  },
  {
    "byPerMonth": [
      {
        "id": 1,
        "month": "Jan",
        "count": 79
      },
      {
        "id": 2,
        "month": "Feb",
        "count": 53
      },
...
      {
        "id": 11,
        "month": "Nov",
        "count": 82
      },
      {
        "id": 12,
        "month": "Dec",
        "count": 119
      }
    ]
  },
  {
    "byPerWeekDays": [
      {
        "id": 0,
        "dayOfWeek": "Sun",
        "count": 193
      },
      {
        "id": 1,
        "dayOfWeek": "Mon",
        "count": 153
      },
...
      {
        "id": 5,
        "dayOfWeek": "Fri",
        "count": 91
      },
      {
        "id": 6,
        "dayOfWeek": "Sat",
        "count": 129
      }
    ]
  },
  {
    "byPerYear": [
      {
        "year": 2016,
        "count": 269
      },
      {
        "year": 2017,
        "count": 387
      },
      {
        "year": 2018,
        "count": 247
      }
    ]
  },
  {
    "byPerDayHour": [
      {
        "hour": 0,
        "count": 108
      },
      {
        "hour": 1,
        "count": 65
      },
      {
        "hour": 2,
        "count": 34
      },
...
      {
        "hour": 22,
        "count": 187
      },
      {
        "hour": 23,
        "count": 138
      }
    ]
  },
  {
    "byPerDayHourOfWeekDay": [
      {
        "id": 0,
        "Sun": [
          {
            "hour": 0,
            "count": 9
          },
...
          {
              "hour": 23,
              "count": 23
          }
        ]
      },
      {
        "id": 1,
        "Mon": [
          {
            "hour": 0,
            "count": 21
          },
...
          {
            "hour": 23,
            "count": 25
          }
        ]
      },
...
      {
        "id": 6,
        "Sat": [
          {
            "hour": 0,
            "count": 15
          },
...
          {
            "hour": 23,
            "count": 16
          }
        ]
      }
    ]
  }
]
```

## License

MIT
