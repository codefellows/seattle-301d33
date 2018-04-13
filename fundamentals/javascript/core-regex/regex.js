// put a dash between each pair of odd numbers


let nums = [12345749352134, 123457753425, 123465321];

function insertDashes(num) {
  return num.toString().replace(/([13579])(?=[13579])/g,"$1-");
}

for(let num of nums) {
  console.log(insertDashes(num) );
}
