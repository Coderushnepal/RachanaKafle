
function Ball(i) {
	var id = i;
	var interval = null;
	this.ball = document.createElement('div');
	this.isDeleteable = false;
	this.isDeleted = false;
	var that = this;
	
	this.create = function() {
		var size = parseInt(Math.random() * 80) + 'px';
		this.ball.style.height = this.ball.style.width = size;
		var position = new Position(window.innerWidth, 0);
		position.generateXY();
		this.ball.style.top = position.x + 'px';
		this.ball.style.left = position.y + 'px';
		// this.ball.style.backgroundColor = colors[Math.ceil(Math.random() * colors.length)];
		this.ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
		this.ball.style.borderRadius = '50%';
		this.ball.style.position = 'absolute';
		document.body.appendChild(this.ball);

		this.ball.addEventListener('click', function() {
			if (that.isDeleteable) {
				that.remove();
			}
		});
	};

	this.getPosition = function() {
		return {
			x: parseInt(this.ball.style.top),
			y: parseInt(this.ball.style.left)
		};
	};

	this.getDimension = function() {
		return {
			h: parseInt(this.ball.style.height),
			w: parseInt(this.ball.style.width)
		};
	};

	this.move = function() {
		this.isDeleteable = true;
		this.interval = setInterval(function() {
			var currentTop = parseInt(that.ball.style.top);
			var nextTop = currentTop + Math.random() * 10;
			that.ball.style.top = nextTop + 'px';
		}, 1000/60);
	};

	this.remove = function() {
		clearInterval(this.interval);
		document.body.removeChild(this.ball);
		// clearInterval(this.interval);
		this.isDeleted = true;
	};
}

// for (i = 0; i <= 100; i++) {
// 	ball = new Ball(i);
// 	ball.create();
// 	ball.move();
// 	console.log(ball);
// }
