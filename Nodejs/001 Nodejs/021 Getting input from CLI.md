# Readline Module

> Allows the reading of input stream line by line
>
> This module wraps up the process standard output and process standard input objects. 
>
> Readline module makes it easier for input and reading the output given by the user



- `import moudle`
- `create an interface for the input and output`
- `the createInterface() method takes two arguments. The first argument will be for the standard input and the second one will be for reading the standard output.`
- `rli.question() method is used for asking questions`
-  `rli.close() method is used close the interface`

```js
// import readline moudle
const readline = require('readline'); 

// interface for input output
const rli = readline.createInterface(process.stdin,process.stdout);

//const rli.createInterface({
   // input : process.stdin,
  // output : process.stdout   
});

// aking question
rli.question('What is your age? ', (age) => {
    console.log('Your age is: ' + age);
    rli.close();
});
```



#### Prompt

> **setPrompt()** method : to set the particular statement to the console. 
>
> **prompt()** method : for displaying the statement which is set in setPrompt() Method.
>
> **rli.on('line',cb(data))**  method : listen event
>
>  **rl.on()** method takes the first argument as **line** event.

```js
const rl = require('readline')

const rli = rl.createInterface(process.stdin,process.stdout);

rli.setPrompt('Enter Name.. ');
rli.prompt();

rli.on('line', (name) => {
    console.log(`Your name : ${name}`);
    rli.close();
});
```

###### readline moduel events

- **line**
- **close**
- **pause**
- **resume**
- **SIGINT**
- **SIGTSTP**
- **SIGCONT**



##### Readline Properties and Methods

| Method               | Description                                                  |
| :------------------- | :----------------------------------------------------------- |
| clearLine()          | Clears the current line of the specified stream              |
| clearScreenDown()    | Clears the specified stream from the current cursor down position |
| createInterface()    | Creates an Interface object                                  |
| cursorTo()           | Moves the cursor to the specified position                   |
| emitKeypressEvents() | Fires keypress events for the specified stream               |
| moveCursor()         | Moves the cursor to a new position, relative to the current position |



##### Open a file and return the content line by line with readline module

```js
const readline = require('readline');
const fs = require('fs');

const rli  = readline.createInterface({   input: fs.createReadStream('home.html')
});
let linenumber = 0;
rli.on('line',function(line){
   linenumber++;
   console.log(linenumber +' ' + ' ' + ' ' + ' ' + line)
});
```





### For Paper Note

```js
/* readline Module
  - Allows the reading of input stream line by line
  - This module wraps up the process standard output and process standard input objects. 
  - Readline module makes it easier for input and reading the output given by the user
  - the createInterface() method takes two arguments. The first argument will be for the standard input and the       second one will be for reading the standard output.
  - rli.question() method is used for asking questions
  - rli.close() method is used close the interface 
 */  
const readline = require('readline');  // import readline moudle
const rli = readline.createInterface(process.stdin,process.stdout); // interface for input output 
// or const rli.createInterface({input : process.stdin,output : process.stdout   });
rli.question('What is your age? ', (age) => { // aking question
    console.log('Your age is: ' + age);
    rli.close();
});

//Open a file and return the content line by line with readline module
const readline = require('readline');
const fs = require('fs');
const rli  = readline.createInterface({input: fs.createReadStream('home.html')});
let linenumber = 0;
rli.on('line',function(line){
   linenumber++;
   console.log(linenumber +' ' + ' ' + ' ' + ' ' + line)
});

/* Prompt
 - setPrompt() method : to set the particular statement to the console. 
 - prompt() method : for displaying the statement which is set in setPrompt() Method.
 - rli.on('line',cb(data))  method : listen event
 - rl.on() method takes the first argument as line event.
*/ 
const rl = require('readline')
const rli = rl.createInterface(process.stdin,process.stdout);
rli.setPrompt('Enter Name.. ');
rli.prompt();
rli.on('line', (name) => {console.log(`Your name : ${name}`);rli.close()});
```

