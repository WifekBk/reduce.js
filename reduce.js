function each(coll, f) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            f(coll[i], i);
        }
    } else {
        for (var key in coll) {
            f(coll[key], key);
        }
    }
}

function reduce(array, f, start) {
    var acc = start;
    each(array, function (element) {
        acc = f(acc, element);
    });
    return acc;
}
//Basic Requirements
//1

function sum(numbers) {
    return reduce(numbers, function (total, number) {
        return total + number;
    }, 0);
}
function product(numbers) {
    return reduce(numbers, function (acc, number) {
        return acc * number;
    }, 1);
}

//2

var people = [
    { name: { first: 'Grace', middle: 'B.', last: 'Hopper' }, age: 85 },
    { name: { first: 'Adele', last: 'Goldstine' }, age: 43 },
    { name: { first: 'Ada', last: 'Lovelace' }, age: 36 },
    { name: { first: 'Hedy', middle: 'E.', last: 'Lamarr' }, age: 85 },
    { name: { first: 'Ruchi', last: 'Sanghvi' }, age: 34 }
];
//with reduce and map
function averageAge(people) {
    var ages = map(people, function (e, i) {
        return e.age
    })
    var totalAges = reduce(ages, function (acc, age) {
        return acc + age;
    }, 1);
    return totalAges/ages.length

}


function averageAge(people) {
    var totalAges = reduce(people, function (acc, user) {
        return acc + user.age;
    }, 0);
    return totalAges/people.length

}

//3
function range(start, end) { 
    var acc = []; 
    for (var i = start; i < end; i++) { 
          acc.push(i); 
    } 
    return acc; 
} 

function factorial(n) { 
   return reduce(range(1,n),function(acc,x){
    return acc*x
   },1)
}

///////////////////////////////////
//More Practice
//1

function sumBy(numbers, f) { 
    var sum = 0; 
    each(numbers, function(number) { 
          sum = sum + f(number); 
    }); 
    return sum; 
} 

function sumBy(numbers,f){
    return reduce(numbers,function(acc,numb){
        console.log(numb)
return acc =acc+f(numb)
    },0)
}

//2
function max(numbers) { 
    var max = numbers[0]; 
    each(numbers, function(number) { 
          if (number > max) { 
                max = number; 
          } 
    }); 
    return max; 
} 

function max (number){
    return reduce(number,function(acc,n){
        if (n > acc) { 
        return    acc = n;
        }
    },number[0])
}

function max (number){
    return reduce(number,function(acc,n){
       if (n > acc) { 
    return  acc = n;
        }
        return acc
    },number[0])
}

//3

var countOccurrences = function(string,char){
    return reduce(string.split(''),function(acc,n){
        if(n===char){
            acc++
        }
        return acc
    },0)
}

//4
function odd (arr){
return reduce(arr,function(acc,n){
    if(n%2===0){
       return acc=false
    }
    return acc;
},true)
};

function positive (arr){
    return reduce(arr,function(acc,n){
        if(n<0){
           return acc=false
        }
        return acc;
    },true)
    };

function lengthGreaterThanThree(arrOfStr){
    return reduce(arrOfStr,function(acc,str){
        if(str.length<=3){
           return acc=false
        }
        return acc;
    },true)
}

function countainE(arrOfStr){
    return reduce(arrOfStr,function(acc,str){
       if (str.includes("e")){
      return  acc = true
       }
       else{
        return acc = false;
       }
    },true)
}


