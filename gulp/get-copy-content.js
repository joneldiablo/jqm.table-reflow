'use strict';

import jsonfile from 'jsonfile';
import request from 'request';


export default function (gulp, plugins, args, config, taskTarget, browserSync) {
    gulp.task('get-copy-text', () => {
        let username = "principal",
            password = "principal",
            url = 'http://localhost/google-ss.php',
            auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

        request(url, {
            headers: {
                "Authorization": auth
            },
            json: true
        }, (err, res, data) => {
            if (err) { return console.log(err); }
            let file = './src/_data/copy.json',
                toReturn = {};

            for (let key in data) {
                toReturn[key] = data[key].es;
            }

            jsonfile.writeFile(file, toReturn, { spaces: 2 }, function (err) {
                if (err)
                    console.error(err);
            });
        });
    });
}