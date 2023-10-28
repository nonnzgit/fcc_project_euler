function multiplesOf3and5(number) {
  let sum = 0,
    i = 3;
  while (i < number) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
    i++;
  }

  console.log(sum);
  return sum;
}

multiplesOf3and5(1000);
