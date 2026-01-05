What is a agent?
basically agent is a helper kind for you, which helps ypu in doing certain kind of works or tasks according to the requirements.

This project presents a simple semi-autonomous web agent which opens a real website, which is quotes.toScrape and first observe the page state, after observing agent will make decisions at runtime and show the result of it on logs.run, and perform actions based on what it see.

why i choose only this website?
Because it provides both login and unautheticated naviagation(means you can go to the next page of the content of this webpage and if not login redirect to the login page ,, this what i made the task to do to the agent)

Basically what is the behaviour of the agent..?
-> it opens a website, 
-> observe what is there on the website or page content ,
-> makes the decision based on the info and observe the decision on the runtime,
-> if it see there is login page to view next source of the oage it will redirect to login page..(performs action)
-> and save the logs observation and desicions in logs.

whats the decision logic for this agent?
if a agent see a login page after visiting any webpage , it wil redirect to the login page,,this decision is taken by the agent
if page navigation is available simply move to the page navigation through next,
if no action required simply stop the execution close the webpage.

Logging Workflow.
basically it is a type of reasoning perform by a agent..ex: if not this then this,,like try catch we can say
What was observed on the page
what to take the the decision bsed on observation
what action should take and updates in logs.

#Architecture Workflow.
->browser.js – Opens the browser and manage it
->observer.js – reads page content and notice whats happening
->decision.js – takes decision to the next action based on observations
->actions.js – performs browser interactions bases on contents
->logger.js – records observations, decisions, and actions
->index.js – Defines the agent workflow

