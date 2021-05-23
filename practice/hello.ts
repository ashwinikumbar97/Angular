//----------class

class Greet{
    greet():void{
        console.log("hello")
    }

    hey():void{
        console.log("heyy")
        console.log(typeof (msg));
    }
}

//--------------------function
function test_param(n1:number,s1:string) { 
   console.log(n1) 
   console.log(s1) 
} 
test_param(123,"this is a string")

function function_name():number { 
   return num; 
}

var global_num = 12          //global variable 
class Numbers { 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():void { 
      var local_num = 14;    //local variable 
   } 
} 

var num:number=-2
var result= num>0 ? "pos" :"neg"
console.log(result)

//var obj = new Greet();
//obj.greet();
//obj.hey();

var str = '1' 
var str2:number = <number> <any> str   //str is now of type number 
console.log(typeof(str2))
console.log(str2)

var msg:string="hello"
var num:number=123
//console.log(msg+num+123)

//----------------switch 
var grade:string = "A"; 
switch(grade) { 
   case "A": { 
      console.log("Excellent"); 
      break; 
   } 

   default: { 
      console.log("Invalid choice"); 
      break;              
   } 
}

//-----------------for loop
var j;
//var n = ["a","b","c"]
var n=[1,3,5]
for (j in n) {
   console.log(n[j]);
}

//---------optional parameter

function optional(param:number,param2?:number){
      console.log("optional ")
      if(param2!=undefined){
      console.log("optional not defined")
   }
}

optional(2)

//----------Rest Parameters

function restParam(...num:number[]){
   var i;
   for(i=0;i<num.length;i++)
   console.log(num[i])
}

restParam(2,5,7,8) // how much aragument waana to pass can pass

//--------------function default value

function defaultfun(par:number=0.6,par2:number){
   if(par!=undefined){
      console.log("par undefined")
   }
}

defaultfun(1,3)
//-------------lamda function

var foo=(x:number)=>10+num;


var num3 = 177.234 
console.log("num3.toFixed() is "+num3.toFixed()) 
console.log("num3.toFixed(2) is "+num3.toFixed(2)) 

console.log( num.toLocaleString());

console.log(num.toPrecision()); 

//------ number to string
console.log(num.toString()); 