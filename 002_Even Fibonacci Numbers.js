function fiboEvenSum(n) {
  // CONSTRUIR ARRAY CON TERMINOS DE SUCESION DE FIB CON TERMINOS MENORES O IGUALES QUE N
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  const fiboN = [1];
  let i = 1;
  let next = fiboN[fiboN.length - 1] + i;
  while (next <= n) {
    fiboN.push(next);
    i = fiboN[fiboN.length - 2];
    next = fiboN[fiboN.length - 1] + i;
  }
  // FILTRAR AQUELLOS QUE NO SON PARES
  const fiboNEven = fiboN.filter((e) => e % 2 === 0);
  // SUMAR TODOS LOS ELEMENTOS DEL ARRAY
  const sum = fiboNEven.reduce((acc, act) => acc + act);
  return sum;
}

console.log(fiboEvenSum(10));
