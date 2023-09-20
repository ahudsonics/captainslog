const React = require('react');

const New = () => {
    return (
        <div>
            <form action="/logs" method="POST">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" placeholder="Title" /><br />
                
                <label htmlFor="entry">Entry:</label>
                <textarea id="entry" name="entry" placeholder="Entry"></textarea><br />
                
                <label htmlFor="shipIsBroken">Ship is Broken:</label>
                <input type="checkbox" id="shipIsBroken" name="shipIsBroken" /><br />
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

module.exports = New;

