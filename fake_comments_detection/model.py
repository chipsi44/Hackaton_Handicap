import text2emotion as te

class fake_comment_detector(te):
    def __init__(self):
        super().__init__()
    
    def detect_fake(text : str) -> bool:
        result = te.get_emotion(text)
        #Décider de valeur pour lesquelle le test est faux
        return False
    
    
text = "Ce bar est vraiment nul. Hâte qu'il ferme leur porte après avoir perdu toute leur clientèle"
print(fake_comment_detector.detect_fake(text))