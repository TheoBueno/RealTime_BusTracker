#  Title of the project: Real Time Bus Tracker

## Description of the project:
 
 This project uses a asynchronous functions to fetch data from the Massachusett's Bay Transit Authority on the current location of a selection of buses that service the area around the MIT campus, decoding them from JSON strings into raw data, filtering just the location services related data and updating each of the buses in service simultaneously in 15 second intervals at the first click of the button. The specific route in question would be the MBTA Bus Route 93 

## How to Run:
 1. Open the mapanimations.js, locate the TODO: comment section. This is where you will need to add your own map key.
 2. Once the key is in place and you open the Index page, it should load a map o the Boston area around Cambridge with the current position of the local buses.
 3. Once you decide you would like to update the map, click the button on the page to allow for "real time tracking" (the project updates gps positioning of the buses every 15 seconds at that point)

## Roadmap of future improvements: 

 Next it would be useful to add bus stop locations with differenciated icons, as well as subway stations for planned transfers. Another token with the entrance locations for both the MIT campus and Cambridge campus would be useful since those who likely use these routes are connected to these schools.

## License information: 

Copyright 2023 Theo Bueno

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<Add it to your code: https://opensource.org/license/mit/>