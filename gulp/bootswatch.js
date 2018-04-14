'use strict';

import fs from 'fs';

export default function (gulp, plugins, args, config, taskTarget, browserSync) {
  let bootswatchPath = 'node_modules/bootswatch/dist/';

  // Copy
  gulp.task('bootswatch', () => {
    let files = ['_variables.scss',
      '_bootswatch.scss'
    ];
    if (args['all-variables']) {
      gulp.src(files[0], {
        cwd: 'node_modules/bootstrap/scss/'
      })
        .pipe(gulp.dest('src/_styles/references/'));
    } else {
      let b = args;
      delete b['_'];
      for (const key in b) {
        if (b.hasOwnProperty(key)) {
          b = key;
          break;
        }
      }
      let dest = 'src/_styles/' + b + '-table-reflow/';
      gulp.src(files, {
        cwd: bootswatchPath + b + '/'
      })
        .pipe(gulp.dest(dest));
    }
  });
}
