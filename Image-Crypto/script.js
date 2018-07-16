
/*
 * This project is about hiding a text message inside an image, so that others can't read it.
 *
 * The imageData variable below will contain the data of the image in which we will hide the message.
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
 *
 * Here is how we will hide and recover the message from the image:
 * HIDING:
 * 1. Everything in computers is zeros and ones! that includes strings, I have given you
 *    a function that changes a string to a sequence of 0's and 1's, this function is called convert_to_binary.
 * 2. We will convert the message to binary using the above function.
 * 3. We will go through the binary message one character at a time, also, we will go over the image
 *    one pixel at a time, we will start from the top left corner, and move right, until we reach the
 *    last pixel, then go back to the left and move one row down, etc. We will stop when we have reached the bottom
 *    right corner.
 * 4. For every binary character, if the character is 1, we will make the red component of the corresponding pixel odd.
 *    we will choose the closest red value that is odd, so that the image looks exactly the same.
 * 5. If the character is zero, we will make the red value even.
 * 
 * UNHIDING/SHOWING:
 * 1. We will reverse the transformation above! we will loop over the image in the same order (it has to be the 
 * same order, otherwise the message is lost!). For every pixel, we will check if has an even or odd red component.
 * 2. if it is even, we will add a 0 to the message (at the end), otherwise we will add a 1.
 * 3. When we finished the entire image, that means we recovered all the message but in binary!
 * 4. We will transform the binary message to the actual string using the function I provided below: convert_from_binary
 *
 */
 
 

var imageData = [];

// converts the given input string to binary
function convert_to_binary(input) {
	var binary = "";
  for(var i = 0; i < input.length; i++) {
    var char = input.charCodeAt(i).toString(2);
    while(char.length != 8) char = "0" + char;
    binary = binary + char;
  }
  return binary;
}

// converts the given binary string to a string
function convert_from_binary(binary) {
	var string = "";
  for(var i = 0; i+7 < binary.length; i=i+8) {
    var c = binary.substring(i, i+8);
    c = String.fromCharCode(parseInt(c, 2));
    string = string + c;
  }
  return string;
}

function hide() {  
	// get the input message from HTML
	
  // convert input message to binary using convert_to_binary function above

	// loop over all pixels in the image: 
  // you need two nested for loops, one over all the rows, and one over all the columns
  // the image pixels and lengths is inside the 2D array imageData defined above
  
  		// calculate the index of the location that matches the pixel inside the binary message
      // use this formula: index = row * total number of columns + column

			// index could be too big if the message is small, if that is the case, stop!
      // in other words, ensure that index is less than the length of the binary message

      // if the index is not too big:
      // in this case set the red component of the image at the current pixel (current row and column)
      // if the character in the binary mesasge is 0, make the component even, otherwise make it odd
      // to get the character corresponding to an index, use: 
      //      binary_message_variable.charAt(index)
      // this will return the character inside the binary_message_variable at index.
  
  
  // After all the loops are done, call draw image to draw the new image with the hidden text!
  drawImage();
}

function show() {
	// we will put the binary message inside this variable one character at a time
	var hidden_binary_message = "";
  
  // loop over all pixels in the image: 
  // you need two nested for loops, one over all the rows, and one over all the columns
  // the image pixels and lengths is inside the 2D array imageData defined above
  
  // get the red component of the image at the current pixel (current row and column)
  // if it is even, then the corresponding binary character is 0, otherwise it is 1
  // make sure to add the characters in the correct order!

  // convert hidden binary message to string using convert_from_binary function above

	// finally, show the resulting string inside the textbox with id "input"

}

// Choose the image and draw it in canvas.
$(function() {  
  // Draw the image.
  var img = document.getElementById("image");
  img.crossOrigin = "Anonymous";
  img.src = "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
  
  img.onload = function() {
    // Get the canvas and draw the image in it.
    var canvas = document.getElementById("drawing_canvas");
    canvas.style.display = "none";
    
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
  canvas.style.display = "inline";
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


