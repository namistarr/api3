# Notes

## steps

-create repository
-clone repository
-cd into folder
-npm init -y
-npx gitignore node
-git add .
-git commit -m 'message'
-git push -u origin master 

Express APIs are broken up into Express Routers.

## client server architecture

[client] <network (JSON)> [api] <> [data sources]

## request / response cycle

1. client makes a request to a server
2. server produces response and sends it to client

[client] > request > [middleware > middleware > middleware] > response > [client]

## Middleware
-can see the request and do something with it
-can stop the request and produce response
-can do nothing
-can do the same with the response object
-**can modify the request or response objects**

three types:
-built in: no need to npm install
-third party: need to install
-custom: we build it

can be used:
-globally with server.use()
-locally at a request handler