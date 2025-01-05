const dishes = [
    {
      "id": 1,
      "name": "Spaghetti Carbonara",
      "image": "assets/menu/menu-item-1.png",
      "category": "Pasta",
      "label": "Popular",
      "price": "12.99",
      "description": "Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      "comments": [
        {
          "id": 1,
          "rating": 5,
          "comment": "Delicious and creamy!",
          "author": "John Doe",
          "date": "2024-01-01"
        },
        {
          "id": 2,
          "rating": 4,
          "comment": "Great taste but a bit salty.",
          "author": "Jane Smith",
          "date": "2024-01-02"
        },
        {
          "id": 3,
          "rating": 5,
          "comment": "Authentic and flavorful.",
          "author": "Mike Johnson",
          "date": "2024-01-03"
        }
      ]
    },
    {
      "id": 2,
      "name": "Margherita Pizza",
      "image": "assets/menu/menu-item-2.png",
      "category": "Pizza",
      "label": "Classic",
      "price": "10.99",
      "description": "Freshly baked pizza with tomatoes, mozzarella, and basil.",
      "comments": [
        {
          "id": 1,
          "rating": 5,
          "comment": "Perfect crust!",
          "author": "Emily Davis",
          "date": "2024-01-01"
        },
        {
          "id": 2,
          "rating": 4,
          "comment": "Could use more basil.",
          "author": "Chris Brown",
          "date": "2024-01-02"
        },
        {
          "id": 3,
          "rating": 5,
          "comment": "Loved the freshness.",
          "author": "Sara Wilson",
          "date": "2024-01-03"
        }
      ]
    },
    {
      "id": 3,
      "name": "Caesar Salad",
      "image": "assets/menu/menu-item-3.png",
      "category": "Salad",
      "label": "Healthy",
      "price": "8.99",
      "description": "Crisp romaine lettuce, Parmesan cheese, croutons, and Caesar dressing.",
      "comments": [
        {
          "id": 1,
          "rating": 4,
          "comment": "Good but needed more dressing.",
          "author": "David Lee",
          "date": "2024-01-01"
        },
        {
          "id": 2,
          "rating": 5,
          "comment": "Perfect balance of flavors.",
          "author": "Grace Kim",
          "date": "2024-01-02"
        },
        {
          "id": 3,
          "rating": 5,
          "comment": "Loved the fresh ingredients.",
          "author": "Alex Green",
          "date": "2024-01-03"
        }
      ]
    },
    {
      "id": 4,
      "name": "Beef Burger",
      "image": "assets/menu/menu-item-4.png",
      "category": "Burger",
      "label": "Special",
      "price": "9.99",
      "description": "Juicy beef patty with lettuce, tomato, onion, and pickles.",
      "comments": [
        {
          "id": 1,
          "rating": 5,
          "comment": "Best burger in town!",
          "author": "Daniel Harris",
          "date": "2024-01-01"
        },
        {
          "id": 2,
          "rating": 4,
          "comment": "Good but a bit greasy.",
          "author": "Sophia Martinez",
          "date": "2024-01-02"
        },
        {
          "id": 3,
          "rating": 5,
          "comment": "Absolutely loved it!",
          "author": "Oliver Anderson",
          "date": "2024-01-03"
        }
      ]
    },
    {
      "id": 5,
      "name": "Grilled Salmon",
      "image": "assets/menu/menu-item-5.png",
      "category": "Seafood",
      "label": "Featured",
      "price": "14.99",
      "description": "Freshly grilled salmon with lemon butter sauce.",
      "comments": [
        {
          "id": 1,
          "rating": 5,
          "comment": "Perfectly cooked!",
          "author": "Liam Thompson",
          "date": "2024-01-01"
        },
        {
          "id": 2,
          "rating": 4,
          "comment": "Great taste but a bit pricey.",
          "author": "Emma White",
          "date": "2024-01-02"
        },
        {
          "id": 3,
          "rating": 5,
          "comment": "Will definitely order again.",
          "author": "Noah Walker",
          "date": "2024-01-03"
        }
      ]
    },
    {
      "id": 6,
      "name": "Taco Platter",
      "image": "assets/menu/menu-item-6.png",
      "category": "Mexican",
      "label": "Spicy",
      "price": "11.99",
      "description": "Assorted tacos with various fillings and toppings.",
      "comments": [
        {
          "id": 1,
          "rating": 5,
          "comment": "Tacos were amazing!",
          "author": "James Scott",
          "date": "2024-01-01"
        },
        {
          "id": 2,
          "rating": 4,
          "comment": "Liked the variety.",
          "author": "Isabella Clark",
          "date": "2024-01-02"
        },
        {
          "id": 3,
          "rating": 5,
          "comment": "Best tacos I've had.",
          "author": "Mason Turner",
          "date": "2024-01-03"
        }
      ]
    },
    {
      "id": 7,
      "name": "Chicken Curry",
      "image": "assets/menu/menu-item-7.png",
      "category": "Indian",
      "label": "Hot",
      "price": "10.99",
      "description": "Spicy chicken curry with aromatic spices and herbs.",
      "comments": [
        {
          "id": 1,
          "rating": 5,
          "comment": "Authentic and flavorful.",
          "author": "Henry Lewis",
          "date": "2024-01-01"
        },
        {
          "id": 2,
          "rating": 4,
          "comment": "Very spicy!",
          "author": "Mia Robinson",
          "date": "2024-01-02"
        },
        {
          "id": 3,
          "rating": 5,
          "comment": "Loved the spices.",
          "author": "Lucas Young",
          "date": "2024-01-03"
        }
      ]
    },
    {
      "id": 8,
      "name": "Sushi Platter",
      "image": "assets/menu/menu-item-8.png",
      "category": "Japanese",
      "label": "Fresh",
      "price": "15.99",
      "description": "Assorted sushi rolls with fresh fish and vegetables.",
      "comments": [
        {
          "id": 1,
          "rating": 5,
          "comment": "Fresh and tasty!",
          "author": "Jack King",
          "date": "2024-01-01"
        },
        {
          "id": 2,
          "rating": 4,
          "comment": "Great variety of rolls.",
          "author": "Olivia Wright",
          "date": "2024-01-02"
        },
        {
          "id": 3,
          "rating": 5,
          "comment": "Loved every bite.",
          "author": "Ethan Allen",
          "date": "2024-01-03"
        }
      ]
    },
    {
      "id": 9,
      "name": "BBQ Ribs",
      "image": "assets/menu/menu-item-9.png",
      "category": "BBQ",
      "label": "Special",
      "price": "13.99",
      "description": "Tender BBQ ribs with a tangy barbecue sauce.",
      "comments": [
        {
          "id": 1,
          "rating": 5,
          "comment": "Fall-off-the-bone ribs!",
          "author": "Benjamin Harris",
          "date": "2024-01-01"
        },
        {
          "id": 2,
          "rating": 4,
          "comment": "Very flavorful.",
          "author": "Ava Campbell",
          "date": "2024-01-02"
        },
        {
          "id": 3,
          "rating": 5,
          "comment": "Highly recommend.",
          "author": "William Scott",
          "date": "2024-01-03"
        }
      ]
    },
    {
      "id": 10,
      "name": "Pad Thai",
      "image": "assets/menu/menu-item-10.png",
      "category": "Thai",
      "label": "Popular",
      "price": "12.49",
      "description": "Stir-fried rice noodles with shrimp, tofu, peanuts, and a tamarind-based sauce.",
      "comments": [
        {
          "id": 1,
          "rating": 5,
          "comment": "Absolutely delicious!",
          "author": "Sophia Evans",
          "date": "2024-01-04"
        },
        {
          "id": 2,
          "rating": 4,
          "comment": "Great flavor but a bit too spicy.",
          "author": "Jackson Taylor",
          "date": "2024-01-05"
        },
        {
          "id": 3,
          "rating": 5,
          "comment": "Best Pad Thai I've had.",
          "author": "Madison Brooks",
          "date": "2024-01-06"
        }
      ]
    },
    {
      "id": 11,
      "name": "Lamb Shawarma",
      "image": "assets/menu/menu-item-11.png",
      "category": "Middle Eastern",
      "label": "Special",
      "price": "13.99",
      "description": "Marinated lamb slow-roasted and served with pita bread, hummus, and vegetables.",
      "comments": [
        {
          "id": 1,
          "rating": 5,
          "comment": "Flavorful and tender!",
          "author": "Liam Roberts",
          "date": "2024-01-04"
        },
        {
          "id": 2,
          "rating": 4,
          "comment": "Could use more sauce.",
          "author": "Chloe Green",
          "date": "2024-01-05"
        },
        {
          "id": 3,
          "rating": 5,
          "comment": "Absolutely loved it.",
          "author": "Lucas Wright",
          "date": "2024-01-06"
        }
      ]
    },
    {
      "id": 12,
      "name": "Vegetarian Lasagna",
      "image": "assets/menu/menu-item-12.png",
      "category": "Italian",
      "label": "Vegetarian",
      "price": "11.99",
      "description": "Layers of pasta with tomato sauce, ricotta, spinach, and mozzarella cheese.",
      "comments": [
        {
          "id": 1,
          "rating": 5,
          "comment": "So cheesy and delicious!",
          "author": "Emma Cooper",
          "date": "2024-01-04"
        },
        {
          "id": 2,
          "rating": 4,
          "comment": "Great but a bit too salty.",
          "author": "Aiden Hall",
          "date": "2024-01-05"
        },
        {
          "id": 3,
          "rating": 5,
          "comment": "Perfect comfort food.",
          "author": "Harper Phillips",
          "date": "2024-01-06"
        }
      ]
    }
  ]
  

  export default dishes;