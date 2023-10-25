## Plotly.js

- `Plotly.js is a charting library that comes with over 40 chart types, 3D charts, statistical graphs, and SVG maps.`





### Scatter Plots

```js
var xArray = [50,60,70,80,90,100,110,120,130,140,150];
var yArray = [7,8,8,9,9,9,10,11,14,14,15];

// Define Data
var data = [
    {
        x: xArray,
        y: yArray,
        mode:"markers",
        type:"scatter"
    }
];

// Define Layout
var layout = {
    title: "House Prices vs. Size",
    xaxis: {
        range: [40, 160], 
        title: "Square Meters"
    },
    yaxis: {
        range: [5, 16],
        title: "Price in Millions"
    }
};
Plotly.newPlot("myPlot", data, layout);

<body>
	<div id="myPlot" style="width:100%;max-width:700px"></div>
	<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</body>
```





### Bar Charts

```js
var xArray = ["Italy","France","Spain","USA","Argentina"];
var yArray = [55, 49, 44, 24, 15];

var data = [
    {
        x : xArray,
        y : yArray,
        type : "bar"  
    }
];
var layout = {
    title : "World Wide Wine Production"
}

Plotly.newPlot("myPlot", data, layout);

<body>
	<div id="myPlot" style="width:100%;max-width:700px"></div>
	<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</body>
```







### Horizontal Bar Charts

```js
var xArray = [55, 49, 44, 24, 15];
var yArray = ["Italy","France","Spain","USA","Argentina"];

var data = [{
    x: xArray,
    y: yArray,
    type: "bar",
    orientation: "h"
}];

var layout = {title:"World Wide Wine Production"};

Plotly.newPlot("myPlot", data, layout);

<body>
	<div id="myPlot" style="width:100%;max-width:700px"></div>
	<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</body>
```





### Pie Charts

```js
var xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
var yArray = [55, 49, 44, 24, 15];

var layout = {
    title:"World Wide Wine Production"
};

var data = [{
    labels : xArray,
    values : yArray,
    type:"pie"
}];

Plotly.newPlot("myPlot", data, layout);

<body>
	<div id="myPlot" style="width:100%;max-width:700px"></div>
	<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</body>
```





### Donut Charts

```js
var xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
var yArray = [55, 49, 44, 24, 15];

var layout = {
    title:"World Wide Wine Production"
};

var data = [{
    labels : xArray,
    values : yArray,    
    hole : .4,
    type : "pie"
}];

Plotly.newPlot("myPlot", data, layout);
<body>
	<div id="myPlot" style="width:100%;max-width:700px"></div>
	<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</body>
```





### Line Graphs

```js
var xArray = [50,60,70,80,90,100,110,120,130,140,150];
var yArray = [7,8,8,9,9,9,10,11,14,14,15];

// Define Data
var data = [
    {
        x: xArray,
        y: yArray,
        mode: "lines",
        type: "scatter"
    }
];

// Define Layout
var layout = {
    title: "House Prices vs Size",
    xaxis: {
      range: [40, 160],
      title: "Square Meters"
    },
    yaxis: {
        range: [5, 16],
        title: "Price in Millions"
    }
}
// Display using Plotly
Plotly.newPlot("myPlot", data, layout);

<body>
    <div id="myPlot" style="width:100%;max-width:700px"></div>
	<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</body>
```





### Linear Graphs

```js
var exp = "x + 17";

// Generate values
var xValues = [];
var yValues = [];
for (var x = 0; x <= 10; x += 1) {
  yValues.push(eval(exp));
  xValues.push(x);
}

// Define Data
var data = [{
  x: xValues,
  y: yValues,
  mode: "lines"
}];

// Define Layout
var layout = {title: "y = " + exp};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);

<body>
    <div id="myPlot" style="width:100%;max-width:700px"></div>
	<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</body>
```





#### Multiple Lines

```js
var exp1 = "x";
var exp2 = "1.5*x";
var exp3 = "1.5*x + 7";

// Generate values

var x1Values = [];
var x2Values = [];
var x3Values = [];
var y1Values = [];
var y2Values = [];
var y3Values = [];

for (var x = 0; x <= 10; x += 1) {
  x1Values.push(x);
  x2Values.push(x);
  x3Values.push(x);
  y1Values.push(eval(exp1));
  y2Values.push(eval(exp2));
  y3Values.push(eval(exp3));
}

// Define Data
var data = [
  {x: x1Values, y: y1Values, mode:"lines"},
  {x: x2Values, y: y2Values, mode:"lines"},
  {x: x3Values, y: y3Values, mode:"lines"}
];

// Define Layout
var layout = {title: "[y=" + exp1 + "] [y=" + exp2 + "] [y=" + exp3 + "]"};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);


<body>
    <div id="myPlot" style="width:100%;max-width:700px"></div>
	<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</body>
```





### Plotting Equations

```js
var exp = "Math.sin(x)";

// Generate values
var xValues = [];
var yValues = [];
for (var x = 0; x <= 10; x += 0.1) {
    xValues.push(x);
    yValues.push(eval(exp));
}

// Display using Plotly
var data = [{
    x : xValues, y : yValues,
    mode : "lines"
}];
var layout = {title: "y = " + exp};
Plotly.newPlot("myPlot", data, layout);
```

