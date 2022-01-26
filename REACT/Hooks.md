
# HOOKS <img src="https://alduncanson.gallerycdn.vsassets.io/extensions/alduncanson/react-hooks-snippets/1.2.0/1603323134806/Microsoft.VisualStudio.Services.Icons.Default" alt="drawing" width="100"/>
:heavy_check_mark: Hooks are special functions that "hook" into your react component to effectively modify its ```context``` during its lifecycle

:heavy_check_mark: Hooks are replacements for ```class``` lifecylce Methods

## ```useState()```
:heavy_check_mark: ```useState()``` is a function used to update state. it takes an argument(default state) and returns an array of 2 elements.

:heavy_check_mark: The first element is a variable, the second is a function that updates the variable.

:heavy_check_mark: The function updates the variable, checks if the variable has been modified, 
			   then forces react to re-render.

## ```useEffect()```
:heavy_check_mark: ```useEffect()``` is a function used to tell react what's happening on page load, page update, and page unmount. 
			   It fires a callback function to return at any of those times.

:heavy_check_mark: Additionally, ```useEffect()``` can take an array as a second argumnet.
			   This array (when empty) limits the ```useEffect()``` communications with React to only on page load.
			   Assigning an empty cell to a variable stored in ```useState()``` will limit communications
			   to page load and whenever the state stored in ```useState()``` is updated.



