'use strict';

const onLoad = require('./on-load');

module.exports = React => {
    const $ = React.createElement;

    let ref;

    let onTextResult;
    let onPath;

    function Comp () {
        return $('input', {
            type: 'file',
            style: {
                display: 'none'
            },
            onChange: event => {
                onLoad(event, onTextResult, onPath);
            },
            ref: function (input) {
                ref = input;
            }
        });
    }

    return {
        setOnTextResult: function (cb) {
            onTextResult = cb;
        },
        setOnPath: function (cb) {
            onPath = cb;
        },
        Comp: Comp,
        onInit: function () {
            console.log('handler');
            ref.click();
        }
    };
};

/* eslint no-console: 0 */
