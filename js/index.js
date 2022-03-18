let inputArray = document.querySelectorAll(".boxs input");
let totalArea = document.querySelector(".sup");
let totalCost = document.querySelector(".multi");
let select = document.getElementById("types");
window.myFunction = function() {
    let countArea= 0;
    for (let i = 0; i < inputArray.length; i++) {
       let hasValue= parseInt(document.getElementById(`num${i+1}`).value);
         if (!!hasValue) {
            document.getElementById(`img${i+1}`).style.display = 'block';
            countArea += parseInt(hasValue);
          } else {
            document.getElementById(`img${i+1}`).style.display = 'none';
          };
    }
    totalArea.innerHTML = countArea;
    totalArea =countArea;
    select.onchange = function (){
        let selectValue = select.value;
         if(selectValue == 'low'){
             totalCost.innerHTML = (totalArea * 1450);
         }else if (selectValue == 'mid') {
             totalCost.innerHTML = (totalArea * 1600);
         }else if (selectValue == 'high') {
             totalCost.innerHTML = (totalArea * 1800);
         }else {
             totalCost.innerHTML = totalArea;
         }
     }
   
   };

  






































// let nums = Array.from(document.querySelectorAll(".calc .number input")); 
// let sup = document.querySelector(".sup")
// let boxes = Array.from(document.querySelectorAll(".calc .boxes input"));
// var select = document.getElementById("lang");
// var multiDiv = document.querySelector(".calc .multi");
// var selectValue = "low";

// nums.forEach((num) => {
//     num.addEventListener("keyup", ()=> {
//         let makeNums = nums.map((num)=>{
//             return parseInt(num.value);
//         }).filter((num)=>{
//             return !isNaN(num);
//         })
//         if (makeNums.length == 0){
//             sup.innerHTML = "0"
//         }
//         let add = makeNums.reduce((acc,curr)=> {
//                 return acc + curr ;
//         });
//         if(isNaN(add)){
//             sup.innerHTML = "Please Enter A Number";
//         }else {
//             sup.innerHTML = add;
//         }
//         select.onchange = function (){
//             selectValue = select.value;
//             if(selectValue == 'low'){
//                 multiDiv.innerHTML = (add * 1450).toLocaleString("en-US");
//             }else if (selectValue == 'mid') {
//                 multiDiv.innerHTML = (add * 1600).toLocaleString("en-US");
//             }else if (selectValue == 'high') {
//                 multiDiv.innerHTML = (add * 1800).toLocaleString("en-US");
//             }else {
//                 multiDiv.innerHTML = add.toLocaleString("en-US");
//             }
//         }
//     })
// })


// const btn1 = document.getElementById("btn1");
// const menu = document.querySelector(".menu");
// const menuLi = document.querySelectorAll(".menu li")

// btn1.addEventListener("click", () => {
//     menu.classList.toggle("active")
//     window.scrollTo(0,0)
// })
// menuLi.forEach((li)=> {
//     li.addEventListener("click", ()=> {
//         menu.classList.remove("active")
//     })
// })





