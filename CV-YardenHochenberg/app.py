from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

@app.route('/assignment8')
def hobbies():
    return render_template('assignment8.html',hobbies=['Acrobatics','Parties','Traveling'])

@app.route('/')
def hello_world():
    user={'firstName':'yarden'}
    return render_template('Yarden Hochenberg CV.html',user=user)

if __name__ == '__main__':
    app.run(debug=True)
