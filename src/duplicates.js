function removeDuplicates(arr) {
  if (!(Array.isArray(arr) || typeof arr === "string"))
    return "Arrays or Strings";
  arr = typeof arr === "string" ? arr.split("") : arr;
  arr = [...new Set(arr)];
  return arr;
}

console.log(removeDuplicates("daree"));
