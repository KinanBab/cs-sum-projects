/*
 * Difficulty of project: medium.
 * Team size: 2. Teams of 3 are acceptable as well, but they 
 *            will have to do one more image filter/effect.
 */
 
/*
 * This project is about image processing, in particular, turning 
 * an image into grey scale and blurring it. Additional ideas are welcome!
 *
 * The imageData variable below will contain the data of the image to process.
 * The data is represented pixel by pixel:
 * 1. imageData is a 2D array, where the first index represents the row of the pixel,
 *    with zero being the top most row.
 * 2. the second index represents the column of the pixel, with zero being the left most column.
 * 3. imageData[x][y] represents the pixel at the xth and yth row and column.
 * 4. imageData[x][y] = [ r, g, b, a ] .
 *    Every pixel is represented as an array of 4 values: red, green, blue, and alpha values.
 *    Every one of those values range between 0 and 255. 0 Means the pixel has no amount of that color.
 *    255 means that the pixel has the total possible amount of that color. The alpha value represents transparency
 *    where 0 means not transparent at all, and 255 means totally transparent.
 *    Example of colors: 
 *        Red = [ 255, 0, 0, 0 ], Green = [0, 255, 0, 0], Blue = [0, 0, 255, 0]
 *        Black = [ 0, 0, 0, 0], White = [255, 255, 255, 0]
 *        Gray = [ 128, 128, 128, 0].
 *
 */

var imageData = [];

/*
 * Turn the image data into grayscale.
 */
function grayscale() {
  // Loop over every pixel (every row and column).
  // Say the pixel has values [r, g, b, a], compute the average of r, g, and b.
  // Set the new pixel value to be [average, average, average, a].
  
  // Do not forget to call drawImage.
  
}

function blurImage() {
  // Create a new result array to hold the image data.
  // This is needed because bluring requires you to look at other pixels (before they were modified).
  // And change the values accordingly. If you save your changes directly to the array, you will
  // loose the old values of the pixel.
  // Make sure the array has the same dimensions (maybe create a copy).

  // Loop over every pixel (every row and column).
  // Compute the average red, green, blue, and alpha value of that pixel and its neighboring pixels.
  // Set the new pixel value to be [average_red, average_blue, average_green, average_alpha].
  // Do the following inside the 2 loops (row and column loop).
  //  1. create a new array to store the values (r,g,b,a) and a variable to keep count of how many neighbhors there are.
  //  2. loop over all neighbors, it is not enough to loop over neighbors, but also there neighbhors (circle of radius 2 around the point).
  //     In other words, if the pixel you are currently at has indices x, y. Then you must loop over all pixels between x-2 to x+2 and y-2 to y+2 (inclusive).
  //  3. Some of these neighbhors do not exist (they are outside the canvas). For example, the top left pixel do not have any neighbors to
  //     the left or up. Ensure the cells are inside range by using an if statement and checking that the indices are between 0 and canvas/array length.
  //  4. Sum up all the values of these neighbors in the created array from point 1 and increase the array.
  //  3. when all neighbors are done, compute the average and add it to the result array.

  // Dont forget to overwrite imageData with the new result array.  

  
  // Do not forget to call drawImage.

}

// Choose the image and draw it in canvas.
$(function() {  
  // Draw the image.
  var img = document.getElementById("image");
  img.crossOrigin = "Anonymous";
  img.src = "test.png";
  
  img.onload = function() {  
    // Get the canvas and draw the image in it.
    var canvas = document.getElementById("drawing_canvas");
    var drawingContext = canvas.getContext("2d");
    drawingContext.drawImage(img, 0, 0, canvas.width, canvas.height);
    
    // Get the data.
    var tmpData = drawingContext.getImageData(0, 0, canvas.width, canvas.height);
    
    // Set up the nicer image array.
    imageData = [];  
    for(var i = 0; i < tmpData.height; i++)
      imageData[i] = [];
    
    // Put every pixel in the array.
    for(var i = 0; i < tmpData.data.length; i=i+4) {
      // Get pixel values.
      var r = tmpData.data[i];
      var g = tmpData.data[i+1];
      var b = tmpData.data[i+2];
      var a = tmpData.data[i+3];
      
      // Compute nicer index.
      var index = i/4;
      var yIndex = Math.floor(index / canvas.height);
      var xIndex = index % canvas.height;
      
      // Put values in array.
      imageData[yIndex][xIndex] = [r, g, b, a];
    }
  };
});
  
// Call drawImage when you are done processing the image.
function drawImage() {
  // Get canvas and context.
  var canvas = document.getElementById("drawing_canvas");
  var drawingContext = canvas.getContext("2d");
  
  // Get the image data.
  var newData = drawingContext.getImageData(0, 0, canvas.width, canvas.height);
  
  // Fill the data in.
  for(var i = 0; i < imageData.length; i=i+1) {
    for(var j = 0; j < imageData[i].length; j=j+1) {
      var baseIndex = i*imageData[0].length + j;
      baseIndex = 4 * baseIndex;
      
      for(var o = 0; o < 4; o=o+1)
        newData.data[baseIndex+o] = imageData[i][j][o];
    }
  }
  
  // Draw.
  drawingContext.putImageData(newData, 0, 0);
}

