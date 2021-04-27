const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurn = (obj, key, value) => {
  obj[key] = value;
  return obj;
}

console.log(addTurn(lesson2, 'turno', 'manhã'));

const listKeys = obj => {
  const listObj = Object.keys(obj);
  return listObj;
}

console.log(listKeys(lesson3));

const objLength = obj => {
  const listObj = Object.keys(obj).length;
  return listObj;
}

console.log (objLength(lesson3));

const listValues = obj => {
    const listObj = Object.values(obj);
    return listObj;
}
console.log (listValues(lesson3));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));