// 1
		// function Box (height, width, depth, material) {
		// 	this.height = height;
		// 	this.width = width;
		// 	this.depth = depth;
		// 	this.material = material;
		// }

		// Box.prototype.volume = function() {
		// 	return ( this.width * this.height * this.depth );
		// };
		// Box.prototype.equals = function(object) {
		// 	return ( this.material === object.material );
		// };

		// var box1 = new Box(10, 10, 10, "пластилин");
		// var box2 = new Box(11, 13, 12, "пластилин");

		// console.log(box1.volume());
		// console.log(box2.volume());
		// console.log(box1.equals(box2));

		//2

		// function Lego (name){
		// 	this.name = name;
		// 	this.entrance = function(){};
		// }

		// Lego.prototype.password = password;
		// Lego.prototype.exit = function(){
		// 	return ...
		// };

		//3

		var Human = function(age){
			this.age = age;
		},
			arrayObject = [],
			getRandom = function(max, min){
				return  Math.floor(Math.random() * (max - min) + min);
			}

		Human.prototype.equals = function(object) {
			return ( this.age === object.age );
		};
		for (var i = 0 ; i <= 10; i++) {
			
			
			var age = getRandom(1, 80);

			arrayObject[i] = new Human(age);

		};
		console.log(arrayObject);