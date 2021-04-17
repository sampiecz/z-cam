# Django site to serve live video from raspberry pi camera

## Running the project

### Install linux packages

sudo apt-get install libatlas-base-dev libhdf5-dev libhdf5-serial-dev libatlas-base-dev libjasper-dev libqtgui4 libqt4-test libopenjp2-7 libilmbase23 libilmbase-dev libopenexr-dev libgstreamer1.0-dev libavcodec-dev libavformat-dev libswscale-dev libgtk-3-dev


### Install requirements 
pip install -r requirements.txt

### Make initial database migrations  
python3 manage.py migrate

### Start project
python3 manage.py runserver 0.0.0.0:8000

### Extra 
1.) May need to change allowed hosts file depending on your machines ip. 

2.) Access the url at your machines ip you added in the hosts file ex: http://raspberrypi.local:8000/cam

### Setup servo arm
1.) cd PCA9685
2.) make
3.) mkdir /usr/local/lib/tup
4.) mv RunServoDemo.so /usr/local/lib/tup.
5.) touch /etc/ld.so.conf.d/libtup.conf
6.) use editor of choice to paste this in libtup.conf `/usr/local/lib/tup` 
7.) Add this to .bashrc or .zshrc and source your config `export LD_LIBRARY_PATH='/usr/local/lib/tup:$LD_LIBRARY_PATH`


