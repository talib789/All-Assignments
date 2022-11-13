  # CRUD WITH MIDDLEWARES
  
```Make an API using Express to perform CRUD Operation
Create - POST - /posts/create - Should be able to create/add posts, store them in a json file called posts.json, in key "posts"

Read - GET - /posts - Should be able get all the posts present;

Update - PUT/PATCH - /posts/:postId - modify the post of the given post ID

Delete - DELETE - /posts/:postId - delete the post of the given post ID

Write a Middleware called "validator" for the POST method - /posts/create. It should check if the post body is having the following fields and having the right data type for it. Only if it is correct, store the post in the json file, else return a message "Validation Failed".

   i. id - number

   ii. title - string

   iii. content - string

   iv. author - string
Write a Middleware called "logger", it should log the METHOD, ROUTE and 'user-agent' from request headers in a file called logs.txt

^ Logs of all requests made should be present in the logs.txt file, not just the log for the last request made. Each log should be present in a new line.

Example of logs.txt file :

GET, /about, Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36

GET, /products, Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36

GET, /dns, Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36

Write a Middleware called "guard", which should protect only the PUT/PATCH and DELETE routes. It should check if in the URL Query, if the password is equal to 54213, if yes, it should allow the user to modify/delete the post. If not, send a message "You are not authorised to do this operation"```
