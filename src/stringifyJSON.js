// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(obj === null){
  	
  	return "null";

  }else if(typeof obj === "undefined" || typeof obj === 'function'){
  	
  	return undefined;

  }else if(typeof obj === "number" || typeof obj === "boolean"){
  	
  	return obj.toString();
  
  }else if(typeof obj === "string"){
  	
  	return '"' + obj + '"';
  
  }else if (Array.isArray(obj)) {

     if(obj.length===0){
  	   return "[]";
     }else{
       var arr = "[";
       for (var i = 0; i < obj.length; i++) {
       arr += stringifyJSON(obj[i])+",";
     }
       return arr.slice(0,-1)+"]"
  	}
  }else{
   
     var ob = "{";
     for(var key in obj){
       if(typeof obj[key]!== 'undefined' && typeof obj[key]!== 'function'){
         ob += stringifyJSON(key) + ":" + stringifyJSON(obj[key])+",";
       }
     }
      
     return ob.length === 1 ? ob+ "}" : ob.slice(0,-1) + "}";
  }
};
