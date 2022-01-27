
# React Router <img src="https://reactrouter.com/twitterimage.jpg" alt="react logo" width="100"/>

:heavy_check_mark: React Router is a system designed to act as middleware to intercept any defined route tethered to a React component
		  and inject it dynamically to the page.

:heavy_check_mark: To tether a component, render a component wrapped within ```<Router></Router>``` tags, nest ```<Switch></Switch>``` tags inside, 
		then, nest a pair of ```<Route></Route>``` tags with an attribute of ```path=``` which takes a value of a custom url string. 
		Finally, nest the ```<Component/>``` inside the defined ```<Route></Route>```. The component is now tethered to React Router.
		**N.B** *If tethering multiple routes, use the ```exact``` attribute inside ```<Route></Route>```, it takes no value.*



## ```<Switch></Switch>```

:heavy_check_mark: The ```<Switch></Switch>``` component is designed to make sure only one route is ever being used at a time. 
		It checks from top to bottom just like a ```switch``` statement until it finds a match. 
		Without ```</Switch>```, it's possible for unwanted components to be injected in the same route.

:heavy_check_mark: Nest every defined ```</Route>``` within a single pair of ```<Switch></Switch>``` tags i.e ```<Switch> ...all</Route>'s </Switch>```



