#!/usr/bin/python3

import sys
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declareative_base
from model_state import Base, State
from sqlalchemy.orm import sessionmaker

if __name__ == "__main__":
    """database engine creation"""

    con_string = ('mysql://{}:{}@localhost:3306/{}'.format(sys.argv[1], sys.argv[2], sys.argv[3]))

    db_engine = create_engine(con_string)
    Session = sessionmaker(bind=engine)
    db_session = Session()

    engine_users = db_session.query(State).order_by(State.id)
    for user in users:
        print('{}: {}'.format(user.id, user.name))
