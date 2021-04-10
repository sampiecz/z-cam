# Django site to serve live video from raspberry pi camera

## Running the project

### Install linux packages

sudo apt-get install libcblas-dev 

sudo apt-get install libhdf5-dev

sudo apt-get install libhdf5-serial-dev

sudo apt-get install libatlas-base-dev

sudo apt-get install libjasper-dev 

sudo apt-get install libqtgui4 

sudo apt-get install libqt4-test


### Install requirements 
pip install -r requirements.txt

### Make initial database migrations  
python3 manage.py migrate

### Start project
python3 manage.py runserver 0.0.0.0:8000

### Extra 
1.) May need to change allowed hosts file depending on your machines ip. 
2.) Access the url at your machines ip you added in the hosts file ex: 192.168.9.105:8000/bulbs
