# eecs448_project1
This branch has the most up to date code for our EECS 448 calendar project

The authors of this code are: Amy, Jacob, Katherine, Keith, Linda, and Megan

This project addressed the issue of having a calendar app that does the following:

Requirements There will be two modes in our program: creating an event (done by 1 person) and adding available times (done by multiple people).

Event Admin Mode In this mode, a user can create an event and check on the status of an event. To create an event, the user will pick a single date and a series of times on that date that he/she is available The event will have a name The date must be a real one (e.g. no February 30th) The times must have an option for being displayed in 12 hour mode or 24 hour mode; the timezone is Central Daylight Time (CDT). A single time slot should be 20 minutes An event can span multiple time slots (e.g. a two-hour event would occupy six time slots) Example: I want to schedule a party for Sunday, February 2nd, and name the event “Alex's SuperBowl Party”. I also want to specify that I’m available at 4pm, 4:20pm, 4:40pm, 5:00pm, 5:20pm, 5:40pm (essentially I’m free from 4pm to 6pm). The time slots do not have to be contiguous but must fall within the 24-hours of a given date The following time slots should never be available for meetings: 12am - 5am, 12pm-1pm. In other words, no meetings between these hours. The following days should not be available for scheduling meetings: December 25, January 1, and July 4. The creator of the event should be listed as an attendee of the event After a user creates an event they will save it and then future users will be able to find this event and add their availability. In the user mode, a user will indicate whether or not they are available. In admin mode, the creator of the event should be able to quickly learn how many attendees are available for any given time slot.

Adding Availability Mode In this mode, users will be able to see a list of events that have been created (from the other mode). They may select an event then do the following: For each time slot, the user will indicate whether or not they are available Some aspects that are up to you to decide on: The details must be retained between runnings of the program (You dont need to use a database in this project, and luckily we all learned file I/O!) Menus to interact with the program How to deal with the users across multiple sessions

Please contact for any questions or comments

Thank you
