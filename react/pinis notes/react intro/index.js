/*Before React:
90's
css html, js from the server, click on link you get new css html from the server
Problem was broswers worked differently with JS. You you had to change the your js for each browser
Jquery came to o easily select js from the dom and was compatible with all browsers.
Then websites beocme more complex and we had dozens of js, css, html files floating around. Was hard to manage.
Backbone js came to solve this problem. This is where SPA came alive. Single page application. You are on the same html page but js changes the html for you and no requests to server.
Then things got even more complicated.
Angluar came to solve this. It had a MVC structure . Model, View, Controller. Basically each js file had its own task.
But then things got even more complicated.
Data was flowing everywhere. Harder to find bugs. You click on one thing a dozens of things changes etc.
FB had problems to maintain their app so in 2013 they created react
*/
// Solution:
// !1. Don't touch the DOM
// Changing an element in the dom is very costy. You need to repaint (replace the elements) and reflow (calculate the width)
//* see paint api (crtl+shift+p and enable paint)
// React will find the best way to change the dom for you.
// You give it a state and say this is my blueprint for my website. use this blueprint and change the dom for me.
// You have single place where you hold your state. Less complexity, lbetter code quality and faster develiopement time.
state = {
  user: "Pinchas Hodadad",
  isLoggedIn: true,
  friends: ["John, Mike, Alex"],
};

// ! 2. Build websites like lego blocks . components for resuability

const myCardComponent = (img, title) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={img} alt="" />
    </div>
  );
};
myCardComponent("/images/hat.jpg", "My title");
myCardComponent("/images/bird.jpg", "My title2");
myCardComponent("/images/pants.jpg", "My title3");
//show amazon

// ! 3. Virtual DOM jsx not real dom

// !4. UI libary. Can use it anywhere. not a framework like angular that you are forced to be inside their world
//You can use it in mobile, desktop apps, terminal and virtual reality.
