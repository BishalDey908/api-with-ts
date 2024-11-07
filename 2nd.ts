//don't return a value so use void 
const data = ():void =>{
 console.log("hello world")
}
data()

//return a number so use :number
const main =():number =>{
   return 55
}
const num:number =main()
console.log("number is",num)

const chill = (a:number) =>{
    console.log(a)
}
chill(66)

const arr2:[number,number,number] = [55,66,96]
console.log(arr2)

const arr3:[number,string] = [96,"hello"]


