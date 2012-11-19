var lowercasePath = 'fonts/lowercase/';
var uppercasePath = 'fonts/uppercase/';
var numberPath = 'fonts/number/';
var specialPath = 'fonts/specials/';
var pointerPath = 'fonts/pointer/pointer';
var pointerControler = true;

var pointerArray = new Array(pointerPath);

var lowercaseArray = new Array(
	lowercasePath + 'a'
	, lowercasePath + 'b'
	, lowercasePath + 'c'
	, lowercasePath + 'd'
	, lowercasePath + 'e'
	, lowercasePath + 'f'
	, lowercasePath + 'g'
	, lowercasePath + 'h'
	, lowercasePath + 'i'
	, lowercasePath + 'j'
	, lowercasePath + 'k'
	, lowercasePath + 'l'
	, lowercasePath + 'm'
	, lowercasePath + 'n'
	, lowercasePath + 'o'
	, lowercasePath + 'p'
	, lowercasePath + 'q'
	, lowercasePath + 'r'
	, lowercasePath + 's'
	, lowercasePath + 't'
	, lowercasePath + 'u'
	, lowercasePath + 'v'
	, lowercasePath + 'w'
	, lowercasePath + 'x'
	, lowercasePath + 'y'
	, lowercasePath + 'z');
var uppercaseArray = new Array(
	uppercasePath + 'a'
	, uppercasePath + 'b'
	, uppercasePath + 'c'
	, uppercasePath + 'd'
	, uppercasePath + 'e'
	, uppercasePath + 'f'
	, uppercasePath + 'g'
	, uppercasePath + 'h'
	, uppercasePath + 'i'
	, uppercasePath + 'j'
	, uppercasePath + 'k'
	, uppercasePath + 'l'
	, uppercasePath + 'm'
	, uppercasePath + 'n'
	, uppercasePath + 'o'
	, uppercasePath + 'p'
	, uppercasePath + 'q'
	, uppercasePath + 'r'
	, uppercasePath + 's'
	, uppercasePath + 't'
	, uppercasePath + 'u'
	, uppercasePath + 'v'
	, uppercasePath + 'w'
	, uppercasePath + 'x'
	, uppercasePath + 'y'
	, uppercasePath + 'z');
var numbersArray   = new Array(
	numberPath    + '0'
	, numberPath   + '1'
	, numberPath   + '2'
	, numberPath   + '3'
	, numberPath   + '4'
	, numberPath   + '5'
	, numberPath   + '6'
	, numberPath   + '7'
	, numberPath   + '8'
	, numberPath   + '9');
var specialsArray   = new Array(
	specialPath   + 'grave'
	, specialPath   + 'tilde'
	, specialPath   + 'exclamation'
	, specialPath   + 'at'
	, specialPath   + 'hash'
	, specialPath   + 'dollar'
	, specialPath   + 'percent'
	, specialPath   + 'caret'
	, specialPath   + 'ampersand'
	, specialPath   + 'star'
	, specialPath   + 'left_bracket'
	, specialPath   + 'right_bracket'
	, specialPath   + 'underscore'
	, specialPath   + 'hyphen'
	, specialPath   + 'plus'
	, specialPath   + 'equals'
	, specialPath   + 'left_square_bracket'
	, specialPath   + 'right_square_bracket'
	, specialPath   + 'left_curly_brace'
	, specialPath   + 'right_curly_brace'
	, specialPath   + 'pipe'
	, specialPath   + 'apostrophe'
	, specialPath   + 'inverted_comma'
	, specialPath   + 'semi_colon'
	, specialPath   + 'colon'
	, specialPath   + 'slash'
	, specialPath   + 'question'
	, specialPath   + 'dot'
	, specialPath   + 'left_chevron'
	, specialPath   + 'right_chevron'
	, specialPath   + 'comma'
	, specialPath	+ 'backslash');

function preloadimages(arr){
	var newimages = [], loadedimages=0
	var postaction = function(){}
	var arr = (typeof arr != 'object') ? [arr] : arr
	function imageloadpost(){
		loadedimages++;
		if (loadedimages == arr.length){
			postaction(newimages) //call postaction and pass in newimages array as parameter
		}
	}
	for (var i = 0; i < arr.length; i++){
		newimages[i] = new Image();
		newimages[i].src = arr[i] + '.png';
		newimages[i].onload = function(){
			imageloadpost();
		}
		newimages[i].onerror = function(){
			imageloadpost();
		}
	}
	return { //return blank object with done() method
		done:function(f){
			postaction = f || postaction //remember user defined callback functions to be called when images load
		}
	}
}


// getting char
function getChar(event){
	

	var code;
    if (!e) var e = event || window.event;
    if (e.keyCode) code = e.keyCode;
    else if (e.which) code = e.which;

 	if(event.which === 32){
 		
		document.getElementById('letters').innerHTML += '<img id="' + id + '" src="fonts/specials/space/space.png" >';
		id++;
		return;
	}  	

	

	if(event.which == null){
		return String.fromCharCode(event.keyCode) // IE
	} else if(event.which != 0 && event.charCode != 0){
		return String.fromCharCode(event.which)   // the rest
	} else {
		return null;
	}
}


// delete letters
function deleteLetter(){
	id--;
	childImg = document.getElementById(id);
	
	try{
		document.getElementById('letters').removeChild(childImg);
	} catch(e){
		console.log("error " + e);
	}
	
}

var id = 0;

document.onkeydown = function(event){
	var code;
    if (!e) var e = event || window.event;
    if (e.keyCode) code = e.keyCode;
    else if (e.which) code = e.which;

    if(event.which == "8" && id > 0){
		deleteLetter();
		return (event.keyCode != 8);
	}
	return (event.keyCode != 8);
}

document.onkeypress = function(event){
	var char = getChar(event || window.event);
	console.log(char)

	switch(char){
		case "a":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[0] + '.png>';
		break;
		case "b":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[1] + '.png>';
		break;
		case "c":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[2] + '.png>';
		break;
		case "d":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[3] + '.png>';
		break;
		case "e":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[4] + '.png>';
		break;
		case "f":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[5] + '.png>';
		break;
		case "g":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[6] + '.png>';
		break;
		case "h":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[7] + '.png>';
		break;
		case "i":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[8] + '.png>';
		break;
		case "j":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[9] + '.png>';
		break;
		case "k":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[10] + '.png>';
		break;
		case "l":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[11] + '.png>';
		break;
		case "m":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[12] + '.png>';
		break;
		case "n":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[13] + '.png>';
		break;
		case "o":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[14] + '.png>';
		break;
		case "p":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[15] + '.png>';
		break;
		case "q":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[16] + '.png>';
		break;
		case "r":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[17] + '.png>';
		break;
		case "s":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[18] + '.png>';
		break;
		case "t":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[19] + '.png>';
		break;
		case "u":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[20] + '.png>';
		break;
		case "v":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[21] + '.png>';
		break;
		case "w":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[22] + '.png>';
		break;
		case "x":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[23] + '.png>';
		break;
		case "y":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[24] + '.png>';
		break;
		case "z":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + lowercaseArray[25] + '.png>';
		break;

		// uper case

		case "A":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[0] + '.png>';
		break;
		case "B":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[1] + '.png>';
		break;
		case "C":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[2] + '.png>';
		break;
		case "D":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[3] + '.png>';
		break;
		case "E":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[4] + '.png>';
		break;
		case "F":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[5] + '.png>';
		break;
		case "G":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[6] + '.png>';
		break;
		case "H":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[7] + '.png>';
		break;
		case "I":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[8] + '.png>';
		break;
		case "J":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[9] + '.png>';
		break;
		case "K":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[10] + '.png>';
		break;
		case "L":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[11] + '.png>';
		break;
		case "M":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[12] + '.png>';
		break;
		case "N":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[13] + '.png>';
		break;
		case "O":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[14] + '.png>';
		break;
		case "P":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[15] + '.png>';
		break;
		case "Q":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[16] + '.png>';
		break;
		case "R":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[17] + '.png>';
		break;
		case "S":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[18] + '.png>';
		break;
		case "T":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[19] + '.png>';
		break;
		case "U":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[20] + '.png>';
		break;
		case "V":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[21] + '.png>';
		break;
		case "W":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[22] + '.png>';
		break;
		case "X":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[23] + '.png>';
		break;
		case "Y":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[24] + '.png>';
		break;
		case "Z":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + uppercaseArray[25] + '.png>';
		break;


		//numbers

		case "0":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + numbersArray[0] + '.png>';
		break;
		case "1":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + numbersArray[1] + '.png>';
		break;
		case "2":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + numbersArray[2] + '.png>';
		break;
		case "3":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + numbersArray[3] + '.png>';
		break;
		case "4":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + numbersArray[4] + '.png>';
		break;
		case "5":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + numbersArray[5] + '.png>';
		break;
		case "6":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + numbersArray[6] + '.png>';
		break;
		case "7":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + numbersArray[7] + '.png>';
		break;
		case "8":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + numbersArray[8] + '.png>';
		break;
		case "9":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + numbersArray[9] + '.png>';
		break;

		//special

		case "`":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[0] + '.png>';
		break;
		case "~":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[1] + '.png>';
		break;
		case "!":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[2] + '.png>';
		break;
		case "@":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[3] + '.png>';
		break;
		case "#":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[4] + '.png>';
		break;
		case "$":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[5] + '.png>';
		break;
		case "%":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[6] + '.png>';
		break;
		case "^":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[7] + '.png>';
		break;
		case "&":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[8] + '.png>';
		break;
		case "*":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[9] + '.png>';
		break;
		case "(":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[10] + '.png>';
		break;
		case ")":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[11] + '.png>';
		break;
		case "_":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[12] + '.png>';
		break;
		case "-":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[13] + '.png>';
		break;
		case "+":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[14] + '.png>';
		break;
		case "=":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[15] + '.png>';
		break;
		case "[":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[16] + '.png>';
		break;
		case "]":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[17] + '.png>';
		break;
		case "\\":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[31] + '.png>';
		break;
		case "{":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[18] + '.png>';
		break;
		case "}":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[19] + '.png>';
		break;
		case "|":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[20] + '.png>';
		break;
		case "'":
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[21] + '.png>';
		break;
		case '"':
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[22] + '.png>';
		break;
		case ';':
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[23] + '.png>';
		break;
		case ':':
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[24] + '.png>';
		break;
		case '/':
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[25] + '.png>';
		break;
		case '?':
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[26] + '.png>';
		break;
		case '.':
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[27] + '.png>';
		break;
		case '<':
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[28] + '.png>';
		break;
		case '>':
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[29] + '.png>';
		break;
		case ',':
			document.getElementById('letters').innerHTML += '<img id="' + id + '" src=' + specialsArray[30] + '.png>';
		break;
		default:
			return (event.keyCode != 8);
		break;
		
	}


	if(char != "8" && char != 8 && char != undefined){
		id++;
	}
	return (event.keyCode != 8);
	
}

function pointer(){
	if(pointerControler){
		document.getElementById('pointer').style.visibility = 'visible';
		pointerControler = false;
	} else {
		document.getElementById('pointer').style.visibility = 'hidden';
		pointerControler = true;
	}
}

var interval = setInterval(function() {pointer()}, 500);




preloadimages(pointerArray).done(function(images){
 	/*for (var i = 0; i < lowercaseArray.length; i++) {
 		lowercaseImages[i] = images[i];
 	};*/
 	document.getElementById('letters').innerHTML = '<img id="pointer" src=' + pointerArray[0] + '.png align="right">';
});

/*var lowercaseImages = [];
var uppercaseImages = [];
var numbers = [];*/
preloadimages(uppercaseArray).done(function(images){
 	/*for (var i = 0; i < uppercaseArray.length; i++) {
 		uppercaseImages[i] = images[i];
 	};*/
});


preloadimages(numbersArray).done(function(images){
 	/*for (var i = 0; i < uppercaseArray.length; i++) {
 		uppercaseImages[i] = images[i];
 	};*/
});

//preloading lowercase images
preloadimages(lowercaseArray).done(function(images){
 	/*for (var i = 0; i < lowercaseArray.length; i++) {
 		lowercaseImages[i] = images[i];
 	};*/
});

preloadimages(specialsArray).done(function(images){
 	/*for (var i = 0; i < lowercaseArray.length; i++) {
 		lowercaseImages[i] = images[i];
 	};*/
});

