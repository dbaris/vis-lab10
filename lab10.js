const statistics = {"header": ["Program Description" , "Number"],
                    "values": [{"program": "College of Liberal Arts", "number": 22},
                               {"program": "Graduate Engineering", "number": 7},
                               {"program": "School of Engineering", "number": 8}]};


//ToDo (2): Learn how you access each value.
console.log(statistics);


//ToDo (3): Draw on a sheet of paper what your resulting DOM tree looks like.
let container = document.getElementById("container");

const svgns = "http://www.w3.org/2000/svg";

let svg = document.createElementNS(svgns, "svg");
svg.setAttribute("width", 500);
svg.setAttribute("height", 500);
container.appendChild(svg);

let chart = document.createElementNS(svgns, "g");
chart.setAttribute("id", "pie-chart");
svg.appendChild(chart);


//ToDo (4): Construct the pie chart.
//          If needed, introduce other data structures,
//          variables, etc. for your convenience.

var x1 = 250 - 200 * Math.cos(0.59435529614);
var y1 = 250 - 200 * Math.sin(0.59435529614);
var x2 = 250 + 200 * Math.sin(0.2122697031358326);
var y2 = 250 - 200 * Math.cos(0.2122697031358326);
// var x3 = 250 + 200 * Math.cos(1.3585265529036945);
// var y3 = 250 - 200 * Math.sin(1.3585265529036945);

let pathDescriptions = ["M250,250 L450,250 A200,200 0 1,1 " + x1 + "," + y1 + " z", 
						"M250,250 L" + x1 + "," + y1 + " A200,200 0 0,1 " + x2 + "," + y2 + " z",
						"M250,250 L" + x2 + "," + y2 + " A200,200 0 0,1 450, 250 z"];

let colors = ["green", "purple", "orange"];


for (var i = 0; i < 3; i++) {
	let path = document.createElementNS(svgns, "path");
	path.setAttribute("d", pathDescriptions[i]);
	path.setAttribute("stroke", "black");
	path.setAttribute("fill", colors[i]);
	path.setAttribute("id", i);


	path.addEventListener("mouseover", function(event){
		document.getElementById("label").innerHTML = statistics["values"][path.getAttribute("id")]["program"] + ": " + statistics["values"][path.getAttribute("id")]["number"];
	    path.setAttribute("fill", "yellow");
    });

	path.addEventListener("mouseleave", function(event){
		// console.log(event);
		document.getElementById("label").innerHTML = "<br >";
		path.setAttribute("fill", colors[path.getAttribute("id")]);
	});

	chart.appendChild(path);
}

// console.log(pathDescriptions);


// console.log(container);
