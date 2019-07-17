# Name: main.py
# Author: Jack Jiang
# Date: 2019-07
# Description:
#   an simple flask backend
from flask import Flask, json, jsonify
from flask_cors import CORS


############################ Initialization ############################
app = Flask(__name__)
# this essitial for Cross Origin Resource Sharing with React frontend
# https://flask-cors.readthedocs.io/en/latest/
CORS(app)   
# use a python dictionary to simulate database
#   {
#       1: {"firstName": "Jack", "lastName": "Jiang"},
#       5: {"firstName": "Strong", "lastName": "Dinosaur"},
#       12: {"firstName": "Black", "lastName": "Cat"}
#   }
database = {}


##########################  API Implementation #########################
@app.route('/names/', methods = ["POST"])
def get_name():
    # Create Name
    
    return jsonify(data), 200


############################ Main Function #############################
if __name__ == "__main__":
    # run backend server on http://localhost:5000/
    app.run(host = 'localhost',port=5000, debug=True)