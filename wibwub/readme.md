# weather balloon tracking with google maps



## how to import your own data:

make a csv of latitute and longitude data, most importantly containing the change in latitude and longitude.
the csv table should look something like this: (another example in this folder)

|Latitude       | ▲Latitude     | Longitude   | ▲Longitude   | 
|:-------------:|:-------------:|:-----------:|:------------:|
|33.10927       | 33.10927      | -96.66035   | -96.66035    | 
|33.10939       | 0.00012       | -96.66053   | -0.00018     |
|33.10941       | 0.00002       | -96.66052   | 0.000009999  |

the first and third rows are obsolete, and are not used in the code. they can be whatever you want, even blank, 
but the first and third rows **_must be present in the csv._**

aditionally, the first two rows of all columns are ignored, since the first row only contains strings, and the 2nd row contains the starting 
positions.

the only way to avoid following these rules is to modify the javascript code: 

`var dX = Number(parsedCSV[dLat++][1]);` on `line 59`

`var dY = Number(parsedCSV[dLng++][3]);` on `line 60`

`dLat` and `dLng` are the variable iterations, and change the **_row_** of the csv that is read. 
both of these values start at 2 to account for ignoring the first 2 rows.

the second element of the array is which column is read. these can be changed to 0 and 1 if your table only contains ▲Latitude and ▲Longitude.

finally, to change which csv is read, modify `d3.text("positions.csv", function(data) {` on `line 56.`.
change `"positions.csv"` to whatever your csv may be called.

~~ by ryan v
