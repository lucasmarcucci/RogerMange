from app import app
from flask import Flask, Response, request
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
import numpy as np 
import json
from geopy.geocoders import Nominatim

    
@app.route('/coordinates', methods=['POST'])
def get_coordinates():
    json_data    = request.get_json()        # get the json send by the c# api
    geolocator = Nominatim(user_agent="myApp")
    json_content = []

    for i in json_data:
        address = i['address']
        try:
            location = geolocator.geocode(address)
            json_content.append({  "_id" : i['_id'], "name" : i['name'], "address" : i['address'], "latitude" : location.latitude,  "longitude" : location.longitude })
    
        except:
            print("An exception occurred")
  
    jsonStr = json.dumps(json_content)
    print(json_content)
    return jsonStr

