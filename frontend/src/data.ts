import { Item } from "./app/shared/models/Item"; 
import { Tag } from "./app/shared/models/Tag";

export const sample_items: Item[] = [
    {
      id: '1',
      name: 'Wireless Headphones',
      price: 120.99,
      tags: ['electronics', 'audio', 'popular'],
      favorite: true,
      imageUrl: 'images/headphones.jpg',
      description: 'High-quality wireless headphones with noise cancellation.'
    },
    {
      id: '2',
      name: 'Gaming Mouse',
      price: 59.99,
      tags: ['electronics', 'gaming', 'popular'],
      favorite: false,
      imageUrl: 'images/gamingmouse.jpg',
      description: 'Ergonomic gaming mouse with customizable RGB lighting.'
    },
    {
      id: '3',
      name: 'Running Shoes',
      price: 89.99,
      tags: ['sports', 'fitness', 'popular'],
      favorite: true,
      imageUrl: 'images/runningshoes.jpg',
      description: 'Lightweight running shoes with superior cushioning and grip.'
    },
    {
      id: '4',
      name: 'Smartwatch',
      price: 199.99,
      tags: ['electronics', 'wearable', 'popular'],
      favorite: false,
      imageUrl: 'images/smartwatch.avif',
      description: 'Feature-rich smartwatch with health monitoring and GPS.'
    },
    {
      id: '5',
      name: 'Yoga Mat',
      price: 29.99,
      tags: ['sports', 'fitness'],
      favorite: false,
      imageUrl: 'images/yogamat.jpg',
      description: 'Non-slip yoga mat made of eco-friendly materials.'
    },
    {
      id: '6',
      name: 'Bluetooth Speaker',
      price: 49.99,
      tags: ['electronics', 'audio', 'popular'],
      favorite: true,
      imageUrl: 'images/bluetoothspeaker.jpg',
      description: 'Portable Bluetooth speaker with impressive sound quality.'
    },
    {
      id: '7',
      name: 'Leather Wallet',
      price: 34.99,
      tags: ['accessory', 'fashion'],
      favorite: false,
      imageUrl: 'images/wallet.jpg',
      description: 'Premium leather wallet with multiple compartments.'
    },
    {
      id: '8',
      name: 'Coffee Maker',
      price: 99.99,
      tags: ['kitchen', 'appliance', 'popular'],
      favorite: true,
      imageUrl: 'images/coffeemaker.jpg',
      description: 'Compact coffee maker with programmable timer and multiple brew settings.'
    }
  ];
  
  export const sample_tags: Tag[] = [
    { name: 'All', count: 8 },
    { name: 'popular', count: 6 },
    { name: 'electronics', count: 4 },
    { name: 'audio', count: 2 },
    { name: 'gaming', count: 1 },
    { name: 'sports', count: 2 },
    { name: 'fitness', count: 2 },
    { name: 'wearable', count: 1 },
    { name: 'accessory', count: 1 },
    { name: 'fashion', count: 1 },
    { name: 'kitchen', count: 1 },
    { name: 'appliance', count: 1 }
  ];
  
  