Project

1.  Node
    - Node 10.16.2 LTS
    - `npm init`

2.  Libs
    - express
    - cors
    - multer
    - nodemon
        - package.json - `"dev": "nodemon ./src/index.js"` (npm run dev)

3.  Log
    - `log.txt`

4.  cURL
    - /get
        ```
        curl -X GET \
         http://localhost:5000/ranking-kart \
         -H 'Accept: */*' \
         -H 'Accept-Encoding: gzip, deflate' \
         -H 'Cache-Control: no-cache' \
         -H 'Connection: keep-alive' \
         -H 'Host: localhost:5000' \
         -H 'Postman-Token: 0f457195-0188-46f4-a8f5-4de4dc4db4e9,5fd0d8af-9829-4d1c-a708-0525d51d0216' \
         -H 'User-Agent: PostmanRuntime/7.16.3' \
         -H 'cache-control: no-cache'
        ```
    -  /post
        ```
        curl -X POST \
         http://localhost:5000/ranking-kart \
         -H 'Accept: _/_' \
         -H 'Accept-Encoding: gzip, deflate' \
         -H 'Cache-Control: no-cache' \
         -H 'Connection: keep-alive' \
         -H 'Content-Length: 2540' \
         -H 'Content-Type: application/x-www-form-urlencoded' \
         -H 'Host: localhost:5000' \
         -H 'Postman-Token: 22992274-b64b-4b1c-a69e-6cd6f145523e,e48a4c6f-e85e-43e5-bc67-75d6d3bfe719' \
         -H 'User-Agent: PostmanRuntime/7.16.3' \
         -H 'cache-control: no-cache' \
         -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
         -F upFile=@/C:/Users/leo/Downloads/log.txt
        ```

5.  Start
    -  Clone project [https://github.com/bucceroni/kart.git](https://github.com/bucceroni/kart.git)
    -  `npm install`
    -  `npm run dev (nodemon)` || `npm start`

6.  Test
    -  Browser (get)  : `http://localhost:5000/ranking-kart`
    -  Postman (post) : `import file -> body -> form-data -> key=upFile type=file`