function truncateString(str, num) {
  var dotsAddition = "...".length;
  var totalStringLength = str.length + dotsAddition;
  
  if(str.length > num) {
    if(num <= 3) {
      str = str.slice(0, num - str.length);
    } else {
      str = str.slice(0, num - totalStringLength);
    }
    
    str += "...";
  } 
  
  
  return str;
}
