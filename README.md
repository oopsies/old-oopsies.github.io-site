# how to easily turn data into a chart:

#### 1) upload a csv of the data

#### 2) make a new html file and call it whatever you want. copy and paste the code from one of the existing working html chart files such as `tempdata.html` or `pressuredata.html`.

#### 3) modify code
i'm just gonna list out all the things you can change easily and what `line` theyre on

`<title>title</title>` on `line 5`
    -change title of the tab
    
`d3.text("SenseHat.csv", function(data) {` on `line 27`
    -change the source file for the data to be read (v important)

`for (var i = 1946; i >= 1; i -=1){` on `line 31`
    -change initial i value to the number of rows in the csv, minus 1. if you have a title in the csv for the column of data, then make i >= 1. otherwise, set to 0. (also v important)
    
`parsedData.push(Number(parsedCSV[i][c]));` on `line 32`
    -change the second value (c) to the column of the csv to be read, minus 1. (also also v important)
    

`title: { 
        text: 'title' 
    }, //etc`
    on `lines 38-49`
        -change the titles of various elements of the graph (self explanatory)
        
`turboThreshold:5000` on `line 58`
    -if the number of rows in your csv is bigger than this value, make this value bigger than the rows in your csv lol
    
`series: [{
        name: 'series title',`
on `lines 61` and `62`
    -change title of the data
    
#### 4) add a link in `index.html`
you can just copy this line of code:
`<p><a href="/filename" target="_blank">desc</a></p>`
and add in your filename and description and just paste it next to one of the other links or something

ok hopefully everything works out if not then r.i.p. u can ask me i guess

~~ by ryan v.


### ChartTest2
examples/line-time-series/index.html from Highcharts -5.0.14


Cosme:
  *Took a Codecademy of HTML
  *Worked on a test altitude graph
  *Currently working on Codecademy of JavaScript
  *Currently working on taking an input of data from a file and outputing it on the graph
  *https://github.com/oopsies/oopsies.github.io/blob/master/GraphTest.html
