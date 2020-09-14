/*e=============== this search by text=======*/


/*let search=document.querySelector("#search");

//console.log(search)
search.addEventListener("keyup", (e) =>{
    console.log(e.target.value);// isko phle call krna hai uske bad me us bhi likh  hai usko .  isisliye mene isko delight kar diya 
/*let searchText =e.target.Value;
SearchGithubProfiles(searchText);
});/*
/*=======================search by voice==========* */
/*let SearchByvoice =document.querySelector('#speechIcon');
SearchByvoice.addEventListener('click',(e) => {
window.SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition= new SpeechRecognition();
recognition.interimResults=true;
  recognition.addEventListener('result',(e)=>
  {
      let transcript =[...e.results]
      .map((results) => results[0])
      .map((results) => results.transcript)
      .join("");

      /*search.Value=transcript;
      let searchText =transcript;
      SearchGithubProfiles(searchText);*/
       /*conaole.log(transcript);

  });*/
 /* recognition.start();
});

//============================== git hub Api

/*function SearchGithubProfiles(searchText) {
    console.log(searchText);
}

*/
