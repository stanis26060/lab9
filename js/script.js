
var userName = prompt("Введіть ваш логін");
if (userName != null && userName != "") {
   document.getElementById("username").innerText = userName;}
var UserScore = 0;
var PcScore = 0;
var round = 0;

var cards = {0: "img/JH.png", 1: "img/QH.png", 2: "img/KH.png", 3: "img/6H.png", 4: "img/7H.png", 5: "img/8H.png", 6: "img/9H.png", 7: "img/10H.png", 8: "img/AH.png"};
var arrScore = [2,3,4,6,7,8,9,10,11];
document.getElementById("generate").onclick = function Generate() {
	var ranNUM1 = Math.floor(Math.random() * 9);
	var ranNUM2 = Math.floor(Math.random() * 9);
	var userTempScore, pcTempScore;
	userTempScore = arrScore[ranNUM1];
	pcTempScore = arrScore[ranNUM2];
	document.getElementById("usercard").src = cards[ranNUM1];
	document.getElementById("pccard").src = cards[ranNUM2];	
	document.getElementById("vashschet").innerText = UserScore += userTempScore;
	document.getElementById("pcschet").innerText = PcScore += pcTempScore;
	round++;
	if(round == 3){
		
		if(UserScore < PcScore){
			alert("Ви програли");
			location.href=location.href;  }
		if(UserScore > PcScore){
			alert("Ви перемогли");
			location.href=location.href;  }
	} 	
	
		
	
}