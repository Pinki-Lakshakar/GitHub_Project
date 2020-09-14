
/*e=============== this search by text=======*/
let search= document.querySelector("#search");
//console.log(search);1
search.addEventListener("keyup",(e) => {
    //console.log(e);2
    //console.log(e.target.value);4
    let searchText =e.target.Value;
SearchGithubProfiles(searchText);
});
/*=======================search by voice==========* */

    let SearchByvoice =document.querySelector('#speechIcon');
SearchByvoice.addEventListener('click',(e) => {
window.SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition= new SpeechRecognition();
recognition.interimResults=true;
  recognition.addEventListener('result',(e) =>
  {
      let transcript =[...e.results]
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");
      //console.log(transcript);3

      search.Value=transcript;
      let searchText =transcript;
      SearchGithubProfiles(searchText);
      
});
recognition.start();
});
//============================== git hub Api

function SearchGithubProfiles(searchText) {
    console.log(searchText);
}

