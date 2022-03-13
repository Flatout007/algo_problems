# Rails's Router

The Rails router recognizes ```url``` ```strings``` & chooses a controller method to which the request is dispatched/maped to for processing. <b>i.e</b> The router receives a GET request for ```/photo/17``` & realizes that ```PhotosController#show()``` should be called for a Photo with the ```:id``` of 17. <b>N.B</b> <i>the router matches on both HTTP method and path name.</i>

### Rails restful sample routes for a Photo 
| HTTP Request | Route | Action & Description of Action |  
|---------------|   --------------- | --------------- |
| GET	| /photos	| <b>index</b>	- display a list of all photos
| GET	| /photos/new	| <b>new</b> - return an HTML form for creating a new photo
| POST	| /photos	| <b>create</b> - upload and create a new photo
| GET	| /photos/:id	| <b>show</b> - display a specific photo
| GET	| /photos/:id/edit	| <b>edit</b> - return an HTML form for editing a photo
| PATCH or PUT	| /photos/:id	| <b>update</b> - update a specific photo
| DELETE	| /photos/:id	| <b>destroy</b> - delete a specific photo
