from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit
import redis
import time

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

r = redis.StrictRedis(host='localhost', port=6379, db=0)

initial_timestamp = -1

@app.route('/')
def entry():
    return render_template('entry.html')

@app.route('/display')
def display():
    return render_template('display.html')

@app.route('/add', methods=['POST'])
def add_entry():
    global initial_timestamp

    id_value = request.form.get('id')
    float_value = request.form.get('value')

    if (initial_timestamp == -1):
        initial_timestamp = int(time.time())

    timestamp = int(time.time()) - initial_timestamp
    r.rpush(f"{id_value}:values", float_value)
    r.rpush(f"{id_value}:timestamps", timestamp)
    socketio.emit('id', {'key': id_value, 'value': float_value, 'timestamp': timestamp})
    return 'Entry added', 200

@socketio.on('connect')
def handle_connect():
    print('Connected')

if __name__ == '__main__':
    socketio.run(app, debug=True)