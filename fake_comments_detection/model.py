import text2emotion as te
import pickle

class fake_comment_detector():  
    def detect_strange(self, text : str) -> bool:
        result = te.get_emotion(text)
        if result["Angry"] + result["Fear"] + result["Sad"] > 0.8:
            return True
        else:
            return False
    
model = fake_comment_detector()
pickle.dump(model, open('fake_comment_detector.pkl', 'wb'))