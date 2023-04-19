#!/usr/bin/python3

import MySQLdb
import sys

if __name__ = "__main__":
    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]
    
    dbCon = MySQLdb.connect(
                host="localhost",
                user=sys.argv[1],
                port=3306,
                passwd=sys.argv[2],
                db=sys.argv[3])

    objCursor = dbCon.cursor()

    objCursor.execute("SELECT * FROM states WHERE name LIKE BINARY '{}'
                      ORDER BY states.id ASC".format(sys.argv[4])
    dispRows = objCursor.fetchall()
    for row in dispRows:
        print(row)
    objCursor.close()
    dbCon.close()
