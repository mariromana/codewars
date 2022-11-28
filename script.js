
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


var s = 'Hello {foo} - make me a {bar}';
var o = {
  foo : 'Jack',
  bar : 'sandwich'
};


var format = function ( obj) {
    if(!Array.isArray(obj)) {
        Object.values(obj);
    }
};
console.log(format( var o = {
    foo : 'Jack',
    bar : 'sandwich'
  };));