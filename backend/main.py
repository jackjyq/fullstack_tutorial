# Name: main.py
# Author: Jack Jiang
# Date: 2019-07
# Description:
#   an simple flask backend
from flask import Flask, json, jsonify, request
from flask_cors import CORS


############################ Initialization ############################
app = Flask(__name__)
# this essitial for Cross Origin Resource Sharing with React frontend
# https://flask-cors.readthedocs.io/en/latest/
CORS(app)   
# use a python dictionary to simulate database
database = {
        "1": {"firstName": "Jack", "lastName": "Jiang"},
        "5": {"firstName": "Strong", "lastName": "Dinosaur"},
        "12": {"firstName": "Black", "lastName": "Cat"}
        }


##########################  API Implementation #########################
# https://github.com/Jiangyiqun/fullstack_tutorial/tree/master/documentation
############################## create name #############################
@app.route('/keys', methods = ["POST"])
def create_name():
    data_json = request.data
    data_dict = json.loads(data_json)
    # bad request
    try:
        key = data_dict["key"]
        first_name = data_dict["firstName"]
        last_name = data_dict["lastName"]
    except KeyError:
        return jsonify({"errorMsg": "bad request"}), 400
    if (len(first_name) == 0 and len(last_name) == 0):
        return jsonify({"errorMsg": "bad request"}), 400
    # conflict
    if key in database:
        return jsonify({"key": key, "errorMsg": "conflict"}), 409
    # succeed
    database[key] = {"firstName": first_name, "lastName": last_name}
    return jsonify({"key": key, "firstName": first_name, "lastName": last_name}), 201


############################## read name ###############################
@app.route('/keys/<key>', methods = ["GET"])
def read_name(key):
    # not found
    if key not in database:
        return jsonify({"key": key, "errorMsg": "not found"}), 404
    # succeed
    first_name = database[key]["firstName"]
    last_name = database[key]["lastName"]
    return jsonify({"key": key, "firstName": first_name, "lastName": last_name}), 200


############################## update name #############################
@app.route('/keys/<key>', methods = ["PUT"])
def update_name(key):
    data_json = request.data
    data_dict = json.loads(data_json)
    # bad request
    try:
        first_name = data_dict["firstName"]
        last_name = data_dict["lastName"]
    except KeyError:
        return jsonify({"errorMsg": "bad request"}), 400
    if (len(first_name) == 0 and len(last_name) == 0):
        return jsonify({"errorMsg": "bad request"}), 400
    # not found
    if key not in database:
        return jsonify({"key": key, "errorMsg": "not found"}), 404
    # succeed
    database[key]["firstName"] = first_name
    database[key]["lastName"] = last_name
    return jsonify({"key": key, "firstName": first_name, "lastName": last_name}), 200


############################## delete name #############################
@app.route('/keys/<key>', methods = ["DELETE"])
def delete_name(key):
    # not found
    if key not in database:
        return jsonify({"key": key, "errorMsg": "not found"}), 404
    # succeed
    first_name = database[key]["firstName"]
    last_name = database[key]["lastName"]
    del database[key]
    return jsonify({"key": key, "firstName": first_name, "lastName": last_name}), 200


############################# Debug Method #############################
# print database
@app.route('/debug', methods = ["GET"])
def print_database():
    print("\n#########################################################")
    print(database)
    return jsonify(database), 200


############################ Main Function #############################
if __name__ == "__main__":
    # run backend server on http://localhost:5000/
    app.run(host = 'localhost',port=5000, debug=True)