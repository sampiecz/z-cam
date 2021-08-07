FROM python:3.9

########################
# Compile OpenCV       #
########################

WORKDIR /opt/build

ENV OPENCV_VERSION="4.5.1"

RUN apt-get -qq update \
    && apt-get -qq install -y --no-install-recommends \
        build-essential \
        cmake \
        git \
        wget \
        unzip \
        yasm \
        pkg-config \
        libswscale-dev \
        libtbb2 \
        libtbb-dev \
        libjpeg-dev \
        libpng-dev \
        libtiff-dev \
        libopenjp2-7-dev \
        libavformat-dev \
        libpq-dev \
    && pip3 install numpy \
    && wget -q https://github.com/opencv/opencv/archive/${OPENCV_VERSION}.zip -O opencv.zip \
    && unzip -qq opencv.zip -d /opt \
    && rm -rf opencv.zip \
    && cmake \
        -D BUILD_TIFF=ON \
        -D BUILD_opencv_java=OFF \
        -D WITH_CUDA=OFF \
        -D WITH_OPENGL=ON \
        -D WITH_OPENCL=ON \
        -D WITH_IPP=OFF \
        -D WITH_TBB=ON \
        -D WITH_EIGEN=ON \
        -D WITH_V4L=ON \
        -D BUILD_TESTS=OFF \
        -D BUILD_PERF_TESTS=OFF \
        -D CMAKE_BUILD_TYPE=RELEASE \
        -D CMAKE_INSTALL_PREFIX=$(python3.9 -c "import sys; print(sys.prefix)") \
        -D PYTHON_EXECUTABLE=$(which python3.9) \
        -D PYTHON_INCLUDE_DIR=$(python3.9 -c "from distutils.sysconfig import get_python_inc; print(get_python_inc())") \
        -D PYTHON_PACKAGES_PATH=$(python3.9 -c "from distutils.sysconfig import get_python_lib; print(get_python_lib())") \
        /opt/opencv-${OPENCV_VERSION} \
    && make -j$(nproc) \
    && make install \
    && rm -rf /opt/build/* \
    && rm -rf /opt/opencv-${OPENCV_VERSION} \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get -qq autoremove \
    && apt-get -qq clean

########################
# Compile Servo Arm    #
########################

# set a directory for the app
WORKDIR /usr/src/app

# copy all the files to the container
COPY . .

RUN make \
		&& mkdir /usr/local/lib/tup \
		&& mv RunServoDemo.so /usr/local/lib/tup/. \
		&& touch /etc/ld.so.conf.d/libtup.conf \
		&& echo /usr/local/lib/tup > /etc/ld.so.conf.d/libtup.conf
	
ENV export LD_LIBRARY_PATH="/usr/local/lib/tup:$LD_LIBRARY_PATH"

########################
# Get & compile nodejs # 
########################
ENV VERSION=v14.17.3
ENV DISTRO=linux-arm-v7l
RUN wget https://nodejs.org/dist/{$VERSION}/node-{$VERSION}-{$DISTRO}.tar.xz \
		&& mkdir -p /usr/local/lib/nodejs \
		&& tar -xJvf node-{$VERSION}-{$DISTRO}.tar.xz -C /usr/local/lib/nodejs \
		&& rm node-{$VERSION}-{$DISTRO}.tar.xz \
		&& cd node-{$VERSION}-{$DISTRO}/bin/npm \
		&& ./configure \
		&& make \
		&& cd ..
ENV export PATH="/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH"

########################
# Generate js bundle   # 
########################
RUN node-v14.17.3/npm install \
		&& node-v14.17.3/npm run build 

########################
# Run Django app 
########################

# install python dependencies
RUN pip3 install --upgrade pip setuptools wheel 
RUN pip3 install --no-cache-dir -r requirements.txt

# The port this runs on
EXPOSE 9000

# Start django
CMD ["python3" ,"manage.py", "runserver", "0.0.0.0:9000"]
