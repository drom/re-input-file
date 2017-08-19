'use strict';

const React = require('react')
    , ReactDOM = require('react-dom')
    , fileSelect = require('../lib/')
    ;

const $ = React.createElement;

const fs1 = fileSelect(React);

class App extends React.Component {

    constructor(props) {
        super(props);
        fs1.setOnTextResult((body, name) => {
            console.log(name, body.length);
        });
        fs1.setOnPath(path => {
            console.log(path);
        });
    }

    render () {
        return (
            $('div', {},
                $('button', { onClick: fs1.onInit }, 'Click Me!'),
                $('span', {}),
                $('span', {}),
                $('span', {}),
                $('span', {}),
                $(fs1.Comp, {})
            )
        );
    }
}

ReactDOM.render(
    $(App, {}),
    document.getElementById('root')
);

/* eslint-env browser */
/* eslint no-console: 0 */
