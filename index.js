function theBeatlesPlay(musicians, instruments){
  let result = [];
  for(let i = 0; i < musicians.length; i++){
    result.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return result;
}

function johnLennonFacts(facts){
  let newArr = [];
  let i = 0;
  while (i < facts.length){
    newArr.push(facts[i] + '!!!');
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num){
  let result = [];
  let count = 0;
  do {
    result.push(num);
    count++;
  } while
    (count < 15);
  return result;
}