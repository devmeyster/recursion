// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
    var docBody = document.body;

    function walk(parent){
        var results = [];
        var node = parent.childNodes;
        
        if(parent.length<=1){
        
            if(parent.classList.contains(className)){
               results.push(parent);
        };
            
        for(var i=0; i<node.length; i++){
            if(node[i].classList.contains(className)){
               results.push(node[i]);
            }else if(node[i].childNodes.length > 0){
                walk(node[i]);               
                  }
        }
        return results;
      };
        
    return walk(docBody);
    
};


