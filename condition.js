let english = 80;
let maths = 70;
let sci = 90;

let total = english+maths+sci;
let avg = total/3;
console.log("total marks",total);

console.log("avg:",avg);

if(avg >=35){
      console.log("Successfully pass the exam");
      if(avg>=90){
        console.log("first class with dist");
      }else if(avg>=80){
        console.log("first class");
      }else if (avg>=60){
        console.log("second class");
      }else{
        console.log("you just pass the exam...")
      }
        
} else {
    console.log("fail");
}