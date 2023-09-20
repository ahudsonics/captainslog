const React = require('react');

const Show = ({ log }) => {
    return (
        <div>
            <h1>{log.title}</h1>
            <p>{log.entry}</p>
            <p>Ship is broken: {log.shipIsBroken ? 'Yes' : 'No'}</p>
            <a href="/logs">Back to Index</a>
        </div>
    );
};

module.exports = Show;
