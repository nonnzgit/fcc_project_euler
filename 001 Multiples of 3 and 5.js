function multiplesOf3and5(number) {
  // DEFINO LOS NUMEROS MULTIPLOS DE 3 A CONSIDERAR
  const multThree = [];
  for (let i = 3; number > i; i += 3) {
    multThree.push(i);
  }
  // DEFINO LOS NUMEROS MULTIPLOS DE 5 A CONSIDERAR
  const multFive = [];
  for (let i = 5; number > i; i += 5) {
    multFive.push(i);
  }
  // LOS METO EN UN SOLO ARRAY ORDENADOS
  const multThreeAndFive = multThree.concat(multFive).toSorted((a, b) => a - b);
  // SACO DE ESE ARRAY DUPLICADOS
  for (let i = 0; i < multThreeAndFive.length; i++) {
    if (multThreeAndFive[i] === multThreeAndFive[i - 1]) {
      multThreeAndFive.splice(i, 1);
    }
  }
  // SUMO TODOS LOS ELEMENTOS DE ARRAY
  let sum = 0;
  for (let i = 0; i < multThreeAndFive.length; i++) {
    sum += multThreeAndFive[i];
  }

  return sum;
}

multiplesOf3and5(1000);
