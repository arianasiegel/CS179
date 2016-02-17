
//create stickies based on user text
function userInputSticky(){
	var textinput = prompt("What kinds of things stick for you?");
	newSticky(textinput);
	
}


//create new sticky and new from my text
function newSticky(textinput){
	//for each sticky, create a div with a paragraph and a delete button
	var div = document.createElement("div");
	var paragraph = document.createElement("p");
	var button = document.createElement("button");
	button.onclick = function(){
		document.body.removeChild(div);
	};
	//have button read as "delete"
	button.innerHTML = "Delete";
	
	//attach paragraph and button to div, so they are all together
	div.appendChild(paragraph);
	div.appendChild(button);

	//set stickies to have random positions on page
	div.style.position = "absolute";
	//limit sticky positions so they don't block header or create new button
	div.style.top = Math.random() * 50 + 25 + "%";
	div.style.left = Math.random() * 100 + "%";

	//set stickies to have random colors
	//got code from http://www.paulirish.com/2009/random-hex-color-code-snippets/
	div.style["background-color"] = '#'+Math.floor(Math.random()*16777215).toString(16);

	//load user text inside of the paragraph
	if (textinput != null) {
    	paragraph.innerHTML = textinput;
	}
	document.body.appendChild(div);
}

//when page loads, create five stickies with my quotes
window.onload = function(){
	newSticky('"Disappointment is a sticky one." - Kristin Armstrong');
	newSticky("Rolling Stones' Sticky Fingers");
	newSticky('"I got sticky fingers, man." - J.B. Smoove');
	newSticky('"Thoughts are fluid and words are sticky. That\'s the thing" - Daphne Guinness');
	newSticky('"Even when freshly washed and relieved of all obvious confections, children tend to be sticky." - Fran Lebowitz');
};

