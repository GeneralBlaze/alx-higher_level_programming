#!/usr/bin/python3

""" listing all states in a db"""

import MySQLdb
import sys


if __name__ == "__main__":

    dbCon = MySQLdb.connect(
                host="localhost",
                port=3306,
                user=sys.argv[1],
                password=sys.argv[2],
                database=sys.argv[3])

    objCursor = dbCon.cursor()

    objCursor.execute("""SELECT * FROM states WHERE name LIKE BINARY
                      "N%' ORDER BY states.id""")
    dispRows = objCursor.fetchall()
    for row in dispRows:
        print(row)
    objCursor.close()
    dbCon.close()
