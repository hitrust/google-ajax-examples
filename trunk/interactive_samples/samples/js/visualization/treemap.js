function drawVisualization() {
  // Create and populate the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Location');
  data.addColumn('string', 'Parent');
  data.addColumn('number', 'Market trade volume (size)');
  data.addColumn('number', 'Market increase/decrease (color)');
  data.addRows([
    ["Global",null,0,0],
    ["America","Global",0,0],
    ["Europe","Global",0,0],
    ["Asia","Global",0,0],
    ["Australia","Global",0,0],
    ["Africa","Global",0,0],
    ["Brazil","America",11,10],
    ["USA","America",52,31],
    ["Mexico","America",24,12],
    ["Canada","America",16,-23],
    ["France","Europe",42,-11],
    ["Germany","Europe",31,-2],
    ["Sweden","Europe",22,-13],
    ["Italy","Europe",17,4],
    ["UK","Europe",21,-5],
    ["China","Asia",36,4],
    ["Japan","Asia",20,-12],
    ["India","Asia",40,63],
    ["Laos","Asia",4,34],
    ["Mongolia","Asia",1,-5],
    ["Israel","Asia",12,24],
    ["Iran","Asia",18,13],
    ["Pakistan","Asia",11,-52],
    ["Egypt","Africa",21,0],
    ["S. Africa","Africa",30,43],
    ["Sudan","Africa",12,2],
    ["Congo","Africa",10,12],
    ["Zair","Africa",8,10],
  ]);

  // Create and draw the visualization.
  var treemap = new google.visualization.TreeMap(document.getElementById('visualization'));
  treemap.draw(data, {
    minColor: 'red',
    midColor: '#ddd',
    maxColor: '#0d0',
    headerHeight: 15,
    fontColor: 'black',
    showScale: true});
}
