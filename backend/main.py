# Name: main.py
# Author: Jack Jiang
# Description:
#   an simple flask backend
from flask import Flask, json, jsonify, request
from flask_cors import CORS
############################ Choose Models ############################
# from dbms.json_db.model import Model
from dbms.dict_db.model import Model

############################ Initialization ############################
app = Flask(__name__)
# this essitial for Cross Origin Resource Sharing with React frontend
# https://flask-cors.readthedocs.io/en/latest/
CORS(app)   
# use database
model = Model()


##########################  API Implementation #########################
# https://github.com/Jiangyiqun/fullstack_tutorial/tree/master/documentation
############################## create name #############################
@app.route('/keys', methods = ["POST"])
def create_name():
    data_json = request.data
    data_dict = json.loads(data_json)
    # bad request
    if "key" not in data_dict:
        return jsonify({"errorMsg": "bad request"}), 400
    if not (model.create(data_dict["key"], data_dict)):
        return jsonify({"errorMsg": "bad request"}), 400
    # succeed
    return jsonify(data_dict), 201


############################## read name ###############################
@app.route('/keys/<key>', methods = ["GET"])
def read_name(key):
    value = model.read(key)
    # not found
    if (value is None):
        return jsonify({"key": key, "errorMsg": "not found"}), 404
    # succeed
    value["key"] = key
    return jsonify(value), 200



############################## update name #############################
@app.route('/keys/<key>', methods = ["PUT"])
def update_name(key):
    value = json.loads(request.data)
    # bad request
    if (not model.update(key, value)):
        return jsonify({"key": key, "errorMsg": "bad request"}), 400
    # succeed
    value["key"] = key
    return jsonify(value), 200


############################## delete name #############################
@app.route('/keys/<key>', methods = ["DELETE"])
def delete_name(key):
    # not found
    value = model.read(key)
    if not value:
        return jsonify({"key": key, "errorMsg": "not found"}), 404
    # not found
    if (not model.delete(key)):
        return jsonify({"key": key, "errorMsg": "not found"}), 404
    # succeed
    value["key"] = key
    return jsonify(value), 200


############################# Debug Method #############################
# print database
@app.route('/debug', methods = ["GET"])
def print_database():
    database = model.debug()
    if (database is None):
        print("\n########### Debug Method Not Implemented #############")
        return jsonify({"errorMsg": "Debug Method Not Implemented"}), 200
    else:
        print("\n######################################################")
        print(database)
        return jsonify(database), 200


############################ Main Function #############################
if __name__ == "__main__":
    # run backend server on http://localhost:5000/
    app.run(host = 'localhost',port=5000, debug=True)