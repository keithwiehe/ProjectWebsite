//loops through all the events in the event array and populates the dropdown menu with the event names
function populateDropdown(object){
    console.log(document.getElementById("Events"));
    //key is the iterator so iterates over the arrayofevents (array of events passed in as an object)
    for(let key in object){
        //creates HTML dropdown
        let dropDownItem=document.createElement("OPTION");
        console.log(dropDownItem.innerHTML=object[key].eventName);
        //puts the event name as text in the dropdown
        dropDownItem.innerHTML=object[key].eventName;
        //uses the id for the dropdown from the HTML file and adds the info to the dropdown
        document.getElementById("Events").add(dropDownItem);
    }
}

//calls population dropdown with function that gets the arrayofevents
populateDropdown(JSON.parse(window.localStorage.getItem('arrayofevents')));