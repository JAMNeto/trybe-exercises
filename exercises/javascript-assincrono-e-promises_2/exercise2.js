const promise = new Promise ((resolve, reject) => {
    const array = [];
    for (let index = 0; index < 10; index += 1) {
      const newNumber = Math.floor(Math.random() * 50);
      array.push(newNumber);
    }
    const newArray = array.map((number) => number ** 2);
    const reducedArray = newArray.reduce((acc, cur) => acc + cur, 0);
    if (reducedArray > 8000) {
      return reject(reducedArray);
    }
    resolve(reducedArray);
});
// .then(() => console.log('Promise resolvida!')).catch(() => console.log('Promise rejeitada'));
    
promise.then((reducedArray) => {
    const newArray = [(reducedArray / 2), (reducedArray / 3), (reducedArray / 5), (reducedArray / 10)];
    return newArray;
})
.then((newArray) => newArray.reduce((acc, cur) => acc + cur))
.then((newArray) => console.log(newArray))
.catch(() => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));

