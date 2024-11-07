// 1.Write a function that takes two numbers as parameters and returns their sum. Make sure to type the parameters and return value.

const cal1 = (a:number,b:number) =>{
    return a+b
}
const res = cal1(55,60)
console.log("RESULT",res)

//Create a function that takes a string and returns it in uppercase. Use TypeScript to enforce the correct types.
const str = (val:string) =>{
 return val.toUpperCase()
}
const result = str("strVal")
console.log("strVal","---->",result)