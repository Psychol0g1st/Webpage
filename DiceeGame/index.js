window.performancel;
if (performance.navigation.type == 1) {
	var randomNumber1 = Math.floor(Math.random()*6) + 1;
	var randomNumber2 = Math.floor(Math.random()*6) + 1;
	document.querySelector(".player1").setAttribute("src", "images/dice"+randomNumber1+".png");
	document.querySelector(".player2").setAttribute("src", "images/dice"+randomNumber2+".png");
	
	if(randomNumber1 > randomNumber2){
		for(var i=0; i<3; i++){
			document.getElementsByClassName("msg")[i].innerHTML = "Player 1 Wins!";
		}
	} else if(randomNumber1 < randomNumber2){
		for(var i=0; i<3; i++){
			document.getElementsByClassName("msg")[i].innerHTML = "Player 2 Wins!";
		}
	} else {
		for(var i=0; i<3; i++){
			document.getElementsByClassName("msg")[i].innerHTML = "Draw!";
		}
	}
}

