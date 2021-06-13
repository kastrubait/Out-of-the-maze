# Out-of-the-maze
**ITRex Group Node.js Lab | Test task #2**

> *Write an algorithm for finding a way out of the maze. The maze is a 2-dimensional array in which:*
> 
> `0` - *start position*    
> `+` - *way*    
> `#` - *wall*
> 
> The solution should be an array of strings with a sequence of necessary actions to exit the maze.

Example of input data:

``[
 ['#','#','#','#','#','#','#','#','#'],   
 ['#','+','+','+','#','+','+','+','#'],        
 ['#','+','#','+','#','+','#','+','#'],       
 ['+','+','#','+','0','+','#','+','#'],       
 ['#','#','#','+','#','#','#','#','#'],     
 ['#','#','+','+','#','#','#','#','#'],       
 ['#','#','+','#','#','#','#','#','#'],       
 ['#','#','#','#','#','#','#','#','#'],  
 ]``

Example of answer: 

``['left', 'top','top','left','left','bottom','bottom','left']``

#### Installation and Start
>1. Clone the repository
    **git clone** https://github.com/kastrubait/Out-of-the-maze.git
>2. Go to the directory:
    **cd out-of-the-maze**
>3. Install node_modules:
   **npm i**,  **npm link**
>4. Start:
    **maze-cli**
> 
   - not implemented read / write to file or stdin/stdout
   - the option of having multiple outputs is not considered
   - the option of working with large amounts of input data has not been considered
