<<-DATA_STRUCTURE
    # Array
DATA_STRUCTURE

<<-DESCRIPTION
    Arrays are a fundamental data structure, and they are 
    extremely useful. We use arrays to hold values of the 
    same type at contiguous memory locations. In particular, 
    the use of arrays allows us to create "groups" or 
    "clusters" of variables without needing to give a unique 
    variable name to each, but still allowing us to 
    individually index into the elements of the array. 
    If you haven't started counting from zero yet, now is 
    the time, because in C or C like langauges, arrays are zero-indexed which 
    means the first element of a k-element array is located 
    at array index 0 and the last element is located at array 
    index k-1.
DESCRIPTION

<<-CREDITS
    https://computersciencewiki.org/index.php/Arrays
CREDITS

# Create & traverse array from user input.
array = [];
i = 0;
until(array.length === 5)
    puts "Please enter a number"
    val = gets.to_i;

    array[i] = val;

    i+=1;
end 

<<-ALGORITHM
    NAME: Insert

    1.SET & ask user for position & data;
        
    2.IF pos is in bounds;
    DO step#3;

    2.SHIFT all elements right of pos to right;
    INSERT data after shifting all elements;
ALGORITHM
puts "Enter a value"
val = gets.to_i;
puts "Enter a position to store #{val}"
pos = gets.to_i;

if(pos <= 0) 
    puts "Whoops, invalid position" 
else 
# Shift all elements right of position to right.
    i = array.length-1;
    until(i == pos-2)
        array[i+1] = array[i];

        i-=1;
    end
end
# Add data to cell after shifting.
array[pos-1] = val;

p array;


<<-ALGORITHM
    NAME: Delete

    1.SET & ask user for position to delete;
    SET initial value before deleting;

    2.IF pos is in bounds;
    DO step#3;

    2.SHIFT all elements right of pos to left;
    REMOVE last element after shifting;  
ALGORITHM
puts "Enter the position to delete"
pos = gets.to_i;

if pos <= 0 
    puts "Whoops, that position cant be deleted"
else
# Shift all elements right of position to left.
    k = pos-1;
    val = array[pos-1];
    until(k == array.length-1)
        array[k] = array[k+1];
        k+=1;
    end
end
puts "You've successfully deleted #{val}"
# Remove last element after shifting.
array[array.length-1] = nil;
# remove nil value from array.
array.compact!();

p array;