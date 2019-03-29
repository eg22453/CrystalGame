var crystalvalueoptions = [3, 5, 7, 10];
// Here we establish the randomized target number the user has to guess too
var randomtargetnumber = Math.floor(Math.random() * (102)) + 19;
// Here we set the "number-to-guess" header to match the "targetNumber".
$("#numbertomatch").text(randomtargetnumber);
var userwins = 0;
var userlosses = 0;
var userscore = 0;

$("#currentplayerscore").text(userscore);

$("#crystal-image1").on("click", function (){
    userscore += 10
    $("#currentplayerscore").text(userscore);
    userwinsorloses();
})
$("#crystal-image2").on("click", function (){
    userscore += 7
    $("#currentplayerscore").text(userscore);
    userwinsorloses();
})


$("#crystal-image3").on("click", function (){
    userscore += 5
    $("#currentplayerscore").text(userscore);
    userwinsorloses();
})

$("#crystal-image4").on("click", function (){
    userscore += 3
    $("#currentplayerscore").text(userscore);
    userwinsorloses();
})




function userwinsorloses(){
    if (userscore >randomtargetnumber){
    $("#userwinsorlosestext").text(" LOSER!")
    startnewgame();
    userlosses ++;
    $("#playerlosses").text(userlosses)
    }
    else if(userscore === randomtargetnumber){
        $("#userwinsorlosestext").text(" WINNER!")
        startnewgame();
        userwins++;
        $("#playerwins").text(userwins)
    }
}


function startnewgame(){
randomtargetnumber = Math.floor(Math.random() * (102)) + 19;
userscore = 0;
$("#numbertomatch").text(randomtargetnumber);
$("#currentplayerscore").text(userscore);
}

