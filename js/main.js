(function(window, document) {
	var element = document.getElementById('touch');
	var mc = new Hammer(element);
	mc.on('panleft panright tap press', function(e) {
		element.innerHTML = e.type + "gesture detected";
	}) ;
})(window, document);