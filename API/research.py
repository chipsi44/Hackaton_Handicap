import json

def place_research_result(data : dict) -> str:
    fileObject = open("own_data.json", "r")
    jsonContent = fileObject.read()
    fileObject.close()
    dummies_data = json.loads(jsonContent)
    result_temp = {}
    result = ""
    
    for k, v in dummies_data.items():
        if v['Type'] == data['activity'] or v['subtype'] == data['activity']:
            result_temp[k] = v
            #result += result_html_build(k, v)
    
    return f"this is a test response that will be replaced with html objects : {result_temp}"
    
place_research_result({'activity': "Sport", 'notation': '5-star'})