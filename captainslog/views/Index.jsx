const React = require('react');

const Index = ({ logs }) => {
    return (
        <div>
            <ul>
                {logs.map(log => (
                    <li key={log._id}><a href={`/logs/${log._id}`}>{log.title}</a></li>
                ))}
            </ul>
            <a href="/logs/new">New Log</a>
        </div>
    );
};

module.exports = Index;
