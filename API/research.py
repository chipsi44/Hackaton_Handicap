import json

def place_research_result(data : dict) -> str:
    fileObject = open("own_data.json", "r")
    jsonContent = fileObject.read()
    fileObject.close()
    dummies_data = json.loads(jsonContent)
    result = ""
    
    for k, v in dummies_data.items():
        if v['Type'] == data['activity'] or v['subtype'] == data['activity']:
            result += f"{k} {v['Type']} {v['subtype']} {v['Global_handi_score']} </br>"
            #result += result_html_build(k, v)
    
    return f"this is a test response that will be replaced with html objects : {result}"