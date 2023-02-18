from flask import Flask, render_template, redirect, request
from flask_restful import Api, Resource, reqparse, abort
from flask_sqlalchemy import SQLAlchemy
from forms import property_entry_form
from werkzeug.datastructures import MultiDict
import pickle

app = Flask(__name__, template_folder='templates', static_folder='templates/assets')
app.config['SECRET_KEY'] = 'ValeureuxLiegeois'
api = Api(app)

with open("fake_comment_detector.pkl", 'rb') as file:
    fake_detector = pickle.load(file)

@app.route('/home', methods=['GET', 'POST'])
def home():
    form = property_entry_form()
    if form.is_submitted():
        result = request.form
        return render_template('index.html', form=form, result=result)
    return render_template('index.html', form=form)

property_put_args = reqparse.RequestParser()
property_put_args.add_argument("activity", type= str, required=False)
property_put_args.add_argument("notation", type= int, required=False)

class Research(Resource):
    def get(self):
        args = property_put_args.parse_args()
        result = {"activity" : args["activity"],
                        "notation" : args["notation"]}
        #verifier les données avant de les passer au model
        return result, 201
            
api.add_resource(Research, "/search")

if __name__ == '__main__':
    app.run(debug=True, port=5000)
