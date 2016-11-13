var gridCoordinates = new Array(88); 

function getDotColor() {
	return "#333333"; 
}

// object definition of raised bar
function raisedDot(x, y, rSize, c = getDotColor()) {
	// Object definition and code
	var canvas = document.getElementById("contentContainer"); 
	this.startY = y; 
    this.rS = rSize; 
    this.x = x; 
    this.y = y; 
    this.radius = rSize; 
    this.isExpanding = true; 
    this.enabled = true; 
    this.color = c; 	//getRandomColor(); 
    this.update = function (){
		var radiusSize; 
        var r1 = parseInt((canvas.width * 2 / 3) / 16) - 2; 
        var r2 = parseInt((canvas.height * 2 / 3) / 6) - 2; 
        if (r1 < r2) 
            radiusSize = r1; 
        else
            radiusSize = r2; 
		this.radius = radiusSize; 
		
		if (this.isExpanding) {
			this.y -= 25; 
		} else {
			this.y += 15; 
		}
		
		if (this.y <= this.startY - 0.1 * canvas.height) 
			this.isExpanding = false; 
		
		if (this.y >= this.startY) 
			this.enabled = false; 
	}
}

var rDots = []; 

function repaint() {
	var canvas = document.getElementById("contentContainer"); 
	canvas.width = window.innerWidth; 
	canvas.height = window.innerHeight; 
	var ctx = canvas.getContext("2d"); 
	var drawHH = canvas.height; 
	var drawWW = canvas.width; 
	
	ctx.fillStyle = "#FFFFFF"; 
	ctx.fillRect(0, 0, drawWW, drawHH); 
	var backgroundI = new Image();
	/* Clear Canvas */	backgroundI.src = "img/bg.png";
	/* Clear Canvas */	for (var bX = 0; bX <= drawWW / 72 + 1; bX++)
	/* Clear Canvas */		for (var bY = 0; bY <= drawHH / 72 + 1; bY++)
	/* Clear Canvas */			ctx.drawImage(backgroundI, bX * 72, bY * 72); 
	
	var radiusSize; 
	var r1 = parseInt((drawWW * 2 / 3) / 16); 
    var r2 = parseInt((drawHH * 2 / 3) / 6); 
    if (r1 < r2) 
    	radiusSize = r1; 
    else
    	radiusSize = r2; 
    // Render circles row by row
    var offsetX = (drawWW - (2 * radiusSize + 15 * radiusSize * 4 / 3)) / 2;
    var offsetY = (drawHH - (2 * radiusSize + radiusSize * 22 / 3)) / 2;
    // Top Row
    /* Background */	for (var trc = 0; trc < 16; trc++) {
    /* Background */		ctx.fillStyle = "#333333"; 
    /* Background */		var centerX = offsetX + radiusSize + trc * radiusSize * 4 / 3; 
    /* Background */		var centerY = offsetY + radiusSize; 
    /* Background */		ctx.beginPath();
    /* Background */		ctx.arc(centerX, centerY, radiusSize, 0, 2 * Math.PI, false);
    /* Background */		ctx.fill();
    /* Background */		ctx.lineWidth = 5 / 1;
    /* Background */		ctx.strokeStyle = '#FFFFFF';
    /* Background */		ctx.stroke();
    /* Background */		ctx.fillStyle = "#FFFFFF";
    /* Background */		ctx.font = (radiusSize * 2 / 3) + "px Arial"
    /* Background */		ctx.fillText(72 + trc, centerX - 0.5 * radiusSize, centerY - 0.25 * radiusSize); 
    /* Background */		gridCoordinates[72 + trc] = centerX + "," + centerY; 
    /* Background */	}
	
	if (rDots != null) {
		rDots.forEach(function (item, index, array) {
			var dot = item; 
			
			if (dot.enabled) 
			if (Math.abs(dot.startY - parseInt(gridCoordinates[72].split(",")[1])) < 5) {
				ctx.fillStyle = dot.color; 
				var dbX = dot.x;
				var dbY = dot.y; 
				var dbR = dot.radius; 
				ctx.beginPath();
				ctx.arc(dbX, dbY, dbR, 0, 2 * Math.PI, false);
				ctx.fill();
				ctx.beginPath();
				ctx.arc(dbX, dot.startY, dbR, 0, 2 * Math.PI, false);
				ctx.strokeStyle = '#FFFFFF';
				ctx.stroke();
				
				ctx.beginPath();
				ctx.arc(dbX, dot.startY, dbR, 0, 2 * Math.PI, false);
				ctx.fill();
				
				ctx.fillStyle = "#FFFFFF"; 
				ctx.fillRect(dot.x - dot.radius - 5, dot.y, radiusSize * 2 + 5, dot.startY - dot.y); 
				
				ctx.fillStyle = dot.color; 
				ctx.fillRect(dot.x - dot.radius, dot.y - 2, radiusSize * 2 - 5, dot.startY - dot.y + 4); 
				
				ctx.beginPath();
				ctx.arc(dbX, dot.y, dbR, 0, 2 * Math.PI, false);
				ctx.strokeStyle = '#FFFFFF';
				ctx.stroke();
			}
		}); 
	}
	
    /* Background */	// Second Row
    /* Background */	for (var trc = 0; trc < 14; trc++) {
    /* Background */		ctx.fillStyle = "#333333"; 
    /* Background */		var centerX = offsetX + 3.8 / 3 * radiusSize + radiusSize + trc * radiusSize * 4 / 3; 
    /* Background */		var centerY = offsetY + radiusSize * 7 / 3 ; 
    /* Background */		ctx.beginPath();
    /* Background */		ctx.arc(centerX, centerY, radiusSize, 0, 2 * Math.PI, false);
    /* Background */		ctx.fill();
    /* Background */		ctx.lineWidth = 5 / 1;
    /* Background */		ctx.strokeStyle = '#FFFFFF';
    /* Background */		ctx.stroke();
    /* Background */		ctx.fillStyle = "#FFFFFF";
    /* Background */		ctx.font = (radiusSize * 2 / 3) + "px Arial"
    /* Background */		ctx.fillText(58 + trc, centerX - 0.5 * radiusSize, centerY - 0.25 * radiusSize); 
    /* Background */		gridCoordinates[58 + trc] = centerX + "," + centerY; 
    /* Background */	}
	
	if (rDots != null) {
		rDots.forEach(function (item, index, array) {
			var dot = item; 
			
			if (dot.enabled) 
			if (Math.abs(dot.startY - parseInt(gridCoordinates[58].split(",")[1])) < 5) {
				ctx.fillStyle = dot.color; 
				var dbX = dot.x;
				var dbY = dot.y; 
				var dbR = dot.radius; 
				ctx.beginPath();
				ctx.arc(dbX, dbY, dbR, 0, 2 * Math.PI, false);
				ctx.fill();
				ctx.beginPath();
				ctx.arc(dbX, dot.startY, dbR, 0, 2 * Math.PI, false);
				ctx.strokeStyle = '#FFFFFF';
				ctx.stroke();
				
				ctx.beginPath();
				ctx.arc(dbX, dot.startY, dbR, 0, 2 * Math.PI, false);
				ctx.fill();
				
				ctx.fillStyle = "#FFFFFF"; 
				ctx.fillRect(dot.x - dot.radius - 5, dot.y, radiusSize * 2 + 5, dot.startY - dot.y); 
				
				ctx.fillStyle = dot.color; 
				ctx.fillRect(dot.x - dot.radius, dot.y - 2, radiusSize * 2 - 5, dot.startY - dot.y + 4); 
				
				ctx.beginPath();
				ctx.arc(dbX, dot.y, dbR, 0, 2 * Math.PI, false);
				ctx.strokeStyle = '#FFFFFF';
				ctx.stroke();
			}
		}); 
	}
	
    /* Background */	// Third Row
    /* Background */	for (var trc = 0; trc < 15; trc++) {
    /* Background */		ctx.fillStyle = "#333333"; 
    /* Background */		var centerX = offsetX + radiusSize * 1.6 + trc * radiusSize * 4 / 3; 
    /* Background */		var centerY = offsetY + radiusSize * 11 / 3; 
    /* Background */		ctx.beginPath();
    /* Background */		ctx.arc(centerX, centerY, radiusSize, 0, 2 * Math.PI, false);
    /* Background */		ctx.fill();
    /* Background */		ctx.lineWidth = 5 / 1;
    /* Background */		ctx.strokeStyle = '#FFFFFF';
    /* Background */		ctx.stroke();
    /* Background */		ctx.fillStyle = "#FFFFFF";
    /* Background */		ctx.font = (radiusSize * 2 / 3) + "px Arial"
    /* Background */		ctx.fillText(43 + trc, centerX - 0.5 * radiusSize, centerY - 0.25 * radiusSize);
    /* Background */		gridCoordinates[43 + trc] = centerX + "," + centerY; 
    /* Background */	}
	
	if (rDots != null) {
		rDots.forEach(function (item, index, array) {
			var dot = item; 
			
			if (dot.enabled) 
			if (Math.abs(dot.startY - parseInt(gridCoordinates[43].split(",")[1])) < 5) {
				ctx.fillStyle = dot.color; 
				var dbX = dot.x;
				var dbY = dot.y; 
				var dbR = dot.radius; 
				ctx.beginPath();
				ctx.arc(dbX, dbY, dbR, 0, 2 * Math.PI, false);
				ctx.fill();
				ctx.beginPath();
				ctx.arc(dbX, dot.startY, dbR, 0, 2 * Math.PI, false);
				ctx.strokeStyle = '#FFFFFF';
				ctx.stroke();
				
				ctx.beginPath();
				ctx.arc(dbX, dot.startY, dbR, 0, 2 * Math.PI, false);
				ctx.fill();
				
				ctx.fillStyle = "#FFFFFF"; 
				ctx.fillRect(dot.x - dot.radius - 5, dot.y, radiusSize * 2 + 5, dot.startY - dot.y); 
				
				ctx.fillStyle = dot.color; 
				ctx.fillRect(dot.x - dot.radius, dot.y - 2, radiusSize * 2 - 5, dot.startY - dot.y + 4); 
				
				ctx.beginPath();
				ctx.arc(dbX, dot.y, dbR, 0, 2 * Math.PI, false);
				ctx.strokeStyle = '#FFFFFF';
				ctx.stroke();
			}
		}); 
	}
	
    /* Background */	// Fourth Row
    /* Background */	for (var trc = 0; trc < 14; trc++) {
    /* Background */		ctx.fillStyle = "#333333"; 
    /* Background */		var centerX = offsetX + 3.8 / 3 * radiusSize + radiusSize + trc * radiusSize * 4 / 3; 
    /* Background */		var centerY = offsetY + radiusSize * 15 / 3 ; 
    /* Background */		ctx.beginPath();
    /* Background */		ctx.arc(centerX, centerY, radiusSize, 0, 2 * Math.PI, false);
    /* Background */		ctx.fill();
    /* Background */		ctx.lineWidth = 5 / 1;
    /* Background */		ctx.strokeStyle = '#FFFFFF';
    /* Background */		ctx.stroke();
    /* Background */		ctx.fillStyle = "#FFFFFF";
    /* Background */		ctx.font = (radiusSize * 2 / 3) + "px Arial"
    /* Background */		ctx.fillText(29 + trc, centerX - 0.5 * radiusSize, centerY - 0.25 * radiusSize);
    /* Background */		gridCoordinates[29 + trc] = centerX + "," + centerY; 
    /* Background */	}
	
	if (rDots != null) {
		rDots.forEach(function (item, index, array) {
			var dot = item; 
			
			if (dot.enabled) 
			if (Math.abs(dot.startY - parseInt(gridCoordinates[29].split(",")[1])) < 5) {
				ctx.fillStyle = dot.color; 
				var dbX = dot.x;
				var dbY = dot.y; 
				var dbR = dot.radius; 
				ctx.beginPath();
				ctx.arc(dbX, dbY, dbR, 0, 2 * Math.PI, false);
				ctx.fill();
				ctx.beginPath();
				ctx.arc(dbX, dot.startY, dbR, 0, 2 * Math.PI, false);
				ctx.strokeStyle = '#FFFFFF';
				ctx.stroke();
				
				ctx.beginPath();
				ctx.arc(dbX, dot.startY, dbR, 0, 2 * Math.PI, false);
				ctx.fill();
				
				ctx.fillStyle = "#FFFFFF"; 
				ctx.fillRect(dot.x - dot.radius - 5, dot.y, radiusSize * 2 + 5, dot.startY - dot.y); 
				
				ctx.fillStyle = dot.color; 
				ctx.fillRect(dot.x - dot.radius, dot.y - 2, radiusSize * 2 - 5, dot.startY - dot.y + 4); 
				
				ctx.beginPath();
				ctx.arc(dbX, dot.y, dbR, 0, 2 * Math.PI, false);
				ctx.strokeStyle = '#FFFFFF';
				ctx.stroke();
			}
		}); 
	}
	
    /* Background */	// Fifth Row
    /* Background */	for (var trc = 0; trc < 15; trc++) {
    /* Background */		ctx.fillStyle = "#333333"; 
    /* Background */		var centerX = offsetX + radiusSize * 1.6 + trc * radiusSize * 4 / 3;
    /* Background */		var centerY = offsetY + radiusSize * 19 / 3; 
    /* Background */		ctx.beginPath();
    /* Background */		ctx.arc(centerX, centerY, radiusSize, 0, 2 * Math.PI, false);
    /* Background */		ctx.fill();
    /* Background */		ctx.lineWidth = 5 / 1;
    /* Background */		ctx.strokeStyle = '#FFFFFF';
    /* Background */		ctx.stroke();
    /* Background */		ctx.fillStyle = "#FFFFFF";
    /* Background */		ctx.font = (radiusSize * 2 / 3) + "px Arial"
    /* Background */		ctx.fillText(14 + trc, centerX - 0.5 * radiusSize, centerY - 0.25 * radiusSize);
    /* Background */		gridCoordinates[14 + trc] = centerX + "," + centerY; 
    /* Background */	}
	
	if (rDots != null) {
		rDots.forEach(function (item, index, array) {
			var dot = item; 
			
			if (dot.enabled) 
			if (Math.abs(dot.startY - parseInt(gridCoordinates[14].split(",")[1])) < 5) {
				ctx.fillStyle = dot.color; 
				var dbX = dot.x;
				var dbY = dot.y; 
				var dbR = dot.radius; 
				ctx.beginPath();
				ctx.arc(dbX, dbY, dbR, 0, 2 * Math.PI, false);
				ctx.fill();
				ctx.beginPath();
				ctx.arc(dbX, dot.startY, dbR, 0, 2 * Math.PI, false);
				ctx.strokeStyle = '#FFFFFF';
				ctx.stroke();
				
				ctx.beginPath();
				ctx.arc(dbX, dot.startY, dbR, 0, 2 * Math.PI, false);
				ctx.fill();
				
				ctx.fillStyle = "#FFFFFF"; 
				ctx.fillRect(dot.x - dot.radius - 5, dot.y, radiusSize * 2 + 5, dot.startY - dot.y); 
				
				ctx.fillStyle = dot.color; 
				ctx.fillRect(dot.x - dot.radius, dot.y - 2, radiusSize * 2 - 5, dot.startY - dot.y + 4); 
				
				ctx.beginPath();
				ctx.arc(dbX, dot.y, dbR, 0, 2 * Math.PI, false);
				ctx.strokeStyle = '#FFFFFF';
				ctx.stroke();
			}
		}); 
	}
	
    /* Background */	// Sixth Row
    /* Background */	for (var trc = 0; trc < 13; trc++) {
    /* Background */		ctx.fillStyle = "#333333"; 
    /* Background */		var centerX = offsetX + radiusSize * 2.9 + trc * radiusSize * 4 / 3; 
    /* Background */		var centerY = offsetY + radiusSize * 23 / 3; 
    /* Background */		ctx.beginPath();
    /* Background */		ctx.arc(centerX, centerY, radiusSize, 0, 2 * Math.PI, false);
    /* Background */		ctx.fill();
    /* Background */		ctx.lineWidth = 5 / 1;
    /* Background */		ctx.strokeStyle = '#FFFFFF';
    /* Background */		ctx.stroke();
    /* Background */		ctx.fillStyle = "#FFFFFF";
    /* Background */		ctx.font = (radiusSize * 2 / 3) + "px Arial"
    /* Background */		ctx.fillText(1 + trc, centerX - 0.5 * radiusSize, centerY - 0.25 * radiusSize);
    /* Background */		gridCoordinates[1 + trc] = centerX + "," + centerY; 
    /* Background */	}
	
	if (rDots != null) {
		rDots.forEach(function (item, index, array) {
			var dot = item; 
			
			if (dot.enabled) 
			if (Math.abs(dot.startY - parseInt(gridCoordinates[1].split(",")[1])) < 5) {
				ctx.fillStyle = dot.color; 
				var dbX = dot.x;
				var dbY = dot.y; 
				var dbR = dot.radius; 
				ctx.beginPath();
				ctx.arc(dbX, dbY, dbR, 0, 2 * Math.PI, false);
				ctx.fill();
				ctx.beginPath();
				ctx.arc(dbX, dot.startY, dbR, 0, 2 * Math.PI, false);
				ctx.strokeStyle = '#FFFFFF';
				ctx.stroke();
				
				ctx.beginPath();
				ctx.arc(dbX, dot.startY, dbR, 0, 2 * Math.PI, false);
				ctx.fill();
				
				ctx.fillStyle = "#FFFFFF"; 
				ctx.fillRect(dot.x - dot.radius - 5, dot.y, radiusSize * 2 + 5, dot.startY - dot.y); 
				
				ctx.fillStyle = dot.color; 
				ctx.fillRect(dot.x - dot.radius, dot.y - 2, radiusSize * 2 - 5, dot.startY - dot.y + 4); 
				
				ctx.beginPath();
				ctx.arc(dbX, dot.y, dbR, 0, 2 * Math.PI, false);
				ctx.strokeStyle = '#FFFFFF';
				ctx.stroke();
			}
		}); 
	}
	
						if (rDots != null) {
    /* Update bDot */		rDots.forEach(function (item, index, array) {
    /* Update bDot */			var dot = item; 
    /* Update bDot */			if (dot.enabled) {
    /* Update bDot */				dot.update(); 		// TODO : Implement garbage collector
    /* Update bDot */			}
    /* Update bDot */		}); 
    /* Update bDot */	}
	
	
	
	setTimeout(repaint, 1000/200); 
}

// This method helps update variables mouseX and mouseY for use in repaint(); 
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add event listener to the content canvas to add permanent dots after mouse release
contentContainer.addEventListener('mouseup', function(evt){
    evt.preventDefault(); 
	var mousePos = getMousePos(contentContainer, evt); 
    var mouseX; var mouseY; 
	mouseX = mousePos.x; 
    mouseY = mousePos.y;
    var canvas = document.getElementById('contentContainer');
    var drawHH = canvas.height; 
	var drawWW = canvas.width;  
    var radiusSize; 
    var r1 = parseInt((drawWW * 2 / 3) / 16); 
    var r2 = parseInt((drawHH * 2 / 3) / 6); 
    if (r1 < r2) 
    	radiusSize = r1; 
    else
    	radiusSize = r2; 
    gridCoordinates.forEach(function (item, index, array) {
    	var dD = Math.round(0.75 * radiusSize);  
    	// Get the grid X and grid Y from splitting the string
    	var coord = item.split(","); 
        var coordX = coord[0]; 
        var coordY = coord[1];  
        // Mouse coordinates
        var dX = mouseX - Math.round(coordX); 
        var dY = mouseY - Math.round(coordY); 
        // Distance formula
        if (dD * dD >= (dX * dX + dY * dY)) {
        	// Toggle the dot
			//rDots.push(new raisedDot(coordX, coordY, radiusSize, getRandomColor())); 
			var mySong = new playBack(index + 33); 
			mySong.play(); 
        }
    });

}, false); 

function pushRDot(note) {
	var canvas = document.getElementById('contentContainer');
    var drawHH = canvas.height; 
	var drawWW = canvas.width;  
    var radiusSize; 
    var r1 = parseInt((drawWW * 2 / 3) / 16); 
    var r2 = parseInt((drawHH * 2 / 3) / 6); 
    if (r1 < r2) 
    	radiusSize = r1; 
    else
    	radiusSize = r2; 
	gridCoordinates.forEach(function (item, index, array) { 
    	// Get the grid X and grid Y from splitting the string
    	var coord = item.split(","); 
        var coordX = coord[0]; 
        var coordY = coord[1];  
        // Mouse coordinates
        if (index==note) {
			rDots.push(new raisedDot(coordX, coordY, radiusSize, getRandomColor())); 
        }
    });
}

// Fire the first frame render
repaint(); 
