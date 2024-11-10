
//votes by incrementing vote in candidates.json's vote value
function vote(i) {

// Update the variable in the JSON
json.candidates[i].vote +=1;

// Write the updated JSON back to the file
fs.writeFileSync('candidates.json', JSON.stringify(json, null, 2), 'utf8');
}
//prints by usign printHelper =prints=>name,Cv
function print(){
    console.log("Welcome to Simple Voting System\n")
    printted=printHelper(0)
    console.log(printted)
}

//prints by usign printHelperAll
function printAll(){
    //printed retrives from printHelperAll
    printed=printHelperAll(0)
    console.log(printed)
}

function printHelper(num){
    if(json.candidates[num]!=null){
        if(json.candidates[num+1]!=null){
            return num+": "+json.candidates[num].name+":"+json.candidates[num].Cv+"\n"+printHelper(num+1)
        }
        else if(json.candidates[num+1]==null){
            return num+": "+json.candidates[num].name+ ":"+json.candidates[num].Cv+"\n"
        }
    }
    else{
        return "no candidate found";
    }
}


//an Helper that list all candidates
function printHelperAll(num){
    //candidate exist
    if(json.candidates[num]!=null){
        //if next candidate exist use recursion
        if(json.candidates[num+1]!=null){
            return num+": "+json.candidates[num].name+": "+
            json.candidates[num].Cv+"==>"+json.candidates[num].vote+
            " percantage of vote:%"+(json.candidates[num].vote/allVoteCounter(0)*100)+"\n"
            +printHelperAll(num+1)
        }
        //if next not exist write just the current
        else if(json.candidates[num+1]==null){
            return num+": "+json.candidates[num].name+": "+
            json.candidates[num].Cv+"==>"+json.candidates[num].vote+
            " percantage of vote:%"+(json.candidates[num].vote/allVoteCounter(0)*100)+"\n"
        }
    }
    //candidate not exist
    else{
        return "no candidate found";
    }
}

//counts all votes 
function allVoteCounter(num){
    if(json.candidates[num]!=null){
        if(json.candidates[num+1]!=null){
            return json.candidates[num].vote+allVoteCounter(num+1)
        }
        else if(json.candidates[num+1]==null){
            return json.candidates[num].vote
        }
    }
    else{
        return "no candidate found";
    }
}



function getVote(){
rl.question("which Candidate You Are Chosing ? ", (picked) => {
    if(json.candidates[picked]!=null){ 
        vote(picked)
        printAll() 
        rl.close();
    }
    else{
        console.log("\n Please Enter One Of The Options\n")
        getVote()
    }
 

});
}

//create  Interface for getting input from user
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fs = require('fs');

// Read the JSON file
const data = fs.readFileSync('candidates.json', 'utf8');
const json = JSON.parse(data);

//runs print function
print()
//Calling the function that 
//gets user vote if its in the range accepts otherwise rejects 
getVote()