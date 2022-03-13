# Rails's Controller
:heavy_check_mark: It's the ```controller's``` job to ask the ```model``` to ```fetch``` data, process user input, save new data, & to either build & send a ```response``` or ```redirect``` the user to a new ```route```.

:heavy_check_mark: When creating a new ```controller```, your ```controller``` will
```inherit``` from ```ApplicationController``` which ```extends``` ```ActionController::Base```<i>("which is where the rails super powers come from")</i>

:heavy_check_mark: The ```controller``` code will go in ```subclasses``` of ```ApplicationController```.
When the application receives a ```request```, the ```router``` will determine which ```controller``` & ```action``` (method) to run. The ```router``` will then create a ```new``` ```instance``` of the ```controller```, & ```call``` the method that is named by the ```action```.
```ruby
class PhotosController < ApplicationController
  def index
    render json: Photo.all
  end

  def show
    render json: Photo.find(params[:id])
  end

  #.... other actions
end
```
<b>N.B</b> ```controller``` naming convention is to pluralize the name of the ```model```, and tack on "Controller".