from flask import Flask, Response, request
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
import numpy as np 
import json
import uuid
import os
from geopy.geocoders import Nominatim

app = Flask(__name__)
api = Api(app)


    
@app.route('/coordinates', methods=['POST'])
def get_coordinates():
    json_data    = request.get_json()                     # get the json send by the c# api
    #print(json_data)
    #file_path    = json_data['Path']                      # get the path send by the c# api
    coord = []
    geolocator = Nominatim(user_agent="myApp")
    for i in json_data:
        address = i['address']
        location = geolocator.geocode(address)
        # coord.append([location.latitude, location.longitude])
        if address is not None:
            print((location.latitude, location.longitude))
    
    #json_content = { "latitude" : location.latitude,  "longitude" : location.longitude } # write the content and the vector to a json
    return "json_content"


if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=True)