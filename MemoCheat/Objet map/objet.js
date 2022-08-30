let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,10,5,6];
let monSet = new Set(nombres);

console.log(monSet); 
monSet.add(11);
console.log(monSet);
monSet.delete(11);
console.log(monSet);
console.log(monSet.has(11));
console.log(monSet.size);
console.log(monSet.has(10));
console.log(monSet.values());