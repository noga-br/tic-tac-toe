

var player = "X"
var total = 0;
var pick = new Array();
var xScore = 0;
var yScore = 0;


pick['X'] = [0,0,0,0,0,0,0,0,0];
pick['O'] = [0,0,0,0,0,0,0,0,0];

var win =  [
	[1,1,1,0,0,0,0,0,0], 
	[0,0,0,1,1,1,0,0,0], 
	[0,0,0,0,0,0,1,1,1], 
	[1,0,0,1,0,0,1,0,0],
	[0,1,0,0,1,0,0,1,0],
	[0,0,1,0,0,1,0,0,1],
	[1,0,0,0,1,0,0,0,1],
	[0,0,1,0,1,0,1,0,0],
];

function generateGame(){
    document.getElementById("gameboard").innerHTML = ' ';
    pick['X'] = [0,0,0,0,0,0,0,0,0];
	pick['O'] = [0,0,0,0,0,0,0,0,0];
	total = 0;
	var counter = 0;

    for (let e = 0; e<3; e++) {
        for (let j = 0; j<3; j++) {
            var button = document.createElement("input");
            button.setAttribute("id", counter);
            button.setAttribute("type", 'button');
            button.setAttribute("class", 'grid-cell');
            button.setAttribute("value", ' ');
            button.setAttribute("onclick","markCheck(this)");
            document.getElementById("gameboard").appendChild(button);
            counter++;
        }
        var br = document.createElement("br");
        gameboard.appendChild(br);
      }
    
}

function markCheck(obj){
	obj.value = player;
    var nums = Number(obj.id);
	pick[player][nums] = 1;
	console.log("player" + player +  " marked " +nums);
    pick[player][nums]
	checkPlayerHasAnyWinningPattern();


	if (player == 'X' ) {
		obj.setAttribute("class", 'green-player');
		player = 'O';
	} 
    else {
		obj.setAttribute("class", 'red-player');
		player = 'X';
	}
	obj.setAttribute("disabled", 'disabled');
    total++;
    if (total == 9){
		console.log("player X marked " +pick['X']);
		console.log("player O marked " +pick['O']);
		
	}

	if (total == 9 && gameOver === false){
		setTimeout(function() {
			alert('Game Draw!');
		},10)
		gameOver = true;	
}

function checkPlayerHasAnyWinningPattern(){
    gameOver = false;

    for (var r=0; r < win.length; r++) {
		if (gameOver == false) { 
			gameOver = winP(pick[player], win[r]);

			if ( gameOver === true ) {

				var disa = document.getElementsByClassName("grid-cell");
				for (var i = 0; i < disa.length; i++) {
	  				disa[i].disabled;
				}
				var winner = player;
				setTimeout(function() {
					alert('Player '+winner+' Won !!');
				},10)
				console.log("player X marked" +pick['X']);
				console.log("player O marked" +pick['O']);

				if (player == "X"){
					xScore++
					document.getElementById('scoreX').innerHTML = xScore;
				}
				if (player == "O"){
					yScore++
					document.getElementById('scoreO').innerHTML = yScore;
				}

				break;
			} 
		}
	}

	
	}
}

function winP(player_selections, win){
	var match = 0;

	for (var i=0; i < 9; i++) {
		if(player_selections[i] + win[i] == 2){
			match ++;
		}
	}

	if (match == 3){
		return true;
	}

	return false;
}

function restartGame(){
	xScore = 0;
	document.getElementById('scoreX').innerHTML = 0;
	yScore = 0;
	document.getElementById('scoreO').innerHTML = 0;
}

