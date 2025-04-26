from flask import Blueprint, render_template

main = Blueprint('main',__name__)

@main.route('/')
def home_page():
    return render_template('home.html')

@main.route('/upcoming')
def upcoming_page():
    return render_template('upcoming.html')

@main.route('/calendar')
def calendar_page():
    return render_template('calendar_page.html')

@main.route('/notes')
def notes_page():
    return render_template('notes.html')
