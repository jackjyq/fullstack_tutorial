# Name: main.py
# Author: Yiyuan Wang
# Description:
#   an simple flask backend
from flask import Flask, json, jsonify, request
from flask_cors import CORS
from flask_mysqldb import MySQL
############################ Choose Models ############################
# from dbms.json_db.model import Model
# from dbms.dict_db.model import Model

############################ Initialization ############################
app = Flask(__name__)
# this essitial for Cross Origin Resource Sharing with React frontend
# https://flask-cors.readthedocs.io/en/latest/
CORS(app)   
# use database

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '123456'
app.config['MYSQL_DB'] = 'FinalProj'
mysql = MySQL(app)


##########################  API Implementation #########################
# https://github.com/Jiangyiqun/fullstack_tutorial/tree/master/documentation
############################## create name #############################
@app.route('/customer', methods = ["POST"])
def create_name():
    # # read Data
    data_json = request.data
    # print(data_json)
    data_dict = json.loads(data_json)
    customerID =  data_dict['customerID']
    cname = data_dict['name']

    # # Execute SQL
    cur = mysql.connection.cursor()
    try:
        cur.execute("INSERT INTO Customers(key_,name, lastName) VALUES (%s,%s)", (customerID,cname))
        mysql.connection.commit()
        # NB : you won't get an IntegrityError when reading
    except Exception as e:
        print(e)
        return "BAD REQUEST", 400
    cur.close()
    # # succeed
    return "SUCCESS", 200


############################## read name ###############################
@app.route('/customer/<customerID>', methods = ["GET"])
def read_customers(customerID):
    cur = mysql.connection.cursor()
    try:
        cur.execute("SELECT * Customers WHERE key_ =  %s", (customerID))
        mysql.connection.commit()
        # NB : you won't get an IntegrityError when reading
    except Exception as e:
        print(e)
        return "BAD REQUEST", 400
    cur.close()


    return "SUCCESS", 200



############################## update name #############################
@app.route('/customer/<customerID>', methods = ["PUT"])
def update_name(customerID):
    data_json = request.data
    # print(data_json)
    data_dict = json.loads(data_json)
    customerID =  data_dict['customerID']
    cname = data_dict['name']

    # # Execute SQL
    cur = mysql.connection.cursor()
    try:
        ## USE TRANSACTIONS
        cur.execute("UPDATAE Customers(key_,name, lastName) VALUES (%s,%s)", (customerID,cname))
        mysql.connection.commit()
        # NB : you won't get an IntegrityError when reading
    except Exception as e:
        print(e)
        return "BAD REQUEST", 400
    cur.close()
    return "SUCCESS", 200


############################## delete name #############################
@app.route('/customer/<customerID>', methods = ["DELETE"])
def delete_name(key):
    # not found
    data_json = request.data
    # print(data_json)
    data_dict = json.loads(data_json)
    customerID =  data_dict['customerID']

    # # Execute SQL
    cur = mysql.connection.cursor()
    try:
        cur.execute("DELETE Customers WHERE CustomerID = %s", (customerID))
        mysql.connection.commit()
        # NB : you won't get an IntegrityError when reading
    except Exception as e:
        print(e)
        return "BAD REQUEST", 400
    cur.close()
    return "SUCCESS", 200


############################# Debug Method #############################
# print database
@app.route('/debug', methods = ["GET"])
def print_database():
    # database = model.debug()
    # if (database is None):
    #     print("\n########### Debug Method Not Implemented #############")
    #     return jsonify({"errorMsg": "Debug Method Not Implemented"}), 200
    # else:
    #     print("\n######################################################")
    #     print(database)
    #     return jsonify(database), 200
    return "" , 200


############################ Main Function #############################
if __name__ == "__main__":
    # run backend server on http://localhost:5000/
    app.run(host = 'localhost',port=5000, debug=True)