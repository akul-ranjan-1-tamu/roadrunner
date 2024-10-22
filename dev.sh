#!/bin/bash


#NOTE: this script might not work depending on your OS or dev env. This works on Windows

FRONT_QUIET=false
BACK_QUIET=false
if [[ "$1" == "--quiet-front" ]]; then
    FRONT_QUIET=true
fi

if [[ "$1" == "--quiet-back" ]]; then
    BACK_QUIET=true
fi

#start redis
C:/'Program Files'/redis/redis-server.exe &

#start backend
cd backend
pip install -r requirements.txt
if ["$BACK_QUIET" = true]; then
    python3 app.py > /dev/null 2>&1 &
else
    python3 app.py &
fi


#start frontend
cd ../frontend
npm install
if [ "$FRONT_QUIET" = true ]; then
    npm run start > /dev/null 2>&1
else
    npm run start
fi