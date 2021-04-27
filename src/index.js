console.log("Max no of character >>>", getMax("lollipop"));
console.log("Unshift Array >>>", arrayFront(["Yemi", "Yinka"], "Dare"));
console.log("2-D_Arrays >>>", arrayMatrix(2, 2));

recursion();





function recursion() {

  var words = ["Hello", " ", "world", "!"];
  var n = 0;
  function delayLoop() {
    console.log(words[n]);
    if(n++ !== words.length - 1) {
        setTimeout(delayLoop, 1000);
    }
  }
  delayLoop();


  // const look_for_key = function(box) {
  //   for (let item in box) {
  //       if (item.is_a_key()) {
  //           console.log("found the key")
  //       } else {
  //           look_for_key(item)
  //       }
  //   }
  // }
}





function getMax(str) {
  var max = 0,
    maxChar = "";

  str.split("").forEach((char) => {
    if (str.split(char).length > max) {
      max = str.split(char).length - 1;
      maxChar = char;
    }
  });
  return { maxChar, maxNum: max };
}



function arrayFront(arr, newNum) {
  // Adds element to beginning of an array
  let n = arr.length,
    i;
  for (i = n; i >= 0; --i)
    // move element backwards, since array.index starts from 0
    arr[i] = arr[i - 1];
  arr[0] = newNum;

  // [Alternative]
  // arr.unshift(newNum) // the traditional way
  return arr;
}

function arrayMatrix(numRows, numCols) {
  var myarray = new Array(numRows);
  // for each row create n numbers of col
  for (let i = 0; i < numRows; i++) myarray[i] = new Array(numRows);
  myarray[0][0] = "One";
  myarray[0][1] = "Two";
  myarray[0][2] = "Three";
  myarray[1][0] = "Four";
  myarray[1][1] = "Five";
  myarray[1][2] = "Six";

  return myarray;
}




