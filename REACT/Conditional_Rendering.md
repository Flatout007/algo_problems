# Conditional Rendering <img src="https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/06/29192442/react-conditional-types-1024x768.jpg" alt="react logo" width="100"/>
:heavy_check_mark: Conditional Rendering is needed because React code runs faster than API call's.

:heavy_check_mark: This means if you call a JS method during your API call, it can call it milliseconds before getting it's needed data or arguments from 
		   the API, resulting in the method being called on or with ```null```.

:heavy_check_mark: To fix this issue, Conditional Rendering was suggested. There are multiple ways to do it.

## Short-Circuit
:heavy_check_mark: "Short-Circuit" is a programming phrase used when describing the behavior of the ```&&``` operator in a given
  		   programming language.

:heavy_check_mark: In some languages like JS, the implementation of the ```&&``` operator "short-circuits", stops checking, 
   		   and returns ```false``` as soon as it finds a ```false``` value.

:heavy_check_mark: This allows react to make sure needed data is there before it moves on to check and/or render the next piece of code. **N.B** *if the ```&&``` operator returns false during render, render will return false, and
		   React will not render any procedural code.*

