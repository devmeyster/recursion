// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var body = document.body;

  var walk = function (root) {
    var results = [];
    var rootClasses = root.classList;
    var nodeList = root.childNodes;
    
    //Checks to see if the argument root has any assigned 'classes' by 
    //checking the length of rootClasses. If rootClasses doesn't equal 0, 
    //check if it contains the desired 'className' we are looking for. If it does
    //add (push) 'root' to 'results'
      
    if (rootClasses.length !==0) {
      if (rootClasses.contains(className)){
        results.push(root);
      }
    }
    
    //Iterate over the nodeList, and check if each node[i] contains 
    //the desired "className", if yes, push node[i] to the 'results' array
    //if it doesn't, check to see if the node[i] has any children, if it does
    //run the function "walk" on the node in question
          
    for (var i=0; i<nodeList.length; i++) {
      if (nodeList[i].nodeType === 1 && nodeList[i].classList.contains(className)) {
        results.push(nodeList[i]);
      } else if (nodeList[i].hasChildNodes()) {
        walk(nodeList[i]);                       
      }
    }
    return results;
    }; 
  return walk(body);
};


