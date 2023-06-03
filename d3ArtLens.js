const d3ArtLensBox = document.getElementById("d3ArtLensBox").getBoundingClientRect();
let w = d3ArtLensBox.width;
let h = d3ArtLensBox.height;

var center = w/2;
var hyp = center - center/2;

var tri1Data = [
  {'x':center, 'y':hyp},
  {'x':center + (hyp/2)*Math.sqrt(3), 'y': center - (hyp/2)},
  {'x':center, 'y':center}
]

var tri1TransitionData = [
  {'x':center, 'y':hyp},
  {'x':center + (hyp/2)*Math.sqrt(3), 'y': center - (hyp/2)},
  {'x':center + (hyp/2)*Math.sqrt(3), 'y': center + (hyp/2)},
]

var tri2Data = [
  {'x':center + (hyp/2)*Math.sqrt(3), 'y': center - (hyp/2)},
  {'x':center + (hyp/2)*Math.sqrt(3), 'y': center + (hyp/2)},
  {'x':center, 'y':center}
]

var tri2TransitionData = [
  {'x':center + (hyp/2)*Math.sqrt(3), 'y': center - (hyp/2)},
  {'x':center + (hyp/2)*Math.sqrt(3), 'y': center + (hyp/2)},
  {'x':center, 'y':center + hyp},
]

var tri3Data = [
  {'x':center + (hyp/2)*Math.sqrt(3), 'y': center + (hyp/2)},
  {'x':center, 'y':center + hyp},
  {'x':center, 'y':center}
]

var tri3TransitionData = [
  {'x':center + (hyp/2)*Math.sqrt(3), 'y': center + (hyp/2)},
  {'x':center, 'y':center + hyp},
  {'x':center - (hyp/2)*Math.sqrt(3), 'y': center + (hyp/2)},
]

var tri4Data = [
  {'x':center, 'y':center + hyp},
  {'x':center - (hyp/2)*Math.sqrt(3), 'y': center + (hyp/2)},
  {'x':center, 'y':center}
]

var tri4TransitionData = [
  {'x':center, 'y':center + hyp},
  {'x':center - (hyp/2)*Math.sqrt(3), 'y': center + (hyp/2)},
  {'x':center - (hyp/2)*Math.sqrt(3), 'y': center - (hyp/2)},
]

var tri5Data = [
  {'x':center - (hyp/2)*Math.sqrt(3), 'y': center + (hyp/2)},
  {'x':center - (hyp/2)*Math.sqrt(3), 'y': center - (hyp/2)},
  {'x':center, 'y':center}
]

var tri5TransitionData = [
  {'x':center - (hyp/2)*Math.sqrt(3), 'y': center + (hyp/2)},
  {'x':center - (hyp/2)*Math.sqrt(3), 'y': center - (hyp/2)},
  {'x':center, 'y':hyp},
]

var tri6Data = [
  {'x':center - (hyp/2)*Math.sqrt(3), 'y': center - (hyp/2)},
  {'x':center, 'y':hyp},
  {'x':center, 'y':center}
]

var tri6TransitionData = [
  {'x':center - (hyp/2)*Math.sqrt(3), 'y': center - (hyp/2)},
  {'x':center, 'y':hyp},
  {'x':center + (hyp/2)*Math.sqrt(3) - 57, 'y': center - (hyp/2)},
]

var line = d3.line()
  .x(function(d) { return d.x; })
  .y(function(d) { return d.y; })

let svg = d3.select("#d3ArtLensBox")
  .append("svg")
  .attr("width", w)
  .attr("height", h)

let tri1 = d3.select('svg')
  .append('path')
  .datum(tri1Data)
  .attr('class', 'tri1')
  .attr('d', line)
  .attr('fill', 'red')

let tri2 = d3.select('svg')
  .append('path')
  .datum(tri2Data)
  .attr('class', 'tri2')
  .attr('d', line)
  .attr('fill', 'orange')

let tri3 = d3.select('svg')
  .append('path')
  .datum(tri3Data)
  .attr('class', 'tri3')
  .attr('d', line)
  .attr('fill', 'yellow')

let tri4 = d3.select('svg')
  .append('path')
  .datum(tri4Data)
  .attr('class', 'tri4')
  .attr('d', line)
  .attr('fill', 'green')

let tri5 = d3.select('svg')
  .append('path')
  .datum(tri5Data)
  .attr('class', 'tri5')
  .attr('d', line)
  .attr('fill', 'blue')

let tri6 = d3.select('svg')
  .append('path')
  .datum(tri6Data)
  .attr('class', 'tri6')
  .attr('d', line)
  .attr('fill', 'purple')

let reset = 'false'

let button = d3.select('svg')
  .append('circle')
  .attr('cx', w - 30)
  .attr('cy', h - 30)
  .attr('r', 15)
  .attr('fill', 'green')
  .style("cursor", "pointer")
  .on("click", triangleSwitch);

function triangleSwitch() {
  d3.select(this)
    .transition()
    .attr("r", 0)
    .transition()
    .attr('r', 15)
  if(reset === 'false') {
    changeTri()
    reset = 'true'
  } else {
    changeBack()
    reset = 'false'
  }
}

function changeTri() {
  triTransition(tri1TransitionData, '.tri1')
  triTransition(tri2TransitionData, '.tri2')
  triTransition(tri3TransitionData, '.tri3')
  triTransition(tri4TransitionData, '.tri4')
  triTransition(tri5TransitionData, '.tri5')
  triTransition(tri6TransitionData, '.tri6')
}

function changeBack() {
  triTransition(tri1Data, '.tri1')
  triTransition(tri2Data, '.tri2')
  triTransition(tri3Data, '.tri3')
  triTransition(tri4Data, '.tri4')
  triTransition(tri5Data, '.tri5')
  triTransition(tri6Data, '.tri6')
}

function triTransition(data, tri) {
  d3.select(tri)
    .datum(data)
    .transition()
    .duration(500)
    .attr('d', line)
}
