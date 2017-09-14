var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  // console.log(connection);
  queryAllProducts();
  placeOrder();
});

function queryAllProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    console.log('All items: ');

    for (var i = 0; i < res.length; i++) {

      if (parseInt(res[i].stock_quantity) < 5) {
        console.log(res[i].item_id + " " + res[i].product_name + " | " + res[i].department_name + " | $" + res[i].price + " | Only " + res[i].stock_quantity + " left in stock.");
      } else {
        console.log(res[i].item_id + " " + res[i].product_name + " | " + res[i].department_name + " | $" + res[i].price + " | In Stock.");
      }
    }
    console.log("-----------------------------------");
  });
}

function placeOrder() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    inquirer
      .prompt([
      {
        name: "choice",
        type: "rawlist",
        choices: function() {
            var choiceArray = [];

            for (var i = 0; i < res.length; i++) {
              choiceArray.push(res[i].product_name);
            }
            return choiceArray;
        },
        message: "Which item would you like to purchase?",
      },
      {
        name: "qty",
        type: "input",
        message: "Quantity:",
      },
      {
        name: "confirm",
        type: "confirm",
        message: "Please confirm your purchase: ",
        default: true
      }
    ])
      .then(function(answer) {
        var chosenItem;

        for (var i = 0; i < res.length; i++) {
          if (res[i].product_name === answer.choice) {
            chosenItem = res[i];
            // console.log(chosenItem);
          }
        }
        // console.log(chosenItem.stock_quantity);
        if(answer.confirm){

          if (chosenItem.stock_quantity < answer.qty){
            console.log("Insufficient quantity!");
          } else {
            connection.query("UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: chosenItem.stock_quantity - answer.qty
                },
                {
                  product_name: chosenItem.product_name
                }
              ], 
              function(error) {
                if (error) throw err;
              
                var total = (chosenItem.price * answer.qty).toFixed(2);
                console.log("Your total is $" + total + ", Thank you for your order!");
            }); 
          };
        } else {
          console.log('Did you change your mind?');
        };
    });
  });
}








