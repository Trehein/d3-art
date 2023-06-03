var d3Art16SidedBox = document.getElementById("d3Art16SidedBox").getBoundingClientRect();
var w = d3Art16SidedBox.width;
var h = d3Art16SidedBox.height;

var center = w/2;
var longSide = center - center/2;
var shortSide = (longSide * (Math.sin(11.25*Math.PI/180) / Math.sin(90*Math.PI/180))) * 2;
var outsideRise = shortSide * (Math.sin(11.25*Math.PI/180));
var outsideRun = shortSide * (Math.cos(11.25*Math.PI/180));
var insideRise = shortSide * (Math.sin(29.75*Math.PI/180));
var insideRun = shortSide * (Math.cos(29.75*Math.PI/180));

console.log('short side: ' + shortSide)

var triangleData = [
  //tri1
  [
    [
      {'x': center, 'y':longSide},
      {'x': center + outsideRun, 'y': longSide + outsideRise },
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri2
  [
    [
      {'x': center + outsideRun, 'y': longSide + outsideRise },
      {'x': center + outsideRun + insideRun, 'y': longSide + outsideRise + insideRise},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri3
  [
    [
      {'x': center + outsideRun + insideRun, 'y': longSide + outsideRise + insideRise},
      {'x': center + outsideRun + insideRun + insideRise, 'y': longSide + outsideRise + insideRise + insideRun},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri4
  [
    [
      {'x': center + outsideRun + insideRun + insideRise, 'y': longSide + outsideRise + insideRise + insideRun},
      {'x': center + outsideRun + insideRun + insideRise + outsideRise, 'y': center},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri5
  [
    [
      {'x': center + outsideRun + insideRun + insideRise + outsideRise, 'y': center},
      {'x': center + outsideRun + insideRun + insideRise, 'y': center + outsideRun},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri6
  [
    [
      {'x': center + outsideRun + insideRun + insideRise, 'y': center + outsideRun},
      {'x': center + outsideRun + insideRun, 'y': center + outsideRun + insideRun},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri7
  [
    [
      {'x': center + outsideRun + insideRun, 'y': center + outsideRun + insideRun},
      {'x': center + outsideRun, 'y': center + longSide - outsideRise},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri8
  [
    [
      {'x': center + outsideRun, 'y': center + longSide - outsideRise},
      {'x': center, 'y': center + longSide},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri9
  [
    [
      {'x': center, 'y': center + longSide},
      {'x': center - outsideRun, 'y': center + longSide - outsideRise},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri10
  [
    [
      {'x': center - outsideRun - insideRun, 'y': center + outsideRun + insideRun},
      {'x': center - outsideRun, 'y': center + longSide - outsideRise},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri11
  [
    [
      {'x': center - outsideRun - insideRun - insideRise, 'y': center + outsideRun},
      {'x': center - outsideRun - insideRun, 'y': center + outsideRun + insideRun},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri12
  [
    [
      {'x': center - outsideRun - insideRun - insideRise - outsideRise, 'y': center},
      {'x': center - outsideRun - insideRun - insideRise, 'y': center + outsideRun},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri13
  [
    [
      {'x': center - outsideRun - insideRun - insideRise, 'y': longSide + outsideRise + insideRise + insideRun},
      {'x': center - outsideRun - insideRun - insideRise - outsideRise, 'y': center},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri14
  [
    [
      {'x': center - outsideRun - insideRun, 'y': longSide + outsideRise + insideRise},
      {'x': center - outsideRun - insideRun - insideRise, 'y': longSide + outsideRise + insideRise + insideRun},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri15
  [
    [
      {'x': center - outsideRun, 'y': longSide + outsideRise },
      {'x': center - outsideRun - insideRun, 'y': longSide + outsideRise + insideRise},
      {'x': center, 'y': center}
    ],
    [
      {'x': 20, 'y':20}
    ]
  ],
  //tri16
  [
    [
      {'x': center, 'y':longSide},
      {'x': center - outsideRun, 'y': longSide + outsideRise },
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

var svg = d3.select("#d3Art16SidedBox")
  .append("svg")
  .attr("width", w)
  .attr("height", h)

var tri1 = d3.select('svg')
  .append('path')
  .datum(triangleData[0][0])
  .attr('class', 'tri1')
  .attr('d', line)
  .attr('fill', '#F44336')

var tri2 = d3.select('svg')
  .append('path')
  .datum(triangleData[1][0])
  .attr('class', 'tri2')
  .attr('d', line)
  .attr('fill', '#E91E63')

var tri3 = d3.select('svg')
  .append('path')
  .datum(triangleData[2][0])
  .attr('class', 'tri3')
  .attr('d', line)
  .attr('fill', '#9C27B0')

var tri4 = d3.select('svg')
  .append('path')
  .datum(triangleData[3][0])
  .attr('class', 'tri4')
  .attr('d', line)
  .attr('fill', '#673AB7')

var tri5 = d3.select('svg')
  .append('path')
  .datum(triangleData[4][0])
  .attr('class', 'tri5')
  .attr('d', line)
  .attr('fill', '#3F51B5')

var tri6 = d3.select('svg')
  .append('path')
  .datum(triangleData[5][0])
  .attr('class', 'tri6')
  .attr('d', line)
  .attr('fill', '#2196F3')

var tri7 = d3.select('svg')
  .append('path')
  .datum(triangleData[6][0])
  .attr('class', 'tri7')
  .attr('d', line)
  .attr('fill', '#03A9F4')

var tri8 = d3.select('svg')
  .append('path')
  .datum(triangleData[7][0])
  .attr('class', 'tri8')
  .attr('d', line)
  .attr('fill', '#00BCD4')

var tri9 = d3.select('svg')
  .append('path')
  .datum(triangleData[8][0])
  .attr('class', 'tri9')
  .attr('d', line)
  .attr('fill', '#009688')

var tri10 = d3.select('svg')
  .append('path')
  .datum(triangleData[9][0])
  .attr('class', 'tri10')
  .attr('d', line)
  .attr('fill', '#4CAF50')

var tri11 = d3.select('svg')
  .append('path')
  .datum(triangleData[10][0])
  .attr('class', 'tri11')
  .attr('d', line)
  .attr('fill', '#8BC34A')

var tri12 = d3.select('svg')
  .append('path')
  .datum(triangleData[11][0])
  .attr('class', 'tri12')
  .attr('d', line)
  .attr('fill', '#CDDC39')

var tri13 = d3.select('svg')
  .append('path')
  .datum(triangleData[12][0])
  .attr('class', 'tri13')
  .attr('d', line)
  .attr('fill', '#FFEB3B')

var tri14 = d3.select('svg')
  .append('path')
  .datum(triangleData[13][0])
  .attr('class', 'tri14')
  .attr('d', line)
  .attr('fill', '#FFC107')

var tri15 = d3.select('svg')
  .append('path')
  .datum(triangleData[14][0])
  .attr('class', 'tri15')
  .attr('d', line)
  .attr('fill', '#FF9800')

var tri16 = d3.select('svg')
  .append('path')
  .datum(triangleData[15][0])
  .attr('class', 'tri16')
  .attr('d', line)
  .attr('fill', '#FF5722')


























//
