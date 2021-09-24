/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

const gitDefinition = "Git is a version control system, that allows you to share and update code"

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = "GitHub is a hosting site for your code that lives on the web."

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
const init ={
    init : 'git init' //creates the starting git project file 
}


//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
const clone = {
    clone: 'git clone' //Pulls main git repository the url and makes a working copy of the files for use.
} 

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
const status = {
    status: "git status" //shows you what files you have in que for the buffer
}


//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
const add ={
    add: 'git add .' //adds all of the files in that folder to the git buffer
}


//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit ={
    commit: "git commit -m 'message'"  // lets you place the files into the git buffer
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
const push = {
    push: "git push -u origin main" //Puts the git buffer to the external linking repository
}



git init //creates the starting git project file 
git add . //adds all of the files in that folder to the git buffer
git status // shows you what files you have in que for the buffer 
git commit -m 'message' // lets you place the files into the git buffer
git branch - main //sets up the git tree/parent path
git remote // links to the url that us provided 
git push // does the buffer push to the external link
git clone //pulls the url and makes a working copy for use.