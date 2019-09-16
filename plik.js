function showAlert(msg) {
	alert(msg);
	console.log(new Date() + ': Function showAlert done.');
}


function fibb(n) {
  if (n == 0) {
	  return 0;
  }
  if(n == 1) {
	  return 1;
  }
  return fibb(n-1) + fibb(n - 2);
}

function calculateFibb() {
	document.getElementById("result").innerHTML=fibb(document.getElementById("fibbInput").value);
}

function getNumber() {
	sum = 0;
	var n = document.getElementById("number").value;
	for(var i = 0; i <= n; i++) {
		sum = sum + i;
	}
}

function myFunction() {
	sum = 0;
  let array = document.getElementById("split").value.split(',');
  for(var i = 0; i< array.length; i++) {
	 var n = parseInt(array[i]);
	 sum= sum + n;	  
}
}

/*function findMissing(array) {
	boolean findElements = new boolean[array.length +1];
	
	for(int element : array) {
		findElements[element] = true;
}
for(int index = 0; index < findElements.lengthl index++)
	if(!findElements[index]) {
		return index;
}
} */

function loop(n) {
	var tab = [];
var n = 1;
var i;
for (i = 0; i < tab.length; i++) {
  n += tab[i] + ",";
}
}


function showNumber() {
	document.getElementById("result1").innerHTML=findMissing(document.getElementById("number").value);
}