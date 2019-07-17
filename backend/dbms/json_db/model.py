# Name: main.py
# Author: Jack Jiang
# Date: 2019-07
# Description:
#   an database implementated by json in file system
import json
from os import path

#################### Database CRUD Implementation ######################
class Model():
    database = {}
    location = ""

    def __init__(self, database={}, location="database.json"):
        self.location = path.dirname(__file__) + "/" + location
        self.database = database
        # the only case which need to read file
        if (path.isfile(self.location) and len(database) == 0):
            with open(self.location, "r") as data_file:
                self.database = json.load(data_file)
        # then write to the disk
        self.save()


    ############################ create item ###########################
    def create(self, key, value):
        # key = "1"
        # value = {"firstName": "Jack", "lastName": "Jiang"}
        # return = True
        #          False
        if key in self.database:
            return False
        # invalid value
        try:
            if (len(value["firstName"]) == 0
                    and len(value["lastName"]) == 0):
                return False
        except KeyError:
            return False
        # succeed
        self.database[key] = value
        self.save()
        return True


    ############################ read item ###########################
    def read(self, key):
        # key = "1"
        # reutrn value = {"firstName": "Jack", "lastName": "Jiang"}
        #                None
        if key in self.database:
            return self.database[key]
        else:
            return None


    ############################ update item ###########################
    def update(self, key, value):
        # key = "1"
        # value = {"firstName": "Jack", "lastName": "Jiang"}
        # return = True
        #          False
        # invalid value
        try:
            if (len(value["firstName"]) == 0
                    and len(value["lastName"]) == 0):
                return False
            # not found
            if (key not in self.database):
                return False
        # invalid value
        except KeyError:
            print("key error")
            return False
        # succeed
        self.database[key] = value
        self.save()
        return True


    ############################ delete item ###########################
    def delete(self, key):
        # key = "1"
        # return = True 
        #          False
        if key not in self.database:
            return False
        # succeed
        del self.database[key]
        self.save()
        return True


    ############################ debug method ###########################
    def debug(self):
        # return = database if implemented
        #          None if not implemented
        with open(self.location, "r") as data_file:
            data_dict = json.load(data_file)
        return data_dict


    ############################ save method ###########################
    def save(self):
        # save self.database to self.location
        with open(self.location, "w+") as data_file:
            data_file.write(json.dumps(self.database, indent=2))


############################ Test Function #############################
if __name__ == "__main__":
    model = Model({
            "1": {"firstName": "Jack", "lastName": "Jiang"},
            "5": {"firstName": "Strong", "lastName": "Dinosaur"},
            "12": {"firstName": "Black", "lastName": "Cat"}
            })
    print(model.debug())
    # print(model.create("7",{"firstName": "Jack", "lastName": "Jiang"}))
    # print(model.database)
    # print(model.create("7",{"firstName": "Jack", "lastName": "Jiang"}))
    # print(model.database)
