//create global variable to store stickies locally
listOfStickies = JSON.parse(localStorage.getItem("listOfStickies")); 

//create stickies based on user text
function newSticky(textinput){
	//check to see if text exists, else prompt user
	if (textinput == undefined){
		textinput = prompt("What kinds of things stick for you?");
	}
	
	//create key value pairs to save all data for single sticky together
	var stickyData = {
		"text": textinput,
		//generate random positions so stickies don't block header or create new button
		"top": Math.random() * 50 + 25 + "%", 
		"left": Math.random() * 100 + "%", 
		//generate random colors for stickies
		//got code from http://www.paulirish.com/2009/random-hex-color-code-snippets/
		"color": '#'+Math.floor(Math.random()*16777215).toString(16)
	}; 

	//save sticky to list
	listOfStickies.push(stickyData); 
	//put list above into local storage and "stringify" to
	localStorage.setItem("listOfStickies", JSON.stringify(listOfStickies)); 


	//create a new sticky from user text and randomly generated values
	displaySticky(stickyData.text, stickyData.top, stickyData.left, stickyData.color, listOfStickies.length - 1);

}


//create new sticky and new from my text
function displaySticky(textinput, top, left, color, index){
	//for each sticky, create a div with a paragraph and a delete button
	var div = document.createElement("div");
	var paragraph = document.createElement("p");
	var button = document.createElement("button");
	button.onclick = function(){
		document.body.removeChild(div);
		//remove item from listofStickies array if deleted by user
		listOfStickies.splice(index, 1);
		//update local storage to mirror new array
		localStorage.setItem("listOfStickies", JSON.stringify(listOfStickies)); 
	};
	//have button read as "delete"
	button.innerHTML = "Delete";
	
	//attach paragraph and button to div, so they are all together
	div.appendChild(paragraph);
	div.appendChild(button);

	//all stickies are set to absolute position
	div.style.position = "absolute";
	//set sticky positions 
	div.style.top = top;
	div.style.left = left;

	//set sticky color
	div.style["background-color"] = color;

	//load user text inside of the paragraph
	if (textinput != null) {
    	paragraph.innerHTML = textinput;
	}
	document.body.appendChild(div);
}

window.onload = function(){
	for (var i = 0; i < listOfStickies.length; i++){
		var sticky = listOfStickies[i];  
		displaySticky(sticky.text, sticky.top, sticky.left, sticky.color, i); 
	}
};

//when page loads, create five stickies with my quotes
// window.onload = function(){
// 	newSticky('"Disappointment is a sticky one." - Kristin Armstrong');
// 	newSticky("Rolling Stones' Sticky Fingers");
// 	newSticky('"I got sticky fingers, man." - J.B. Smoove');
// 	newSticky('"Thoughts are fluid and words are sticky. That\'s the thing" - Daphne Guinness');
// 	newSticky('"Even when freshly washed and relieved of all obvious confections, children tend to be sticky." - Fran Lebowitz');
// };

