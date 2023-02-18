import text2emotion as te
import pickle

class fake_comment_detector(te):
    def __init__(self):
        super().__init__()
    
    def detect_fake(text : str) -> bool:
        result = te.get_emotion(text)
        if result["Angry"] > 
        return False
    
model = fake_comment_detector()
pickle.dump(model, open('fake_comment_detector.pkl', 'wb'))