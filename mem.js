// making position of both bunnies
let bunnyPos = Math.floor(Math.random() * 9) + 1;
let bunnyFriendPos = Math.floor(Math.random() * 9) + 1;

while(bunnyFriendPos == bunnyPos){
    bunnyFriendPos = Math.floor(Math.random() * 9) + 1;
}

// for recordiang the postition of last click to make sure that the two rabbits are found in conseecutive order
let lastClick = 0;

// You win if correctCounter is 2
correctCounter = 0;

function flip(block_num)
{
    //if to check that the clicked block is one of the two rabbits
    if(block_num == bunnyPos || block_num == bunnyFriendPos){
        // show bunny for 0.7sec then hide again
        setTimeout(clearFlip, 700, block_num);

        //selecting clicked block and displaying the bunny in its place
        clickedBlock = document.querySelector("#b" + block_num);
        clickedBlock.innerHTML = "<img src='https://media.istockphoto.com/vectors/white-easter-rabbit-vector-id653804238?b=1&k=20&m=653804238&s=170667a&w=0&h=oFY2nfYPuQJSjg5tzyIedZmn8T--fUTAErjEkiH7-HA=' alt='bunny image'>";

        // checking that the block clicked wasn't the same one as clicked last time
        if(block_num != lastClick)
        {
            lastClick = block_num;
            correctCounter++;
        }
    }

    else{
        //if the current click isn't correct then the last click need to be cleared
        lastClick = 0;
        correctCounter = 0;

        // console.log("bunny is not in this block");
    }

    if(correctCounter == 2)
    {
        //if the bunnies were clicked in the correct order then we print that the user has won
        emptySpace = document.querySelector("#status");
        emptySpace.innerHTML = "<h1>YOU WIN</h1><br><button type='reset' onclick='reload()'>Restart</button>";
    }
}

//function to remove the display of the bunny after time set above
function clearFlip(block_num)
{
    clearBlock = document.querySelector("#b" + block_num);
    clearBlock.innerHTML = "";
}

//for restarting game after win, we reload the page
function reload()
{
    location.reload();
}