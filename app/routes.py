from flask import Blueprint, render_template, request, redirect, url_for
from . import db
from .models import Task

main = Blueprint('main',__name__)

@main.route('/')
def home_page():
    return render_template('home.html')

@main.route('/upcoming')
def upcoming_page():
    todo_tasks = Task.query.filter_by(complete=False).all()
    completed_tasks = Task.query.filter_by(completed=True).all()
    return render_template('upcoming.html', todo_tasks=todo_tasks, completed_tasks=completed_tasks)

@main.route('/calendar')
def calendar_page():
    return render_template('calendar_page.html')

@main.route('/notes')
def notes_page():
    return render_template('notes.html')

#add a new task (still available for forms to submit to)
@main.route('/add', methods=['POST'])
def add_task():
    task_content = request.form['content']
    new_task = Task(content=task_content)
    db.session.add(new_task)
    db.session.commit()
    return redirect(url_for('main.upcoming_page'))

#mark a task as completed
@main.route('/complete/<int:task_id>', methods=['POST'])
def complete_task(task_id):
    task = Task.query.get_or_404(task_id)
    task.completed = True
    db.session.commit()
    return redirect(url_for('main.upcoming_page'))

#delete a task
@main.route('/delete/<int:task_id>',methods=['POST'])
def delete_task(task_id):
    task = Task.query.get_or_404(task_id)
    db.session.delete(task)
    db.session.commit()
    return redirect(url_for('main.upcoming_page'))