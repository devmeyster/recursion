// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  //Boolean, Number, and String objects are converted to the corresponding 
  //primitive values during stringification, in accord with the traditional 
  //conversion semantics 

  if(typeof obj === "number" || typeof obj === "boolean"){
  	
  	return obj.toString();
  
  }else if(typeof obj === "string"){
  	
  	return '"' + obj + '"';

  //If undefined, a function, or a symbol is encountered during conversion 
  //it is either omitted (when it is found in an object) or censored to null 
  //(when it is found in an array).	

  }else if(obj === null){
  	
  	return "null";

  }else if(typeof obj === "undefined"){
  	
  	return undefined;

  }else if(typeof obj === 'function'){
  	
  	return undefined;	


  // If the object is an Array, iterate over the array and 
  //call stringifyJSON on the elements of the array	
  
  }else if (Array.isArray(obj)) {

     if(obj.length===0){
  	   return "[]";
     }else{
       var arr = "[";
       for (var i = 0; i < obj.length; i++) {
       arr += stringifyJSON(obj[i])+",";
     }
       return arr.slice(0,-1)+"]" //Ommit the last comma and add a bracket
  	}
  }else{
   	 
  	//if obj is an 'object', iterate of the object with for-in loop and check
  	//if the corresponding 'value' pair is not a function and not undefined
  	//if thats the case, stringify the "key" and "value" pair 

     var ob = "{";
     for(var key in obj){
       if(typeof obj[key]!== 'undefined' && typeof obj[key]!== 'function'){
         ob += stringifyJSON(key) + ":" + stringifyJSON(obj[key])+",";
       }
     }
      
     return ob.length === 1 ? ob+ "}" : ob.slice(0,-1) + "}"; //if the object is empty, add closing "}"
  }															  //otherwise ommit the last comma and add a closing bracket
};
