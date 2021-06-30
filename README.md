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
    **git clone** https://github.com/kastrubait/Out-of-the-maze.git  -b maze-solution
>2. Go to the directory:
    **cd out-of-the-maze**
>3. Install node_modules:
   **npm i**,  **npm link**
>4. Start:
    **maze-cli** `[options]`
>5. Options:
    Each option can have a short flag (single character) and a long name. Options on the command line are not positional, and can be specified before or after other command arguments. You can view options using the command  **maze-cli  --help**

       **-i, --input <string>**, input sets the path to the file, by default "input.txt"  
       **-o, --output <string>**, output sets the path to the file, by default "output.txt"  
       **-h, --help**, display help for command
       
 #### Example  
 > `> maze-cli -i input/3.in -o output/3.out`  
 > `> maze-cli -i input/3.in`   

*The file contains a maze template. Each element forming a maze is separated from the other by one space. The data is read line by line. The input data is not checked for correctness. Be careful when making changes!*
