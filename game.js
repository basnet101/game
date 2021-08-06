var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var lastPressed = false;
var ScreenWidth=window.innerWidth;
var sky;

function keyup(event) {
	var player = document.getElementById('player');
	if (event.keyCode == 37) {
		leftPressed = false;
		lastPressed = 'left';
	}
	if (event.keyCode == 39) {
		rightPressed = false;
		lastPressed = 'right';
	}
	if (event.keyCode == 38) {
		upPressed = false;
		lastPressed = 'up';
	}
	if (event.keyCode == 40) {
		downPressed = false;
		lastPressed = 'down';
	}

	player.className = 'character stand ' + lastPressed;
}


function move() {
	var player = document.getElementById('player');
	var positionLeft = player.offsetLeft;
	var positionTop = player.offsetTop;
	if (downPressed) {
		var newTop = positionTop+1;

		var element = document.elementFromPoint(player.offsetLeft, newTop+32);
		if (element.classList.contains('sky') == false) {
			player.style.top = newTop + 'px';	
		}

		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk down';
			}
		}
	}
	if (upPressed) {
		var newTop = positionTop-1;

		var element = document.elementFromPoint(0, newTop);
		if (element.classList.contains('sky') == false) {
			player.style.top = newTop + 'px';	
		}
		
		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk up';
			}
		}
	}
	if (leftPressed) {
		var newLeft = positionLeft-1;

		var element = document.elementFromPoint(newLeft, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';	
		}


		player.className = 'character walk left';
	}
	if (rightPressed) {
		var newLeft = positionLeft+1;
		
		var element = document.elementFromPoint(newLeft+32, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';		
		}

		player.className = 'character walk right';
	}

}


function keydown(event) {
	if (event.keyCode == 37) {
		leftPressed = true;
	}
	if (event.keyCode == 39) {
		rightPressed = true;
	}
	if (event.keyCode == 38) {
		upPressed = true;
	}
	if (event.keyCode == 40) {
		downPressed = true;
	}
}

// load garna ko lagi function...
function myLoadFunction() {
	timeout = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);
	var game=document.getElementsByClassName('start');
	game[0].addEventListener('click',games);
	sky=document.getElementsByClassName('sky');
}


document.addEventListener('DOMContentLoaded', myLoadFunction);

// start bottom hatauna ko lagii
function games(){
	var game=document.getElementsByClassName('start');
	game[0].style.display='none';
	console.log('end');


	boom= setInterval(bomb,500);
	// expo=setInterval(explosion,500);
	// guy=setInterval(man,100);
	// fall= setInterval(Arrow,700);
}


// bomb dakina ko lagii
function bomb(){

	var boom= document.createElement('div');
		var a=document.getElementsByClassName('sky')[0];
		
		var ah=a.offsetHeight;
		var check= window.innerHeight-ah;
		var ran=Math.floor(Math.random() * (window.innerHeight - ah + 1) + ah);

	var RandomPos =Math.floor(Math.random()* ScreenWidth);
	boom.style.left=RandomPos+'px';

	boom.className='bomb';
	document.body.appendChild(boom);

// yo function call garna ko lagii
	// var boom=setInterval(()=>BangDrop(boom),1000);
	var mathi=setInterval(()=>muni(boom,ran),10);



}


// function BangDrop(boom){
// 	var downgo=parseInt(boom.offsetTop);
// 	if (downgo==window.innerHeight-60) {
// 		clearInterval(boom);
// 		Bomb.remove();

// 		boom.style.top=downgo+1+'px';
// 	}
// }



// function Arrow(){
// 	var bang=document.createElement('div');
// 	bang.className='Arrow';
// 	bang.style.transform="rotate(-90deg)";
// 	document.body.appendChild(bang);
// 	var upgo=parseInt(bang.offsetTop);
// 	if (upgo==window.innerHeight-60) {
// 		clearInterval(fall);
// 		Arrow.remove();
// 	}
// }



// bomb khasna ko lag ra padhkina ko lagi...
function muni(boom,ran){
	
		
		var talla=boom.offsetTop;
		boom.style.top=talla +1+ 'px';
		if (talla>ran) {var expo= document.createElement('div');
		expo.style.left=boom.offsetLeft+ 'px';
		expo.style.top=talla +'px';
		document.body.appendChild(expo);
		expo.className='explosion';
		boom.remove();
		setTimeout(function(){expo.remove ()}, 100);

	}
	}

 // function man(){
 // 	var manchya=document.getElementsByClassName('player');
 // 	var boom= document.getElementsByClassName('bomb');
 // for (var i = 0; i < boom.length; i++ ) {
 // 		if (boom[i].offsetTop + boom [i].offsetHeight > manchya.offsetTop &&
	// 		boom[i].offsetTop < manchya.offsetTop + manchya.offsetHeight) {
 // 			alert('sakiyo');

 	
 // 		}
 // 	}
 // }
	
 

	





















































// yo bomb padhkina ko lagii
// function explosion(){

// 	var expo= document.createElement('div');

// 	var RandomPos =Math.floor(Math.random()*ScreenWidth);
// 	// for (var i =0;i< boom.length; i++) {
// 	// var random=expo[i].offsetTop;
// 	// var rando=expo[i].offsetLeft;
// 	// var ran=100-RandomPos;
// 	// // if (random>ran) {
	
// 	expo.style.left=RandomPos+'px';
// 	expo.style.top=RandomPos-'px';
// 	expo.className='explosion';
// 	document.body.appendChild(expo);
// }
// }
// }

