import requests

API_KEY = "PAS ENVIE DE FILER MON BLE A GOOGLE TOUT DE SUITE"
url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=YOUR_API_KEY"
payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
