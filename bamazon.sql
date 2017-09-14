DROP DATABASE bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(32) NOT NULL,
  department_name VARCHAR(32) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Coffee Mug', 'Home', 14.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Bluetooth Speaker', 'Electronics', 124.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Smart Watch', 'Electronics', 198.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Salt Lamp', 'Home', 49.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Eloquent JavaScript', 'Books', 25.77, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Monthly Planner', 'Office', 15.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('GoPro', 'Electronics', 298.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Laser Printer', 'Office', 99.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Cat Litter', 'Cat Supplies', 13.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Cat Tree', 'Cat Supplies', 77.99, 2);

SELECT * FROM products;
