function Animate() {
	var balls = [];
	this.start = function(n) {
		for (i = 1; i <= n; i++) {
			var ball = new Ball(i);
			ball.create();
			balls.push(ball);
			var timeout = Math.random() * 10 * 1000;
			setTimeout(
				(function() {
					var currentBall = ball;
					return function() {
						currentBall.move();
					};
				})(),
				timeout
			);
		}
	};

	this.removeBall = function() {
		setInterval(function() {
			balls.forEach(function(ball) {
				// console.log(ball.getPosition().x, window.innerHeight);
				if (!ball.isDeleted && ball.getPosition().x > window.innerHeight - ball.getDimension().h) {
					ball.remove();
				}
			});
		}, 1000 / 60);
	};
}
var animate = new Animate();
animate.start(600);
animate.removeBall();
