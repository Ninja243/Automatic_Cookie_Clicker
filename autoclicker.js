function runclicker() {

  // Select the cookie to click
  var x = document.getElementById('bigCookie');
  // Click the cookie
  function spam() {
    x.click(); 
    setTimeout(spam, 10);
  }; 
  // Run the cookie clicking function
  spam();
  
  // Buy the things
  function abs() {  
    // Select all products that we can afford
    var b = document.getElementById('products').getElementsByClassName('unlocked enabled');  
    // Click on everything we can afford
    // Misclicks don't matter
    var j = 0;
    while (j<b.length) {
      b[j].click();
      j = j+1;
    };  
    // Select all upgrades that we can afford
    b = document.getElementById('upgrades').getElementsByClassName('crate enabled'); 
    // Click on everything we can afford
    // Misclicks don't matter
    var j = 0;
    while (j<b.length) {
      b[j].click();
      j = j+1;
    };   
     // Select all tech upgrades that we can afford
    b = document.getElementById('techUpgrades').getElementsByClassName('crate enabled');    
    // Click on everything we can afford
    // Misclicks don't matter
    var j = 0;
    while (j<b.length) {
      b[j].click();
      j = j+1;
    };
    setTimeout(abs, 30);
  };  
  // Run the auto buy function
  abs();
  
  // Handle special cookies
  function pu() {
    var c = document.getElementsByClassName('shimmer');
    var j = 0;
    while (j<c.length) {
      c[j].click();
      j = j+1;
    };
    setTimeout(pu, 500);
  }  
  // Run the special cookie function
  pu();
  
}; 

function stopclicker() {
  runclicker = null;
};

runclicker();
