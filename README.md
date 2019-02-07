Docker Wrapper for React App
============================

This repo containers the docker files for the [frontend react app](https://bitbucket.org/realtycore/react_app/src/master/).

Setup
-----

1. Clone this repo: `git clone git@bitbucket.org:realtycore/frontend-docker.git`
2. Clone react_app repo into "app" subfolder: `cd frontend-docker && git clone git@bitbucket.org:realtycore/react_app.git app`
3. Copy ".env.example" file to ".env" and edit as neccessary: `cp .env.example .env`
4. Build: `docker-compose build`

Usage
-----

#### Run containers in daemon mode

    docker-compose up -d

#### View status of running containers

    docker-compose ps

#### View log feed of running containers

    docker-compose logs -f

#### Stop running containers

    docker-compose down
