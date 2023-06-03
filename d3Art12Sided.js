var d3Art12SidedBox = document.getElementById("d3Art12SidedBox").getBoundingClientRect();
var w = d3Art12SidedBox.width;
var h = d3Art12SidedBox.height;

var center = w/2;
var longSide = center - center/2;
var shortSide = (longSide * (Math.sin(15*Math.PI/180) / Math.sin(90*Math.PI/180))) * 2;
var rise = shortSide * (Math.sin(15*Math.PI/180));
var run = shortSide * (Math.cos(15*Math.PI/180));
var equaSide = shortSide/Math.SQRT2

console.log('long side: ' + longSide)
console.log('short side: ' + shortSide)
console.log('rise: ' + rise)
console.log('run: ' + run)
console.log('equaSide: ' + equaSide)

var triangleData = [
  //tri1
  [
    [
      {'x': center, 'y':longSide},
      {'x': center + run, 'y': longSide + rise },
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri2
  [
    [
      {'x': center + run, 'y': longSide + rise },
      {'x': center + run + equaSide, 'y': longSide + rise + equaSide },
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri3
  [
    [
      {'x': center + run + equaSide, 'y': longSide + rise + equaSide },
      {'x': center + longSide, 'y': center },
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri4
  [
    [
      {'x': center + longSide, 'y': center },
      {'x': center + run + equaSide, 'y': center + equaSide + rise},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri5
  [
    [
      {'x': center + run + equaSide, 'y': center + equaSide + rise},
      {'x': center + run, 'y': center + equaSide + run},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri6
  [
    [
      {'x': center + run, 'y': center + equaSide + run},
      {'x': center, 'y': center + longSide},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri7
  [
    [
      {'x': center, 'y': center + longSide},
      {'x': center - run, 'y': center + equaSide + run},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri8
  [
    [
      {'x': center - run - equaSide, 'y': center + equaSide + rise},
      {'x': center - run, 'y': center + equaSide + run},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri9
  [
    [
      {'x': center - longSide, 'y': center },
      {'x': center - run - equaSide, 'y': center + equaSide + rise},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri10
  [
    [
      {'x': center - run - equaSide, 'y': longSide + rise + equaSide },
      {'x': center - longSide, 'y': center },
      {'x': center, 'y': center}       ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri11
  [
    [
      {'x': center - run, 'y': longSide + rise },
      {'x': center - run - equaSide, 'y': longSide + rise + equaSide },
      {'x': center, 'y': center}    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri12
  [
    [
      {'x': center, 'y':longSide},
      {'x': center - run, 'y': longSide + rise },
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ]
]

var line = d3.line()
  .x(function(d) { return d.x; })
  .y(function(d) { return d.y; })

var svg = d3.select("#d3Art12SidedBox")
  .append("svg")
  .attr("width", w)
  .attr("height", h)

var tri1 = d3.select('svg')
  .append('path')
  .datum(triangleData[0][0])
  .attr('class', 'tri1')
  .attr('d', line)
  .attr('fill', 'red')

var tri2 = d3.select('svg')
  .append('path')
  .datum(triangleData[1][0])
  .attr('class', 'tri2')
  .attr('d', line)
  .attr('fill', 'orange')

var tri3 = d3.select('svg')
  .append('path')
  .datum(triangleData[2][0])
  .attr('class', 'tri3')
  .attr('d', line)
  .attr('fill', 'yellow')

var tri4 = d3.select('svg')
  .append('path')
  .datum(triangleData[3][0])
  .attr('class', 'tri4')
  .attr('d', line)
  .attr('fill', 'green')

var tri5 = d3.select('svg')
  .append('path')
  .datum(triangleData[4][0])
  .attr('class', 'tri5')
  .attr('d', line)
  .attr('fill', 'blue')

var tri6 = d3.select('svg')
  .append('path')
  .datum(triangleData[5][0])
  .attr('class', 'tri6')
  .attr('d', line)
  .attr('fill', 'purple')

var tri7 = d3.select('svg')
  .append('path')
  .datum(triangleData[6][0])
  .attr('class', 'tri7')
  .attr('d', line)
  .attr('fill', 'red')

var tri8 = d3.select('svg')
  .append('path')
  .datum(triangleData[7][0])
  .attr('class', 'tri8')
  .attr('d', line)
  .attr('fill', 'orange')

var tri9 = d3.select('svg')
  .append('path')
  .datum(triangleData[8][0])
  .attr('class', 'tri9')
  .attr('d', line)
  .attr('fill', 'yellow')

var tri10 = d3.select('svg')
  .append('path')
  .datum(triangleData[9][0])
  .attr('class', 'tri10')
  .attr('d', line)
  .attr('fill', 'green')

var tri11 = d3.select('svg')
  .append('path')
  .datum(triangleData[10][0])
  .attr('class', 'tri11')
  .attr('d', line)
  .attr('fill', 'blue')

var tri12 = d3.select('svg')
  .append('path')
  .datum(triangleData[11][0])
  .attr('class', 'tri12')
  .attr('d', line)
  .attr('fill', 'purple')























//
