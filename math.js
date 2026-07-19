let a;
let b;

function sum(a,b){
  const sum = a+b;
  return sum;
}

function minus(a,b){
  const minus = a-b;
  return minus;
}

function muti(a,b){
  const muti = a*b;
  return muti;
}

a=1;
b=2;

console.log(`${a} + ${b} 더하기 ${sum(a,b)} 입니다.`);
console.log(`${a} - ${b} 뺴기 ${minus(a,b)} 입니다.`);
console.log(`${a} * ${b} 곱하기 ${muti(a,b)} 입니다.`);
