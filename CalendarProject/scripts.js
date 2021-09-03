
    var timearray = [];
    let availtimearray=[];
    let nochangetimes=[];
    let changetimes=[];
    let times=[];
    // The following function generates the time array when the script is run
window.addEventListener("load", function(){
    var eventName = document.getElementById('Events').options[document.getElementById('Events').selectedIndex].value;//Obtaining the event name
    object=JSON.parse(window.localStorage.getItem('arrayofevents')); //object storing the events from the local storage array
    //gets event information if the selection the first it it is made and if the selection is not changed by the user
    for(let key in object){
        if(object[key].eventName==eventName){ //only enters when the desired event name is matched with the array values
            selectedeventtimes=object[key].eventTimeArray; //obtaining event times from the selected event
            document.getElementById("container").innerHTML='';
            for(var i=0;i<selectedeventtimes.length;i++)
            {
              nochangetimes[i]=selectedeventtimes[i];//storing selected events in array
            }
            console.log(selectedeventtimes);
        }
    }
// Once the times are pulled from local storage they are stored in an array. The array is then drawn in html with the following code.
// The source below helped us navigate combining the javascript and html to make the array appear.
//https://code-boxx.com/create-table-from-array-javascript/

  var perrow = 3, // 3 items per row
      html = "<table><tr>"; //creating the HTML table
//This loops creates the HTML table with the selected times for the given event
  for (var i=0; i<selectedeventtimes.length; i++) {
        console.log(selectedeventtimes[i]);

        if (selectedeventtimes[i].includes("11:40")) //fixes an error where after 11:40 cell was populating immproperly
	  {
      //Adding the times to the HTML table and formating it with the selection option
	    html += "<td>11:40-12:00<br>" + "<select id='"+('avail'+i)+"'>" + "<option value='None'>-- Select --</option>" + "<option value ='ID001'>No</option>" + "<option value ='ID002'>Yes</option>" + "</td>";
	  }
	  else
	  {
            //Adding the times to the HTML table and formating it with the selection option
            html += "<td>" + selectedeventtimes[i] + "<br>" + "<select id='"+('avail'+i)+"'>" + "<option value='None'>-- Select --</option>" + "<option value ='ID001'>No</option>" + "<option value ='ID002'>Yes</option>" + "</td>";
	  }
	var next = i+1; //next is used to determine when a new row is needed
        // Break into next row
        var next = i+1;
        if (next%perrow==0 && next!=selectedeventtimes.length) //checking if next is divisible by 3 and the array is not
        {
          html += "</tr><tr>"; //creating a new row in the table
        }
      }
      html += "</tr></table>";//completing the table
      document.getElementById("container").innerHTML=html;
      timearray=nochangetimes;//defining timearray



    //gets the selection by event if a different event is chosen
    document.getElementById('Events').addEventListener("change",function(){
      availtimearray.length=0;
        eventName = document.getElementById('Events').options[document.getElementById('Events').selectedIndex].value;//getting the event name that was selected
        for(let key in object){
            if(object[key].eventName==eventName){//only enters when the desired event name is matched with the array values
                times=object[key].eventTimeArray;//getting times for the new event that was selected
                for(var i=0;i<times.length;i++)
                {
                  changetimes[i]=times[i];//fills the changetime array with the new event times
                }
            }
        }

    timearray.length=0;


  var perrow = 3, // 3 items per row
      html = "<table><tr>";//Creates HTML table

  //Creates an html table similar to above but it does it for options that are not default.
  //A new table is created whenever the event option is changed.
  for (var i=0; i<times.length; i++) {
	if (times[i].includes("11:40"))
	{
    //Adding the times to the HTML table and formating it with the selection option
	  html += "<td>11:40-12:00<br>" + "<select id='"+('avail'+i)+"'>" + "<option value='None'>-- Select --</option>" + "<option value ='ID001'>No</option>" + "<option value ='ID002'>Yes</option>" + "</td>";
	}
	else
	{       //Adding the times to the HTML table and formating it with the selection option
          html += "<td>" + times[i] + "<br>" + "<select id='"+('avail'+i)+"'>" + "<option value='None'>-- Select --</option>" + "<option value ='ID001'>No</option>" + "<option value ='ID002'>Yes</option>" + "</td>";
	}
        var next = i+1; //next is used to determine when a new row is needed
        // Break into next row
        var next = i+1;
        if (next%perrow==0 && next!=times.length) {//checking if next is divisible by 3 and next is not greater than array length
          html += "</tr><tr>";//creating a new row
        }
      }
      html += "</tr></table>";//completing table
      document.getElementById("container").innerHTML=html;
      for(var i=0;i<times.length;i++)
      {
        timearray[i]=changetimes[i];//updating the time array with the new time values
      }
    });
        })

// The following function is run when the user clicks the button to display
// the availability times in 12-hour time format
// This function is iniated with an HMTL button called 12hr
function twelvehr(){
  var perrow = 3, // 3 items per row for the HTML table
  html = "<tr><table>"; //creating HTML table
  console.log(timearray);
  
    //
 // The following for-loop takes the time values from a specified event from the local storage and converts the times f om
 // military time to the 12-hour format.
 // The time values are displayed in 20 minutes ranges: first time - second time
 //
  for (var i=0; i<timearray.length; i++) {
    let oldStr1 = '';
    let oldStr2 = '';
    let newStr1 = '';
    let newStr2 = '';
    if (timearray[i].includes("11:40"))
    { //Adding the times to the HTML table and formating it with the selection option
	html += "<td>11:40 AM-12:00 PM<br>" + "<select id='"+('avail'+i)+"'>" + "<option value='None'>-- Select --</option>" + "<option value ='ID001'>No</option>" + "<option value ='ID002'>Yes</option>" + "</td>";

        var next = i+1; //next is used to determine when a new row is needed
        // Break into next row
        var next = i+1;
        if (next%perrow==0 && next!=timearray.length) { //checking if next is divisible by 3 and next is not greater than array length
          html += "</tr><tr>"; //creating new row
        }
    }
    else if (timearray[i].length > 10)
    {
      console.log(timearray);
        var replacement = timearray[i]; //variable to store the time at index i in the time array
        if (replacement.charAt(0) === '2') //condition that addresses the first military time in the time range that begins with 2, so 20:00-23:59
        {
            oldStr1 = replacement.charAt(0) + replacement.charAt(1);
            newStr1 = oldStr1 % 12;
		}
        else if (replacement.charAt(0) === '1')//conditions that addresses the first military time in the time range that begins with 1, so 12:00-19:59
        {
      //Address the times 13:00-19:59
	    if (replacement.charAt(1) === '3' || replacement.charAt(1) === '4' || replacement.charAt(1) === '5' || replacement.charAt(1) === '6' || replacement.charAt(1) === '7'|| replacement.charAt(1) === '8' || replacement.charAt(1) === '9')
	    {
		oldStr1 = replacement.charAt(0) + replacement.charAt(1);
                newStr1 = oldStr1 % 12;
	    }
	     }
        if (replacement.charAt(6) === '2')//condition that addresses the second military time in the time range that begins with a 2, so 20:00-23:59
        {
            oldStr2 = replacement.charAt(6) + replacement.charAt(7);
            newStr2 = oldStr2 % 12;
		}
        else if (replacement.charAt(6) === '1')//conditions that addresses the second military time in the time range that begins with 1, so 12:00-19:59
        {//Address the times 13:00-19:59
	         if (replacement.charAt(7) === '3' || replacement.charAt(7) === '4' || replacement.charAt(7) === '5' || replacement.charAt(7) === '6' || replacement.charAt(7) === '7'|| replacement.charAt(7) === '8' || replacement.charAt(7) === '9')
	          {
		            oldStr2 = replacement.charAt(6) + replacement.charAt(7);
                newStr2 = oldStr2 % 12;
	             }
	}
        if (newStr1 != '' )// checks to make sure the first new string time value is not empty
        {
            replacement = replacement.replace(oldStr1, newStr1); //replacing the first old string time value with the first new string time value
	    replacement = replacement.replace("-", " PM-");
        }
	else
	{
	    replacement = replacement.replace("-", " AM-"); //for 12 hour format
	}
        if (newStr2 != '')
        {
            replacement = replacement.replace(oldStr2, newStr2); //replacing the second old string time value with the second new string time value
	           replacement += " PM"; //for 12 hour format
        }
	else
	{
	    replacement += " AM"; //for 12 hour format
	} //displaying the updated times on the web page via the replacement variable and formating with the selection option
        console.log(timearray);
        html += "<td>" + replacement + "<br>" + "<select id='"+('avail'+i)+"'>" + "<option value='None'>-- Select --</option>" + "<option value ='ID001'>No</option>" + "<option value ='ID002'>Yes</option>" + "</td>";
        var next = i+1;//next is used to check when a new row needs to be created
        var next = i+1;
        if (next%perrow==0 && next!=timearray.length) {//Only enters when next is divisible by 3 and next is not greater than the array length
          html += "</tr><tr>";//adding a row to the table
        }
    }
    else
    {
	var replacement = timearray[i];
	replacement = replacement.replace("-", " AM-");
	replacement += " AM"
        // twelvehrarray[i]=twelvehrarray[i] + "-" + twelvehrarray[i+1];
        html += "<td>" + replacement + "<br>" + "<select id='"+('avail'+i)+"'>" + "<option value='None'>-- Select --</option>" + "<option value ='ID001'>No</option>" + "<option value ='ID002'>Yes</option>" + "</td>";
        console.log(timearray[i]);
        var next = i+1;//next is used to check when a new row needs to be created
        var next = i+1;
        if (next%perrow==0 && next!=timearray.length) {//only enters when next is divisible by 3 and next is not greater than the array length
          html += "</tr><tr>";//adding a row to the table
        }
    }
  }
  html += "</tr></table>";// completing table

  document.getElementById("container").innerHTML=html;//taking the javascript code and putting it into container HTML element
}

//This function is initiated with the 24 hour button on the user side. This function reiterates through the array
//that is created on the admin side. It recreates the array with the corresponding times.
//This function is iniated with an HMTL button called 24hr
  function twenty4hr () {
    var perrow = 3, // 3 items per row
        html = "<table><tr>";//creating the HTML table
    //
    // The following for-loop takes the time values from a specified event from the local storage and displays them in the
    // military time format.
    // The time values are displayed in 20 minutes ranges: first time - second time
    //
    for (var i=0; i<timearray.length; i++) {
      console.log(timearray[i]);
	  if (timearray[i].includes("11:40"))
	  { //Adding the times to the HTML table and formating it with the selection option
	    html += "<td>11:40-12:00<br>" + "<select id='"+('avail'+i)+"'>" + "<option value='None'>-- Select --</option>" + "<option value ='ID001'>No</option>" + "<option value ='ID002'>Yes</option>" + "</td>";
	  }
	  else
	  { //Adding the times to the HTML table and formating it with the selection option
        html += "<td>" + timearray[i] + "<br>" + "<select id='"+('avail'+i)+"'>" + "<option value='None'>-- Select --</option>" + "<option value ='ID001'>No</option>" + "<option value ='ID002'>Yes</option>" + "</td>";
	  }
    var next = i+1;
    if (next%perrow==0 && next!=timearray.length) { //Only enters when next is divisible by 3 and next is not greater than the array length
      html += "</tr><tr>"; //adding a new row to the table
      }
    }
    html += "</tr></table>"; // completing table
    document.getElementById("container").innerHTML=html; //taking the javascript code and putting it into container HTML element
  }

// The function GetSelectedText() allows the program to capture the dropdown selected values from each event.
// The following source helped us identify how to capture the user's selection for each dropdown
// https://mkyong.com/javascript/javascript-get-selected-value-from-dropdown-list/
    function GetSelectedText(){
        for(var i=0;i<timearray.length;i++) //looping through the time array
        {
            var e = document.getElementById(('avail'+i)); //gets the availability answer at a certain index in the time array
            if(e!=null) //only enters when variable e is not empty/null
            {
                var result = e.options[e.selectedIndex].text; //getting the availability answer at the specified index in the array
                // document.getElementById("result").innerHTML = result;
                // console.log(document.getElementById("result"));
                if (result === 'Yes')
                {
                    availtimearray.push(timearray[i]);//storing the answers in the available time array
                }
            // var selectobject=document.getElementById("avail")
            // for (var i=0; i<selectobject.length; i++){
            // alert(selectobject.options[i].text)
            console.log(availtimearray);
            }
        }
    }

    var t4hrButton = document.getElementById('24hrButton');//defining the button that will activate the 24hr function
    t4hrButton.addEventListener('click', twenty4hr, false);//when the 24hr button is clicked, run the 24 hour function

    var thrButton = document.getElementById('12hrButton');//defining the button that will activate the 12hr function
    thrButton.addEventListener('click', twelvehr, false);//when the 12hr button is clicked, run the 12 hour function

    // var EventSubmit = document.getElementById('EventSubmit');
    // EventSubmit.addEventListener('click',FillTable, false)
