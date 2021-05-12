// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
      method: 'GET',
      headers: {'Accept': 'application/json'}
  };
  const promise = new Promise ((resolve, reject) => {
    const array = [];
    for (let index = 0; index < 10; index += 1) {
      const newNumber = Math.floor(Math.random() * 50);
      array.push(newNumber);
    }
    const newArray = array.map((number) => number ** 2);
    const reducedArray = newArray.reduce((acc, cur) => acc + cur, 0);
    if (reducedArray < 8000) {
      resolve
      .then(console.log('Promise resolvida!'))
      .catch(console.log('Promise rejeitada!'))
    } else {
      reject;
    }
    

  })  
  fetch(API_URL, myObject)
  .then((response) => response.json())
  .then(data => console.log(data));
};

window.onload = () => fetchJoke();