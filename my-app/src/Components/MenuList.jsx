 import React, { useState } from "react";
import "./menulist.css";

const menuItems = [
  {
    name: "Biscuit Mama with Susu",
    price: "Rp 60.000,00",
    image: "https://plus.unsplash.com/premium_photo-1670253258590-9bfea76faacd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmlzY3VpdHN8ZW58MHx8MHx8fDA%3D",
    available: 10,
  },
  {
    name: "Kroasang Thats it",
    price: "Rp 78.000,00",
    image: "https://vincentcafe.pl/wp-content/uploads/2022/11/croissant-z-czekoladajpg.jpg",
    available: 8,
  },
  {
    name: "Strawberry Float",
    price: "Rp 45.000,00",
    image: "/images/strawberry.jpg",
    available: 5,
  },
  {
    name: "Healthy Kids Meal",
    price: "Rp 83.000,00",
    image: "/images/kids-meal.jpg",
    available: 6,
  },
  {
    name: "Mangoo Cereal Milk",
    price: "Rp 95.000,00",
    image: "/images/mangoo milk.jpg",
    available: 6,
  }
  
];

const MenuCard = ({ item }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.price}</p>
      <p>Available: {item.available}</p>
      <div className="order-controls">
        <button onClick={() => setQuantity(Math.max(0, quantity - 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <button className="order-button">Order</button>
    </div>
  );
};

const MenuList = () => {
  return (
    <div className="menu-list">
      {menuItems.map((item, index) => (
        <MenuCard key={index} item={item} />
      ))}
    </div>
  );
};

export default MenuList;

