let num: string[] = ["Hello World"];

// let onbj:  {name:string;age:number}={
//     name:"Hello"}

//  ingne {name:string;age:number} koduthathinu pakaram nammakk  thazhaoparayum

//  interface Details{

//     name:string;
//     age:number;
//  }

//  let onbj: Details={
//     name:"Hello",age:8}

//  let  athpole   interface inu pakaram nammak type use cheyyanam

// type Details={
//     name:string;
//     age:number;
//     getname:()=>void;
// }

//  let onbj: Details={
//     name:"Hello",age:8,getname:()=>{
//         console.log("first")
//     }}

//   union operaqter  ennal    nammal  js il or operrater use cheyyiule   ath ts il varumbol |    ee  otta use cheyyollu
// namakk ippol age string um vanamengil kodukkam allangil number um kiodukkam

// type Details = {
//   name: string;
//   age?: number | string; //  athepole ingne ?  mark itt koduthal  nammal  aa object il age vilichillengilum kuzhappam ila
//   getname: () => void;
// };

// let onbj: Details = {
//   // venel age numer um kodukkm allangil string um kodukkam
//   name: "Hello",
//   age: "jhhjjhhj",
//   getname: () => {
//     console.log("first");
//   }
// };

// let mypor:(string| number)[]=["jhhjjh",9999]  // ingne ann  nammal  oru array il thanne pala type values kodukkam venel bollean ,striung angne




// aparametr in ts
// function Name({ name, age, getname }: Details) {
//  return name
// }

// Name({
//   name: "hhhh",
//   age: 5,
//   getname: () => {
//     console.log("first");
//   }
// });
// function kkame({
//   name,
//   age,
//   getname
// }: {
//   name: string;
//   age: number | string;
//   getname: () => void;
// }) {
//   console.log(name, age);
// }
// kkame({
//   name: "hello",
//   age: 4,
//   getname: () => {
//     console.log("jjjjjj");
//   }
// });



// ///    function il engne return  chayyam 


// interface Profile{
//     name:string;
//     age:number|string;
//     studyinh:boolean;
//     crnteducatuion:string;
// }

// interface potfolio{
// getpotfolio:()=>string
// }

// function adhhil( {name,age,studyinh,crnteducatuion}:Profile):potfolio{

//   function getpotfolio() :string{
    
//     let strr=`  hi my name is ${name}   i am  ${age} year old   ${studyinh?`i am pursuing my study in ${crnteducatuion}`:"i am not studying"}`
//     return strr
//   }
//   return {getpotfolio}
  
   
 
// }

// console.log(adhhil({name:"adhil",age:20,studyinh:true,crnteducatuion:"bvoc sdsa"}).getpotfolio())





//   custem types 
// type   user="adhil"|"sameer"| "Admin"  //  type sulla vbalue mathrame kodukan pattukaullu

// let userstring:user="adhil"

////Function overlkoading

// function Namu (num1:number,num2:number):number 
//  function Namu(num1:string,num2:string):string
// //    any il nallakk  enthum kodukkan pattum   but num1
// // +num2 orikkalum   array ort object add cheyyn bpattila ath kond nammak  enna type values ee add cheyyn pattu en kanikkan ann   function Namu (num1:number,num2:number):number  function Namu(num1:string,num2:string):string
// function Namu(num1:any,num2:any):any{
//     return num1+num2
    
// }
// console.log(Namu(5,6),
// Namu("hello","world"),
// // 
// Namu(5,"hello"),//  ith bpattiulla karanam nammal   function Namu (num1:string,num2:boolkeaqn):boolean    ith nammal koduthitytillla
// Namu(true,false))//  ith bpattiulla karanam nammal   function Namu (num1:booleaqn,num2:boolkeaqn):boolean    ith nammal koduthitytillla


//    generiuc  in ts
// type user={
//     usernamre:string;
//     useremail:string;
// }
// let user:user={usernamre:"abu",
//     useremail:"adhiulk@ghnmail.copm"
// }

// type admin={
//     adminname:string;
// }
// let admin:admin={
//     adminname:"adhil"
// }
// function login<T> (usertype:T):T{

//     return usertype

// }

// let userna=login<user>(user)
// console.log(
//   userna
// )

// let adminna=login <admin>(admin)
// console.log(adminna)


// merge so many types

// type user={
//     usernamre:string;
//     useremail:string;
// }


// type admin={
//     adminname:string;
// }
// type website= user &admin   //  ith pole  2 ooo athil kuduthalo type ine merge cheyyn pattyum & use cheyyanam
// type websitefull= user &admin &{
//     websiteurl?:string   //  ? use cheythal  venamengil  ee website url property vilich value koduthal mathi
// }   // ingne   ithil thanne vere  ithum ad cxgruuym
// let websitevisiters:websitefull={
//     usernamre:"adhhhk",useremail:"jhhjhjhjhj@maiukmm",adminname:"adhil",websiteurl:"www.gh"
// }
// console.log(websitevisiters)

// enums in ts


// enum Status{
//     COMPLETED=1,
//     PENDING=2,
//     REJECTED=0}

//     console.log(Status.PENDING)



// as const in ts


// let user="Adhil" as const   //  iungne koduthal namak  Adhil enna valiue matyhra me kodukkan poattu  vere value  onnum kodukkan pattila

// let age=  "adhiuklhabbeb"  as string  // engne kodutyhal nammak  string allatha  value onnum kodukjkanpattilla 
// console.log(user)


//



//   let pro={
//     name:"hnh",
//     age:20,
//     place:"kerala"
//   }




//   function Yame({name,age,place}:typeof pro) {  //  ith pole nbammak  oru  object   undel  athil ninn nbammaukk typeof use cheythal athinte interface kittum 
    

//     console.log(name,age,place)
//   }
//   Yame(pro)

///////////


//   let pro={
//     name:"hnh",
//     age:20,
//     place:"kerala"
//   }

//   let pro={
//     name:"hnh",
//     age:20,
//     place:"kerala"
//   } as const //  engne as const  oru objecxt il ittal aa object oinnbe mattan pattilla

//     function Yame(para: keyof typeof pro ) {  //  ith pole nbammak  oru  object   undel  athil ninn nbammaukk   keyoftypeof use cheythal   a a obj inte jey  kittum  
// // pro.name= "adhil" ;  aa obj as const use cheythond aa  obj editychgeyuyn pattulla

//   }

//   Yame("name")


///  utility types in ts

//  type  proobj={
//    readonly name:string;  // enghne readonly use cheythal aa property il value edit cheyyan pattilla  ippol name inun readonly bilichond  ath edit cheyyan pattilla
//     age:number;
//     place:string
//  } 
//   let pro={
//    name:"hnh",
//     age:20,
//     place:"kerala"
//   }

//ipoolk oru objecvt ful rfeadonly akkan ma engil  nammal 
 type  proobj={
    name:string;  
    age:number;
    place:string
 } 
//   let pro :Readonly <proobj>={  // enhgne cheyth;l  namakk  a  aobject orikkan mattan pattilla
//    name:"hnh",
//     age:20,
//     place:"kerala"
//   }
//   pro.age=30   engne edit cheytyn pattilla

//   partilal in ts

// let pro:Partial<proobj>={ //   pinne athekutt nammal  name?:string  ingnhe kodukkl;e venamengila a key vilichga mathi en ingne   athpole oru object ile keys venagm,engil vilkichal mathi engil 

//     name:"adhilhabbeb"
// }

// console.log(pro)


// Required in ts


// let pro:Required<proobj>={  // ith use cheytha  ell values um required annn
//     name:"hnh",
//     age:20,
//     place:"kerala"
// }


// pick in ts


// let pro:Pick<proobj,"name">={ //  enikk ippol name mathram mathi engil 
//     name:"hnh",
//     age:20,
// }

// let pro:Pick<proobj,"name"| "age"| "place">={ //  enikk ippol name ,place,age 3 num venamengil ingne ith pole nammak n nathokke properties vecnoi ingne select cheyym
//     name:"hnh",
//     age:20,place:"kerala"
// }


// omit in ts
  // nammak  avshiyam illatha property ozhich kakki ellathi nayum vilikkan   a  a pick pole    etrhra venamengilum kodukkm

//   let pro:Omit<proobj,"name">={  // enikk ivde name venda  

// age:20,
// place:"kerala"
//   }





///  unian il exclude 

type viewrs="admin"|"user"|"guest"
// nammak  ee  viewrs il ninn ethelim oru value  kalayanamm eniitt values valuies nmathram,  nammak mati engil 


// let user:Exclude<viewrs,"guest">="user" //  enikk guest value illa vakkin randum kittum