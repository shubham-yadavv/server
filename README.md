
# server

A REST-Full API built with NodeJS and ExpressJs. The API will retrieve post with user authentication and authentication handling.

# How to Setup the Local Server 

1. Clone the Repo by following command
  `git clone https://github.com/shubham-yadavv/server.git` .
  if you haven't add ssh key probably add by clicking this <a href = "https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh">link</a>

2. Install Docker if you haven't installed it, yet. You can install by clicking this  <a href="https://www.docker.com/">link</a>

3. Use this command to run the server 
   `docker-compose up`
   
4. Navigate to `127.0.0.1:3000`

## system architecture
<img width="896" alt="Screenshot 2022-09-19 at 7 55 56 PM" src="https://user-images.githubusercontent.com/68185027/191042648-e67bde6f-4158-491d-9188-ac59c06b4747.png">


# how to run 

1. Clone the Repo by following command
  `git clone https://github.com/shubham-yadavv/server.git` .

2. Install Docker if you haven't installed it, yet. You can install by clicking this  <a href="https://www.docker.com/">link</a>

3. Use this command to run the server 
  
   `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d`