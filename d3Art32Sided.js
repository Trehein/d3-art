var d3Art32SidedBox = document.getElementById("d3Art32SidedBox").getBoundingClientRect();
var w = d3Art32SidedBox.width;
var h = d3Art32SidedBox.height;

var colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722']

var center = w/2;
var longSide = center - center/2;

var sides = 50;
var quarter = sides/4;
var angle = 360/sides;

var data = [];

function calcTriData(angle, hyp, center) {

  var currentAngle;
  var prevAngle;
  var prevRun;
  var currentRun;
  var prevRise;
  var currentRise;

  for (var i = 0; i < sides; i++) {
    if (i < quarter) {
      data.push([[],[]]);
      prevAngle = 90 - (angle * i);
      currentAngle = 90 - angle - (angle * i);

      prevRun = hyp * (Math.cos(prevAngle*Math.PI/180))
      prevRise = hyp * (Math.sin(prevAngle*Math.PI/180))

      currentRun = hyp * (Math.cos(currentAngle*Math.PI/180))
      currentRise = hyp * (Math.sin(currentAngle*Math.PI/180))

      if(i === 0) {
        data[0][0].push(
          {'x': center, 'y': center - hyp},
          {'x': center + currentRun, 'y': center - currentRise},
          {'x': center, 'y': center}
        )
      } else {
        data[i][0].push(
          {'x': center + prevRun, 'y': center - prevRise},
          {'x': center + currentRun, 'y': center - currentRise},
          {'x': center, 'y': center}
        )
      }
    } else if (i >= quarter && i < quarter * 2) {
      data.push([[],[]]);
      prevAngle = 90 - (angle * (i - quarter));
      currentAngle = 90 - angle - (angle * (i - quarter));

      prevRun = hyp * (Math.sin(prevAngle*Math.PI/180))
      prevRise = hyp * (Math.cos(prevAngle*Math.PI/180))

      currentRun = hyp * (Math.sin(currentAngle*Math.PI/180))
      currentRise = hyp * (Math.cos(currentAngle*Math.PI/180))

      if(i === quarter) {
        data[i][0].push(
          {'x': center + hyp, 'y': center},
          {'x': center + currentRun, 'y': center + currentRise},
          {'x': center, 'y': center}
        )
      } else (
        data[i][0].push(
          {'x': center + prevRun, 'y': center + prevRise},
          {'x': center + currentRun, 'y': center + currentRise},
          {'x': center, 'y': center}
        )
      )
    } else if (i >= quarter * 2 && i < quarter * 3) {
      data.push([[],[]]);
      prevAngle = 90 - (angle * i);
      currentAngle = 90 - angle - (angle * i);

      prevRun = hyp * (Math.cos(prevAngle*Math.PI/180))
      prevRise = hyp * (Math.sin(prevAngle*Math.PI/180))

      currentRun = hyp * (Math.cos(currentAngle*Math.PI/180))
      currentRise = hyp * (Math.sin(currentAngle*Math.PI/180))

      if(i === quarter * 2) {
        data[i][0].push(
          {'x': center, 'y': center + hyp},
          {'x': center + currentRun, 'y': center - currentRise},
          {'x': center, 'y': center}
        )
      } else {
        data[i][0].push(
          {'x': center + prevRun, 'y': center - prevRise},
          {'x': center + currentRun, 'y': center - currentRise},
          {'x': center, 'y': center}
        )
      }
    } else {
      data.push([[],[]])
      prevAngle = 90 - (angle * (i - quarter));
      currentAngle = 90 - angle - (angle * (i - quarter));

      prevRun = hyp * (Math.sin(prevAngle*Math.PI/180))
      prevRise = hyp * (Math.cos(prevAngle*Math.PI/180))

      currentRun = hyp * (Math.sin(currentAngle*Math.PI/180))
      currentRise = hyp * (Math.cos(currentAngle*Math.PI/180))

      if(i === quarter) {
        data[i][0].push(
          {'x': center - hyp, 'y': center},
          {'x': center - currentRun, 'y': center + currentRise},
          {'x': center, 'y': center}
        )
      } else (
        data[i][0].push(
          {'x': center + prevRun, 'y': center + prevRise},
          {'x': center + currentRun, 'y': center + currentRise},
          {'x': center, 'y': center}
        )
      )
    }
  }
}

calcTriData(angle, longSide, center);

console.log(data)

var line = d3.line()
  .x(function(d) { return d.x; })
  .y(function(d) { return d.y; })

var svg = d3.select("#d3Art32SidedBox")
  .append("svg")
  .attr("width", w)
  .attr("height", h)

function drawTris() {
  for (var i = 0; i < sides; i++) {
    var colorReset = Math.floor(i/16);
    var varName = 'tri' + i;
    varName = d3.select('svg')
      .append('path')
      .datum(data[i][0])
      .attr('class', varName)
      .attr('d', line)
      .attr('fill', function(d) {
        var colorPicker = i - colors.length * colorReset;
        return colors[colorPicker]
      })
  }
}

drawTris()

















//
