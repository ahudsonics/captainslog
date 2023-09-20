const React = require('react');

const Edit = ({ log }) => {
    return (
        <div>
            <h1>Edit Log</h1>
            <form action={`/logs/${log._id}?_method=PUT`} method="POST">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" defaultValue={log.title} placeholder="Title" /><br />
                
                <label htmlFor="entry">Entry:</label>
                <textarea id="entry" name="entry" defaultValue={log.entry} placeholder="Entry"></textarea><br />
                
                <label htmlFor="shipIsBroken">Ship is Broken:</label>
                <input type="checkbox" id="shipIsBroken" name="shipIsBroken" defaultChecked={log.shipIsBroken} /><br />
                
                <input type="submit" value="Update" />
            </form>
            <a href={`/logs/${log._id}`}>Cancel</a>
        </div>
    );
};

module.exports = Edit;
