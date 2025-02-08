import React, { useState } from "react";
import "./menulist.css";

const menuItems = [
  {
    name: "Biscuit Mama with Susu",
    price: "Rp 60.000,00",
    image: "https://plus.unsplash.com/premium_photo-1670253258590-9bfea76faacd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmlzY3VpdHN8ZW58MHx8MHx8fDA%3D",
   
  },
  {
    name: "Kroasang Thats it",
    price: "Rp 78.000,00",
    image: "https://vincentcafe.pl/wp-content/uploads/2022/11/croissant-z-czekoladajpg.jpg",  
  
  },
  {
    name: "Strawberry Float",
    price: "Rp 45.000,00",
    image: "/images/strawberry.jpg",
   
  },
  {
    name: "Healthy Kids Meal",
    price: "Rp 83.000,00",
    image: "/images/kids-meal.jpg",
   
  },
  {
    name: "Mangoo Cereal Milk",
    price: "Rp 95.000,00",
    image: "/images/mangoo milk.jpg",
  
  },
  {
    name: "Smoothie Brown Berry",
    price: "Rp 95.000,00",
    image: "/images/Smoothie Brown Berry",
   
  },
  {
    name: "Rainbow Cupcake",
    price: "Rp 95.000,00",
    image:"https://img.freepik.com/premium-photo/soft-pastel-cupcakes-displayed-vintage-wallpaper_987764-81576.jpg",
   
  },
  {
    name: "Mie Gocengan Spicy",
    price: "Rp 95.000,00",
    image: "https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/oIiX6AWztE1zBARAiwpqB2SCQOtfIy3AeDRgEB~tplv-tej9nj120t-origin.webp",
   
  },
  
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


