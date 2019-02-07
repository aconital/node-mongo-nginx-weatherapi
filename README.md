Weather API 
============================
A basic Express,Mongo,Nginx application returning the temperature for given cities


Pre-requisite
-----
1) You need to have docker installed on your machine `https://hub.docker.com/editions/community/docker-ce-desktop-mac`

Setup
-----

1. Clone this repo: `git clone https://github.com/aconital/node-mongo-nginx-weatherapi.git`
2. Go to the project folder `cd node-mongo-nginx-weatherapi`
3. Build: `docker-compose build`
4. Run: `docker-compose up -d`
5. In order to kill the containers after you are done: `docker-compose down`

Usage
-----

#### GET /cities/:cities

    Example: http://localhost:9000/cities/toronto|chicago
