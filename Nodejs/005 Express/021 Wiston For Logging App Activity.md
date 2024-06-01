#                                                                                                      Logging App Activity

> `Logging is the process of writing information into` **`log files`**. `Log files include information about ` **`various events`** `that happened in` **`operating system, software, or in communication.`**
> `A great log system is one of the easiest ways to check your application behav/ior and it’s our first weapon to look into bugs`





### Purpose of logging

- `Troubleshooting`
- `Information gathering`
- `Profiling`
- `Auditing`
- `Generating statistics`
- `Detecting security incidents`
- `Monitoring policy violations `
- `Providing information in case of problems`
- `Finding application bottlenecks `





### Which events to log

- `Application start-ups and shut-downs`

- ` Application errors `

- `Configuration changes`

- `Input validation failures`

- `Authentication and authorization failures`

  





### Which events not to log

- `Application source code`
- ` Session identification values`
- `Database connection strings`
- ` Access tokens`
- `Encryption keys`
- ` Sensitive personal data`
- ` Passwords`
- `Bank account and card holder data.`





### Logging best practices

- `Logging should be`**`json format.`**
- `Logging should be meaningful.`
- `Logging should be structured and done at different levels.`
- `Logging should contain context.`
- `Logging messages should be understandable to humans and parsable by machines.`
- `Logging should be balanced; it should not include too little or too much information.`
- `Logging should be adapted to development and to production.`
- `Logging in more complex applications should be divided into several log files.`







## [Winston](https://github.com/winstonjs/winston) 

- `The most popular logging solution available for` [Node.js](https://nodejs.org/) `applications. `
- `It is designed to be simple and universal.`
- `Each Winston logger can have multiple transports configured at different levels.`
- `  Winston uses JSON format for its logs by default.`
- `Features`
  - `Differentiate log levels: error, warn, info, HTTP, debug`
  - `log queries, and even a built-in profiler`.
  - `Differentiate colors adding one to each log level`
  - `Show or hide different log levels based on the application ENV; e.g., we won’t show all the logs when the application runs in production.`
  - `Adding a timestamp to each log line`
  - `Save logs inside files`
  - `Multiple storage options `







### Winston loggers

- `Winston loggers log the messages to log files.`

- `A winston logger is created with the ` **`createLogger`** `function.In addition, there is a default logger if no logger is explicitly specified.`

- **`createLogger`** `function accepts the following options:`

  | Name          | Default                     | Description                                     |
  | ------------- | --------------------------- | ----------------------------------------------- |
  | `level`       | `info`                      | `maximum level of log messages to log`          |
  | `levels`      | `winston.config.npm.levels` | `the set of level message types chosen`         |
  | `format`      | `winston.format.json`       | `the format of log messages`                    |
  | `transports`  | `no transports`             | `set of logging destinations for log messages`  |
  | `exitOnError` | `true`                      | `whether handled exceptions cause process.exit` |
  | `silent`      | `false`                     | `if true, all logs are suppressed`              |

  





### Winston transports

- `A transport is a storage device or output mechanism for our logs(concept introduced by Winston).`
- `Each Winston logger can have multiple transports configured at different levels. `
- `Winston comes with three core transports: console, file, and HTTP. `
- `The transports must be created and added to the loggers.`
- `A transport has the following settings:`
  - **`level `** : ` Sets the level of messages to log.`
  - **`filename`** : This is the filename to write log data to.`
  - **`handleExceptions`** -` Determines whether to catch and log unhandled exceptions.`
  - **`json`** : `Records log data in JSON format.`
  - **`maxsize`**  : `Sets the max size of log file, in bytes, before a new file will be created.`
  - **`maxFiles`** : `Limits the number of files created when the size of the logfile is exceeded.`
  - **`colorize`** - `Colorizes the output; helpful when looking at console logs.`







### Logging levels 

- `Logging levels indicate message priority and are denoted by an integer. Winston uses `npm` logging levels that are prioritized from 0 to 5 (highest to lowest):`
  - **`0`**: `error`
  - **`1`**: `warn`
  - **`2`**: `info`
  - **`3`**: `verbose`
  - **`4`**: `debug`
  - **`5`**: `silly`





### Winston formats

- `Logging messages are formatted with Winston formats. `
- `The default format is `**`json`**. `Formats can be combined with `**`combine`** `and custom formats `
- `Winston contains several built-in formats, including:`
  - `simple`
  - `json`
  - `cli`
  - `padlevels`
  - `colorize`
  - `splat`
  - `align`





### Installing 

```js
npm install winston
```





### Winston default logger

- `The default logger is accessible through the winston module directly. Initially, there are no transports set on the default logger. We must add or remove transports via the` **`add,remove or configure`** `methods.`

```js
const winston = require('winston');


const console = new winston.transports.Console();

winston.add(console);
winston.info('Information message');
winston.remove(console);
```







## Winston simple example

- `We create a console logger and log three messages. Since the default logging level is info, all three messages are logged.`

  ```js
  const winston = require('winston');
  
  const logger = winston.createLogger({
      transports: [
          new winston.transports.Console()
      ]
  });
  
  logger.info('Information message');
  logger.warn('Warning message');
  logger.error('Error message');
  
  
  // resutel
  {"message":"Information message","level":"info"}
  {"message":"Warning message","level":"warn"}
  {"message":"Error message","level":"error"}
  ```

  





## Winston log functions

- `We can log messages with` **`custom log functions (`info`, `warn`)`** `or use the generic `**`log`**` function and specify the log level as the first option.`

```js
const winston = require('winston');


const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});

logger.info('Information message');
logger.warn('Warning message');

logger.log('info', 'Information message')
logger.log('warn', 'Warning message')

/// result
{"message":"Information message","level":"info"}
{"message":"Warning message","level":"warn"}
{"level":"info","message":"Information message"}
{"level":"warn","message":"Warning message"}
```







## Winston configure logger

- `With the `**`configure`** `function, we can configure and already created logger.`

- `In the example, we change the logging level to `**`error` **

  ```js
  const winston = require('winston');
  
  const logger = winston.createLogger({
      transports: [
          new winston.transports.Console()
      ]
  });
  
  logger.info('Information message');
  logger.warn('Warning message');
  logger.error('Error message');
  
  logger.configure({
      level: 'error',
      transports: [
          new winston.transports.Console()
      ]
  });
  
  logger.info('Information message 2');
  logger.warn('Warning message 2');
  logger.error('Error message 2');
  
  //reslut
  {"message":"Information message","level":"info"}
  {"message":"Warning message","level":"warn"} 
  
  {"message":"Error message","level":"error"}
  {"message":"Error message 2","level":"error"}
  ```

  





## Winston combine formats

- `Formats can be combined with the `**`combine`.**

  ```js
  const winston = require('winston');
  
  const myformat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  );
  
  const logger = winston.createLogger({
      transports: [
          new winston.transports.Console({
              format: myformat
          })
      ]
  });
  
  logger.info('Information message');
  
  // reslut
// 2020-04-04T17:17:48.882Z info:  Information message
  ```
  
  - `In the example, we combine ` **`colorize, timestamp, align, and printf`** `formats.`







## Winston transport maxsize

- **`maxsize`** `property of a transport sets the maximum size of a log file, in bytes, before a new file will be created.`

  ```js
  const path = require('path');
  const winston = require('winston');
  
  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.printf(info => `${info.message}`),
    transports: [
      new winston.transports.File({
        filename: path.join(__dirname, 'error.log'),
        level: 'info',
        maxsize: 500
      })
    ]
  });
  ```

  - `We use a file transport and set the `**`maxsize`** `to 500 bytes. Later we write more than 500 characters into the file. The first 600 characters are written to the` **`error.log` file`**, `the remaining 400 characters into the `**`error1.log` **`file.`





## Winston multiple loggers

- `we create two loggers that write to files.`
- **`mjson`** `logger writes in a json format, the `**`simple`**` logger in a simple format. The loggers have different log levels.`

```js
// loggers.js
const winston = require('winston');

const loggers = {
  mjson: winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [new winston.transports.File({ filename: 'app-info.log'})],
  }),

  simple: winston.createLogger({
    level: 'error',
    format: winston.format.simple(),
    transports: [new winston.transports.File({ filename: 'app-error.log'}),],
  })
};


loggers.mjson.info('Information message');
loggers.mjson.error('Error message');
loggers.mjson.debug('Some message');

loggers.simple.error('Error message');
loggers.simple.info('Information message');
loggers.simple.warn('Warning message');
loggers.simple.debug('Some message');
```



```shell
$ node loggers.js
$ cat app-error.log 
error: Error message
$ cat app-info.log 
{"message":"Information message","level":"info"}
{"message":"Error message","level":"error"}
```



**`Crd`** : [ZetCode](https://zetcode.com/)





## Complete example

```js
// myApp/config/winston.js
var appRoot = require('app-root-path');
var winston = require('winston');

// define the custom settings for each transport (file, console)
var options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

// instantiate a new Winston Logger with the settings defined above
var logger = new winston.Logger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function(message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  },
};

module.exports = logger;
```





## Integrating Winston With Morgan

```js
// myApp/app.js
var winston = require('./config/winston');

app.use(morgan('combined', { stream: winston.stream }));
```





### My Favorite Format



```js
// log format
error: 404 - Not Found - /foo - GET - ::ffff:72.80.124.207

info: ::ffff:72.80.124.207 - - [07/Mar/2018:17:40:11 +0000] "GET /foo HTTP/1.1" 404 985 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36"

info: ::ffff:72.80.124.207 - - [07/Mar/2018:17:40:11 +0000] "GET /stylesheets/style.css HTTP/1.1" 304 - "http://167.99.4.120:3000/foo" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36"


// "save to db"
{
	"level":"error",
	"message":"404 - Not Found - /foo - GET - ::ffff:72.80.124.207",
	'req_method' : 'get',
	"param" : '/askldf',           
	"ip" : 127.0.0.1
	"user" : 'shineshine',
	"from" : 'www.google.com',
	"geo_loc"
	"timestamp":"2018-03-07T17:40:10.622Z"
}
```