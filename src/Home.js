import React from 'react';
import cafe from '/Users/sunilganta/food-hall-cafe/src/cafe.jpeg'; 

function Home() {
  return (
    <section>
      <div className="cafe" style={{ backgroundImage: `url(${cafe})`, backgroundSize: 'cover', height: '1080px', color: 'green', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Welcome to Food Hall Café</h2>
        <p>Your local café with a focus on organic ingredients and great taste.</p>
      </div>
    </section>
  );
}

export default Home;
