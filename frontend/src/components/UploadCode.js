import React, { useState } from 'react';

function UploadCode() {
    const [filename, setFilename] = useState('');
    const [content, setContent] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/upload_code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ filename, content }),
        })
        .then(response => response.json())
        .then(data => {
            setFeedback(data.feedback);
            setFilename('');
            setContent('');
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Filename" 
                value={filename} 
                onChange={(e) => setFilename(e.target.value)} 
                required 
            />
            <textarea 
                placeholder="Paste your code here" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                required 
            />
            <button type="submit">Submit Code for Review</button>
            {feedback && <div><h3>Feedback:</h3><p>{feedback}</p></div>}
        </form>
    );
}

export default UploadCode;
