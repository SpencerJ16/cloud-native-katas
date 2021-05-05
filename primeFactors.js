function primeFactors(num){
    let results = []
   for (var i=2; i<=num; i++){  
    while(num % i === 0) { 
        results.push(i)
        num = num/i
     }
    }
    if(num != 1){
        results.push(num)
    }
    return results
}

console.log("1:", primeFactors(1))
console.log("2:", primeFactors(2))
console.log("3:", primeFactors(3))
console.log("4:", primeFactors(4))
console.log("6:", primeFactors(6))
console.log("8:", primeFactors(8))
console.log("9:", primeFactors(9))
console.log("25:", primeFactors(25))