function collatzTail (num, store = [])  {
  (num === 1) 
    ? store.push(1) 
    : (num % 2 === 0) 
      ? handleNum(store,collatzTail,'even')
      :handleNum(store,collatzTail)
  
  function handleNum(store,collatzTail,typeOfNum="odd") {
    store.push(num);
    typeOfNum === "even"
    ? collatzTail(parseInt(num / 2), store)
    : collatzTail((3 * num) + 1, store);
  }
    return store
};
console.log(collatzTail(3));
