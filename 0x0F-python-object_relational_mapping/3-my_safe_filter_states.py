#!/usr/bin/python3

""" listing all states in a db"""

import MySQLdb
import sys


if __name__ == "__main__":
    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]
    stateName = sys.argv[4]

    dbCon = MySQLdb.connect(
                host="localhost",
                user=sys.argv[1],
                port=3306,
                passwd=sys.argv[2],
                db=sys.argv[3])

    objCursor = dbCon.cursor()
    sqlCmd = ("SELECT id, name FROM states WHERE name = %s ORDER BY id ASC")

    objCursor.execute(sqlCmd, (state_name))
    dispRows = objCursor.fetchall()
    for row in dispRows:
        print(row)
    objCursor.close()
    dbCon.close()
