/*
 * Difficulty of project: easy / medium.
 * Team size: 2. Teams of 3 are also accepted but they will have to do one more algorithm that I will discuss with them.
 */
 
 /*
 * This is an easy and cool project.
 * This project is about creating a tool that will integrate a function for you.
 * It is surprisingly a very easy task to automate, the trick is we will not get the
 * exact answer, but an approximation that is very close but has a small error.
 * You will never have to integrate a function yourself again!
 *
 * There are many algorithms for integration, each will be more accurate.
 * For this project we will use the simplest one.
 *
 * Before reading the description below, look at this image which describes the idea clearly:
 *  http://d2r5da613aq50s.cloudfront.net/wp-content/uploads/202634.image0.jpg
 *
 * When we say we want to integrate the function f(x) between x=0 to x=1, that means
 * we want to compute the area under the curve of the function. We can approximate this area
 * by thinking of it as a bunch of very small rectangles. All we have to do is add up
 * the area of all these rectangles to get approximately the area under the function.
 * The area of a rectangle is easy to calculate: area = width * height.
 *
 * The width of these rectangles is fixed. The smaller the width, the more accurate
 * the answer will be. Let us assume for this example that the width is fixed to 0.1
 *
 * The first rectangle starts at x=0 and ends at x=0.1, the height of that rectangle
 * is equal to f(0) (the value of the function at the starting point x=0). The second rectangle
 * starts at x=0.1 and ends at x=0.2, the height of the function is equal to f(0.1). And so on..
 *
 * So we get that the total area is:
 *    0.1*f(0) + 0.1*f(0.1) + 0.1*f(0.2) + 0.1*f(0.3) + ...
 * Which can be computed with a simple for loop.
 * 
 */
 
 
/*
 * Implement these simple mathematical function so users can use them
 * when providing their functions.
 * HINT: look at the function provided inside math by javascript (math.pow, etc..)
 */

// Implement Power
function pow(base, exponent) {
  
}

function sqrt(value) {
  
}

function log(base, value) {
  
}

// Integrate
function integrate() {
  // The rectangle width to use in the algorithm
  var w = 0.1;
  
  // Get the function text from html, as well as the start and end.
  
  // You must turn the function into a javascript function
  // so that you can call it whenever you want.
  // Hint: duplicate the following example:
  //   user input: "2*x + pow(x, 2) + 15"
  //   javascript function: function f(x) { return 2*x + pow(x, 2) + 15; }
  // 
  // Hint2: use string concatenation to make the user input into a javascript function.
  
  
  // After making the function a javascript function, you need to defined it.
  // Since it is a string, all you have to do is call the eval function.
  // eval("function f(x) { return ...; }");
  
  // Now the function is defined and you can call it the usual way ( f(0), f(1), ... )
  // Implement the algorithm above as a single loop, where x starts from start and
  // ends at end. Increment x by w everytime.
  
  
  // Alert the final output


  // Call wolframalpha to plot the function.
  plot();
}

// Open wolframpalpha for the function
function plot() {
  // Get the function text from html, as well as the start and end.
  // Luckily the function text is almost in the format of wolframalpha.
  
  // Assume the function we want to plot is:
  //  2*x+pow(x,2)
  // If you use the wolframalpha website to plot it, it will take you to this url
  //  https://www.wolframalpha.com/input/?i=plot+2*x%2Bpow(x,2)
  // You can notice two important things:
  //  1. https://www.wolframalpha.com/input/?i=plot+ this is the url for plotting any function, you need to use it.
  //  2. + is a special character in the url, it means space not plus. You need to replace all the pluses in the function string with %2B
  // Manipulate the string of the function using the two points above to get the correct url
  
  
  // Finally, you must open the url to show the plot to the user. In the html, I used an iframe element. 
  // This element allows you to open a page inside your page, so that the new page looks like it is
  // part of your page. 
  // All you have to do is set the url of the iframe to the url you created above. HINT: google it.

}



