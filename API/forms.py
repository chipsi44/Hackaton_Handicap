from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, BooleanField, SubmitField

class research_entry_form(FlaskForm):
    activity = StringField("activity")
    notation = SelectField("notation", choices=["1-star",
                                                "2-star",
                                                "3-star",
                                                "4-star",
                                                "5-star"])
    submit = SubmitField('submit')