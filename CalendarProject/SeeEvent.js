//The following function is allowing the admin to see the event and the details associated with
//it after it has been created
function viewEvent()
{
    var eventArray=JSON.parse(window.localStorage.getItem('arrayofevents'));//parsing through local storage to get the selected event
    var event_name = document.getElementById('Events').value;//getting the event name
    var i = 0;
    let name_check = false;
    document.querySelector("#peopleRegistered").innerText = '';
    document.getElementById("avail").innerHTML = '';
    //getting the people/users who have expressed their availability for said event (See people.js)
    var arrayofnames = JSON.parse(window.localStorage.getItem('peopleArr'));
    var totalavailtimes = [];
    var countavailability = [];
    while(!name_check)
    {
  //checking if the selected event name is found in the event array
	if(event_name === eventArray[i].eventName)
	{
	    var details ="Event Details: " + eventArray[i].eventDetails;//obtaining event details from selected event
            name_check=true;
	    totalavailtimes = eventArray[i].eventTimeArray;//adding the available times from selected event to array
		//loop used to count how many people are available for selected event
	    for (let t = 0; t < totalavailtimes.length; t++)
	    {
		countavailability.push(0);
	    }
	    document.querySelector("#eName").innerText = "Event: " + event_name;//replacing the HTML value with the javascript value
	    if (details != null)//only enters when details is not empy and has information
	    {
		document.querySelector("#eDetails").innerText = details;//replacing the HTML value with the javascript value
	    }
	}
            i++;
    }
    var availArr = [];
    //for loop that goes through the whole array of users and checks if they are attending the event and displays
    //their availability if it was given
    for (let i = 0; i < arrayofnames.length; i++)
    {
	if (arrayofnames[i].eventName === event_name)//checking if the name/person is associated with the selected event
	{
	    if (document.querySelector("#peopleRegistered").innerText != '')
	    {
		document.querySelector("#peopleRegistered").innerText += ", " + arrayofnames[i].personName;//replacing the HTML value with the javascript value
	    }
	    else
	    {
		document.querySelector("#peopleRegistered").innerText = "Users Registered: " + arrayofnames[i].personName;//replacing the HTML value with the javascript value
	    }
	    availArr = arrayofnames[i].availabilityArr;//filling the available array with the names of people who are available for said event
	    for (let o = 0; o < totalavailtimes.length; o++)
	    {
		for (let p = 0; p < availArr.length; p++)
		{
		    if (availArr[p] === totalavailtimes[o])
		    {
			countavailability[o] += 1;
		    }
		}
	    }
	}
    }
    //create table of times with available users displayed
    html = "<table><tr><td>Times</td><td>Users Available</td></tr>";
    for (let a = 0; a < totalavailtimes.length; a++)
    {
      //showing the total amount of people available for a given time
	     html += "<tr><td>" + totalavailtimes[a] + "</td><td>" + countavailability[a] + "</td></tr>";
    }
    html += "</table>";
    document.getElementById("avail").innerHTML = html;
}

var seeEvent = document.getElementById('seeEvent');//defining the button that will activate the view event function
//when the seeEvent button is clicked, the viewEvent function is activated
seeEvent.addEventListener('click', viewEvent, false);
