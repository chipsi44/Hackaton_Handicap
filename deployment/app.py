from flask import Flask, render_template, request, Markup
from flask_sqlalchemy import SQLAlchemy
from waitress import serve
import pickle
import os
import pandas as pd
import datetime

app = Flask(__name__, template_folder='templates', static_folder='templates/assets')


@app.route('/')
def form():
    return render_template('index.html', result="")

@app.route('/', methods=['POST'])
def result():

    return render_template('index.html', result=f"")


    

#connect to the db
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:/// data/database.db'
db = SQLAlchemy(app)


serve(app, host="0.0.0.0", port=8080)
app.run(debug=False)