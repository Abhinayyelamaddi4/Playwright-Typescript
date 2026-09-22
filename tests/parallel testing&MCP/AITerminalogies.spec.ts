/*
AI Terminologies -LLM 
LLM - large language model:system trained with huge amount of  data in internet like -  gemini,claude,deepseek,chatgpt 
llm can -->answer the questions , generate the code , prepare the documents & email , built image or perform corrections on uploads.F
LLM cannot : launch the browser , execute the test scripts, cannot interact with web elements & databases, send api request ,
llm can elobrate the prompt according to information but cannot perform action on requirement 
It configured with global languages for user friendly 

AGENT  : 
"agent is a system that takes the instructions from LLM and perform actions using MCP 
agent along with LLM perform action like generate the code ,execute the code ,interact with browser ,database & elements with the help of mcp
"agent is a mediator betwn LLM and MCP"
// user----> prompt--->llm--->agent--->mcp---->playwirght 

MCP -model context protocol :
mcp is a framework that connects  LLM to real worldtools , apis,browsers
mcp are are avaialble in every user tool , api's(send or receive) , browsers(open browser & fill),database(run queries) 
mcp provides browser automation capabilities using playwright 
this server enables LLM interact with web pages through structural accebility,snapshots, bypassing the need for screenshots

Github Copilot :
github copilot improves the quality and maintanabilty of code --> generate code , fix errors in code / synax
add the gitub extension in vscode(github : AI pair programmer)
ask is to ask directly to github ,agent is taking instructions from LLM using mcp

vibe coding :
vibe coding not writing the code in workbench / program in test file to folder , 
adding the prompt with instructions in github copilot and select the agent to execute the test --> it will generate the code  

------------------------------------------------------------------------------------------
//add the text format in file add to folder in explorer and drag it to github copilot :
example --> gitcopilot --> agent -->resultcode 
navigate to url https://www.amazon.co.za/
select 'T-shirts'
verify the 'shaded short sleeve T-shirts' in the list
-------------------------------------------------------------------------
POM example --> gitcopilot --> agent -->resultcode
create a pom model for the below steps :---
navigate to url https://www.amazon.co.za/
select 'T-shirts'
verify the 'shaded short sleeve T-shirts' in the list
-----------------------------------------------------------------------------
generate the api test in ---> github copilot ------->claude--->resultcode
Generate a Playwright API test for the following scenario:
Define the API endpoint URL: https://fakestoreapi.com
Send a GET request to the endpoint.
Verify the response status is 200
Validate the response contains these keys: id, title, price, category, description.
Optionally validate the data types using a JSON Schema (Ajv)
Log the product title and price to the console.

*/

