import text2emotion as te

def detect_fake(text : str) -> bool:
    result = te.get_emotion(text)
    print(result)
    return False
    
    
text = "Ce bar est vraiment nul. Hâte qu'il ferme leur porte après avoir perdu toute leur clientèle"
print(detect_fake(text))

#Marche pas car la version de python de la librairie est en 3.8