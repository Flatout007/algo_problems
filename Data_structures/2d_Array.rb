# 2D Array

=begin
Like a 1D array, a 2D array is a collection 
of data cells, all of the same type, which can 
be given a single name. However, a 2D array is 
organized as a matrix with a number of 
rows and columns.

https://computersciencewiki.org/index.php/Two-dimensional_arrays
=end

# Create & Traverse
two_d_array = Array.new(2) {Array.new(3)}; 

i = 0;
until i === 2
    j = 0;
    until j === 3 
# get & ask user for data to fill 2*3 2d array.
        puts "Enter values for 2d array"
        val = gets.to_i;
# fill array with user data
        two_d_array[i][j] = val;
     j+=1;
    end
 i+=1;    
end

p two_d_array;

# Insert

# get & ask user for value, row & position/column.
puts "Please enter the row you want to insert your data at"
row = gets.to_i;
puts "Please enter a value";
val = gets.to_i;
puts "Please enter the position you want to store #{val}"
pos = gets.to_i;

if(row <= 0 || pos <= 0)
    puts "Whoops, invalid row or position"
else
    i = row-1;
    j = two_d_array[i].length-1;
    until(j === pos-2)
        two_d_array[i][j+1] = two_d_array[i][j];
     j-=1;
    end
    two_d_array[i][pos-1] = val;
end

p two_d_array;

# Delete

# get & ask user for row, postion/column to delete.
puts "Enter the row of the element you want to delete"
row = gets.to_i;
puts "Enter the position of the value you want to delete"
pos = gets.to_i;

i = row-1;
j = pos-1;
len = two_d_array[i].length;
until j === len
    two_d_array[i][j] = two_d_array[i][j+1];
 j+=1;   
end
two_d_array[i][len-1] = nil;
two_d_array[i].compact!();

p two_d_array