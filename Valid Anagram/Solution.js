var isAnagram = function (s, t) {
  const sort = (str) => str.split("").sort().join(""); // create a new string which sort the element of the given 
  return sort(s) == sort(t); // match the both 
};
