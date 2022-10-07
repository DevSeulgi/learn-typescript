const TEST = [{unique_number : 123456}, {unique_number : 123457}];

let UniqueNumber;

while(true){
  const randomNumber = Math.floor(new Date().getTime() * Math.random() / 100000)
  const randomNumberLength = String(randomNumber).length;
  
  if(randomNumberLength === 6){
    let exUniqueNumber = TEST.findOne({
      where: {
        unique_number: randomNumber,
      }
    });

    if(!exUniqueNumber){
      UniqueNumber = randomNumber;
      break;
    }
  }
}
console.log(UniqueNumber);