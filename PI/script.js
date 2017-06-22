/*
 * Difficulty of project: easy.
 * Team size: 2.
 * My favorite project.
 */
 
 /*
 * This project involves drawing in a webpage. It also explains a nice thing about the number pi.
 * Check the image in the folder for a snapshot of what the final result looks like.
 *
 * We will try to use a cool and practical way to approximately compute the number pi.
 * The idea is very simple:
 * Look at this picture https://www.varsitytutors.com/assets/vt-hotmath-legacy/hotmath_help/topics/circles-inscribed-in-squares/lesson1.gif
 * 1. Assume we have a square with length x.
 *
 * 2. Assume we have the largest circle we can fit inside the square. 
 *    In other words, the center of the circle is the center of the square, and
 *    the radius of the circle is half the length of the square.
 * 
 * 3. The area of the square is length*length. The area of the circle is pi*radius*radius = pi * (length * length / 4).
 * 4. If we pick points randomly inside the square, the change of the point being inside the circle as well is:
 *          area of circle / area of square = (pi * length * length / 4) / (length * length) = pi / 4.
 *    So if we take n random point, and find the ratio of points that appear inside the circle and multiply by 4, we get pi!
 *
 * We will draw this entire process visually. Everytime a point is chosen at random, it is drawn in the canvas in the html.
 * The color of the point depends on whether it is inside the circle or not. Finally the 4*ratio is outputed to the user.
 *
 * NOTE: canvas coordinates range between 0 and 250 for both the x and y coordinate (because the size of the canvas is 500x500).
 *       where (0,0) is the top-left corner of the canvas, increasing x moves the point right. increasing y moves the point down.
 */
 
// Draw a square inside the canvas.
// I implement this function for you so that you know how to use the canvas.
function draw_square() {
    var canvas = document.getElementById("drawing_canvas"); // Get the canvas element using its id.
    var drawing = canvas.getContext("2d"); // Get the drawing object from the canvas. This is how to draw.
    
    drawing.beginPath();
    drawing.lineWidth = "2"; // Set the size of the line to draw.
    drawing.strokeStyle = "black"; // Set the color of what to draw.
    
    // Draw a rectangle where the top-left vertex is at (1, 1)
    // and the width and the height are 500, 500.
    drawing.rect(1, 1, 500, 500); 
    // Notice where the center of the square is.
    
    // Apply the drawing to the canvas in the HTML. IMPORTANT: without this line, the rectangle will not be visible.
    drawing.stroke();
}

// Draw a circle inside the canvas.
function draw_circle() {
  // Get the canvas element using its id.
  // Get the drawing object from the canvas. This is how to draw.
  
  // Set the size and color

  // Draw a circle using:
  //     drawing.arc(x, y, r, s, e)
  // Where x,y are the coordinates of the center of the circle (same as the center of the square).
  // r is the radius of the circle (half the length of the square).
  // s, e are the start and end angle. Since we want a full circle, s, e should be 0, 2*Math.pi respectively.

  // finalize and apply the drawing
}

function draw_point(x, y, color) {
  // Get the canvas element and the drawing object.
  
  // set line and color to match the given color.  

  // Draw the point, a good way to make this visible is to use a small circle (use radius 2 or 1)
  // with the given point as the center.

}

// Determine if a point is inside the circle.
// A point is inside the circle if the distance between it and
// the center of the circle is less than or equal to the radius.
function is_in_circle(x, y) {
  // To compute the distance between two points, you can use this formula
  //    distance = square_root( (x1 - x2)^2 + (y1 - y2)^2 ) where ^ is the power.
  // Look at the math library javascript provides for square root and power functions.
  
}

function start() {
  var TOTAL_NUMBER_OF_POINTS = 1000; // The total number of points to pick.
  
  // Draw the square and circle.
  
  // Choose random points (as many as TOTAL_NUMBER_OF_POINTS). Use a for loop.
  // You can choose a random point, by choosing a random x and random y coordinates.
  // Use: Math.random 
  // Hint: Look at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  //       In particular the section on "Getting a random integer between two values, inclusive"

  // Test if the random point is in the circle or not, draw it in a different color.
  
  // When all the points are done. Compute the ratio of points in circle to total points.
  // Compute pi by multiplying the ratio by 4.
  // Print pi to the user.
}



