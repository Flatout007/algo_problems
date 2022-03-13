# Rails's Controller
:heavy_check_mark: It's the controller's job to ask the model to fetch data, to process user input to save new data, and to either build & send a response or redirect the user to a new path via routes.

:heavy_check_mark: The controller code will go in subclasses of ApplicationController.
When the application receives a request, the router will determine which controller & action (method) to run. The router will then create a new instance of the controller, & call the method that is named by the action.
```ruby
class PhotosController < ApplicationController
  def index
    render json: Photo.all
  end

  def show
    render json: Photo.find(params[:id])
  end

  #....
end
```
<b>N.B</b> controller naming convention is to pluralize the name of the model, and tack on "Controller".