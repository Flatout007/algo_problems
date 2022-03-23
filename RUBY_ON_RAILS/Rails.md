# Ruby on Rails
- Ruby on Rails or "Rails" is a MVC framework created by Danish programmer David Heinemeier Hansson designed exclusively for the Ruby programming language. 

## Rails diagram
<img src="https://assets.aaonline.io/fullstack/rails/assets/rails_diagram.png"></img>

### MODEL
interacts with data stored inside an sql database via Rails's ```Active record``` ```class``` to exchange said data with the ```controller```

### VIEW
interacts with only the ```controller``` to retrieve data from it & show it to the user. i.e (an html response filled with data from a server)

### CONTROLLER
interacts & records data the user types in & clicks on via Rails's ```server```, ```router``` & ```dispatcher```, picks 
up data from the ```model``` & "controls" what data gets sent back to the user/```view```


