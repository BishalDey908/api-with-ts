// let firstName: string = "Dylan"; // type string
// const roll: number = 55
// const passStatus: boolean=true

// console.log(typeof(firstName),firstName);
// console.log(typeof(roll),roll);
// console.log(typeof(passStatus),passStatus);


// let u=88
// u="dylan"

// any variable type
// let check:any=true
// console.log(check)
// check="bishal"
// console.log(check)

//unknown variable
// let check1:unknown="bunknown"
// console.log(check1)
// check1=true
// console.log(check1)

//undefined
// let data:undefined=undefined
// console.log(typeof(data))

//null
// let data:null=null
// console.log(typeof(data))

//array
// let data: number[]=[]
// data.push(1,2,5)
// data.push(2)
// data.pop()
// console.log(data)

//array
// let data1:readonly number[]=[]
// data.push(1,2,5)
// data.push(2)
// data.pop()
// console.log(data)

//Typed Array(tuple)
// let arr:[string,number,boolean]
// arr=["bishal",55,true]
// console.log(arr)

//Readonly Typed Array(tuple)
// let arr1:readonly[string,number,boolean,boolean,number]
// arr1=["bishal",20,true,true,55]
// console.log(arr1)

//Named Tuples
// let arr2:[x:string,y:string]=["bishal","dey"]
// const[x,y]=arr2
// console.log(x,y)

//object
// let customer:{name:string,age?:string}=
// {
//     name:"bishal"
// }
// console.log(customer.name)

//function
const sum =(value:number,name:string) =>{
    return name+value
}
console.log(sum(20,"bishal"))

//enum in TS 
enum myInfo{
    name="bishal",
    age=20,
    adddress ="garis"
}
console.log(myInfo)

