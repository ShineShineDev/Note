### Google Chart

- `From simple line charts to complex hierarchical tree maps, the Google Chart gallery provides a large number of ready-to-use chart types`
  - `Scatter Chart`
  - `Line Chart`
  - `Bar / Column Chart`
  - `Area Chart`
  - `Pie Chart`
  - `Donut Chart`
  - `Org Chart`
  - `Map / Geo Chart`





### Add a link

```js
<script src="https://www.gstatic.com/charts/loader.js"></script>
```





### add a <div> element 

- `The <div> element must have a unique id.`

  ```js
  <div id="myChart" style="max-width:700px; height:400px"></div>
  ```

  



### Line Graph

- `Load the Visualization API and the corechart package`

- `Set a callback function to call when the API is loaded`

  ```js
  google.charts.load('current',{packages:['corechart']}); //Load the Visualization API and the corechart package
  
  google.charts.setOnLoadCallback(drawChart); //Set a callback function to call when the API is loaded
  
  function drawChart() {
      // Set Data
      let data = google.visualization.arrayToDataTable([
          ['Price', 'Size'],
          [50,7],[60,8],[70,8],[80,9],[90,9],
          [100,9],[110,10],[120,11],
          [130,14],[140,14],[150,15]
      ]);
      // Set Options
      let options = {
          title: 'House Prices vs. Size',
          hAxis: {title: 'Square Meters'},
          vAxis: {title: 'Price in Millions'},
          legend: 'none'
      };
      // Draw
      let chart = new google.visualization.LineChart(document.getElementById('myChart'));
      chart.draw(data, options);
  }
  ```







### Scatter Plots

- `To scatter plot the same data, change google.visualization to ScatterChart`

  ```js
  google.charts.load('current',{packages:['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {
      // Set Data
      let data = google.visualization.arrayToDataTable([
          ['Price', 'Size'],
          [50,7],[60,8],[70,8],[80,9],[90,9],
          [100,9],[110,10],[120,11],
          [130,14],[140,14],[150,15]
      ]);
      // Set Options
      let options = {
          title: 'House Prices vs. Size',
          hAxis: {title: 'Square Meters'},
          vAxis: {title: 'Price in Millions'},
          legend: 'none'
      };
      // Draw
      let chart = new google.visualization.ScatterChart(document.getElementById('myChart'));
      chart.draw(data, options);
  }
  ```

  
  
  
  
  ​	

### Bar Charts

```js
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    let data = google.visualization.arrayToDataTable([
        ['Contry', 'Mhl'],
        ['Italy',55],
        ['France',49],
        ['Spain',44],
        ['USA',24],
        ['Argentina',15]
    ]);
    let options = {
        title:'World Wide Wine Production'
    };
    let chart = new google.visualization.BarChart(document.getElementById('myChart'));
    chart.draw(data, options);
}
```





### Pie Charts

- `To convert a Bar Chart to a Pie chart, just replace google.visualization.BarChart with google.visualization.PieChart`

  ```js
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {
      let data = google.visualization.arrayToDataTable([
          ['Contry', 'Mhl'],
          ['Italy',55],
          ['France',49],
          ['Spain',44],
          ['USA',24],
          ['Argentina',15]
      ]);
      let options = {
          title:'World Wide Wine Production'
      };
      let chart = new google.visualization.PieChart(document.getElementById('myChart'));
      chart.draw(data, options);
  }
  ```

  



### 3D Pie

- `To display the Pie in 3D, just add is3D true to the options`

  ```js
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {
      let data = google.visualization.arrayToDataTable([
          ['Contry', 'Mhl'],
          ['Italy',54.8],
          ['France',48.6],
          ['Spain',44.4],
          ['USA',23.9],
          ['Argentina',14.5]
      ]);
      let options = {
          title:'World Wide Wine Production',
          is3D:true
      };
      
      let chart = new google.visualization.PieChart(document.getElementById('myChart'));
      chart.draw(data, options);
  }
  ```

  
