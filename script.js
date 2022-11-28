
// 7 kyu Credit Card Mask

// function maskify(cc) {
//     return cc.replace(/.(?=.{4})/g, "#");
//   }
// console.log(maskify('123456789'));


// 8 kyu If you can't sleep, just count sheep!!

// const countSheep = function (num) {
//     let count = [];
//     let a = '';
//     if (num < 0) {
//     return "1 sheep...2 sheep...3 sheep...";
//     } else if (num === 0 ) {
//         return a;
//     } else  {
//         for( let i = 1; i <= num; i++) {
//             count.push(`${i} sheep...`);
//         }
//     }
//     return count.join('');
//   };

//   console.log(countSheep(0));

// 8 kyu Array plus array

// function arrayPlusArray(arr1, arr2) {
//   let arr3 = arr1.concat(arr2);
//   let res = 0;
//   for( let i = 0; i < arr3.length; i++) {
//    res += arr3[i];
//   }
//   return res; 

// console.log(arrayPlusArray([1,2,3], [2,5,6]));



function generateShape(integer){
let result = '';
for(let i = 1; i <= integer; i++) {
  for (let j = 0; j < integer; j++) {
     result += '+';
  }
  if (integer === i - 2 ) break;
  result += '\n';
 
}
return result ;
}
console.log(generateShape(3));

let integer = 5;
let result = '';
for(let i = 1; i <= integer ; i++) {
  for (let j = 0; j < integer - 1; j++) {
    result += '+';
  }

   result += '\n';

}
console.log(result.length);