
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



// 7 kyu Alternate capitalization
// function capitalize(s){
//   return [s.split('').map((l,i)=>i%2==0?l.toUpperCase():l.toLowerCase()).join(''),
//           s.split('').map((l,i)=>i%2!==0?l.toUpperCase():l.toLowerCase()).join('')];
// };


// console.log(capitalize('hghgh'));

///7 kyu Build a square ///


// function generateShape(integer){
// return ('+'.repeat(integer) + '\n').repeat(integer).trim();
//  }
//   console.log(generateShape(5));

// 7 kyu Pluck
// https://www.codewars.com/kata/530017aac7c0f49926000084/train/javascript#:~:text=7%20kyu,Pluck
// function pluck(array, name) {
//   return array.map(elem => elem[name]);
//  }
//  console.log(pluck([{'a': 5}, {a: 5, 'b': 3}], 'b'));

// 7 kyu esreveR

// reverseNow = function(array) {
// let res = [];
// for (let i= 0; i < array.length; i++) {
//   res.unshift(array[i]);
// }
      
//  return res;
//  }
// console.log(reverseNow([1,2,3,4]));


// 7 kyu First-Class Function Factory
// function factory(x){
//   return myArray => myArray.map( b => b*x );
// }

// console.log(factory(5));

// 7 kyu Sum of Odd Cubed Numbers
// function cubeOdd(arr) {
//  let res = [];
//  let result = 0;
// for(let i = 0; i < arr.length; i++) { 
//   if (isNaN(arr[i])) {
//     return undefined
//   } else { 
//     res.push(Math.pow(arr[i],3));
//     if(res[i] % 2 !== 0) {
//       result +=res[i];
//       } 
//   }
//  }
//     return result;
//   }


// console.log(cubeOdd([1,2,'s',4]));
// 

// 7 kyu  Recursion #1 - Factorial
// const factorial = n => {
//     if (n >= 1) {
//         return n * factorial(n - 1); 
//     } else {
//         return 1; 
//     }
 
// };

// 8 kyu L1: Set Alarm
// function setAlarm(employed, vacation){
//      if(employed == true && vacation == false) {
//      return true; } else {
//         return false;
//      }
// }
// console.log(setAlarm(false, true));

// function nextItem(xs, item) {
//  let res;
//   for(let i = 0; i < xs.length; i++) {
//     res = xs[item + 1];
//   }
//   return res;
// }
//   console.log(([1,2,3,4,5,6,7,8],6));

// BAC% = (A × 5.14 / W × r) - .015 × H 

// A: Total alcohol consumed, in ounces (oz)
// W: Body weight, in pounds (lbs)
// r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
// H: Time passed since drinking, in hours

// function bloodAlcoholContent(drinks, weight, sex, time){
//     let bac = (drinks * 5.14 / weight )
//     return bac;
//   }

//   let a = (180 * 5.14 / 160 * 0.66) - 0.015 * 1;
//   console.log(a);


// fib(4) => ''0 1 1 2"
// fib(7) => ''0 1 1 2 3 5 8"
// fib('7') => ''"
// fib(1) => "0"
// fib(0) => ''"

// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// console.log(fib(5));




// 7 kyu Remove duplicate words
// function removeDuplicateWords (s) {
//     let arr = s.split(' ');
//     let res = Array.from(new Set(arr));
//    return res.join(' ');
//   }
// console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));


function findUnique(numbers) {
   let a = [];
   let b = [];
//    for (let i = 0; i < numbers.length; i++) {
//     if (number)
//    }
for (let value of numbers) {
    if(value !== value) {
        a.push(value);
    }
}
return a;
}

console.log(findUnique([ 1, 8, 4, 4, 6, 1, 8 ]));


function arithmetic(a, b, operator){
    if( operator == "add" ) {
        return a + b;
    } else if (operator == "subtract") {
        return a - b;
    } else if (operator == "multiply") {
        return a * b;
    } else if (operator == "divide" ) {
        return a / b;
    }
  }
  console.log(arithmetic(5, 2, "add" ));


  