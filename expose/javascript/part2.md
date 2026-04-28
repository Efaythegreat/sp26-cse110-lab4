# Part 2

## Q1
it will print 3 because the loop will run for the 3 different indices of discounted which is 0, 1, 2 and increase i after running each one, so it ends at 3.

## Q2
It will print 150 because the variable discountedPrice will remember the final discountedPrice in the for loop as it's a var variable, so it's 300 * (1 - 0.5) = 150

## Q3
It will print 150. Since finalPrice is also declared with var within the function, and the for loop uses it, it will remember the final time finalPrice is reassigned, which is when the for loop is on the last price of 300, so it's round((300 * (1 - 0.5) *100)) / 100 = 150

## Q4
The function will return [ 50, 100, 150 ]

This is because the for loop pushes the final discounted prices of each item into the discounted variable and [ 50, 100, 150 ] is the 50% off price for all the original prices.

## Q5
This will cause an error because i is not defined within its block, as defining a variable with let does not let you use it outside its block (if-else, for-loop, etc.) as it's a local variable inside

## Q6
This causes an error because discountedPrice is not defined within its block, as defining a variable with let does not let you use it outside its block (if-else, for-loop, etc.) as it's a local variable inside

## Q7
This will print 150, since discounted is already defined at the beginning of the function, it is allowed to changed from a block (for-loop or if-else) within the same function. So finalPrice is the rounded discounted price from the final item.

## Q8
This will return [ 50, 100, 150 ], there is no error where a local let variable is used outside its block, and the discounted variable is defined at the beginning of the function so the function works as intended.

## Q9
This will cause an error because i is not defined

## Q10
This will print 3 because length is equal to the number of items in prices

## Q11
This will return [ 50, 100, 150 ], since there's nothing wrong with the code, it will return the intended outcome, which is 50% off of every prices

## Q12
A - student["name"]

B - student["Grad Year"]

C - student.greeting()

D - student["Favorite Teacher"]["name"]

E - student["courseLoad"][0]

## Q13
A - '32'    integers maps to their exact string representation

B - 1       JavaScript converts '3' to integer for subtraction because strings can't be subtracted

C - 3       null is mapped to 0 

D - '3null' null is mapped to string

E - 4       true is mapped to 1

F - 0       both false and null are mapped to numbers, which is 0 for both

G - '3undefined'   undefined is mapped to string

H - NaN     subtraction maps both 3 and undefined to be a number, but undefined is mapped to NaN, and any math with NaN is equal to NaN

## Q14
A - true     '2' is mapped to a number for comparison

B - false    '2' is greater than '12' in alphabetical order

C - true     '2' is mapped to a number before comparison

D - false    nothing is mapped in this case so it's false

E - false    true maps to 1, which is not 2

F - true     Boolean(2) is true

## Q15
The == operator checks equality with type conversions, and === checks type equality without conversion

## Q17
The result of modifyArray([1,2,3], doSomething) is [2, 4, 6]. modifyArray first creates newArr, then runs a for-loop to every item in array and applies the function in callback, then pushes it into the newArr. Since callback multiplies its input number by 2, we turn [1,2,3] into [2,4,6]

## Q19
This will print:

1

4

3

2

it first print 1 immediately, the two setTimeout get sent to a queue, then it prints 4, after that we start the queue, which chooses 3 first and then 2 because 3 has less wait time than 2.