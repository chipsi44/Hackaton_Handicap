import json

def place_research_result(data : dict) -> str:
    fileObject = open("own_data.json", "r")
    jsonContent = fileObject.read()
    fileObject.close()
    dummies_data = json.loads(jsonContent)
    result = ""
    
    for k, v in dummies_data.items():
        print(f"{v['Type']}, {v['subtype']}")
        if v['Type'] == data['activity'] or v['subtype'] == data['activity']
        result += result_html_build(k, v)
    
    return result
    
place_research_result({'activity': "Sport", 'notation': '5-star'})