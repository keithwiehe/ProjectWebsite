//people function for storing info from availability

function  People(eventName,personName,availabilityArr) {
    this.eventName = eventName;
    this.personName=personName;
    this.availabilityArr=availabilityArr;

}

function createPeople(){
    //gets the selected event name from the dropdown
    var eventName = document.getElementById('Events').options[document.getElementById('Events').selectedIndex].value;
    console.log(eventName);
    //gets the persons name from textbox
    var personName = document.getElementById('userid').value;
    //creates a People object
    let newPerson = new People(eventName,personName,availtimearray);


    peopleArr.push(newPerson);
    console.log(peopleArr);
    window.localStorage.setItem('peopleArr',JSON.stringify(peopleArr));
    console.log(JSON.parse(window.localStorage.getItem('peopleArr')));
    window.location.href="postsub.html";
}

//checks is people array is already instatiated
if(JSON.parse(window.localStorage.getItem('peopleArr'))!=null){
    var peopleArr=JSON.parse(window.localStorage.getItem('peopleArr'))
}
else{
    var peopleArr = [];
}

//upon clicking there is a person created and added to a local storage array
// var Save = document.getElementById('Save');
// if(Save!="null"){
// Save.addEventListener('click', createPeople, false);
// }
