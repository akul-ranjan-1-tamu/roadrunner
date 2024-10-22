#!/bin/bash


#NOTE: this script might not work depending on your OS or dev env. This works on Windows

QUIET=false
if [[ "$1" == "--quiet" ]]; then
    QUIET=true
fi


#start backend
cd backend
pip install -r requirements.txt
python3 app.py &

#start frontend
cd ../frontend
if [ "$QUIET" = true ]; then
    npm run start > /dev/null 2>&1
else
    npm run start
fi