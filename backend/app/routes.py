from flask import request, jsonify
from app import app, db
from app.models import CodeReview
from app.analysis import analyze_code

@app.route('/upload_code', methods=['POST'])
def upload_code():
    data = request.json
    filename = data['filename']
    content = data['content']

    feedback = analyze_code(content)

    new_review = CodeReview(filename=filename, content=content, feedback=feedback)
    db.session.add(new_review)
    db.session.commit()

    return jsonify({"message": "Code uploaded and analyzed successfully!", "feedback": feedback}), 201

@app.route('/get_reviews', methods=['GET'])
def get_reviews():
    reviews = CodeReview.query.all()
    return jsonify([{
        'id': review.id,
        'filename': review.filename,
        'review_date': review.review_date.strftime('%Y-%m-%d %H:%M:%S'),
        'feedback': review.feedback
    } for review in reviews])
