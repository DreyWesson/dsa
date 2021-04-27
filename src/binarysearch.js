function binarySearch( sortedValues, target ){
  let start = 0, end = sortedValues.length-1;
// Best case 1 comparison
// Worse Case: O(logn)
// start=> [1,2 3,...] end#
  while (start <= end) {
    let middle = (start +(end - start)/2 ) | 0 ;
    if (sortedValues[middle] === target)
      return `${middle} found`
    else if (target < sortedValues[middle]) 
      end = middle - 1
    else 
      start = middle + 1
    // return middle
  }
}
console.log(binarySearch([0,1,2,3,4,5,6,7,8,9,10,11,12,13], 9));