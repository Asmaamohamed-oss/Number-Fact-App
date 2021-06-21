

/********************************************************************************************************/
/********************************************************************************************************/

// set the variables

let input = document.getElementById('number-input');
let fact = document.getElementById('fact');
let factText = document.getElementById('fact-text');

// input.addEventListener('input', getFactAjax)
input.addEventListener('input', getFactFetch)


/********************************* Using Ajax*******************************************************/
// function getFactAjax(){
//     let number = input.value;
    
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET',`http://numbersapi.com/${number} `,true);

//     xhr.onload = function(){
//         if(this.status == 200 && number != ""){
//             let data =  this.responseText;
//             console.log(data)
//             fact.style.display = "block";
//             factText.innerHTML = data;
//         }else{
//             fact.style.display = "none";
//         }
//     } 
//     xhr.send();
// }

/****************************** Using Fetch********************************************************/
//  function getFactFetch(){
//      let number = input.value;
     
//      fetch('http://numbersapi.com/'+number)
//      .then( res => res.text())
//      .then((data)=>{
//         if(number != ""){
//             console.log(data)
//             fact.style.display = "block";
//             factText.innerHTML = data;
//         } else{
//             fact.style.display = "none";
//         }
//     })    
//     .catch(err=> console.log(err))
//  }


/************************* Using Async // Await*****************************************/

async function getFactFetch(){

    try{
        let number = input.value;
        let res = await fetch('https://cors-anywhere.herokuapp.com/http://numbersapi.com/'+number,{
            method: 'GET',
            header:{
            "Accept":'application/json , text/plain',
            "x-requested-with" : "text/plain"
            }
        });
        let data = await res.text();
        if(number != ""){
        console.log(data)

        fact.style.display = "block";
        factText.innerHTML = data;
        }
        else{
            fact.style.display = "none";
        }
    } 
    catch(err){
        alert("Can you try again!!!");
        console.log(err) 
     }
  
}