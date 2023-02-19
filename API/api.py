from flask import Flask, render_template, request, Markup
from flask_restful import Api, Resource, reqparse
from forms import research_entry_form
from research import place_research_result
import pickle

from User import User

app = Flask(__name__, template_folder='templates', static_folder='templates/assets')
app.config['SECRET_KEY'] = 'ValeureuxLiegeois'
api = Api(app)
    
#fake_detector = pickle.load(open("API/fake_comment_detector.pkl", "rb"))
    
dummy_user = User("Josh",
                  84569,
                  wheelchair=True,
                  hard_hearing=True,
                  visually_impaired=False,
                  service_dog=False)

@app.route('/home', methods=['GET', 'POST'])
def home():
    form = research_entry_form()
    result = ""
    if form.is_submitted():
        data = request.form
        result = place_research_result(data)
        return render_template('index.html', form=form, result=Markup(result), user=dummy_user)
    return render_template('index.html', form=form, result=Markup(result), user=dummy_user)

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
