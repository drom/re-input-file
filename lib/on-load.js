'use strict';

module.exports = function onLoad (event, onTextResult, onPath) {
    if (typeof onPath === 'function') {
        onPath(event.target.value);
    }
    if (typeof onTextResult === 'function') {
        const f = event.target.files[0];
        if (f) {
            var myReader = new FileReader();
            var ts = Date.now();
            'onabort onerror onload onloadstart onloadend onloadprogress'
                .split(' ')
                .forEach(function (e) {
                    myReader[e] = function (p) {
                        // console.log(p);
                        if (p.type === 'loadend') {
                            console.log('loaded in: ' + (Date.now() - ts) + ' ms');
                            onTextResult(p.currentTarget.result, f.name);
                        }
                    };
                });
            myReader.readAsText(f);
        } else {
            console.log(f);
        }
    }
};

/* eslint no-console: 0 */
