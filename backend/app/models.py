from app import db
from datetime import datetime

class CodeReview(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    review_date = db.Column(db.DateTime, default=datetime.utcnow)
    feedback = db.Column(db.Text)

    def __repr__(self):
        return f'<CodeReview {self.id} - {self.filename}>'
