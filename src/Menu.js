import React from 'react';

function Menu() {
  const menuSections = [
    {
      title: "Organic Beans",
      items: [
        { name: "Taylor Ham", price: "$13.25" },
      ]
    },
    {
      title: "Rice Bowls",
      items: [
        { name: "Rice with grilled chicken, seasonal veggies, and spicy mayo", price: "$14.00" },
        { name: "Rice with sautéed shrimp and garlic butter sauce", price: "$14.00" },
        { name: "Rice with salmon and coconut curry cream sauce", price: "$14.00" }
      ]
    },
    {
      title: "Add-Ons & Extras",
      items: [
        { name: "Donut", price: "$2.25" },
        { name: "Orange Juice", price: "$3.50" },
        { name: "Water", price: "$1.50" }
      ]
    }
  ];

  return (
    <section>
      <h2>Our Menu</h2>
      {menuSections.map((section, index) => (
        <div key={index}>
          <h3>{section.title}</h3>
          <ul>
            {section.items.map((item, idx) => (
              <li key={idx}>{item.name} - {item.price}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Menu;
