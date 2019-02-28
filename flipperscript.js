function flipper() {
	var card = document.querySelector('#innercontent');
	var btn = document.querySelector('#btnflipper')
	card.classList.toggle('flipped');
	
	if (btn.innerHTML=="About me") btn.innerHTML = "See Projects";
    else btn.innerHTML = "About me"
}