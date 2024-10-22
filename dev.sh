#!/bin/bash

#start backend
cd backend
pip install -r requirements.txt
python3 app.py &


cd ../frontend
npm run start