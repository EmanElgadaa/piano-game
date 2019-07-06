//var createRect = document.createElement("rect");
//var svgEle = document.getElementById("svgexp");
//svgEle.appendChild(createRect);
//createRect.setAttribute('class','rect2');
//console.log("hi")
//var count = document.getElementById("svgexp").childElementCount;
//console.log(count);
//
//var ele = document.getElementById("svgexp").childNodes;
//console.log(ele[1].className);
//
//ele[1].addEventListener("click", svgfunction);
//function svgfunction()
//{
//	console.log("hi")
//}

var svgTag= document.getElementById("svgexp").children;
console.log(svgTag);
 var arr = [,,'A.wav','B.wav','C.wav','D.wav','E.wav','F.wav','G.wav']
let k=0	;
for(k;k<10;k++)
	{
		let i=k;
		svgTag[i].addEventListener("click",audiofunction);
		function audiofunction()
			 {

				 console.log(svgTag[i])
				 var song = new Audio();
				 song.src = arr[i];
				 console.log(arr[i])
				 song.play();
				
			 }
//		 var key = Event.which;
//				 if(key == 102)
//					 {
//						 console.log(key)
////						  audiofunction(); 
//					 var song = new Audio();
//					 song.src = arr[i];
//					 console.log(arr[i])
//					 song.play();
//					 }
		function myFunction(event) {
  var x = event.which;
//  document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
			console.log(x);
}
	
	}

//-----------------------------audio
