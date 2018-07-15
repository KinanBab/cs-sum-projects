
// To test your code use this:
// This is an encryption of "hahaha", using password "ab"
var test = "ENVcvrCjCi8PLW4JxNywggATmBsPwQYxwfzejqIgC+TTAjitKKLEiP9jGJvqRV17L04s8soFPSljR0GsWQRpv0v6adOEyZlJvIgJbLB4zW9eZjx+tNkQLSanQP0yWHKntMYo5MW47gttmLStMdYhZ6v8zGqetxz552DDJUZFzVk=?38VOMlgi4leWKlgyPY0MOqXxiO1gV7gWkd2HPxnN8zI=";

function dictionary() {
  // Get input from the html

  // Get dictionary from html and parse it to JSON
  // Read about JSON here: https://www.w3schools.com/js/js_json_intro.asp
  // When you parse the dictionary, you will see that the result will be an array
  // of passwords
  
  // Loop over array of passwords
  // Try to decrypt with every password until success
  
}

function force() {
  // We will try to hack the encryption by trying all passwords
  // We will start with passwords of size 2, if none of them works
  // we will try size 3, and so on.
  var l = 2;
  
  // Get input from the html

	// We will try to generate all possible passwords
  while(true) {
    // Generate all passwords of size l
    // look at https://stackoverflow.com/questions/32543936/combination-with-repetition

    // try to decrypt with each password

    // if none succeed, try with a bigger size.
    l = l + 1;
  }
}

// Helper: this will try to decrypt, if it is not successfull, it will return undefined.
// otherwise, it will return the decrypted message.
function decrypt(password, input) {
  var bits = 1024;
  
  // Use Cryptico to generate the RSA Key from the password and bits.
  var RSAKey = cryptico.generateRSAKey(password, bits);
    
  // Use Cryptico to decrypt the value of input using the RSA Key.
  var DecryptionResult = cryptico.decrypt(input, RSAKey);

  // Put the final result in the output textarea in the html.
  return DecryptionResult.plaintext;
}
