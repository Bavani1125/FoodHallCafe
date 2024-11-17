import React from 'react';
import './Menu.css';

const menuData = [
  {
    category: "Organic Beans (Coffee)",
    items: [
      { name: "Americano", price: "$5.50" },
      { name: "Double Espresso", price: "$6.00" },
      { name: "Latte", price: "$5.00 - $6.00" },
      { name: "Cappuccino", price: "$6.00 - $7.00" },
      { name: "Mocha", price: "$6.00 - $7.00" },
      { name: "Vanilla Dream", price: "$6.00 - $7.00" },
    ],
  },
  {
    category: "Tea Time",
    items: [
      { name: "Chai", price: "$3.50 - $5.00" },
      { name: "English Breakfast Tea", price: "$3.50 - $5.00" },
      { name: "Earl Grey", price: "$3.75 - $6.00" },
      { name: "Peppermint", price: "$3.75 - $6.00" },
      { name: "Chamomile", price: "$3.75 - $6.00" },
      { name: "Hot Chocolate", price: "$3.75 - $6.00" },
    ],
  },
  {
    category: "On The Smooth Side",
    items: [
      {
        name: "Berry Blast",
        description: "Strawberries, Blueberries, Elderberries, and Sea Moss",
        price: "$10.00",
      },
      {
        name: "Energy Machine",
        description: "Banana, Almond Butter, Sea Moss, and Blueberries",
        price: "$10.00",
      },
      {
        name: "Brain Thinker",
        description: "Dates, Banana, Coconut, Cacao, and Almond Milk",
        price: "$10.00",
      },
      {
        name: "Pineapple Seaside Smoothie Delight",
        description: "Pineapples, Coconut, and Mango",
        price: "$10.00",
      },
    ],
  },
  {
    category: "Breakfast",
    items: [
      {
        name: "Egg Sandwiches",
        description: "Pick Your Bread: Wraps, Croissant. Pick Your Cheese: American, Aged Cheddar, Swiss, and Mozzarella. Pick Your Protein: Bacon, Sausage, Taylor Ham.",
        price: "$8.00",
      },

      {
        name: "Additional Add Ons",
        description: "Spinach, Tomatoes, Red Onion, Avocado, and Home Fries" ,
        price: "$3.00",
      },

      { name: "Chicken & Biscuit", price: "2 for $8.00" },

      { name: "Signature He-Man Sandwich",
        description: "Home made fries, eggs, sausages, bacon and american cheese on a hero roll",
        price: "$13.25" 
        },
    ],
  },
  {
    category: "Organic Salads",
    items: [
      {
        name: "Super Green Salad",
        description: "Super green with tomatoes, olives, red onion, cheddar cheese, homemade balsamic vinaigrette.",
        price: "$12.50",
      },
      {
        name: "Caesar Salad",
        description: "Choose between grilled or crispy chicken served with romaine lettuce, parmesan cheese, and crunchy croutons tossed in our creamy caesar dressing.",
        price: "$14.00",
      },
      {
        name: "Buffalo Chicken Salad",
        description: "Chopped romaine lettuce, strips of buffalo chicken, tomatoes, carrots, celery, topped with our chunky blue cheese dressing.",
        price: "$14.00",
      },
      {
        name: "Susie's House Salad",
        description: "Made with chopped kale, arugula, cucumbers, red onion, avocado, and house dressing.",
        price: "$13.50",
      },
      {
        name: "Spring Mix Salad",
        description: "Spring mix with cranberry, walnut cherry tomato, feta cheese, and balsamic vinaigrette.",
        price: "$13.00",
      },
    ],
  },

  {
      category: "Pasta Bowl",
      items: [
        {
          name: "Pasta Bowl",
          description: "Choose from a selection of organic ingredients that are listed below:",
          price: "$15.00", // Set the price for the main item
        },
        {
          name: "Pasta Options",
          description: "Penne, Rigatoni, Linguine",
          price: null, // No price for options
        },
        {
          name: "Sauce Options",
          description: "Bolognese sauce, Cream sauce, Marinara sauce, Vodka sauce, Pesto sauce",
          price: null,
        },
        {
          name: "Protein Options",
          description: "Shrimp, Chicken, Vegetables, Salmon",
          price: null,
        },
      ]
    },
  
  {
    category: "Rice Bowl",
    items: [
      { name: "Rice, Seasonal Vegetables, herbs, grilled chicken and spicy mayo", price: "$14.00" },
      { name: "Rice, Seasonal Vegetables, sauteed shrimp and garlic butter sauce", price: "$14.00" },
      { name: "Rice, Seasonal Vegetables, salmon with coconut curry cream sauce", price: "$14.00" },
    ],
  },
  {
    category: "Wraps, Rolls, Hero, Bread (Hot Sandwiches)",
    items: [
      {
        name: "Turkey Cuban",
        description: "Turkey, swiss, pickles, and Honey mustard mayo",
        price: "$14.00",
      },
      {
        name: "Grilled Cheese",
        description: null, // No description provided for this item
        price: "$5.00",
      },
      {
        name: "Tomato, Basil Mozzarella",
        description: "Herb dressing",
        price: "$9.00",
      },
      {
        name: "Philly Cheese Steak",
        description: "Steak sautéed with onions, peppers, and American cheese on a hero.",
        price: "$13.00",
      },
      {
        name: "Ham & Cheese Melt",
        description: null, // No description provided for this item
        price: "$8.00",
      },
      {
        name: "Turkey Club",
        description: "Roast turkey, swiss cheese, bacon, lettuce, tomato, and cranberry aioli.",
        price: "$12.50",
      },
      {
        name: "Herb Grilled Chicken Sandwich",
        description: "Made with sautéed onions, mozzarella, cheese, basil, tomatoes, and spicy mayo.",
        price: "$13.00",
      },
      {
        name: "Susie Tuna Melt",
        description: "American cheese, cucumbers, red onions, celery, and super greens.",
        price: "$12.00",
      },
    ],
  },  
  {
    category: "Caribbean Pot",
    items: [
      { name: "Roti with Chicken Curry", price: "$14.00" },
      { name: "Roti with Beef Curry", price: "$15.00" },
      { name: "Roti with Shrimp Curry", price: "$15.00" },
      { name: "Roti with Chickpea Curry", price: "$11.00" },
    ],
  },
  {
    category: "Pastries and Things",
    items: [
      { name: "Cheese Danish", price: "$6.00" },
      { name: "Plain Croissants", price: "$4.00" },
      { name: "Almond Croissants", price: "$5.00" },
      { name: "Muffins", price: "$5.00" },
      { name: "Cookies", price: "$2.25" },
      { name: "Donut", price: "$2.25" },
    ],
  },
  {
    category: "Drinks (Grab & Go)",
    items: [
      { name: "Martinelli Apple Juice", price: "$3.00" },
      { name: "Orange Juice", price: "$3.50" },
      { name: "Water", price: "$1.50" },
    ],
  },
];

const Menu = () => {
  return (
    <div id="menu" className="menu">
      <h2>Our Menu</h2>
      {menuData.map((section, index) => (
        <div key={index} className="menu-section">
          <h3>{section.category}</h3>
          <ul>
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  {item.description && <span className="item-description">{item.description}</span>}
                </div>
                <span className="item-price">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
