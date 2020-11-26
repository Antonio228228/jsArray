//sozdat massiv
let fruit = ["apple", "banana", "orange"];
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[2]);
console.log(fruit[fruit.length-1]);
//for loop
for(let i=0; i < 3; i++) { //i++ = i+1
    let message=`${i}. ${fruit[i]}`;
    console.log(message);
}

fruit.forEach(element=>{
    console.log(`Hello from FOREACH`, element);
});
//vibrat slu4ainiy element massiva
let rnd=Math.floor(Math.random()* fruit.length);
console.log(rnd);

let randomFruit = fruit[rnd];
console.log(`my random fruit:`, randomFruit);

//dobavit noviy element v massiv
fruit.push(`avocado`);
console.log(fruit);
//udalit element banana iz massiva
let bananaIndex = fruit.indexOf(`banana`);
console.log(`index of banana`, bananaIndex);
fruit.splice(bananaIndex, 1);
console.log(fruit);