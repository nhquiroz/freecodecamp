function repeatStringNumTimes(str, num) {
  if(num < 0) {
    return "";
  }
  
  var originalStr = str;
  
  for(var i = 1; i < num; ++i) {
    str += originalStr;
  }
  
  return str;
}

repeatStringNumTimes("abc", 3);
