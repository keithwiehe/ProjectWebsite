var timearray = [];

window.addEventListener("load", setMilitary());

function Event (name, date, details, arrayOfTimes)
{
    this.eventName = name;
    this.eventDate = date;
    this.eventDetails = details;
    this.eventTimeArray = arrayOfTimes;
}
// got below code from
// puts a leading zero in front of single digit numbers for start and ending time
// https://stackoverflow.com/questions/20684737/force-leading-zero-in-number-input

function checkMinute(time)
{
    if (time / 20 < 1)
    {
	time = '00';
    }
    else if (time / 20 < 2)
    {
	time = '20';
    }
    else if (time / 20 < 3)
    {
	time = '40';
    }
    return (time);
}

function createEvent()
{
    var eTimeArray = [];
        for(var i=0;i<timearray.length;i++)
        {
        var e = document.getElementById(('avail'+i));
        if(e!=null)
        {
        var result = e.options[e.selectedIndex].text;
        if (result === 'Yes')
        {
        eTimeArray.push(timearray[i]);
        }
        console.log(eTimeArray);
      }
    }

    var eName = document.getElementById('Name input').value;
    var eDate = document.getElementById('today').value;
    var eDetails = document.getElementById('Details').value;

    if (eName === '' || eDate === '')
    {
	alert ("Error: Empty Field(s).");
    }
    else if (eTimeArray.length === 0)
    {
	alert ("Error: No Available Time Slot(s).");
    }
    else if (eDate.includes('-12-25') || eDate.includes('-01-01') || eDate.includes('-07-04'))
    {
	alert ("Error: Invalid date selected");
    }
    else
    {
	let newEvent = new Event(eName, eDate, eDetails, eTimeArray)
	eventArray.push(newEvent);
	alert("Event made.\n" + eName + '\n' + eDate + '\n' + eDetails);
	console.log(eventArray);
	window.localStorage.setItem('arrayofevents',JSON.stringify(eventArray));
	console.log(JSON.parse(window.localStorage.getItem('arrayofevents')));
    }
    window.location.href="postsub.html";
}

function setAMPM()
{
var twelvehrarray=[];
  var starthr=5;
  var startmin=00;
  var endhr=23;
  var endmin=59;

var totaltime=starthr*60+startmin;
var endtime=endhr*60+endmin;

  for(totaltime;totaltime<endtime;totaltime+=20)
  {
    hr=Math.floor(totaltime/60);
    newmin=totaltime%60;

    if(newmin<10)
    {
      startmin='0'+newmin;
    }
    if(newmin>10)
    {
      startmin=newmin;
    }
    if(hr != 12)
    {
        if(hr>12)
        {
          hr=hr-12;
	  twelvehrarray.push(hr + ":" + startmin + " PM");
        }
	else
	{
            twelvehrarray.push(hr + ":" + startmin + " AM");
	}
    }
  }
    if(endhr>12)
    {
      endhr=endhr-12;
    }
    twelvehrarray.push(endhr + ":" + endmin + " PM");

  var perrow = 3, // 3 items per row
      html = "<table><tr>";

  for (var i=0; i<twelvehrarray.length-1; i++) {
        if (twelvehrarray[i] === "11:40 AM")
        {
	  twelvehrarray[i]=twelvehrarray[i] + "-" + "12:00 PM"
        }
	else
	{
	  twelvehrarray[i]=twelvehrarray[i] + "-" + twelvehrarray[i+1];
          if(twelvehrarray[i+1]=="undefined")
          {
            break;
          }
	}
        html += "<td>" + twelvehrarray[i] + "<br>" + "<select id='"+('avail'+i)+"'>" + "<option value='None'>-- Select --</option>" + "<option value ='No'>No</option>" + "<option value ='Yes'>Yes</option>" + "</td>";
        // Break into next row
        var next = i+1;
        if (next%perrow==0 && next!=twelvehrarray.length) {
          html += "</tr><tr>";
        }
      }
      html += "</tr></table>";

  document.getElementById("container").innerHTML=html;
}

function setMilitary()
{
timearray = [];
    var starthr=5;
  var startmin=00;
  var endhr=23;
  var endmin=59;

  var totaltime=starthr*60+startmin;
  var endtime=endhr*60+endmin;

  for(totaltime;totaltime<endtime;totaltime+=20)
  {
    hr=Math.floor(totaltime/60);
    newmin=totaltime%60;

    if(newmin<10)
    {
      startmin='0'+newmin;
    }
    if(newmin>10)
    {
      startmin=newmin;
    }
    if (hr != 12)
    {
	timearray.push(hr + ":" + startmin);
    }
  }
  if (hr != 12)
  {
    timearray.push(endhr + ":" + endmin);
  }

var perrow = 3, // 3 items per row
        html = "<table><tr>";
    for (var i=0; i<timearray.length-1; i++) {
      console.log(timearray[i]);
	  if (timearray[i] === "11:40")
	  {
	    timearray[i] = timearray[i] + "-12:00"
	  }
	  else
	  {
	    timearray[i] = timearray[i] + "-" + timearray[i+1];
	  }
          html += "<td>" + timearray[i] + "<br>" + "<select id='"+('avail'+i)+"'>" + "<option value='None'>-- Select --</option>" + "<option value ='ID001'>No</option>" + "<option value ='ID002'>Yes</option>" + "</td>";
          var next = i+1;
          if (next%perrow==0 && next!=timearray.length) {
            html += "</tr><tr>";
          }
        }
    html += "</tr></table>";
    document.getElementById("container").innerHTML=html;
}

if(JSON.parse(window.localStorage.getItem('arrayofevents'))!=null){
    var eventArray=JSON.parse(window.localStorage.getItem('arrayofevents'))
}
else{
    var eventArray = [];
}

var createeventbutton = document.getElementById('createeventbutton');
createeventbutton.addEventListener('click', createEvent, false);

var ampm = document.getElementById('ampm');
ampm.addEventListener('click', setAMPM, false);

var military = document.getElementById('military');
military.addEventListener('click', setMilitary, false);
