function Position(width, height) {
	var width = width;
	var height = height;
	this.generateXY = function() {
		this.x = Math.random() * height;
		this.y = Math.random() * width; 
	};
}


