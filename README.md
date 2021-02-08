# Django site to serve live video from raspberry pi camera

## Running the project

### Install requirements 
pip install -r requirements.txt

### Make initial database migrations  
python3 manage.py migrate

### Start project
python3 manage.py runserver 0.0.0.0:8000

### Extra 
1.) May need to change allowed hosts file depending on your machines ip. 
2.) Access the url at your machines ip you added in the hosts file ex: 192.168.9.105:8000/bulbs
