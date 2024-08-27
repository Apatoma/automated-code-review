import React, { useState, useEffect } from 'react';

function AnalysisReport() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/get_reviews')
            .then(response => response.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div>
            <h2>Past Reviews</h2>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <strong>{review.filename}</strong> - Reviewed on: {review.review_date}
                        <p>Feedback: {review.feedback}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AnalysisReport;
