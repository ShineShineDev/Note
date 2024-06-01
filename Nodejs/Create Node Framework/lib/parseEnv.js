/**
  * require file system module
*/
const fs = require('fs');

const readFileSync  = require('./readFileSync');

/**
  * env class
*/
class Env{
  /**
    * env value
  */
   #envVal = null;

  /**
    * get env value
      @ parem key
  */
  static getEnv(key){

    // reading file
    const fileReadedData = readFileSync.getData('./../.env');


    const dataArray = fileReadedData.toString().split("\n");

    // array map
    dataArray.map((item) =>{

      //  split key and value
      const keyVal = item.split("=");

      // check key
      if (keyVal[0].trim() === key){

        // assing match value
        this.envVal =  keyVal[1];
      }
    })

    // retrun  value
    return this.envVal.trim();
   }
 }

console.log(Env.getEnv('port'));

/**
* exports module
*/
exports.Env;
