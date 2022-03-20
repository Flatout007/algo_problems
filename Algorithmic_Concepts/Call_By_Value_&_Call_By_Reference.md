## Call By Value & Call By Reference
:heavy_check_mark: "Call By Value" & "Call By Reference" are phrases used to describe the behavior of 
```parameter``` ```variables``` when being used on or in ```function``` ```calls```

:heavy_check_mark: To understand ```Call``` By ```Value``` & ```Call``` By ```Reference```, is to first understand ```variables``` & the behavior / "side effects" of ```variables```, particularly when using them as ```parameters``` in ```function``` ```calling```. 

### Variables
:heavy_check_mark: ```Variables``` are segments of memory the computer dedicates that allows programmers to store & easily keep track of data types

:heavy_check_mark: those segments of memory consist of many ```properties``` such as a ```value``` &  ```memory address```

### Formal & Actual Parameters
:heavy_check_mark: There are two key features ```variables``` have when being used a ```parameters```.

:heavy_check_mark: <b> 1. Actual Parameters</b>: the ```parameters``` given to a ```function``` when being used / ```called```.
 ```c
 fun(m,n) // m & n are the actual parameters
 ```

:heavy_check_mark: <b>2. Formal Parameters</b>: the ```parameters``` ```defined``` or received by a ```function``` when being designed
```c
fun(m, n) { // m & n are the formal parameters
  // code 
} 
 ```
 
 ### Call By Value
 :heavy_check_mark: When ```calling```by value, the "values" of the ```actual``` ```parameters``` will be copied to the ```formal``` ```parameters```. 
 in other words, only the "value" of the ```variables``` are given to  the ```function``` & not the ```variable``` itself