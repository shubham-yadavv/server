
# Automatically Scaling Backend

Backend for a social media application

| Table of content | 
|-------------------|
|[Working](#how-this-backend-system-works)|
|[System Architecture](#system-architecture)|
|[How to Setup and Run](#how-to-setup-and-run)|

---
# How this Backend System works
This project is a backend for a social networking platform,
- This backend deployment makes use of [Ngnix](https://www.nginx.com/), as a load balancer 
- [Redit](https://redis.io/) Is made to work as a caching 
- [MongoDB](https://www.mongodb.com/) Is the main backend server

# System Architecture

![System Architecture](https://user-images.githubusercontent.com/55801439/197521628-ec41349b-2564-44ea-a618-77a877189f7a.png)

# How to Setup and Run  

1. Clone the Repo by following command
  `git clone https://github.com/shubham-yadavv/server.git` .
  if you haven't add ssh key probably add by clicking this <a href = "https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh">link</a>

2. Install Docker if you haven't installed it, yet. You can install by clicking this  <a href="https://www.docker.com/">link</a>

3. Use this command to run the server 
   `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d`
   
4. Navigate to `127.0.0.1:3000` to access the server
  
   
