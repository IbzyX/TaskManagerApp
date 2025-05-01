from . import db

class Task(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    content = db.Column(db.String(200), nullable = True)
    completed = db.Column(db.Boolean, default = True)

    def __repr__(self):
        return f"<Task {self.id} - {self.content}>"