/* =========================================
   RECIPE HUB BY PUNU
   150 RECIPES | 6 CATEGORIES
   Developed by Puniket Gawade
========================================= */

const recipes = [];

function addRecipe(name, category, time, servings, ingredients, steps, description) {
    recipes.push({
        name,
        category,
        time,
        servings,
        ingredients,
        steps,
        description,
        image: `https://loremflickr.com/700/450/${encodeURIComponent(name + " food")}`
    });
}

// =========================================
// CATEGORY 1: PIZZA
// =========================================

addRecipe("Margherita Pizza", "Pizza", "25 minutes", 2,
["Pizza base - 1 large", "Mozzarella cheese - 100 g", "Pizza sauce - 4 tbsp", "Tomato - 1 small, sliced", "Olive oil - 1 tsp", "Oregano - 1/2 tsp", "Chilli flakes - 1/2 tsp", "Salt - a pinch"],
["Spread pizza sauce evenly over the base.", "Add mozzarella cheese and tomato slices.", "Sprinkle oregano, chilli flakes and salt.", "Bake at 200°C for 10–12 minutes until the cheese melts and the base is crisp."],
"Classic Italian pizza with tomato sauce and melted mozzarella.");

addRecipe("Farmhouse Pizza", "Pizza", "35 minutes", 2,
["Pizza base - 1 large", "Pizza sauce - 4 tbsp", "Mozzarella - 120 g", "Onion - 1/2, sliced", "Capsicum - 1/2, sliced", "Tomato - 1 small", "Sweet corn - 3 tbsp", "Oregano - 1/2 tsp"],
["Spread pizza sauce on the base.", "Arrange onion, capsicum, tomato and corn.", "Cover with mozzarella cheese.", "Bake at 200°C for 12–15 minutes until golden."],
"A colourful vegetable-loaded pizza.");

addRecipe("Paneer Tikka Pizza", "Pizza", "40 minutes", 2,
["Pizza base - 1 large", "Paneer - 100 g, cubed", "Curd - 2 tbsp", "Tikka masala - 1 tsp", "Onion - 1/2", "Capsicum - 1/2", "Pizza sauce - 3 tbsp", "Mozzarella - 100 g", "Oil - 1 tsp"],
["Mix paneer with curd, tikka masala and oil.", "Cook the paneer mixture in a pan for 4–5 minutes.", "Spread pizza sauce on the base and add vegetables and paneer.", "Top with cheese and bake at 200°C for 12–15 minutes."],
"Indian-style pizza topped with spicy paneer tikka.");

addRecipe("Cheese Burst Pizza", "Pizza", "30 minutes", 2,
["Pizza base - 2 thin bases", "Mozzarella - 150 g", "Cheese spread - 3 tbsp", "Pizza sauce - 4 tbsp", "Oregano - 1/2 tsp", "Chilli flakes - 1/2 tsp", "Capsicum - 1/4"],
["Spread cheese spread on one base.", "Place the second base over it and seal the edges.", "Add pizza sauce, capsicum and mozzarella on top.", "Bake at 200°C for 12–15 minutes until the cheese is melted."],
"Extra-cheesy pizza with a creamy cheese centre.");

addRecipe("Veggie Supreme Pizza", "Pizza", "35 minutes", 2,
["Pizza base - 1 large", "Pizza sauce - 4 tbsp", "Mozzarella - 120 g", "Onion - 1/2", "Capsicum - 1/2", "Mushrooms - 4, sliced", "Sweet corn - 2 tbsp", "Olives - 6", "Oregano - 1/2 tsp"],
["Spread pizza sauce over the base.", "Arrange onion, capsicum, mushrooms, corn and olives.", "Add mozzarella and oregano.", "Bake at 200°C for 12–15 minutes."],
"A loaded pizza with a variety of vegetables.");

addRecipe("Corn and Cheese Pizza", "Pizza", "25 minutes", 2,
["Pizza base - 1 large", "Sweet corn - 1/2 cup", "Mozzarella - 120 g", "Pizza sauce - 4 tbsp", "Butter - 1 tsp", "Black pepper - 1/4 tsp", "Oregano - 1/2 tsp"],
["Lightly sauté sweet corn in butter for 2 minutes.", "Spread pizza sauce over the base.", "Add corn, cheese, pepper and oregano.", "Bake at 200°C for 10–12 minutes."],
"Sweet corn and melted cheese on a crispy pizza base.");

addRecipe("Mushroom Pizza", "Pizza", "30 minutes", 2,
["Pizza base - 1 large", "Mushrooms - 100 g", "Mozzarella - 100 g", "Pizza sauce - 4 tbsp", "Garlic - 2 cloves, chopped", "Butter - 1 tsp", "Oregano - 1/2 tsp", "Black pepper - 1/4 tsp"],
["Sauté mushrooms and garlic in butter until tender.", "Spread pizza sauce over the base.", "Add mushrooms, mozzarella and seasonings.", "Bake at 200°C for 12 minutes or until golden."],
"A savoury mushroom and garlic pizza.");

addRecipe("Peri Peri Pizza", "Pizza", "30 minutes", 2,
["Pizza base - 1 large", "Mozzarella - 120 g", "Pizza sauce - 3 tbsp", "Peri peri seasoning - 1 tsp", "Onion - 1/2", "Capsicum - 1/2", "Sweet corn - 2 tbsp", "Olive oil - 1 tsp"],
["Spread pizza sauce on the base.", "Mix vegetables with peri peri seasoning and olive oil.", "Spread vegetables over the base and add cheese.", "Bake at 200°C for 12–15 minutes."],
"Spicy pizza with a tangy peri peri flavour.");

addRecipe("BBQ Paneer Pizza", "Pizza", "35 minutes", 2,
["Pizza base - 1 large", "Paneer - 100 g, cubed", "BBQ sauce - 3 tbsp", "Mozzarella - 100 g", "Onion - 1/2, sliced", "Capsicum - 1/4", "Black pepper - 1/4 tsp"],
["Mix paneer cubes with BBQ sauce and black pepper.", "Spread a thin layer of BBQ sauce on the base.", "Add paneer, onion, capsicum and mozzarella.", "Bake at 200°C for 12–15 minutes."],
"Smoky BBQ-flavoured paneer pizza.");

addRecipe("Pesto Vegetable Pizza", "Pizza", "30 minutes", 2,
["Pizza base - 1 large", "Basil pesto - 3 tbsp", "Mozzarella - 100 g", "Cherry tomatoes - 6, halved", "Capsicum - 1/2", "Onion - 1/4", "Olive oil - 1 tsp", "Black pepper - 1/4 tsp"],
["Spread basil pesto over the pizza base.", "Arrange cherry tomatoes, capsicum and onion.", "Add mozzarella, olive oil and black pepper.", "Bake at 200°C for 12–15 minutes."],
"A fresh pizza with basil pesto and vegetables.");

// NEXT PART: Continue adding recipes inside this array.
// =========================================
// CATEGORY 1: PIZZA (11–25)
// =========================================

addRecipe("Mexican Pizza", "Pizza", "35 minutes", 2,
["Pizza base - 1", "Pizza sauce - 3 tbsp", "Mozzarella - 120 g", "Boiled kidney beans - 1/3 cup", "Onion - 1/2", "Capsicum - 1/2", "Sweet corn - 2 tbsp", "Mexican seasoning - 1 tsp"],
["Spread pizza sauce on the base.", "Mix beans and vegetables with seasoning.", "Add the vegetable mixture and mozzarella.", "Bake at 200°C for 12–15 minutes."],
"A Mexican-inspired pizza with beans and vegetables.");

addRecipe("Cheese and Tomato Pizza", "Pizza", "25 minutes", 2,
["Pizza base - 1", "Tomato - 2", "Mozzarella - 120 g", "Pizza sauce - 3 tbsp", "Basil - 5 leaves", "Olive oil - 1 tsp", "Black pepper - 1/4 tsp"],
["Spread pizza sauce on the base.", "Arrange tomato slices and basil leaves.", "Add mozzarella, olive oil and pepper.", "Bake at 200°C for 10–12 minutes."],
"A simple tomato and cheese pizza.");

addRecipe("Spinach Corn Pizza", "Pizza", "30 minutes", 2,
["Pizza base - 1", "Spinach - 1 cup", "Sweet corn - 1/3 cup", "Mozzarella - 120 g", "Garlic - 2 cloves", "Pizza sauce - 3 tbsp", "Butter - 1 tsp"],
["Cook chopped spinach and garlic in butter.", "Spread pizza sauce over the base.", "Add spinach, corn and mozzarella.", "Bake at 200°C for 12 minutes."],
"A nutritious pizza with spinach and sweet corn.");

addRecipe("Tandoori Vegetable Pizza", "Pizza", "35 minutes", 2,
["Pizza base - 1", "Curd - 2 tbsp", "Tandoori masala - 1 tsp", "Onion - 1/2", "Capsicum - 1/2", "Paneer - 50 g", "Mozzarella - 100 g", "Pizza sauce - 2 tbsp"],
["Mix curd and tandoori masala with chopped vegetables and paneer.", "Spread pizza sauce over the base.", "Add the marinated mixture and mozzarella.", "Bake at 200°C for 12–15 minutes."],
"Indian tandoori flavours on a pizza base.");

addRecipe("Olive and Capsicum Pizza", "Pizza", "25 minutes", 2,
["Pizza base - 1", "Green olives - 8", "Black olives - 6", "Capsicum - 1/2", "Mozzarella - 100 g", "Pizza sauce - 4 tbsp", "Oregano - 1/2 tsp"],
["Spread pizza sauce on the base.", "Add sliced olives and capsicum.", "Sprinkle mozzarella and oregano.", "Bake at 200°C for 12 minutes."],
"A Mediterranean-style vegetable pizza.");

addRecipe("Garlic Cheese Pizza", "Pizza", "25 minutes", 2,
["Pizza base - 1", "Mozzarella - 120 g", "Butter - 2 tbsp", "Garlic - 4 cloves", "Oregano - 1/2 tsp", "Chilli flakes - 1/2 tsp", "Pizza sauce - 2 tbsp"],
["Mix softened butter with chopped garlic.", "Spread pizza sauce over the base.", "Add garlic butter and mozzarella.", "Sprinkle oregano and chilli flakes, then bake at 200°C for 10–12 minutes."],
"A rich garlic-flavoured cheesy pizza.");

addRecipe("Pineapple Pizza", "Pizza", "25 minutes", 2,
["Pizza base - 1", "Pineapple - 1/2 cup, diced", "Mozzarella - 120 g", "Pizza sauce - 3 tbsp", "Capsicum - 1/4", "Black pepper - 1/4 tsp", "Oregano - 1/2 tsp"],
["Spread pizza sauce over the base.", "Add pineapple pieces and capsicum.", "Cover with mozzarella and seasonings.", "Bake at 200°C for 12 minutes."],
"A sweet and savoury pineapple pizza.");

addRecipe("Potato Wedges Pizza", "Pizza", "40 minutes", 2,
["Pizza base - 1", "Potato - 1 medium", "Mozzarella - 100 g", "Pizza sauce - 3 tbsp", "Olive oil - 1 tbsp", "Paprika - 1/2 tsp", "Oregano - 1/2 tsp"],
["Cut potato into thin wedges and toss with oil and paprika.", "Bake potato wedges at 200°C until tender and lightly crisp.", "Spread pizza sauce on the base and add potato wedges.", "Top with cheese and oregano, then bake for 10–12 minutes."],
"A unique pizza topped with seasoned potatoes.");

addRecipe("Double Cheese Pizza", "Pizza", "25 minutes", 2,
["Pizza base - 1", "Mozzarella - 100 g", "Cheddar cheese - 50 g", "Pizza sauce - 4 tbsp", "Oregano - 1/2 tsp", "Chilli flakes - 1/2 tsp"],
["Spread pizza sauce on the base.", "Add mozzarella and cheddar cheese evenly.", "Sprinkle oregano and chilli flakes.", "Bake at 200°C for 10–12 minutes."],
"A simple pizza with two types of cheese.");

addRecipe("Broccoli Cheese Pizza", "Pizza", "30 minutes", 2,
["Pizza base - 1", "Broccoli - 1 cup", "Mozzarella - 120 g", "Pizza sauce - 3 tbsp", "Garlic - 2 cloves", "Olive oil - 1 tsp", "Black pepper - 1/4 tsp"],
["Steam broccoli for 3 minutes and chop it.", "Spread pizza sauce over the base.", "Add broccoli, garlic, pepper and mozzarella.", "Bake at 200°C for 12–15 minutes."],
"A vegetable-rich pizza with broccoli and cheese.");

addRecipe("Spicy Onion Pizza", "Pizza", "25 minutes", 2,
["Pizza base - 1", "Onion - 1 large", "Mozzarella - 120 g", "Pizza sauce - 3 tbsp", "Chilli flakes - 1 tsp", "Black pepper - 1/4 tsp", "Olive oil - 1 tsp"],
["Slice onion thinly.", "Spread pizza sauce on the base.", "Add onion, mozzarella, chilli flakes and pepper.", "Bake at 200°C for 12 minutes."],
"A simple spicy onion pizza.");

addRecipe("Ragda Masala Pizza", "Pizza", "40 minutes", 2,
["Pizza base - 1", "Boiled white peas - 1/2 cup", "Onion - 1/2", "Tomato - 1/2", "Mozzarella - 100 g", "Pizza sauce - 2 tbsp", "Chaat masala - 1/2 tsp", "Coriander - 1 tbsp"],
["Cook boiled peas with a little chaat masala.", "Spread pizza sauce on the base.", "Add the peas, onion and tomato.", "Top with mozzarella and bake at 200°C for 12 minutes.", "Finish with fresh coriander."],
"A fusion pizza inspired by Indian ragda flavours.");

addRecipe("Schezwan Pizza", "Pizza", "30 minutes", 2,
["Pizza base - 1", "Schezwan sauce - 2 tbsp", "Pizza sauce - 2 tbsp", "Mozzarella - 120 g", "Onion - 1/2", "Capsicum - 1/2", "Sweet corn - 2 tbsp"],
["Mix Schezwan sauce with pizza sauce.", "Spread the sauce mixture over the base.", "Add onion, capsicum and sweet corn.", "Top with mozzarella and bake at 200°C for 12 minutes."],
"A spicy Indo-Chinese fusion pizza.");

addRecipe("Roasted Vegetable Pizza", "Pizza", "35 minutes", 2,
["Pizza base - 1", "Zucchini - 1/2 cup", "Capsicum - 1/2", "Onion - 1/2", "Cherry tomatoes - 5", "Mozzarella - 120 g", "Olive oil - 1 tbsp", "Oregano - 1/2 tsp"],
["Toss chopped vegetables with olive oil.", "Roast vegetables at 200°C for about 10 minutes.", "Spread pizza sauce on the base and add roasted vegetables.", "Top with mozzarella and bake for another 10–12 minutes."],
"A colourful pizza topped with roasted vegetables.");

addRecipe("Classic Italian Veg Pizza", "Pizza", "30 minutes", 2,
["Pizza base - 1", "Tomato sauce - 4 tbsp", "Mozzarella - 120 g", "Cherry tomatoes - 6", "Black olives - 6", "Fresh basil - 6 leaves", "Olive oil - 1 tsp", "Oregano - 1/2 tsp"],
["Spread tomato sauce over the pizza base.", "Arrange cherry tomatoes and olives.", "Add mozzarella, basil and oregano.", "Drizzle olive oil and bake at 200°C for 12–15 minutes."],
"A classic Italian-inspired vegetable pizza.");

// =========================================
// PIZZA CATEGORY COMPLETE: 25 RECIPES
// NEXT: BURGERS
// =========================================
// =========================================
// CATEGORY 2: BURGERS (1–10)
// =========================================

addRecipe("Classic Veg Burger", "Burgers", "30 minutes", 2,
["Burger buns - 2", "Potatoes - 2 medium, boiled", "Breadcrumbs - 1/2 cup", "Onion - 1 small, sliced", "Tomato - 1, sliced", "Lettuce - 2 leaves", "Mayonnaise - 2 tbsp", "Tomato ketchup - 2 tbsp", "Salt - 1/2 tsp", "Black pepper - 1/4 tsp"],
["Mash boiled potatoes with salt and pepper.", "Shape into two patties and coat with breadcrumbs.", "Pan-fry with a little oil until both sides are golden and fully cooked.", "Toast the burger buns lightly.", "Spread mayonnaise and ketchup on the buns.", "Add lettuce, potato patty, onion and tomato. Close and serve."],
"A classic homemade vegetable burger with a crispy potato patty.");

addRecipe("Cheese Veg Burger", "Burgers", "30 minutes", 2,
["Burger buns - 2", "Potatoes - 2 medium", "Cheese slices - 2", "Breadcrumbs - 1/2 cup", "Onion - 1/2", "Tomato - 1", "Mayonnaise - 2 tbsp", "Salt - 1/2 tsp", "Black pepper - 1/4 tsp"],
["Mash potatoes with salt and pepper.", "Make two patties and coat with breadcrumbs.", "Cook patties in a pan until golden and fully cooked.", "Place a cheese slice on each hot patty to soften.", "Toast buns and spread mayonnaise.", "Assemble with onion, tomato and cheese patties."],
"A cheesy vegetarian burger with a golden potato patty.");

addRecipe("Paneer Tikka Burger", "Burgers", "35 minutes", 2,
["Burger buns - 2", "Paneer - 150 g", "Curd - 2 tbsp", "Tandoori masala - 1 tsp", "Capsicum - 1/2", "Onion - 1/2", "Mayonnaise - 2 tbsp", "Lemon juice - 1 tsp", "Oil - 1 tbsp"],
["Mix curd, tandoori masala and lemon juice.", "Coat paneer slices with the marinade.", "Cook paneer and capsicum in a pan until lightly golden and hot throughout.", "Toast the buns and spread mayonnaise.", "Add paneer, capsicum and onion.", "Close the burger and serve."],
"An Indian-style burger filled with spicy paneer tikka.");

addRecipe("Aloo Tikki Burger", "Burgers", "35 minutes", 2,
["Burger buns - 2", "Potatoes - 2 medium, boiled", "Green peas - 1/4 cup, boiled", "Breadcrumbs - 1/2 cup", "Cornflour - 1 tbsp", "Chaat masala - 1/2 tsp", "Green chutney - 2 tbsp", "Tomato ketchup - 2 tbsp", "Onion - 1/2"],
["Mash potatoes and peas together.", "Add cornflour and chaat masala, then shape into patties.", "Coat with breadcrumbs and pan-fry until golden and cooked through.", "Toast the burger buns.", "Spread green chutney and ketchup.", "Add the tikki and onion, then serve."],
"A popular Indian street-food inspired potato burger.");

addRecipe("Mushroom Burger", "Burgers", "30 minutes", 2,
["Burger buns - 2", "Mushrooms - 200 g", "Garlic - 3 cloves", "Onion - 1/2", "Cheese slices - 2", "Butter - 1 tbsp", "Mayonnaise - 2 tbsp", "Black pepper - 1/4 tsp", "Salt - 1/4 tsp"],
["Clean and slice the mushrooms.", "Heat butter and cook garlic and mushrooms until their moisture evaporates.", "Season with salt and pepper.", "Toast the buns and spread mayonnaise.", "Add mushrooms, onion and cheese.", "Serve while warm."],
"A savoury mushroom burger with garlic and cheese.");

addRecipe("Corn Cheese Burger", "Burgers", "30 minutes", 2,
["Burger buns - 2", "Sweet corn - 1/2 cup", "Boiled potato - 1 medium", "Cheese - 50 g, grated", "Breadcrumbs - 1/2 cup", "Mayonnaise - 2 tbsp", "Black pepper - 1/4 tsp", "Salt - 1/2 tsp"],
["Mash potato and mix with corn and grated cheese.", "Season with salt and pepper.", "Shape into patties and coat with breadcrumbs.", "Pan-fry until golden and fully cooked.", "Toast buns and spread mayonnaise.", "Add patties and serve."],
"A sweet corn and cheese burger with a crispy patty.");

addRecipe("Spicy Schezwan Burger", "Burgers", "30 minutes", 2,
["Burger buns - 2", "Potatoes - 2 medium", "Breadcrumbs - 1/2 cup", "Schezwan sauce - 2 tbsp", "Mayonnaise - 2 tbsp", "Onion - 1/2", "Capsicum - 1/2", "Salt - 1/2 tsp", "Black pepper - 1/4 tsp"],
["Mash potatoes with salt and pepper.", "Shape into patties, coat with breadcrumbs and pan-fry until golden and cooked.", "Mix Schezwan sauce with mayonnaise.", "Toast buns and spread the spicy sauce.", "Add patties, onion and capsicum.", "Close and serve."],
"A spicy Indo-Chinese style vegetarian burger.");

addRecipe("Crispy Vegetable Burger", "Burgers", "40 minutes", 2,
["Burger buns - 2", "Potato - 1 medium", "Carrot - 1/2", "Beans - 1/4 cup", "Green peas - 1/4 cup", "Cornflour - 2 tbsp", "Breadcrumbs - 1/2 cup", "Mayonnaise - 2 tbsp", "Salt - 1/2 tsp", "Pepper - 1/4 tsp"],
["Boil and mash the vegetables.", "Mix with cornflour, salt and pepper.", "Shape into patties and coat with breadcrumbs.", "Pan-fry with oil until golden and fully cooked.", "Toast buns and spread mayonnaise.", "Assemble with vegetable patties and serve."],
"A crunchy burger packed with mixed vegetables.");

addRecipe("Double Cheese Burger", "Burgers", "30 minutes", 2,
["Burger buns - 2", "Potatoes - 2 medium", "Cheese slices - 4", "Breadcrumbs - 1/2 cup", "Mayonnaise - 2 tbsp", "Ketchup - 2 tbsp", "Onion - 1/2", "Salt - 1/2 tsp", "Black pepper - 1/4 tsp"],
["Mash potatoes with salt and pepper.", "Shape into two patties and coat with breadcrumbs.", "Pan-fry until golden and cooked through.", "Place two cheese slices on each patty.", "Toast buns and spread mayonnaise and ketchup.", "Add the patties and onion, then serve."],
"An extra-cheesy burger with two cheese slices per serving.");

addRecipe("Spinach Corn Burger", "Burgers", "35 minutes", 2,
["Burger buns - 2", "Spinach - 1 cup, chopped", "Sweet corn - 1/2 cup", "Potato - 1 medium, boiled", "Breadcrumbs - 1/2 cup", "Garlic - 2 cloves", "Cheese - 30 g", "Salt - 1/2 tsp", "Black pepper - 1/4 tsp"],
["Cook spinach and garlic in a pan until the moisture reduces.", "Mash potato and mix with spinach, corn and cheese.", "Season with salt and pepper, then shape into patties.", "Coat with breadcrumbs and pan-fry until golden and fully cooked.", "Toast buns and assemble with the patties.", "Serve warm."],
"A vegetable burger with spinach, corn and cheese.");

// NEXT PART: BURGERS 11–20
// =========================================
// CATEGORY 2: BURGERS (11–20)
// =========================================

addRecipe("Peri Peri Veg Burger", "Burgers", "30 minutes", 2,
["Burger buns - 2", "Potatoes - 2 medium", "Breadcrumbs - 1/2 cup", "Peri peri seasoning - 1 tsp", "Mayonnaise - 2 tbsp", "Lettuce - 2 leaves", "Tomato - 1", "Oil - 1 tbsp", "Salt - 1/2 tsp"],
["Mash potatoes with salt and half the peri peri seasoning.", "Shape into patties and coat with breadcrumbs.", "Pan-fry with oil until golden and fully cooked.", "Mix mayonnaise with the remaining seasoning.", "Toast buns, spread the sauce and add lettuce, tomato and patties.", "Serve warm."],
"A spicy vegetable burger with peri peri mayonnaise.");

addRecipe("Hara Bhara Burger", "Burgers", "40 minutes", 2,
["Burger buns - 2", "Spinach - 1 cup", "Green peas - 1/2 cup", "Potato - 1 medium", "Breadcrumbs - 1/2 cup", "Ginger - 1 tsp", "Garam masala - 1/2 tsp", "Mayonnaise - 2 tbsp", "Salt - 1/2 tsp"],
["Blanch spinach and drain thoroughly.", "Mash spinach, peas and boiled potato together.", "Add ginger, garam masala and salt.", "Shape into patties and coat with breadcrumbs.", "Pan-fry until golden and fully cooked.", "Toast buns, spread mayonnaise and assemble."],
"A green vegetable patty burger with Indian spices.");

addRecipe("BBQ Paneer Burger", "Burgers", "30 minutes", 2,
["Burger buns - 2", "Paneer - 150 g", "BBQ sauce - 3 tbsp", "Onion - 1/2", "Capsicum - 1/2", "Mayonnaise - 2 tbsp", "Black pepper - 1/4 tsp", "Oil - 1 tsp"],
["Cut paneer into thick slices.", "Coat paneer with BBQ sauce and pepper.", "Cook in a pan with oil until hot and lightly browned.", "Toast buns and spread mayonnaise.", "Add paneer, onion and capsicum.", "Close and serve."],
"A smoky paneer burger with barbecue sauce.");

addRecipe("Masala Potato Burger", "Burgers", "30 minutes", 2,
["Burger buns - 2", "Potatoes - 2 medium", "Onion - 1 small", "Green chilli - 1", "Coriander - 2 tbsp", "Turmeric - 1/4 tsp", "Garam masala - 1/2 tsp", "Breadcrumbs - 1/2 cup", "Ketchup - 2 tbsp"],
["Mash boiled potatoes.", "Mix with onion, chilli, coriander and spices.", "Shape into patties and coat with breadcrumbs.", "Pan-fry until golden and fully cooked.", "Toast buns and spread ketchup.", "Add the patties and serve."],
"An Indian masala potato burger.");

addRecipe("Falafel Burger", "Burgers", "40 minutes", 2,
["Burger buns - 2", "Cooked chickpeas - 1 cup", "Onion - 1/4", "Garlic - 2 cloves", "Coriander - 2 tbsp", "Cumin powder - 1/2 tsp", "Breadcrumbs - 1/4 cup", "Curd - 2 tbsp", "Lemon juice - 1 tsp"],
["Mash chickpeas with onion, garlic and coriander.", "Add cumin, breadcrumbs and lemon juice.", "Shape into patties and pan-fry until browned and cooked through.", "Mix curd with a little salt for a simple sauce.", "Toast buns and spread the curd sauce.", "Add falafel patties and serve."],
"A Middle Eastern-inspired chickpea burger.");

addRecipe("Sweet Potato Burger", "Burgers", "35 minutes", 2,
["Burger buns - 2", "Sweet potato - 2 medium", "Breadcrumbs - 1/2 cup", "Cornflour - 1 tbsp", "Paprika - 1/2 tsp", "Black pepper - 1/4 tsp", "Mayonnaise - 2 tbsp", "Lettuce - 2 leaves"],
["Boil sweet potatoes until soft and mash them.", "Mix with cornflour, paprika and pepper.", "Shape into patties and coat with breadcrumbs.", "Pan-fry until golden and cooked through.", "Toast buns and spread mayonnaise.", "Add lettuce and sweet potato patties."],
"A naturally sweet vegetable burger.");

addRecipe("Indian Chutney Burger", "Burgers", "25 minutes", 2,
["Burger buns - 2", "Potato patties - 2", "Mint leaves - 1/2 cup", "Coriander - 1/2 cup", "Green chilli - 1", "Lemon juice - 1 tbsp", "Curd - 2 tbsp", "Onion - 1/2", "Tomato - 1"],
["Blend mint, coriander, chilli, lemon juice and curd into chutney.", "Cook potato patties in a pan until golden and fully cooked.", "Toast burger buns.", "Spread green chutney on both halves.", "Add patties, onion and tomato.", "Close and serve."],
"A refreshing Indian burger with mint-coriander chutney.");

addRecipe("Garlic Mushroom Burger", "Burgers", "30 minutes", 2,
["Burger buns - 2", "Mushrooms - 200 g", "Garlic - 4 cloves", "Butter - 1 tbsp", "Cheese slices - 2", "Mayonnaise - 2 tbsp", "Black pepper - 1/4 tsp", "Onion - 1/2"],
["Slice mushrooms and chop garlic.", "Heat butter and sauté garlic and mushrooms until tender.", "Season with pepper.", "Toast buns and spread mayonnaise.", "Add mushrooms, cheese and onion.", "Serve warm."],
"A garlic-rich mushroom and cheese burger.");

addRecipe("Mexican Bean Burger", "Burgers", "35 minutes", 2,
["Burger buns - 2", "Boiled kidney beans - 1 cup", "Onion - 1/2", "Breadcrumbs - 1/2 cup", "Cumin powder - 1/2 tsp", "Paprika - 1/2 tsp", "Tomato - 1", "Lettuce - 2 leaves", "Mayonnaise - 2 tbsp"],
["Mash kidney beans with onion.", "Add breadcrumbs, cumin and paprika.", "Shape into patties and pan-fry until golden and heated through.", "Toast buns and spread mayonnaise.", "Add lettuce, bean patties and tomato.", "Serve warm."],
"A protein-rich burger with Mexican-inspired bean patties.");

addRecipe("Classic Paneer Burger", "Burgers", "30 minutes", 2,
["Burger buns - 2", "Paneer - 150 g", "Cornflour - 2 tbsp", "Breadcrumbs - 1/2 cup", "Chilli powder - 1/2 tsp", "Garam masala - 1/4 tsp", "Mayonnaise - 2 tbsp", "Onion - 1/2", "Lettuce - 2 leaves"],
["Cut paneer into two thick patties.", "Mix cornflour with a little water to make a coating slurry.", "Dip paneer in slurry and coat with breadcrumbs and spices.", "Pan-fry gently until the coating is crisp and paneer is hot.", "Toast buns and spread mayonnaise.", "Assemble with lettuce, onion and paneer."],
"A crispy Indian-style paneer burger.");

// NEXT PART: BURGERS 21–25
// =========================================
// CATEGORY 2: BURGERS (21–25)
// =========================================

addRecipe("Crispy Cauliflower Burger", "Burgers", "40 minutes", 2,
["Burger buns - 2", "Cauliflower florets - 1 cup", "Maida - 1/2 cup", "Cornflour - 2 tbsp", "Breadcrumbs - 1/2 cup", "Paprika - 1/2 tsp", "Mayonnaise - 2 tbsp", "Lettuce - 2 leaves", "Salt - 1/2 tsp"],
["Steam cauliflower until just tender and cool completely.", "Mix maida, cornflour, paprika, salt and water into a thick batter.", "Dip cauliflower pieces in batter and coat with breadcrumbs.", "Pan-fry with sufficient oil until golden and fully cooked.", "Toast buns and spread mayonnaise.", "Add lettuce and crispy cauliflower, then serve."],
"A crunchy cauliflower burger with a crispy coating.");

addRecipe("Cheese Corn Patty Burger", "Burgers", "35 minutes", 2,
["Burger buns - 2", "Sweet corn - 1/2 cup", "Potato - 1 medium", "Grated cheese - 50 g", "Breadcrumbs - 1/2 cup", "Cornflour - 1 tbsp", "Black pepper - 1/4 tsp", "Mayonnaise - 2 tbsp"],
["Mash boiled potato and mix with corn and grated cheese.", "Add cornflour and pepper.", "Shape into patties and coat with breadcrumbs.", "Pan-fry until golden and fully cooked.", "Toast buns and spread mayonnaise.", "Add the patties and serve."],
"A cheesy sweet corn burger with a homemade patty.");

addRecipe("Tandoori Mushroom Burger", "Burgers", "35 minutes", 2,
["Burger buns - 2", "Mushrooms - 200 g", "Curd - 2 tbsp", "Tandoori masala - 1 tsp", "Garlic - 2 cloves", "Onion - 1/2", "Mayonnaise - 2 tbsp", "Oil - 1 tsp"],
["Mix curd and tandoori masala.", "Coat mushrooms with the mixture.", "Cook mushrooms and garlic in a pan until tender and fully cooked.", "Toast buns and spread mayonnaise.", "Add mushrooms and sliced onion.", "Serve warm."],
"A tandoori-flavoured mushroom burger.");

addRecipe("Loaded Veg Burger", "Burgers", "35 minutes", 2,
["Burger buns - 2", "Potato patties - 2", "Cheese slices - 2", "Onion - 1/2", "Tomato - 1", "Capsicum - 1/2", "Lettuce - 2 leaves", "Mayonnaise - 2 tbsp", "Ketchup - 2 tbsp"],
["Cook potato patties until golden and fully cooked.", "Toast burger buns.", "Spread mayonnaise and ketchup on the buns.", "Add lettuce, potato patties and cheese.", "Layer with onion, tomato and capsicum.", "Close carefully and serve."],
"A fully loaded vegetable burger with fresh toppings.");

addRecipe("Spicy Paneer Cheese Burger", "Burgers", "35 minutes", 2,
["Burger buns - 2", "Paneer - 150 g", "Cheese slices - 2", "Chilli sauce - 1 tbsp", "Mayonnaise - 2 tbsp", "Onion - 1/2", "Capsicum - 1/2", "Black pepper - 1/4 tsp", "Oil - 1 tsp"],
["Cut paneer into thick slices.", "Mix chilli sauce and black pepper.", "Cook paneer and capsicum in a pan with oil until hot and lightly golden.", "Toast buns and mix mayonnaise with a little chilli sauce.", "Add paneer, cheese, onion and capsicum.", "Close the burger and serve."],
"A spicy paneer burger with melted cheese.");

// =========================================
// BURGERS CATEGORY COMPLETE: 25 RECIPES
// NEXT: PASTA
// =========================================
// =========================================
// CATEGORY 2: BURGERS (21–25)
// =========================================

addRecipe("Crispy Cauliflower Burger", "Burgers", "40 minutes", 2,
["Burger buns - 2", "Cauliflower florets - 1 cup", "Maida - 1/2 cup", "Cornflour - 2 tbsp", "Breadcrumbs - 1/2 cup", "Paprika - 1/2 tsp", "Mayonnaise - 2 tbsp", "Lettuce - 2 leaves", "Salt - 1/2 tsp"],
["Steam cauliflower until just tender and cool completely.", "Mix maida, cornflour, paprika, salt and water into a thick batter.", "Dip cauliflower pieces in batter and coat with breadcrumbs.", "Pan-fry with sufficient oil until golden and fully cooked.", "Toast buns and spread mayonnaise.", "Add lettuce and crispy cauliflower, then serve."],
"A crunchy cauliflower burger with a crispy coating.");

addRecipe("Cheese Corn Patty Burger", "Burgers", "35 minutes", 2,
["Burger buns - 2", "Sweet corn - 1/2 cup", "Potato - 1 medium", "Grated cheese - 50 g", "Breadcrumbs - 1/2 cup", "Cornflour - 1 tbsp", "Black pepper - 1/4 tsp", "Mayonnaise - 2 tbsp"],
["Mash boiled potato and mix with corn and grated cheese.", "Add cornflour and pepper.", "Shape into patties and coat with breadcrumbs.", "Pan-fry until golden and fully cooked.", "Toast buns and spread mayonnaise.", "Add the patties and serve."],
"A cheesy sweet corn burger with a homemade patty.");

addRecipe("Tandoori Mushroom Burger", "Burgers", "35 minutes", 2,
["Burger buns - 2", "Mushrooms - 200 g", "Curd - 2 tbsp", "Tandoori masala - 1 tsp", "Garlic - 2 cloves", "Onion - 1/2", "Mayonnaise - 2 tbsp", "Oil - 1 tsp"],
["Mix curd and tandoori masala.", "Coat mushrooms with the mixture.", "Cook mushrooms and garlic in a pan until tender and fully cooked.", "Toast buns and spread mayonnaise.", "Add mushrooms and sliced onion.", "Serve warm."],
"A tandoori-flavoured mushroom burger.");

addRecipe("Loaded Veg Burger", "Burgers", "35 minutes", 2,
["Burger buns - 2", "Potato patties - 2", "Cheese slices - 2", "Onion - 1/2", "Tomato - 1", "Capsicum - 1/2", "Lettuce - 2 leaves", "Mayonnaise - 2 tbsp", "Ketchup - 2 tbsp"],
["Cook potato patties until golden and fully cooked.", "Toast burger buns.", "Spread mayonnaise and ketchup on the buns.", "Add lettuce, potato patties and cheese.", "Layer with onion, tomato and capsicum.", "Close carefully and serve."],
"A fully loaded vegetable burger with fresh toppings.");

addRecipe("Spicy Paneer Cheese Burger", "Burgers", "35 minutes", 2,
["Burger buns - 2", "Paneer - 150 g", "Cheese slices - 2", "Chilli sauce - 1 tbsp", "Mayonnaise - 2 tbsp", "Onion - 1/2", "Capsicum - 1/2", "Black pepper - 1/4 tsp", "Oil - 1 tsp"],
["Cut paneer into thick slices.", "Mix chilli sauce and black pepper.", "Cook paneer and capsicum in a pan with oil until hot and lightly golden.", "Toast buns and mix mayonnaise with a little chilli sauce.", "Add paneer, cheese, onion and capsicum.", "Close the burger and serve."],
"A spicy paneer burger with melted cheese.");

// =========================================
// BURGERS CATEGORY COMPLETE: 25 RECIPES
// NEXT: PASTA
// =========================================
// =========================================
// CATEGORY 3: PASTA (11–20)
// =========================================

addRecipe("Schezwan Pasta", "Pasta", "30 minutes", 2,
["Pasta - 150 g", "Schezwan sauce - 2 tbsp", "Onion - 1/2", "Capsicum - 1/2", "Carrot - 1 small", "Garlic - 3 cloves", "Soy sauce - 1 tsp", "Tomato ketchup - 1 tbsp", "Oil - 1 tbsp", "Salt - 1/2 tsp"],
["Boil pasta until al dente and drain.", "Heat oil and sauté garlic and onion.", "Add carrot and capsicum and stir-fry until slightly tender.", "Add Schezwan sauce, soy sauce and ketchup.", "Mix in pasta and toss thoroughly.", "Taste and adjust seasoning before serving."],
"Spicy Indo-Chinese pasta with colourful vegetables.");

addRecipe("Vegetable Alfredo Pasta", "Pasta", "35 minutes", 2,
["Pasta - 150 g", "Milk - 1.5 cups", "Cream - 2 tbsp", "Butter - 2 tbsp", "Garlic - 3 cloves", "Broccoli - 1/2 cup", "Carrot - 1/2", "Cheese - 50 g", "Black pepper - 1/4 tsp", "Salt - 1 tsp"],
["Boil pasta until al dente and drain.", "Steam broccoli and carrot until just tender.", "Melt butter and sauté garlic.", "Add milk and cream, then simmer gently.", "Stir in cheese, salt and pepper.", "Add vegetables and pasta, then mix well."],
"A creamy Alfredo pasta with colourful vegetables.");

addRecipe("Spinach Cheese Pasta", "Pasta", "30 minutes", 2,
["Pasta - 150 g", "Spinach - 2 cups", "Garlic - 3 cloves", "Butter - 1 tbsp", "Milk - 1 cup", "Cheese - 50 g", "Onion - 1/2", "Black pepper - 1/4 tsp", "Salt - 1 tsp"],
["Boil pasta until al dente and drain.", "Blanch spinach and blend into a smooth puree.", "Heat butter and sauté garlic and onion.", "Add spinach puree and milk.", "Stir in cheese, salt and pepper.", "Add pasta and cook gently for 2 minutes."],
"Green spinach pasta with a creamy cheese sauce.");

addRecipe("Tomato Basil Pasta", "Pasta", "25 minutes", 2,
["Pasta - 150 g", "Tomatoes - 3 medium", "Garlic - 3 cloves", "Olive oil - 2 tbsp", "Fresh basil - 8 leaves", "Tomato paste - 1 tbsp", "Oregano - 1/2 tsp", "Salt - 1 tsp", "Black pepper - 1/4 tsp"],
["Boil pasta until al dente and drain.", "Heat olive oil and sauté garlic.", "Add chopped tomatoes and tomato paste.", "Cook until the tomatoes become a thick sauce.", "Season with oregano, salt and pepper.", "Add pasta and fresh basil, then toss."],
"A simple tomato pasta finished with fresh basil.");

addRecipe("Cheesy Baked Pasta", "Pasta", "45 minutes", 2,
["Pasta - 150 g", "Tomato sauce - 1 cup", "Mozzarella - 70 g", "Cheddar cheese - 40 g", "Onion - 1/2", "Capsicum - 1/2", "Garlic - 2 cloves", "Oregano - 1/2 tsp", "Olive oil - 1 tbsp"],
["Boil pasta until slightly firm and drain.", "Heat olive oil and sauté garlic, onion and capsicum.", "Add tomato sauce and oregano.", "Mix in the cooked pasta.", "Transfer to an oven-safe dish and cover with mozzarella and cheddar.", "Bake at 180°C for 15–20 minutes until bubbly and golden."],
"Oven-baked pasta covered with melted cheese.");

addRecipe("Peanut Chilli Pasta", "Pasta", "25 minutes", 2,
["Pasta - 150 g", "Peanut butter - 2 tbsp", "Soy sauce - 1 tbsp", "Lemon juice - 1 tbsp", "Garlic - 2 cloves", "Chilli flakes - 1/2 tsp", "Honey - 1 tsp", "Carrot - 1/2", "Capsicum - 1/2", "Water - 3 tbsp"],
["Boil pasta until al dente and drain.", "Mix peanut butter, soy sauce, lemon juice, honey and water.", "Heat a little oil and sauté garlic and vegetables.", "Add the peanut sauce and stir gently.", "Add pasta and chilli flakes.", "Toss until coated and serve."],
"A fusion pasta with creamy peanut and chilli sauce.");

addRecipe("Roasted Garlic Pasta", "Pasta", "35 minutes", 2,
["Pasta - 150 g", "Garlic - 1 whole bulb", "Olive oil - 2 tbsp", "Butter - 1 tbsp", "Milk - 1 cup", "Cheese - 40 g", "Oregano - 1/2 tsp", "Black pepper - 1/4 tsp", "Salt - 1 tsp"],
["Roast a whole garlic bulb wrapped in foil at 180°C until soft, then squeeze out the cloves.", "Boil pasta until al dente and drain.", "Mash roasted garlic into a paste.", "Heat butter and add the garlic paste and milk.", "Stir in cheese, oregano, salt and pepper.", "Add pasta and toss until coated."],
"A mellow, creamy pasta with roasted garlic flavour.");

addRecipe("Corn White Sauce Pasta", "Pasta", "30 minutes", 2,
["Pasta - 150 g", "Sweet corn - 1/2 cup", "Butter - 2 tbsp", "Maida - 1 tbsp", "Milk - 1.5 cups", "Cheese - 40 g", "Garlic - 2 cloves", "Black pepper - 1/4 tsp", "Salt - 1 tsp"],
["Boil pasta and drain.", "Cook sweet corn until tender.", "Melt butter and sauté chopped garlic.", "Add maida and stir for one minute.", "Gradually whisk in milk until smooth and thick.", "Add cheese, corn, salt and pepper.", "Mix in pasta and serve hot."],
"Sweet corn in a smooth white cheese sauce.");

addRecipe("Chilli Garlic Noodle Pasta", "Pasta", "25 minutes", 2,
["Pasta - 150 g", "Garlic - 5 cloves", "Chilli flakes - 1 tsp", "Soy sauce - 1 tbsp", "Vinegar - 1 tsp", "Capsicum - 1/2", "Carrot - 1/2", "Spring onion - 2 tbsp", "Oil - 1 tbsp", "Salt - 1/2 tsp"],
["Boil pasta until al dente and drain.", "Heat oil and gently cook chopped garlic.", "Add chilli flakes, carrot and capsicum.", "Add soy sauce and vinegar.", "Mix in pasta and toss over medium heat.", "Finish with spring onion and serve."],
"Indo-Chinese inspired pasta with chilli and garlic.");

addRecipe("Creamy Broccoli Pasta", "Pasta", "30 minutes", 2,
["Pasta - 150 g", "Broccoli - 1 cup", "Butter - 2 tbsp", "Garlic - 3 cloves", "Milk - 1 cup", "Cream - 2 tbsp", "Cheese - 40 g", "Black pepper - 1/4 tsp", "Salt - 1 tsp"],
["Boil pasta until al dente and drain.", "Steam broccoli until just tender.", "Heat butter and sauté garlic.", "Add milk and cream, then simmer gently.", "Add cheese, salt and pepper.", "Mix in broccoli and pasta and serve warm."],
"A creamy pasta with tender broccoli and cheese.");

// NEXT PART: PASTA 21–25
// =========================================
// CATEGORY 3: PASTA (21–25)
// =========================================

addRecipe("Paneer Tikka Pasta", "Pasta", "35 minutes", 2,
["Pasta - 150 g", "Paneer - 100 g", "Curd - 2 tbsp", "Tandoori masala - 1 tsp", "Onion - 1", "Capsicum - 1/2", "Tomato puree - 1/2 cup", "Cream - 2 tbsp", "Garlic - 3 cloves", "Oil - 1 tbsp", "Salt - 1/2 tsp"],
["Boil pasta until al dente and drain.", "Mix paneer with curd, tandoori masala and a little salt.", "Heat oil and cook the paneer until lightly golden.", "In the same pan, sauté garlic, onion and capsicum.", "Add tomato puree and cook for 5 minutes.", "Stir in cream and paneer.", "Add pasta, mix well and serve."],
"Indian-style pasta with tandoori paneer and creamy tomato sauce.");

addRecipe("Cheese Tomato Pasta", "Pasta", "25 minutes", 2,
["Pasta - 150 g", "Tomatoes - 3", "Onion - 1/2", "Garlic - 3 cloves", "Butter - 1 tbsp", "Cheese - 60 g", "Oregano - 1/2 tsp", "Chilli flakes - 1/2 tsp", "Salt - 1 tsp"],
["Boil pasta until al dente and drain.", "Heat butter and sauté garlic and onion.", "Add chopped tomatoes and cook until soft.", "Mash the tomatoes into a thick sauce.", "Add oregano, chilli flakes and salt.", "Mix in pasta and grated cheese.", "Cook gently until the cheese melts."],
"A quick tomato pasta with plenty of melted cheese.");

addRecipe("Lemon Butter Pasta", "Pasta", "20 minutes", 2,
["Pasta - 150 g", "Butter - 2 tbsp", "Lemon juice - 1 tbsp", "Lemon zest - 1/2 tsp", "Garlic - 2 cloves", "Cheese - 30 g", "Black pepper - 1/4 tsp", "Parsley - 1 tbsp", "Salt - 1 tsp"],
["Boil pasta until al dente and reserve a little pasta water.", "Melt butter in a pan and sauté garlic.", "Add lemon juice and lemon zest.", "Add pasta and a splash of pasta water.", "Season with salt and black pepper.", "Mix in cheese and parsley.", "Serve immediately."],
"Fresh and tangy pasta with lemon, butter and herbs.");

addRecipe("Indian Street Style Pasta", "Pasta", "30 minutes", 2,
["Pasta - 150 g", "Onion - 1", "Tomato - 1", "Capsicum - 1/2", "Carrot - 1/2", "Tomato ketchup - 2 tbsp", "Pav bhaji masala - 1 tsp", "Red chilli powder - 1/4 tsp", "Butter - 1 tbsp", "Garlic - 3 cloves", "Salt - 1/2 tsp"],
["Boil pasta until al dente and drain.", "Heat butter and sauté garlic and onion.", "Add tomato, carrot and capsicum.", "Cook until the vegetables soften slightly.", "Add ketchup, pav bhaji masala, chilli powder and salt.", "Mix in pasta and cook for 2–3 minutes.", "Serve hot."],
"Street-food inspired masala pasta with Indian spices.");

addRecipe("Four Cheese Pasta", "Pasta", "30 minutes", 2,
["Pasta - 150 g", "Mozzarella - 30 g", "Cheddar - 30 g", "Processed cheese - 30 g", "Parmesan - 20 g", "Milk - 1 cup", "Butter - 1 tbsp", "Garlic - 2 cloves", "Black pepper - 1/4 tsp", "Salt - 1/2 tsp"],
["Boil pasta until al dente and drain.", "Melt butter in a pan and sauté garlic.", "Pour in milk and heat gently.", "Add mozzarella, cheddar and processed cheese gradually.", "Stir until the sauce becomes smooth.", "Add parmesan, black pepper and salt.", "Mix in pasta and serve warm."],
"Rich and creamy pasta made with four types of cheese.");

// =========================================
// PASTA CATEGORY COMPLETED: 25 RECIPES
// =========================================
// =========================================
// CATEGORY 4: DESSERTS (1–10)
// =========================================

addRecipe("Chocolate Brownies", "Desserts", "40 minutes", 6,
["Maida - 1 cup", "Cocoa powder - 1/3 cup", "Sugar - 3/4 cup", "Butter - 100 g", "Milk - 1/4 cup", "Vanilla essence - 1 tsp", "Baking powder - 1/2 tsp", "Chocolate chips - 1/4 cup", "Salt - a pinch"],
["Preheat oven to 180°C.", "Melt butter and mix with sugar.", "Add milk and vanilla essence.", "Sift maida, cocoa powder, baking powder and salt.", "Combine wet and dry ingredients without overmixing.", "Fold in chocolate chips.", "Pour into a greased baking tray.", "Bake for 20–25 minutes and cool before cutting."],
"Soft and fudgy homemade chocolate brownies.");

addRecipe("Chocolate Mug Cake", "Desserts", "10 minutes", 1,
["Maida - 4 tbsp", "Cocoa powder - 2 tbsp", "Sugar - 3 tbsp", "Milk - 4 tbsp", "Oil - 2 tbsp", "Baking powder - 1/4 tsp", "Vanilla essence - 1/4 tsp", "Chocolate chips - 1 tbsp"],
["Take a microwave-safe mug.", "Add maida, cocoa powder, sugar and baking powder.", "Pour in milk, oil and vanilla essence.", "Mix until there are no dry lumps.", "Add chocolate chips.", "Microwave for about 60–90 seconds, checking that it is cooked through.", "Allow it to cool slightly before eating."],
"A quick chocolate cake made in a mug.");

addRecipe("Classic Vanilla Cupcakes", "Desserts", "35 minutes", 6,
["Maida - 1 cup", "Sugar - 1/2 cup", "Butter - 60 g", "Milk - 1/2 cup", "Baking powder - 1 tsp", "Vanilla essence - 1 tsp", "Curd - 2 tbsp", "Salt - a pinch"],
["Preheat oven to 180°C.", "Cream butter and sugar until light.", "Add curd and vanilla essence.", "Mix maida, baking powder and salt separately.", "Add dry ingredients and milk gradually.", "Divide batter into cupcake liners.", "Bake for 18–22 minutes until a toothpick comes out clean.", "Cool completely before decorating."],
"Soft vanilla cupcakes with a light buttery flavour.");

addRecipe("Chocolate Chip Cookies", "Desserts", "30 minutes", 8,
["Maida - 1 cup", "Butter - 1/2 cup", "Brown sugar - 1/2 cup", "White sugar - 1/4 cup", "Chocolate chips - 1/2 cup", "Vanilla essence - 1 tsp", "Baking soda - 1/2 tsp", "Milk - 1 tbsp", "Salt - a pinch"],
["Preheat oven to 180°C.", "Beat butter with both sugars.", "Add vanilla essence and milk.", "Mix maida, baking soda and salt.", "Combine the dry mixture with the butter mixture.", "Fold in chocolate chips.", "Shape into small balls and place on a lined tray.", "Bake for 10–12 minutes and cool before serving."],
"Homemade cookies filled with chocolate chips.");

addRecipe("Chocolate Pudding", "Desserts", "20 minutes", 4,
["Milk - 2 cups", "Cocoa powder - 3 tbsp", "Sugar - 1/3 cup", "Cornflour - 3 tbsp", "Dark chocolate - 50 g", "Vanilla essence - 1/2 tsp", "Salt - a pinch"],
["Take a saucepan and mix cocoa powder, sugar and cornflour.", "Gradually add milk while whisking.", "Cook over medium-low heat while stirring continuously.", "When thick, add chopped dark chocolate.", "Stir until chocolate melts completely.", "Add vanilla essence and salt.", "Pour into serving bowls.", "Cool and refrigerate until set."],
"Smooth chocolate pudding served chilled.");

addRecipe("Strawberry Cheesecake", "Desserts", "40 minutes", 6,
["Digestive biscuits - 150 g", "Butter - 60 g", "Cream cheese - 250 g", "Fresh cream - 100 ml", "Sugar - 1/2 cup", "Strawberry puree - 1/2 cup", "Gelatin - 1 tbsp", "Water - 3 tbsp", "Vanilla essence - 1 tsp"],
["Crush biscuits into fine crumbs.", "Mix crumbs with melted butter and press into a cake tin.", "Refrigerate the base for 20 minutes.", "Beat cream cheese and sugar until smooth.", "Whip cream separately and fold it into the cheese mixture.", "Prepare gelatin according to its packet instructions.", "Mix strawberry puree and prepared gelatin into the filling.", "Pour over the base and refrigerate for at least 6 hours.", "Decorate with fresh strawberries."],
"A chilled strawberry cheesecake with a biscuit base.");

addRecipe("Caramel Custard", "Desserts", "45 minutes", 4,
["Milk - 2 cups", "Sugar - 1/2 cup", "Eggs - 3", "Vanilla essence - 1 tsp", "Sugar for caramel - 1/4 cup", "Water - 2 tbsp"],
["Heat sugar and water in a pan until golden caramel forms.", "Carefully pour caramel into a heat-safe mould.", "Warm milk without boiling it.", "Whisk eggs, sugar and vanilla in a bowl.", "Gradually add warm milk while whisking.", "Strain the mixture into the caramel mould.", "Bake in a water bath at 160°C for about 35–40 minutes until set.", "Cool and refrigerate before unmoulding."],
"A classic soft custard topped with caramel sauce.");

addRecipe("Oreo Chocolate Truffles", "Desserts", "25 minutes", 10,
["Oreo biscuits - 20", "Cream cheese - 100 g", "Dark chocolate - 150 g", "Fresh cream - 2 tbsp", "Cocoa powder - 2 tbsp"],
["Crush Oreo biscuits into fine crumbs.", "Mix crumbs with cream cheese.", "Shape the mixture into small balls.", "Refrigerate for 20 minutes.", "Melt dark chocolate with cream gently.", "Dip each chilled ball into melted chocolate.", "Place on baking paper and sprinkle cocoa powder.", "Refrigerate until the coating sets."],
"Small chocolate-coated Oreo treats.");

addRecipe("Banana Pancakes", "Desserts", "20 minutes", 2,
["Ripe bananas - 2", "Maida - 1 cup", "Milk - 3/4 cup", "Sugar - 1 tbsp", "Baking powder - 1 tsp", "Vanilla essence - 1/2 tsp", "Butter - 1 tbsp", "Salt - a pinch"],
["Mash bananas in a bowl.", "Add milk, sugar and vanilla essence.", "Mix maida, baking powder and salt separately.", "Combine wet and dry ingredients into a smooth batter.", "Heat a lightly buttered pan.", "Pour a small ladle of batter into the pan.", "Cook until bubbles appear, flip and cook the other side.", "Serve warm with sliced banana."],
"Fluffy banana pancakes for a sweet breakfast or dessert.");

addRecipe("Chocolate Lava Cake", "Desserts", "25 minutes", 2,
["Dark chocolate - 100 g", "Butter - 50 g", "Sugar - 1/4 cup", "Maida - 1/4 cup", "Eggs - 2", "Vanilla essence - 1/2 tsp", "Cocoa powder - 1 tbsp"],
["Preheat oven to 200°C.", "Melt chocolate and butter together.", "Whisk eggs and sugar until slightly thick.", "Add melted chocolate and vanilla essence.", "Fold in sifted maida gently.", "Grease two ramekins and dust with cocoa powder.", "Divide batter between them.", "Bake for around 8–10 minutes so the centre remains soft.", "Rest briefly and carefully turn onto plates."],
"A warm chocolate cake with a soft molten centre.");

// NEXT PART: DESSERTS 11–20
// =========================================
// CATEGORY 4: DESSERTS (11–20)
// =========================================

addRecipe("Red Velvet Cake", "Desserts", "50 minutes", 6,
["Maida - 1.5 cups", "Sugar - 1 cup", "Butter - 100 g", "Milk - 1/2 cup", "Curd - 1/2 cup", "Cocoa powder - 1 tbsp", "Red food colour - as directed", "Baking powder - 1 tsp", "Baking soda - 1/2 tsp", "Vanilla essence - 1 tsp", "Cream cheese - 150 g", "Icing sugar - 1/2 cup"],
["Preheat oven to 180°C.", "Cream butter and sugar until fluffy.", "Mix curd, milk, vanilla and red food colour.", "Sift maida, cocoa, baking powder and baking soda.", "Combine wet and dry ingredients gently.", "Pour into a greased cake tin.", "Bake for 25–30 minutes until cooked through.", "Cool completely.", "Beat cream cheese with icing sugar and spread over the cake."],
"Soft red velvet cake with creamy cheese frosting.");

addRecipe("Mango Mousse", "Desserts", "20 minutes", 4,
["Mango pulp - 1 cup", "Fresh cream - 1 cup", "Sugar - 2 tbsp", "Gelatin - 1 tsp", "Water - 2 tbsp", "Mango pieces - 1/4 cup"],
["Prepare gelatin according to its packet instructions.", "Whip chilled cream until soft peaks form.", "Mix mango pulp with sugar.", "Fold the mango pulp gently into the whipped cream.", "Add the prepared gelatin and mix.", "Pour into serving glasses.", "Refrigerate for at least 4 hours.", "Top with fresh mango pieces before serving."],
"Light and creamy chilled mango mousse.");

addRecipe("Gulab Jamun", "Desserts", "40 minutes", 6,
["Milk powder - 1 cup", "Maida - 3 tbsp", "Ghee - 1 tbsp", "Milk - 4 tbsp approximately", "Baking soda - 1 pinch", "Sugar - 1.5 cups", "Water - 1.5 cups", "Cardamom - 3 pods", "Rose water - 1 tsp"],
["Mix milk powder, maida and baking soda.", "Add ghee and enough milk to make a soft dough.", "Rest the dough for 5 minutes.", "Shape into smooth small balls without cracks.", "Heat sugar, water and cardamom to make a light syrup.", "Warm the syrup and add rose water.", "Fry the balls on low heat until evenly golden brown.", "Drain and place them in warm syrup.", "Let them soak for at least 1 hour before serving."],
"Soft milk-powder dumplings soaked in cardamom sugar syrup.");

addRecipe("Rasmalai", "Desserts", "60 minutes", 6,
["Full-fat milk - 2 litres", "Lemon juice - 2 tbsp", "Sugar - 1.5 cups", "Water - 4 cups", "Saffron - a few strands", "Cardamom powder - 1/4 tsp", "Chopped pistachios - 2 tbsp", "Almonds - 2 tbsp"],
["Boil 1 litre of milk and add diluted lemon juice gradually to curdle it.", "Strain the chenna through a clean cloth and rinse it.", "Hang briefly to remove excess water.", "Knead the chenna until smooth and shape into small discs.", "Boil sugar and water in a wide pan.", "Add the discs and cook covered for about 12–15 minutes.", "In another pan, reduce the remaining milk with saffron and cardamom.", "Gently squeeze the cooked discs and add them to the flavoured milk.", "Chill and garnish with nuts."],
"Soft chenna discs soaked in saffron-flavoured milk.");

addRecipe("Apple Crumble", "Desserts", "40 minutes", 4,
["Apples - 3", "Maida - 1 cup", "Butter - 75 g", "Brown sugar - 1/2 cup", "Cinnamon powder - 1 tsp", "Lemon juice - 1 tsp", "Oats - 1/4 cup", "Salt - a pinch"],
["Preheat oven to 180°C.", "Peel and chop apples.", "Mix apples with lemon juice, cinnamon and 2 tbsp sugar.", "Place the apples in a baking dish.", "Rub cold butter into maida until crumbly.", "Mix in remaining sugar, oats and salt.", "Spread the crumble mixture over the apples.", "Bake for 25–30 minutes until golden and bubbling.", "Cool slightly before serving."],
"Warm baked apples covered with a buttery crunchy topping.");

addRecipe("Coconut Ladoo", "Desserts", "25 minutes", 12,
["Desiccated coconut - 2 cups", "Condensed milk - 3/4 cup", "Ghee - 1 tbsp", "Cardamom powder - 1/4 tsp", "Extra coconut - 1/4 cup"],
["Heat ghee in a pan.", "Add desiccated coconut and roast gently for 2 minutes.", "Add condensed milk and cardamom powder.", "Stir continuously over low heat until the mixture thickens.", "Allow it to cool until comfortable to handle.", "Grease your palms lightly with ghee.", "Shape into small ladoos.", "Roll in extra coconut and serve."],
"Easy coconut ladoos with a sweet cardamom flavour.");

addRecipe("Chocolate Donuts", "Desserts", "50 minutes", 8,
["Maida - 2 cups", "Sugar - 3 tbsp", "Yeast - 1 tsp", "Warm milk - 3/4 cup", "Butter - 2 tbsp", "Salt - 1/4 tsp", "Dark chocolate - 100 g", "Fresh cream - 3 tbsp", "Oil - for frying"],
["Mix warm milk, yeast and a little sugar; rest until foamy.", "Combine maida, remaining sugar and salt.", "Add yeast mixture and softened butter.", "Knead into a soft dough and cover until doubled in size.", "Roll out and cut donut shapes.", "Rest the shaped donuts for 20 minutes.", "Fry in moderately hot oil until golden on both sides.", "Melt chocolate with cream.", "Cool donuts slightly and dip the tops in chocolate."],
"Soft homemade donuts with a chocolate coating.");

addRecipe("Kesar Shrikhand", "Desserts", "15 minutes", 4,
["Thick hung curd - 2 cups", "Powdered sugar - 1/2 cup", "Saffron - a few strands", "Warm milk - 1 tbsp", "Cardamom powder - 1/4 tsp", "Pistachios - 2 tbsp", "Almonds - 2 tbsp"],
["Soak saffron in warm milk for 10 minutes.", "Place hung curd in a mixing bowl.", "Add powdered sugar and whisk until smooth.", "Add saffron milk and cardamom powder.", "Mix until creamy.", "Garnish with chopped pistachios and almonds.", "Refrigerate for at least 1 hour before serving."],
"A chilled creamy Maharashtrian-style shrikhand with saffron.");

addRecipe("Vanilla Ice Cream", "Desserts", "20 minutes + freezing", 6,
["Fresh cream - 2 cups", "Condensed milk - 1 cup", "Vanilla essence - 1 tsp", "Milk powder - 2 tbsp"],
["Chill the cream and mixing bowl.", "Whip cream until soft peaks form.", "Add condensed milk and milk powder.", "Add vanilla essence.", "Fold gently until combined.", "Transfer to a freezer-safe container.", "Cover and freeze for 6–8 hours or until firm.", "Allow it to soften slightly before scooping."],
"Homemade creamy vanilla ice cream.");

addRecipe("Carrot Halwa", "Desserts", "50 minutes", 5,
["Carrots - 500 g", "Full-fat milk - 2 cups", "Sugar - 1/2 cup", "Ghee - 3 tbsp", "Cardamom powder - 1/4 tsp", "Cashews - 2 tbsp", "Almonds - 2 tbsp", "Raisins - 1 tbsp"],
["Wash, peel and grate the carrots.", "Heat 1 tbsp ghee and sauté the carrots for 5 minutes.", "Add milk and cook while stirring occasionally.", "Continue cooking until most of the milk evaporates.", "Add sugar and cook until the mixture thickens again.", "Heat remaining ghee separately and roast the nuts and raisins.", "Mix them into the halwa with cardamom powder.", "Cook for another 2 minutes and serve warm."],
"Traditional Indian carrot halwa with milk, ghee and nuts.");

// NEXT PART: DESSERTS 21–25
// =========================================
// CATEGORY 4: DESSERTS (21–25)
// =========================================

addRecipe("Chocolate Fudge", "Desserts", "25 minutes", 8,
["Dark chocolate - 200 g", "Condensed milk - 200 g", "Butter - 2 tbsp", "Cocoa powder - 2 tbsp", "Walnuts - 1/4 cup", "Vanilla essence - 1 tsp", "Salt - a pinch"],
["Line a small square tray with baking paper.", "Chop the dark chocolate.", "Heat condensed milk and butter gently in a saucepan.", "Add chocolate and stir until completely melted.", "Mix in cocoa powder, vanilla and salt.", "Fold in chopped walnuts.", "Pour into the prepared tray and level the top.", "Refrigerate for 3–4 hours until firm.", "Cut into small squares."],
"Rich chocolate fudge with crunchy walnuts.");

addRecipe("Malai Kulfi", "Desserts", "45 minutes + freezing", 6,
["Full-fat milk - 1 litre", "Condensed milk - 1/2 cup", "Milk powder - 2 tbsp", "Sugar - 2 tbsp", "Cardamom powder - 1/4 tsp", "Pistachios - 2 tbsp", "Almonds - 2 tbsp", "Saffron - a few strands"],
["Pour milk into a heavy-bottomed pan.", "Simmer while stirring until reduced by about one-third.", "Add condensed milk, milk powder and sugar.", "Stir until smooth and slightly thick.", "Add cardamom, saffron and chopped nuts.", "Cool the mixture completely.", "Pour into kulfi moulds and cover.", "Freeze for 6–8 hours or until solid.", "Dip moulds briefly in warm water to release the kulfi."],
"Traditional creamy Indian kulfi with nuts and saffron.");

addRecipe("Moong Dal Halwa", "Desserts", "60 minutes", 5,
["Yellow moong dal - 1 cup", "Ghee - 1/2 cup", "Sugar - 3/4 cup", "Water - 2 cups", "Milk - 1/2 cup", "Cardamom powder - 1/4 tsp", "Almonds - 2 tbsp", "Cashews - 2 tbsp"],
["Wash and soak moong dal for 3–4 hours.", "Drain and grind into a coarse paste.", "Heat ghee in a heavy pan.", "Add the dal paste and roast on low heat, stirring continuously.", "Continue until the paste turns golden and aromatic.", "In another pan, heat water, milk and sugar until the sugar dissolves.", "Carefully add the warm liquid to the roasted dal in small portions.", "Cook while stirring until thick and glossy.", "Add cardamom and chopped nuts before serving."],
"Traditional rich moong dal halwa with roasted nuts.");

addRecipe("Strawberry Ice Cream", "Desserts", "20 minutes + freezing", 6,
["Fresh strawberries - 2 cups", "Fresh cream - 2 cups", "Condensed milk - 3/4 cup", "Sugar - 2 tbsp", "Vanilla essence - 1/2 tsp", "Lemon juice - 1 tsp"],
["Wash and remove the strawberry tops.", "Blend strawberries with sugar and lemon juice.", "Whip chilled cream until soft peaks form.", "Add condensed milk and vanilla essence.", "Fold in the strawberry puree gently.", "Pour into a freezer-safe container.", "Cover and freeze for 6–8 hours until firm.", "Allow to soften slightly before serving."],
"Refreshing homemade strawberry ice cream.");

addRecipe("Gajar Coconut Barfi", "Desserts", "40 minutes", 12,
["Grated carrot - 2 cups", "Desiccated coconut - 1 cup", "Milk - 1/2 cup", "Sugar - 1/2 cup", "Ghee - 2 tbsp", "Milk powder - 1/2 cup", "Cardamom powder - 1/4 tsp", "Chopped pistachios - 2 tbsp"],
["Heat ghee in a pan.", "Add grated carrot and cook for 5 minutes.", "Pour in milk and cook until the carrot softens.", "Add sugar and stir until dissolved.", "Add coconut and milk powder.", "Cook over low heat until the mixture thickens and leaves the sides of the pan.", "Mix in cardamom powder.", "Spread into a greased tray and level the surface.", "Garnish with pistachios and cool completely.", "Cut into square pieces."],
"Indian carrot and coconut barfi with cardamom.");

// =========================================
// DESSERTS CATEGORY COMPLETED: 25 RECIPES
// =========================================
// =========================================
// CATEGORY 5: HEALTHY FOOD (1–10)
// =========================================

addRecipe("Vegetable Oats Upma", "Healthy Food", "20 minutes", 2,
["Rolled oats - 1 cup", "Onion - 1/2", "Carrot - 1", "Green peas - 1/4 cup", "Green chilli - 1", "Mustard seeds - 1/2 tsp", "Curry leaves - 6", "Oil - 1 tsp", "Water - 1.5 cups", "Salt - 1/2 tsp", "Lemon juice - 1 tsp"],
["Dry-roast oats for 2–3 minutes and keep aside.", "Heat oil and add mustard seeds and curry leaves.", "Add chopped onion and green chilli.", "Add carrot and peas and sauté for 3 minutes.", "Pour in water and add salt.", "Bring to a boil and add roasted oats.", "Cook until the oats absorb the water.", "Finish with lemon juice and serve."],
"A fibre-rich breakfast made with oats and vegetables.");

addRecipe("Paneer Vegetable Salad", "Healthy Food", "15 minutes", 2,
["Paneer - 150 g", "Cucumber - 1", "Tomato - 1", "Carrot - 1", "Onion - 1/2", "Lemon juice - 1 tbsp", "Black pepper - 1/4 tsp", "Roasted cumin powder - 1/2 tsp", "Salt - 1/2 tsp", "Coriander - 2 tbsp"],
["Wash all vegetables thoroughly.", "Chop cucumber, tomato, carrot and onion.", "Cut paneer into small cubes.", "Combine vegetables and paneer in a bowl.", "Add lemon juice, cumin powder, black pepper and salt.", "Mix gently and garnish with coriander.", "Serve fresh."],
"A colourful fresh salad with protein-rich paneer.");

addRecipe("Sprouts Chaat", "Healthy Food", "15 minutes", 2,
["Moong sprouts - 2 cups", "Tomato - 1", "Onion - 1/2", "Cucumber - 1/2", "Lemon juice - 1 tbsp", "Chaat masala - 1/2 tsp", "Roasted cumin powder - 1/4 tsp", "Coriander - 2 tbsp", "Salt - 1/4 tsp"],
["Steam sprouts until tender and let them cool.", "Finely chop tomato, onion and cucumber.", "Add sprouts and chopped vegetables to a bowl.", "Add chaat masala, cumin powder and salt.", "Squeeze lemon juice over the mixture.", "Mix well and garnish with coriander.", "Serve immediately."],
"A tangy Indian snack made with protein-rich moong sprouts.");

addRecipe("Grilled Paneer Sandwich", "Healthy Food", "20 minutes", 2,
["Whole wheat bread - 4 slices", "Paneer - 100 g", "Capsicum - 1/2", "Tomato - 1/2", "Onion - 1/2", "Black pepper - 1/4 tsp", "Mint chutney - 2 tbsp", "Butter - 1 tsp", "Salt - 1/4 tsp"],
["Mash paneer in a bowl.", "Add finely chopped capsicum, tomato and onion.", "Season with salt and black pepper.", "Spread mint chutney on the bread slices.", "Add the paneer mixture and cover with another slice.", "Brush the outside lightly with butter.", "Grill until both sides are golden and crisp.", "Cut and serve warm."],
"A whole wheat sandwich filled with fresh vegetables and paneer.");

addRecipe("Quinoa Vegetable Bowl", "Healthy Food", "30 minutes", 2,
["Quinoa - 1 cup", "Water - 2 cups", "Broccoli - 1/2 cup", "Carrot - 1", "Capsicum - 1/2", "Sweet corn - 1/4 cup", "Olive oil - 1 tbsp", "Lemon juice - 1 tbsp", "Black pepper - 1/4 tsp", "Salt - 1/2 tsp"],
["Rinse quinoa thoroughly under running water.", "Add quinoa and water to a saucepan.", "Cook covered until the water is absorbed and quinoa is fluffy.", "Steam broccoli and carrot until tender.", "Heat olive oil and lightly sauté capsicum and corn.", "Divide quinoa into serving bowls.", "Add the vegetables.", "Season with lemon juice, pepper and salt.", "Serve warm."],
"A balanced bowl of quinoa and colourful vegetables.");

addRecipe("Chickpea Salad", "Healthy Food", "15 minutes", 2,
["Boiled chickpeas - 1.5 cups", "Cucumber - 1", "Tomato - 1", "Onion - 1/2", "Capsicum - 1/2", "Lemon juice - 1 tbsp", "Olive oil - 1 tsp", "Black pepper - 1/4 tsp", "Roasted cumin powder - 1/2 tsp", "Salt - 1/2 tsp", "Coriander - 2 tbsp"],
["Cook chickpeas until completely tender and allow them to cool.", "Chop cucumber, tomato, onion and capsicum.", "Add chickpeas and vegetables to a large bowl.", "Add olive oil and lemon juice.", "Season with cumin, black pepper and salt.", "Toss gently.", "Garnish with coriander and serve."],
"A filling chickpea salad with fibre and plant protein.");

addRecipe("Vegetable Dalia", "Healthy Food", "30 minutes", 2,
["Broken wheat dalia - 1 cup", "Onion - 1/2", "Tomato - 1", "Carrot - 1", "Green peas - 1/4 cup", "Cumin seeds - 1/2 tsp", "Turmeric - 1/4 tsp", "Ghee - 1 tsp", "Water - 3 cups", "Salt - 1/2 tsp"],
["Rinse dalia and drain.", "Heat ghee in a pressure cooker.", "Add cumin seeds and chopped onion.", "Add tomato, carrot and peas.", "Add turmeric and salt.", "Stir in the dalia.", "Add water and mix.", "Pressure cook until the dalia and vegetables are soft.", "Allow pressure to release safely before opening.", "Mix and serve warm."],
"A comforting whole-wheat breakfast with vegetables.");

addRecipe("Ragi Banana Pancakes", "Healthy Food", "20 minutes", 2,
["Ragi flour - 1 cup", "Ripe banana - 1", "Milk - 3/4 cup", "Curd - 2 tbsp", "Jaggery powder - 2 tbsp", "Baking powder - 1/2 tsp", "Cardamom powder - 1/4 tsp", "Ghee - 1 tsp"],
["Mash the banana in a bowl.", "Add milk, curd and jaggery powder.", "Mix ragi flour, baking powder and cardamom separately.", "Combine wet and dry ingredients into a smooth batter.", "Heat a non-stick pan and grease lightly with ghee.", "Pour a small portion of batter.", "Cook on medium-low heat and flip when bubbles appear.", "Cook the other side and serve warm."],
"Ragi pancakes naturally sweetened with ripe banana.");

addRecipe("Vegetable Moong Dal Chilla", "Healthy Food", "25 minutes", 3,
["Yellow moong dal - 1 cup", "Onion - 1/2", "Tomato - 1/2", "Carrot - 1/2", "Green chilli - 1", "Ginger - 1 tsp", "Coriander - 2 tbsp", "Cumin powder - 1/2 tsp", "Salt - 1/2 tsp", "Oil - 2 tsp"],
["Wash and soak moong dal for 3–4 hours.", "Drain and blend with ginger and a little water into a smooth batter.", "Mix in chopped onion, tomato, carrot and chilli.", "Add cumin powder, coriander and salt.", "Heat a non-stick pan and lightly grease it.", "Spread a ladle of batter into a thin circle.", "Cook until the bottom sets, then flip.", "Cook the other side until done.", "Serve with mint chutney."],
"Protein-rich savoury pancakes made from moong dal.");

addRecipe("Greek Yogurt Fruit Bowl", "Healthy Food", "10 minutes", 2,
["Plain Greek yogurt - 1.5 cups", "Banana - 1", "Apple - 1", "Papaya - 1/2 cup", "Pomegranate seeds - 1/4 cup", "Almonds - 10", "Chia seeds - 1 tbsp", "Honey - 1 tbsp"],
["Wash all fruits thoroughly.", "Slice banana and apple and chop papaya.", "Divide Greek yogurt between two bowls.", "Arrange the fruits over the yogurt.", "Sprinkle almonds and chia seeds.", "Drizzle honey over the top.", "Serve immediately."],
"A refreshing bowl of yogurt, fresh fruits, nuts and seeds.");

// NEXT PART: HEALTHY FOOD 11–20
// =========================================
// CATEGORY 5: HEALTHY FOOD (11–20)
// =========================================

addRecipe("Sweet Potato Chaat", "Healthy Food", "25 minutes", 2,
["Sweet potato - 2 medium", "Onion - 1/2", "Tomato - 1", "Cucumber - 1/2", "Lemon juice - 1 tbsp", "Chaat masala - 1/2 tsp", "Roasted cumin powder - 1/2 tsp", "Coriander - 2 tbsp", "Salt - 1/4 tsp"],
["Wash and peel sweet potatoes.", "Cut into cubes and steam or boil until tender.", "Allow them to cool slightly.", "Chop onion, tomato and cucumber.", "Combine everything in a bowl.", "Add lemon juice, chaat masala, cumin and salt.", "Mix gently and garnish with coriander."],
"A colourful sweet potato chaat with fresh vegetables.");

addRecipe("Masala Oats Bowl", "Healthy Food", "20 minutes", 2,
["Rolled oats - 1 cup", "Onion - 1/2", "Tomato - 1", "Carrot - 1/2", "Green peas - 1/4 cup", "Green chilli - 1", "Turmeric - 1/4 tsp", "Cumin seeds - 1/2 tsp", "Water - 2 cups", "Oil - 1 tsp", "Salt - 1/2 tsp"],
["Heat oil in a pan and add cumin seeds.", "Add chopped onion and green chilli.", "Add tomato, carrot and peas.", "Stir in turmeric and salt.", "Add water and bring to a gentle boil.", "Add oats and stir.", "Cook for 4–5 minutes until creamy.", "Serve warm."],
"A quick savoury oats bowl with Indian spices.");

addRecipe("Rajma Salad Bowl", "Healthy Food", "15 minutes", 2,
["Cooked rajma - 1.5 cups", "Cucumber - 1", "Tomato - 1", "Onion - 1/2", "Capsicum - 1/2", "Lemon juice - 1 tbsp", "Roasted cumin powder - 1/2 tsp", "Black pepper - 1/4 tsp", "Coriander - 2 tbsp", "Salt - 1/2 tsp"],
["Soak rajma overnight and cook until completely soft.", "Allow cooked rajma to cool.", "Chop cucumber, tomato, onion and capsicum.", "Combine rajma and vegetables in a bowl.", "Add lemon juice, cumin, pepper and salt.", "Mix gently and garnish with coriander.", "Serve fresh."],
"A filling plant-protein salad made with kidney beans.");

addRecipe("Vegetable Brown Rice", "Healthy Food", "35 minutes", 2,
["Brown rice - 1 cup", "Water - as needed", "Carrot - 1", "Beans - 1/2 cup", "Capsicum - 1/2", "Green peas - 1/4 cup", "Garlic - 2 cloves", "Olive oil - 1 tbsp", "Black pepper - 1/4 tsp", "Salt - 1/2 tsp"],
["Rinse brown rice thoroughly.", "Cook according to the packet instructions until tender.", "Heat olive oil in a pan.", "Sauté garlic and chopped vegetables.", "Cook vegetables until tender but still slightly crisp.", "Add cooked brown rice.", "Season with pepper and salt.", "Toss everything together and serve."],
"A wholesome brown rice meal with colourful vegetables.");

addRecipe("Besan Vegetable Cheela", "Healthy Food", "20 minutes", 2,
["Besan - 1 cup", "Onion - 1/2", "Tomato - 1/2", "Capsicum - 1/2", "Carrot - 1/2", "Curd - 2 tbsp", "Turmeric - 1/4 tsp", "Ajwain - 1/4 tsp", "Water - 3/4 cup approximately", "Salt - 1/2 tsp", "Oil - 2 tsp"],
["Add besan to a mixing bowl.", "Add curd and gradually mix in water to make a smooth batter.", "Add chopped onion, tomato, capsicum and carrot.", "Season with turmeric, ajwain and salt.", "Heat a non-stick pan and grease lightly.", "Spread batter into a thin circle.", "Cook until the edges lift, then flip.", "Cook the other side until golden and fully cooked.", "Serve with coriander chutney."],
"A savoury gram-flour pancake loaded with vegetables.");

addRecipe("Peanut Cucumber Salad", "Healthy Food", "10 minutes", 2,
["Cucumber - 2", "Roasted peanuts - 1/2 cup", "Tomato - 1", "Onion - 1/2", "Lemon juice - 1 tbsp", "Coriander - 2 tbsp", "Roasted cumin powder - 1/4 tsp", "Black pepper - 1/4 tsp", "Salt - 1/4 tsp"],
["Wash cucumber and tomato thoroughly.", "Chop cucumber, tomato and onion.", "Coarsely crush the roasted peanuts.", "Add vegetables and peanuts to a bowl.", "Add lemon juice, cumin, pepper and salt.", "Mix gently and garnish with coriander.", "Serve immediately for the best crunch."],
"A crunchy salad with peanuts and fresh vegetables.");

addRecipe("Vegetable Millet Khichdi", "Healthy Food", "30 minutes", 2,
["Foxtail millet - 1/2 cup", "Moong dal - 1/2 cup", "Carrot - 1", "Green peas - 1/4 cup", "Beans - 1/4 cup", "Onion - 1/2", "Cumin seeds - 1/2 tsp", "Turmeric - 1/4 tsp", "Ghee - 1 tsp", "Water - 3 cups", "Salt - 1/2 tsp"],
["Rinse millet and moong dal thoroughly.", "Heat ghee in a pressure cooker and add cumin seeds.", "Add onion and sauté briefly.", "Add carrot, peas and beans.", "Add millet, moong dal, turmeric and salt.", "Pour in water and mix.", "Pressure cook until millet and dal are soft.", "Allow pressure to release naturally before opening.", "Stir and serve warm."],
"A comforting millet and lentil khichdi with vegetables.");

addRecipe("Apple Peanut Butter Toast", "Healthy Food", "10 minutes", 2,
["Whole wheat bread - 4 slices", "Apple - 1", "Peanut butter - 4 tbsp", "Cinnamon powder - 1/4 tsp", "Chia seeds - 1 tsp", "Honey - 1 tsp"],
["Toast the whole wheat bread until crisp.", "Wash and thinly slice the apple.", "Spread peanut butter over each toast.", "Arrange apple slices on top.", "Sprinkle cinnamon and chia seeds.", "Add a little honey if desired.", "Serve immediately."],
"A quick breakfast toast with fruit and peanut butter.");

addRecipe("Spinach Paneer Bowl", "Healthy Food", "25 minutes", 2,
["Paneer - 150 g", "Spinach - 2 cups", "Brown rice - 1 cup cooked", "Garlic - 3 cloves", "Onion - 1/2", "Black pepper - 1/4 tsp", "Cumin seeds - 1/2 tsp", "Olive oil - 1 tbsp", "Salt - 1/2 tsp", "Lemon juice - 1 tsp"],
["Wash spinach thoroughly and chop it.", "Heat oil and add cumin seeds.", "Add garlic and onion and sauté.", "Add spinach and cook until wilted.", "Add paneer cubes, salt and black pepper.", "Cook gently until paneer is heated through.", "Divide cooked brown rice into bowls.", "Top with spinach and paneer.", "Finish with lemon juice and serve."],
"A balanced bowl with paneer, spinach and brown rice.");

addRecipe("Homemade Vegetable Soup", "Healthy Food", "30 minutes", 3,
["Carrot - 1", "Beans - 1/2 cup", "Cabbage - 1 cup", "Sweet corn - 1/4 cup", "Tomato - 1", "Garlic - 3 cloves", "Onion - 1/2", "Black pepper - 1/4 tsp", "Water - 4 cups", "Cornflour - 1 tbsp", "Salt - 1/2 tsp"],
["Wash and finely chop all vegetables.", "Heat a little oil in a saucepan.", "Add garlic and onion and sauté.", "Add carrot, beans, cabbage, corn and tomato.", "Pour in water and simmer until vegetables are tender.", "Mix cornflour with 2 tbsp cold water.", "Stir the slurry into the soup.", "Simmer until slightly thickened.", "Season with pepper and salt and serve hot."],
"A warm homemade soup packed with vegetables.");

// NEXT PART: HEALTHY FOOD 21–25
// =========================================
// CATEGORY 5: HEALTHY FOOD (21–25)
// =========================================

addRecipe("Avocado Vegetable Toast", "Healthy Food", "10 minutes", 2,
["Whole wheat bread - 4 slices", "Ripe avocado - 1", "Tomato - 1", "Cucumber - 1/2", "Lemon juice - 1 tbsp", "Black pepper - 1/4 tsp", "Chilli flakes - 1/4 tsp", "Salt - 1/4 tsp"],
["Toast the bread slices until crisp.", "Cut the avocado, remove the seed and scoop out the flesh.", "Mash avocado with lemon juice, salt and black pepper.", "Spread the avocado mixture over the toast.", "Arrange sliced tomato and cucumber on top.", "Sprinkle chilli flakes and serve immediately."],
"Creamy avocado toast topped with fresh vegetables.");

addRecipe("Vegetable Idli", "Healthy Food", "30 minutes", 3,
["Idli batter - 2 cups", "Carrot - 1/2", "Beans - 1/4 cup", "Green peas - 1/4 cup", "Onion - 1/2", "Mustard seeds - 1/2 tsp", "Curry leaves - 6", "Oil - 1 tsp", "Salt - 1/4 tsp"],
["Finely chop carrot, beans and onion.", "Heat oil and add mustard seeds and curry leaves.", "Add vegetables and peas and sauté until slightly tender.", "Allow the mixture to cool.", "Mix vegetables into the idli batter.", "Grease idli moulds and pour in the batter.", "Steam for 10–15 minutes until cooked through.", "Cool slightly and remove from moulds.", "Serve with coconut chutney."],
"Steamed South Indian idlis with added vegetables.");

addRecipe("Lentil Vegetable Soup", "Healthy Food", "35 minutes", 3,
["Red lentils - 1/2 cup", "Carrot - 1", "Tomato - 1", "Onion - 1/2", "Garlic - 3 cloves", "Cumin powder - 1/2 tsp", "Turmeric - 1/4 tsp", "Water - 4 cups", "Olive oil - 1 tsp", "Salt - 1/2 tsp", "Lemon juice - 1 tbsp"],
["Rinse lentils thoroughly.", "Heat olive oil in a saucepan.", "Add garlic and onion and sauté.", "Add chopped carrot and tomato.", "Add lentils, turmeric, cumin and water.", "Simmer until lentils and vegetables are completely soft.", "Blend partially or fully according to your preference.", "Season with salt and lemon juice.", "Serve warm."],
"A filling lentil soup with vegetables and gentle spices.");

addRecipe("Fruit and Nut Yogurt Parfait", "Healthy Food", "10 minutes", 2,
["Plain yogurt - 1.5 cups", "Banana - 1", "Apple - 1", "Pomegranate seeds - 1/4 cup", "Rolled oats - 1/4 cup", "Almonds - 10", "Walnuts - 4", "Honey - 1 tbsp"],
["Wash and chop all fruits.", "Lightly toast oats in a dry pan and cool.", "Chop almonds and walnuts.", "Add a layer of yogurt to two glasses.", "Add a layer of fruit and toasted oats.", "Repeat the layers.", "Top with nuts and a little honey.", "Serve immediately or refrigerate briefly."],
"A colourful layered yogurt dessert with fruit, oats and nuts.");

addRecipe("Paneer Stuffed Bell Peppers", "Healthy Food", "40 minutes", 3,
["Bell peppers - 3", "Paneer - 150 g", "Onion - 1/2", "Tomato - 1", "Sweet corn - 1/4 cup", "Cumin powder - 1/2 tsp", "Black pepper - 1/4 tsp", "Coriander - 2 tbsp", "Olive oil - 1 tbsp", "Salt - 1/2 tsp"],
["Preheat oven to 180°C.", "Wash bell peppers, cut off the tops and remove the seeds.", "Crumble paneer into a bowl.", "Add chopped onion, tomato, corn and coriander.", "Season with cumin, pepper and salt.", "Mix the filling thoroughly.", "Fill each bell pepper with the paneer mixture.", "Brush the outside lightly with olive oil.", "Place in a baking dish and bake for 20–25 minutes until the peppers soften.", "Serve warm."],
"Colourful bell peppers filled with a savoury paneer mixture.");

// =========================================
// HEALTHY FOOD CATEGORY COMPLETED: 25 RECIPES
// =========================================
// =========================================
// CATEGORY 6: INDIAN FOOD (1–10)
// =========================================

addRecipe("Paneer Butter Masala", "Indian Food", "35 minutes", 3,
["Paneer - 200 g", "Tomatoes - 3", "Onion - 1", "Cashews - 12", "Butter - 2 tbsp", "Fresh cream - 3 tbsp", "Ginger - 1 inch", "Garlic - 4 cloves", "Red chilli powder - 1 tsp", "Garam masala - 1/2 tsp", "Kasuri methi - 1 tsp", "Salt - 1 tsp"],
["Heat a little butter and cook chopped onion, tomatoes, ginger and garlic.", "Add cashews and cook until everything softens.", "Cool the mixture and blend into a smooth paste.", "Heat remaining butter in a pan.", "Add the paste and cook for 5 minutes.", "Add chilli powder, garam masala and salt.", "Add paneer cubes and a little water.", "Simmer gently for 5 minutes.", "Finish with cream and crushed kasuri methi.", "Serve with roti or naan."],
"A rich North Indian paneer curry in a creamy tomato gravy.");

addRecipe("Dal Tadka", "Indian Food", "35 minutes", 3,
["Toor dal - 1/2 cup", "Moong dal - 1/4 cup", "Onion - 1", "Tomato - 1", "Garlic - 4 cloves", "Ginger - 1 tsp", "Cumin seeds - 1/2 tsp", "Mustard seeds - 1/4 tsp", "Turmeric - 1/2 tsp", "Red chilli powder - 1/2 tsp", "Ghee - 1 tbsp", "Water - 3 cups", "Salt - 1 tsp", "Coriander - 2 tbsp"],
["Wash both dals thoroughly.", "Pressure cook with turmeric and water until completely soft.", "Mash the cooked dal gently.", "Heat ghee in a pan and add cumin and mustard seeds.", "Add chopped garlic, ginger and onion.", "Sauté until onion becomes golden.", "Add tomato and red chilli powder.", "Cook until tomato softens.", "Pour the tadka into the dal and simmer for 5 minutes.", "Garnish with coriander and serve."],
"Classic Indian lentils finished with a fragrant ghee tempering.");

addRecipe("Chole Masala", "Indian Food", "45 minutes", 3,
["Chickpeas - 1 cup", "Onion - 2", "Tomatoes - 2", "Ginger - 1 inch", "Garlic - 4 cloves", "Green chilli - 1", "Chole masala - 2 tsp", "Cumin seeds - 1/2 tsp", "Turmeric - 1/4 tsp", "Red chilli powder - 1/2 tsp", "Oil - 2 tbsp", "Salt - 1 tsp", "Coriander - 2 tbsp"],
["Soak chickpeas overnight.", "Pressure cook chickpeas with fresh water until completely tender.", "Heat oil and add cumin seeds.", "Add chopped onion, ginger and garlic.", "Cook until onion turns golden.", "Add tomato, turmeric, chilli powder and chole masala.", "Cook until the masala thickens.", "Add cooked chickpeas and some cooking water.", "Simmer for 15 minutes.", "Mash a few chickpeas to thicken the gravy.", "Garnish with coriander."],
"Spicy Punjabi chickpea curry served with rice or bhature.");

addRecipe("Aloo Gobi", "Indian Food", "30 minutes", 3,
["Potatoes - 2 medium", "Cauliflower - 2 cups", "Onion - 1", "Tomato - 1", "Ginger - 1 tsp", "Cumin seeds - 1/2 tsp", "Turmeric - 1/2 tsp", "Red chilli powder - 1/2 tsp", "Coriander powder - 1 tsp", "Garam masala - 1/4 tsp", "Oil - 2 tbsp", "Salt - 1 tsp", "Coriander - 2 tbsp"],
["Wash and cut potatoes and cauliflower into small pieces.", "Heat oil and add cumin seeds.", "Add chopped onion and ginger.", "Sauté until onion softens.", "Add tomato and all powdered spices except garam masala.", "Cook until tomato becomes soft.", "Add potatoes, cauliflower and salt.", "Mix well and cover the pan.", "Cook on low heat until vegetables are tender, stirring occasionally.", "Finish with garam masala and coriander."],
"A popular dry Indian curry of potatoes and cauliflower.");

addRecipe("Veg Pulao", "Indian Food", "30 minutes", 3,
["Basmati rice - 1 cup", "Carrot - 1", "Green peas - 1/4 cup", "Beans - 1/4 cup", "Onion - 1", "Potato - 1", "Green chilli - 1", "Ginger - 1 tsp", "Cumin seeds - 1/2 tsp", "Bay leaf - 1", "Cloves - 3", "Cinnamon - 1 small stick", "Ghee - 1 tbsp", "Water - 1.75 cups", "Salt - 1 tsp"],
["Rinse rice and soak for 20 minutes.", "Heat ghee in a cooker and add cumin, bay leaf, cloves and cinnamon.", "Add onion, ginger and green chilli.", "Sauté until onion softens.", "Add chopped vegetables and stir.", "Drain rice and add it to the cooker.", "Add water and salt.", "Mix gently and cook until rice is fluffy.", "Allow pressure to release safely before opening.", "Fluff gently and serve."],
"Fragrant basmati rice cooked with vegetables and whole spices.");

addRecipe("Palak Paneer", "Indian Food", "35 minutes", 3,
["Paneer - 200 g", "Spinach - 3 cups", "Onion - 1", "Tomato - 1", "Garlic - 4 cloves", "Ginger - 1 inch", "Green chilli - 1", "Cumin seeds - 1/2 tsp", "Garam masala - 1/2 tsp", "Cream - 2 tbsp", "Oil - 1 tbsp", "Salt - 1 tsp"],
["Wash spinach thoroughly.", "Blanch spinach briefly in boiling water and cool it.", "Blend spinach with green chilli into a smooth puree.", "Heat oil and add cumin seeds.", "Add onion, ginger and garlic and sauté.", "Add tomato and cook until soft.", "Add spinach puree and simmer gently.", "Season with salt and garam masala.", "Add paneer cubes and cook for 3–4 minutes.", "Finish with cream and serve."],
"Paneer cubes in a smooth and vibrant spinach gravy.");

addRecipe("Masala Dosa", "Indian Food", "35 minutes", 3,
["Dosa batter - 3 cups", "Potatoes - 3", "Onion - 1", "Green chilli - 2", "Mustard seeds - 1/2 tsp", "Curry leaves - 8", "Turmeric - 1/4 tsp", "Urad dal - 1 tsp", "Oil - 2 tbsp", "Salt - 1/2 tsp", "Coriander - 2 tbsp"],
["Boil potatoes until soft and peel them.", "Heat oil in a pan and add mustard seeds and urad dal.", "Add curry leaves, green chilli and onion.", "Sauté until onion softens.", "Add turmeric and salt.", "Add mashed potatoes and coriander.", "Mix the potato masala well.", "Heat a dosa pan and spread batter into a thin circle.", "Drizzle a little oil and cook until crisp.", "Place potato masala in the centre and fold.", "Serve with sambar and chutney."],
"Crispy South Indian dosa filled with spiced potato masala.");

addRecipe("Rajma Masala", "Indian Food", "45 minutes", 3,
["Rajma - 1 cup", "Onion - 2", "Tomatoes - 2", "Ginger - 1 inch", "Garlic - 4 cloves", "Cumin seeds - 1/2 tsp", "Turmeric - 1/4 tsp", "Red chilli powder - 1/2 tsp", "Coriander powder - 1 tsp", "Garam masala - 1/2 tsp", "Oil - 2 tbsp", "Salt - 1 tsp", "Coriander - 2 tbsp"],
["Soak rajma overnight.", "Pressure cook with fresh water until completely soft.", "Heat oil in a pan and add cumin seeds.", "Add chopped onion, ginger and garlic.", "Cook until golden.", "Add tomatoes and powdered spices.", "Cook until the masala thickens.", "Add cooked rajma and its cooking water.", "Simmer for 15 minutes.", "Mash a few beans to thicken the gravy.", "Finish with garam masala and coriander."],
"A comforting kidney bean curry served with steamed rice.");

addRecipe("Vegetable Biryani", "Indian Food", "55 minutes", 4,
["Basmati rice - 1.5 cups", "Carrot - 1", "Potato - 1", "Beans - 1/2 cup", "Green peas - 1/4 cup", "Cauliflower - 1 cup", "Onion - 2", "Tomato - 1", "Curd - 1/2 cup", "Ginger garlic paste - 1 tbsp", "Biryani masala - 2 tsp", "Mint - 1/4 cup", "Coriander - 1/4 cup", "Ghee - 2 tbsp", "Water - as needed", "Salt - 1 tsp"],
["Rinse and soak basmati rice for 20 minutes.", "Cook rice until about 70% done, then drain.", "Heat ghee and lightly fry sliced onions.", "Add ginger garlic paste and chopped tomato.", "Add vegetables, curd, biryani masala and salt.", "Cook until vegetables are partly tender.", "Layer the vegetable mixture with rice in a heavy pot.", "Add mint, coriander and fried onions between layers.", "Cover tightly and cook on low heat until rice and vegetables are fully cooked.", "Rest for 10 minutes before opening.", "Gently mix and serve."],
"Aromatic layered vegetable biryani with herbs and Indian spices.");

addRecipe("Pav Bhaji", "Indian Food", "40 minutes", 4,
["Potatoes - 3", "Cauliflower - 1 cup", "Green peas - 1/2 cup", "Capsicum - 1", "Onion - 2", "Tomatoes - 3", "Ginger garlic paste - 1 tbsp", "Pav bhaji masala - 2 tbsp", "Red chilli powder - 1/2 tsp", "Butter - 2 tbsp", "Lemon - 1", "Salt - 1 tsp", "Pav buns - 8", "Coriander - 2 tbsp"],
["Boil potatoes, cauliflower and peas until soft.", "Mash the cooked vegetables.", "Heat butter on a large pan.", "Add chopped onion and ginger garlic paste.", "Add capsicum and tomatoes.", "Add pav bhaji masala, chilli powder and salt.", "Cook until tomatoes soften.", "Add mashed vegetables and a little water.", "Mash and simmer until thick.", "Toast pav buns with a little butter.", "Garnish bhaji with coriander and lemon.", "Serve hot with pav."],
"Mumbai-style mashed vegetable curry served with butter-toasted pav.");

// NEXT PART: INDIAN FOOD 11–20
// =========================================
// CATEGORY 6: INDIAN FOOD (11–20)
// =========================================

addRecipe("Shahi Paneer", "Indian Food", "35 minutes", 3,
["Paneer - 200 g", "Onion - 2", "Tomatoes - 2", "Cashews - 15", "Fresh cream - 3 tbsp", "Ginger - 1 inch", "Garlic - 3 cloves", "Butter - 2 tbsp", "Turmeric - 1/4 tsp", "Red chilli powder - 1/2 tsp", "Garam masala - 1/2 tsp", "Cardamom - 2", "Salt - 1 tsp"],
["Heat a little butter and cook chopped onion, tomatoes, ginger and garlic.", "Add cashews and cardamom.", "Cook until everything softens.", "Cool and blend into a smooth paste.", "Heat remaining butter in a pan.", "Add the paste and cook for 5 minutes.", "Add turmeric, chilli powder, garam masala and salt.", "Add a little water and simmer.", "Add paneer cubes and cream.", "Cook gently for 3 minutes and serve."],
"A rich Mughlai-style paneer curry with a creamy cashew gravy.");

addRecipe("Kadai Paneer", "Indian Food", "35 minutes", 3,
["Paneer - 200 g", "Capsicum - 1", "Onion - 2", "Tomatoes - 2", "Ginger - 1 inch", "Garlic - 3 cloves", "Coriander seeds - 1 tsp", "Cumin seeds - 1/2 tsp", "Red chilli powder - 1/2 tsp", "Garam masala - 1/2 tsp", "Oil - 2 tbsp", "Salt - 1 tsp", "Coriander - 2 tbsp"],
["Dry-roast coriander and cumin seeds and crush them coarsely.", "Heat oil in a kadai.", "Add chopped onion and sauté.", "Add ginger and garlic.", "Add tomatoes and cook until soft.", "Add crushed spices, chilli powder and salt.", "Add capsicum and cook until slightly tender.", "Add paneer cubes and mix gently.", "Sprinkle garam masala and coriander.", "Serve hot."],
"Paneer and capsicum cooked in a fragrant kadai masala.");

addRecipe("Vegetable Kofta Curry", "Indian Food", "45 minutes", 4,
["Potatoes - 2", "Carrot - 1", "Paneer - 75 g", "Besan - 3 tbsp", "Onion - 2", "Tomatoes - 2", "Cashews - 10", "Ginger garlic paste - 1 tsp", "Turmeric - 1/4 tsp", "Red chilli powder - 1/2 tsp", "Garam masala - 1/2 tsp", "Oil - 2 tbsp", "Salt - 1 tsp", "Coriander - 2 tbsp"],
["Boil potatoes and carrot until tender.", "Mash them and mix with crumbled paneer, besan and a little salt.", "Shape into small kofta balls.", "Shallow-fry or bake the koftas until golden and cooked.", "For the gravy, sauté onion, tomatoes, cashews and ginger garlic paste.", "Cool and blend into a smooth paste.", "Heat oil and cook the paste with turmeric, chilli powder and salt.", "Add water and simmer until the gravy thickens.", "Add garam masala.", "Place koftas in the gravy just before serving.", "Garnish with coriander."],
"Vegetable and paneer dumplings in a smooth Indian curry.");

addRecipe("Jeera Rice", "Indian Food", "25 minutes", 3,
["Basmati rice - 1 cup", "Water - 1.75 cups", "Ghee - 1 tbsp", "Cumin seeds - 2 tsp", "Bay leaf - 1", "Green cardamom - 2", "Cloves - 2", "Salt - 1/2 tsp", "Coriander - 1 tbsp"],
["Rinse rice and soak for 15–20 minutes.", "Heat ghee in a saucepan.", "Add cumin seeds, bay leaf, cardamom and cloves.", "Allow cumin seeds to crackle.", "Add drained rice and stir gently.", "Pour in water and add salt.", "Cover and cook on low heat until rice is tender.", "Rest for 5 minutes.", "Fluff gently and garnish with coriander."],
"Fragrant basmati rice flavoured with roasted cumin and ghee.");

addRecipe("Bhindi Masala", "Indian Food", "30 minutes", 3,
["Bhindi - 300 g", "Onion - 2", "Tomato - 1", "Green chilli - 1", "Cumin seeds - 1/2 tsp", "Turmeric - 1/4 tsp", "Red chilli powder - 1/2 tsp", "Coriander powder - 1 tsp", "Amchur powder - 1/2 tsp", "Oil - 2 tbsp", "Salt - 1/2 tsp", "Coriander - 2 tbsp"],
["Wash bhindi and dry completely before cutting.", "Cut into small pieces.", "Heat oil and sauté bhindi until the sticky texture reduces.", "Remove bhindi and keep aside.", "In the same pan, add cumin seeds and chopped onion.", "Add green chilli and tomato.", "Add turmeric, chilli powder and coriander powder.", "Cook until the masala thickens.", "Add bhindi, salt and amchur powder.", "Mix gently and cook until bhindi is tender.", "Garnish with coriander."],
"A classic Indian dry curry of okra and onion masala.");

addRecipe("Matar Paneer", "Indian Food", "35 minutes", 3,
["Paneer - 200 g", "Green peas - 1 cup", "Onion - 1", "Tomatoes - 2", "Ginger garlic paste - 1 tsp", "Cumin seeds - 1/2 tsp", "Turmeric - 1/4 tsp", "Red chilli powder - 1/2 tsp", "Coriander powder - 1 tsp", "Garam masala - 1/2 tsp", "Oil - 2 tbsp", "Salt - 1 tsp", "Coriander - 2 tbsp"],
["Heat oil and add cumin seeds.", "Add chopped onion and sauté until golden.", "Add ginger garlic paste.", "Add tomatoes and powdered spices.", "Cook until the masala thickens.", "Add green peas and a little water.", "Cover and cook until peas are tender.", "Add paneer cubes and salt.", "Simmer gently for 4–5 minutes.", "Finish with garam masala and coriander."],
"Everyday North Indian curry with paneer and green peas.");

addRecipe("Vegetable Handi", "Indian Food", "40 minutes", 4,
["Carrot - 1", "Beans - 1/2 cup", "Cauliflower - 1 cup", "Green peas - 1/2 cup", "Capsicum - 1", "Onion - 2", "Tomatoes - 2", "Curd - 1/2 cup", "Cashews - 10", "Ginger garlic paste - 1 tbsp", "Coriander powder - 1 tsp", "Garam masala - 1/2 tsp", "Cream - 2 tbsp", "Oil - 2 tbsp", "Salt - 1 tsp"],
["Chop all vegetables into medium-sized pieces.", "Cook vegetables until partly tender.", "Blend onion, tomatoes and cashews into a smooth paste.", "Heat oil in a pan and add ginger garlic paste.", "Add the blended mixture and cook until thick.", "Lower the heat and mix in whisked curd.", "Add coriander powder, garam masala and salt.", "Add cooked vegetables and simmer for 8–10 minutes.", "Finish with cream and serve."],
"Mixed vegetables cooked in a creamy Indian handi-style gravy.");

addRecipe("Aloo Paratha", "Indian Food", "35 minutes", 4,
["Whole wheat flour - 2 cups", "Potatoes - 3", "Green chilli - 1", "Ginger - 1 tsp", "Coriander - 2 tbsp", "Cumin powder - 1/2 tsp", "Red chilli powder - 1/4 tsp", "Amchur powder - 1/2 tsp", "Salt - 1 tsp", "Water - as needed", "Ghee - 2 tbsp"],
["Mix whole wheat flour with water and a pinch of salt.", "Knead into a soft dough and rest for 15 minutes.", "Boil potatoes until tender and peel them.", "Mash potatoes and mix with chilli, ginger, coriander and spices.", "Divide dough and potato filling into equal portions.", "Roll a dough ball, add filling and seal carefully.", "Roll gently into a flat paratha.", "Cook on a hot tawa on both sides.", "Apply ghee and cook until golden spots appear.", "Serve with curd or chutney."],
"Whole wheat flatbread stuffed with spiced mashed potatoes.");

addRecipe("Misal Pav", "Indian Food", "45 minutes", 4,
["Matki sprouts - 2 cups", "Onion - 2", "Tomatoes - 2", "Ginger garlic paste - 1 tbsp", "Goda masala - 2 tsp", "Red chilli powder - 1 tsp", "Turmeric - 1/4 tsp", "Mustard seeds - 1/2 tsp", "Cumin seeds - 1/2 tsp", "Oil - 2 tbsp", "Water - 3 cups", "Salt - 1 tsp", "Farsan - 1 cup", "Lemon - 1", "Coriander - 2 tbsp", "Pav buns - 8"],
["Rinse matki sprouts and cook until tender.", "Heat oil in a pan and add mustard and cumin seeds.", "Add chopped onion and ginger garlic paste.", "Sauté until onion turns golden.", "Add tomatoes, turmeric, chilli powder and goda masala.", "Cook until the masala thickens.", "Add cooked sprouts, water and salt.", "Simmer for 10–12 minutes.", "Serve in bowls topped with farsan, chopped onion and coriander.", "Add lemon juice and serve with pav."],
"A famous Maharashtrian sprouted matki curry served with crunchy farsan and pav.");

addRecipe("Kadhi Pakora", "Indian Food", "40 minutes", 4,
["Curd - 1 cup", "Besan - 1/2 cup", "Water - 3 cups", "Onion - 1", "Green chilli - 1", "Ginger - 1 tsp", "Turmeric - 1/2 tsp", "Red chilli powder - 1/2 tsp", "Cumin seeds - 1/2 tsp", "Mustard seeds - 1/4 tsp", "Curry leaves - 8", "Oil - 2 tbsp", "Salt - 1 tsp", "Coriander - 2 tbsp"],
["For pakoras, mix 1/4 cup besan with chopped onion, chilli and a little salt.", "Add enough water to make a thick batter.", "Fry small portions until cooked and golden.", "Whisk curd with remaining besan, turmeric and water until smooth.", "Heat a little oil and add cumin, mustard and curry leaves.", "Add ginger and pour in the curd mixture.", "Cook on low heat while stirring until it comes to a gentle boil.", "Simmer until the kadhi thickens and the raw besan taste disappears.", "Add salt and the prepared pakoras.", "Simmer for a few more minutes and garnish with coriander."],
"A tangy yogurt and gram-flour curry with onion pakoras.");

// NEXT PART: INDIAN FOOD 21–25
// =========================================
// CATEGORY 6: INDIAN FOOD (21–25)
// =========================================

addRecipe("Dum Aloo", "Indian Food", "40 minutes", 3,
["Baby potatoes - 400 g", "Onion - 2", "Tomatoes - 2", "Curd - 1/2 cup", "Ginger garlic paste - 1 tbsp", "Cashews - 10", "Cumin seeds - 1/2 tsp", "Turmeric - 1/4 tsp", "Red chilli powder - 1/2 tsp", "Coriander powder - 1 tsp", "Garam masala - 1/2 tsp", "Oil - 2 tbsp", "Salt - 1 tsp", "Coriander - 2 tbsp"],
["Wash and boil baby potatoes until just tender.", "Peel the potatoes and prick them lightly with a fork.", "Heat oil in a pan and lightly sauté the potatoes.", "In another pan, cook onion, tomatoes, cashews and ginger garlic paste.", "Cool the mixture and blend into a smooth paste.", "Heat oil and add cumin seeds.", "Add the blended paste and powdered spices.", "Lower the heat and stir in whisked curd.", "Add potatoes, salt and a little water.", "Cover and simmer for 10 minutes.", "Add garam masala and coriander before serving."],
"Baby potatoes simmered in a rich and flavourful Indian gravy.");

addRecipe("Veg Kolhapuri", "Indian Food", "40 minutes", 4,
["Cauliflower - 1 cup", "Carrot - 1", "Beans - 1/2 cup", "Capsicum - 1", "Green peas - 1/2 cup", "Onion - 2", "Tomatoes - 2", "Ginger garlic paste - 1 tbsp", "Dry coconut - 3 tbsp", "Sesame seeds - 1 tsp", "Coriander seeds - 1 tsp", "Red chilli powder - 1 tsp", "Turmeric - 1/4 tsp", "Oil - 2 tbsp", "Salt - 1 tsp", "Coriander - 2 tbsp"],
["Chop all vegetables into bite-sized pieces.", "Cook the vegetables until partly tender.", "Dry-roast coconut, sesame seeds and coriander seeds.", "Grind the roasted ingredients into a coarse masala.", "Heat oil and sauté chopped onion.", "Add ginger garlic paste and tomatoes.", "Add turmeric and chilli powder.", "Add the ground masala and cook for 3–4 minutes.", "Add vegetables, salt and water.", "Simmer until vegetables are fully cooked and gravy thickens.", "Garnish with coriander."],
"A spicy Maharashtrian mixed vegetable curry with roasted coconut masala.");

addRecipe("Dal Makhani", "Indian Food", "60 minutes", 4,
["Whole black urad dal - 1 cup", "Rajma - 1/4 cup", "Onion - 1", "Tomatoes - 2", "Ginger garlic paste - 1 tbsp", "Butter - 2 tbsp", "Fresh cream - 3 tbsp", "Cumin seeds - 1/2 tsp", "Turmeric - 1/4 tsp", "Red chilli powder - 1/2 tsp", "Garam masala - 1/2 tsp", "Salt - 1 tsp", "Water - as needed"],
["Rinse urad dal and rajma thoroughly.", "Soak them in water for at least 8 hours.", "Drain and pressure-cook with fresh water until completely soft.", "Heat butter in a pan and add cumin seeds.", "Add chopped onion and sauté until golden.", "Add ginger garlic paste and tomatoes.", "Cook until the tomato mixture becomes soft.", "Add turmeric, chilli powder and salt.", "Add the cooked dal and rajma with some cooking liquid.", "Simmer on low heat, stirring occasionally, until creamy.", "Add garam masala and cream.", "Serve hot."],
"A slow-cooked, creamy black lentil and kidney bean curry.");
addRecipe("Vegetable Uttapam", "Indian Food", "30 minutes", 3,
["Dosa batter - 2 cups", "Onion - 1", "Tomato - 1", "Capsicum - 1/2", "Carrot - 1/2", "Green chilli - 1", "Coriander - 2 tbsp", "Oil - 2 tbsp", "Salt - 1/2 tsp"],
["Finely chop onion, tomato, capsicum, carrot and green chilli.", "Mix the vegetables with coriander and a little salt.", "Heat a tawa and lightly grease it.", "Pour a ladleful of dosa batter onto the tawa.", "Spread gently into a thick round pancake.", "Sprinkle the vegetable mixture over the top.", "Press the toppings lightly into the batter.", "Drizzle a little oil around the edges.", "Cook on medium-low heat until the base is golden and the top is cooked.", "Flip carefully and cook the other side.", "Serve hot with coconut chutney and sambar."],
"A soft South Indian pancake topped with colourful chopped vegetables.");

addRecipe("Kashmiri Pulao", "Indian Food", "35 minutes", 3,
["Basmati rice - 1 cup", "Milk - 1/2 cup", "Water - 1 cup", "Onion - 1", "Apple - 1/2", "Pomegranate seeds - 1/4 cup", "Cashews - 10", "Almonds - 10", "Raisins - 2 tbsp", "Ghee - 2 tbsp", "Bay leaf - 1", "Cinnamon - 1 small stick", "Green cardamom - 2", "Saffron - a few strands", "Salt - 1/2 tsp"],
["Rinse and soak basmati rice for 20 minutes.", "Soak saffron strands in warm milk.", "Heat ghee in a saucepan.", "Add bay leaf, cinnamon and cardamom.", "Add sliced onion and sauté until lightly golden.", "Add drained rice and stir gently.", "Pour in water and saffron milk.", "Add salt and cook covered until rice is tender.", "Lightly roast cashews, almonds and raisins in a separate pan.", "Fluff the rice gently.", "Top with chopped apple, pomegranate seeds and roasted nuts.", "Serve warm."],
"A fragrant Kashmiri-style rice dish with saffron, fruits and nuts.");
// =============================================
// RECIPE HUB BY PUNIKET
// FINAL FUNCTIONALITY - PART 18/18
// =============================================

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("recipeSearch");
    const searchButton = document.getElementById("searchButton");
    const recipeResults = document.getElementById("recipeResults");
    const recipeDetails = document.getElementById("recipeDetails");
    const yearElement = document.getElementById("year");

    // Check important HTML elements
    if (!recipeResults || !recipeDetails) {
        console.error("Recipe Hub: Required HTML elements not found!");
        return;
    }

    // Footer year
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Escape HTML for safe display
    function escapeHTML(value) {
        return String(value ?? "").replace(/[&<>"']/g, function (char) {
            const entities = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            };

            return entities[char];
        });
    }

    // Display recipe cards
    function renderRecipes(list) {

        if (!list.length) {
            recipeResults.innerHTML = `
                <div class="no-results">
                    <h3>No Recipes Found!</h3>
                    <p>Try another recipe name or category.</p>
                </div>
            `;
            return;
        }

        recipeResults.innerHTML = list.map(function (recipe) {

            const recipeIndex = recipes.indexOf(recipe);

            return `
                <div class="recipe-card" data-index="${recipeIndex}">

                    <img
                        src="${escapeHTML(recipe.image)}"
                        alt="${escapeHTML(recipe.name)}"
                        loading="lazy"
                    >

                    <div class="recipe-card-content">
                        <h3>${escapeHTML(recipe.name)}</h3>

                        <p>${escapeHTML(recipe.description)}</p>

                        <p>
                            <strong>Category:</strong>
                            ${escapeHTML(recipe.category)}
                        </p>

                        <p>
                            <strong>Cooking Time:</strong>
                            ${escapeHTML(recipe.time)}
                        </p>

                        <button type="button" class="view-recipe-btn">
                            View Full Recipe
                        </button>
                    </div>

                </div>
            `;

        }).join("");

        // Hide images that fail to load
        recipeResults.querySelectorAll("img").forEach(function (img) {
            img.addEventListener("error", function () {
                this.style.display = "none";
            }, { once: true });
        });
    }

    // Display full recipe details
    function showRecipe(index) {

        const recipe = recipes[index];

        if (!recipe) return;

        const ingredientsHTML = recipe.ingredients.map(function (item) {
            return `<li>${escapeHTML(item)}</li>`;
        }).join("");

        const stepsHTML = recipe.steps.map(function (step) {
            return `<li>${escapeHTML(step)}</li>`;
        }).join("");

        recipeDetails.innerHTML = `

            <div class="full-recipe">

                <h2>${escapeHTML(recipe.name)}</h2>

                <p>${escapeHTML(recipe.description)}</p>

                <div class="recipe-info">
                    <p>
                        <strong>Category:</strong>
                        ${escapeHTML(recipe.category)}
                    </p>

                    <p>
                        <strong>Cooking Time:</strong>
                        ${escapeHTML(recipe.time)}
                    </p>

                    <p>
                        <strong>Servings:</strong>
                        ${escapeHTML(recipe.servings)}
                    </p>
                </div>

                <h3>Ingredients</h3>

                <ul>
                    ${ingredientsHTML}
                </ul>

                <h3>Step-by-Step Instructions</h3>

                <ol>
                    ${stepsHTML}
                </ol>

                <button type="button" id="closeRecipe">
                    Close Recipe
                </button>

            </div>

        `;

        recipeDetails.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        const closeButton = document.getElementById("closeRecipe");

        if (closeButton) {
            closeButton.addEventListener("click", function () {
                recipeDetails.innerHTML = "";
            });
        }
    }

    // Search recipes
    function searchRecipes() {

        const searchText = searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";

        const filteredRecipes = recipes.filter(function (recipe) {

            const searchableText = [
                recipe.name,
                recipe.category,
                recipe.description,
                ...recipe.ingredients
            ].join(" ").toLowerCase();

            return searchableText.includes(searchText);
        });

        renderRecipes(filteredRecipes);
        recipeDetails.innerHTML = "";
    }

    // Search button
    if (searchButton) {
        searchButton.addEventListener("click", searchRecipes);
    }

    // Search while typing
    if (searchInput) {

        searchInput.addEventListener("input", searchRecipes);

        // Enter key search
        searchInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                searchRecipes();
            }

        });
    }

    // Category filters
    const categoryCards = document.querySelectorAll(".category-card");

    categoryCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const heading = card.querySelector("h3");

            if (!heading) return;

            const categoryName = heading.textContent.trim();

            const filteredRecipes = recipes.filter(function (recipe) {
                return recipe.category.toLowerCase() ===
                    categoryName.toLowerCase();
            });

            if (searchInput) {
                searchInput.value = "";
            }

            renderRecipes(filteredRecipes);
            recipeDetails.innerHTML = "";

            recipeResults.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

    // Open full recipe when a card is clicked
    recipeResults.addEventListener("click", function (event) {

        const card = event.target.closest(".recipe-card");

        if (!card) return;

        const index = Number(card.dataset.index);

        showRecipe(index);

    });

    // Navbar: show all recipes
    document.querySelectorAll("nav a").forEach(function (link) {

        if (link.textContent.trim().toLowerCase() === "recipes") {

            link.addEventListener("click", function () {

                if (searchInput) {
                    searchInput.value = "";
                }

                renderRecipes(recipes);
                recipeDetails.innerHTML = "";

            });

        }

    });

    // Show all recipes when website opens
    renderRecipes(recipes);

    console.log("Recipe Hub is working!");
    console.log("Total Recipes:", recipes.length);

});

// ==========================================
// RECIPE HUB - DETAILED BURGER UPGRADE 1–5
// ==========================================

const burgerUpgrades = [
{
 name: "Classic Veg Burger",
 image: "images/burgers/classic-veg-burger.jpg",
 components: [
  {
   title: "1. Burger Bun",
   items: [
    "All-purpose flour - 2 cups (250 g)",
    "Instant yeast - 1 tsp",
    "Sugar - 1 tbsp",
    "Warm milk - 3/4 cup",
    "Butter - 2 tbsp",
    "Salt - 1/2 tsp",
    "Sesame seeds - 1 tbsp"
   ],
   steps: [
    "Mix flour, yeast, sugar and salt in a bowl.",
    "Add warm milk gradually and knead into a soft dough.",
    "Add softened butter and knead until smooth.",
    "Cover and allow the dough to rise until doubled, about 60–90 minutes.",
    "Divide into 4 equal portions and shape into round buns.",
    "Place on a lined baking tray and rest for 30 minutes.",
    "Brush with milk and sprinkle sesame seeds.",
    "Bake at 180°C for approximately 15–20 minutes until golden.",
    "Cool completely before slicing."
   ]
  },
  {
   title: "2. Vegetable Patty",
   items: [
    "Potatoes - 2 medium, boiled",
    "Carrot - 1 small, finely chopped",
    "Green peas - 1/4 cup, boiled",
    "Sweet corn - 1/4 cup",
    "Breadcrumbs - 1/2 cup",
    "Cornflour - 2 tbsp",
    "Ginger garlic paste - 1 tsp",
    "Red chilli powder - 1/2 tsp",
    "Garam masala - 1/2 tsp",
    "Salt - 1/2 tsp",
    "Oil - 2 tbsp"
   ],
   steps: [
    "Mash the boiled potatoes in a large bowl.",
    "Add cooked carrot, peas and sweet corn.",
    "Mix in ginger garlic paste and all the spices.",
    "Add cornflour and half the breadcrumbs.",
    "Shape into 4 round patties.",
    "Coat each patty with the remaining breadcrumbs.",
    "Heat oil in a pan.",
    "Shallow-fry patties on medium heat until golden and cooked through, turning carefully."
   ]
  },
  {
   title: "3. Burger Sauce",
   items: [
    "Eggless mayonnaise - 4 tbsp",
    "Tomato ketchup - 2 tbsp",
    "Mustard sauce - 1 tsp",
    "Black pepper - 1/4 tsp",
    "Lemon juice - 1 tsp"
   ],
   steps: [
    "Add mayonnaise and ketchup to a small bowl.",
    "Mix in mustard sauce and black pepper.",
    "Add lemon juice.",
    "Whisk until smooth and refrigerate until needed."
   ]
  },
  {
   title: "4. Toppings and Assembly",
   items: [
    "Lettuce leaves - 4",
    "Tomato - 1, sliced",
    "Onion - 1, sliced",
    "Cucumber - 1/2, sliced",
    "Cheese slices - 4",
    "Butter - 1 tbsp"
   ],
   steps: [
    "Slice the cooled burger buns horizontally.",
    "Lightly toast the cut sides with butter.",
    "Spread burger sauce on the bottom bun.",
    "Place lettuce, tomato, onion and cucumber.",
    "Add the hot vegetable patty.",
    "Place a cheese slice on top.",
    "Add another little sauce and cover with the top bun.",
    "Serve immediately."
   ]
  }
 ],
 equipment: ["Mixing bowls", "Measuring cups", "Baking tray", "Oven", "Frying pan", "Spatula", "Knife"],
 tips: ["Do not add too much milk while kneading the bun dough.", "Cool buns before cutting.", "Make patties evenly thick so they cook consistently."],
 storage: "Keep uncooked prepared patties refrigerated in a covered container and cook thoroughly before serving. Assemble burgers just before eating."
},

{
 name: "Cheese Veg Burger",
 image: "images/burgers/cheese-veg-burger.jpg",
 components: [
  {
   title: "1. Burger Bun",
   items: ["Burger buns - 4", "Butter - 2 tbsp", "Sesame seeds - 1 tsp"],
   steps: ["Slice each bun horizontally.", "Brush the cut sides lightly with butter.", "Toast on a pan until lightly golden."]
  },
  {
   title: "2. Cheese Vegetable Patty",
   items: ["Potatoes - 2, boiled", "Carrot - 1/2 cup, grated", "Sweet corn - 1/4 cup", "Grated cheese - 1/2 cup", "Breadcrumbs - 1/2 cup", "Cornflour - 2 tbsp", "Black pepper - 1/4 tsp", "Mixed herbs - 1/2 tsp", "Salt - 1/2 tsp", "Oil - 2 tbsp"],
   steps: ["Mash the boiled potatoes.", "Mix in carrot, corn, cheese, pepper, herbs and salt.", "Add cornflour and breadcrumbs.", "Shape into 4 patties.", "Coat with a little extra breadcrumb if needed.", "Shallow-fry until golden and fully cooked."]
  },
  {
   title: "3. Cheese Sauce",
   items: ["Butter - 1 tbsp", "All-purpose flour - 1 tbsp", "Milk - 3/4 cup", "Grated cheddar cheese - 1/2 cup", "Black pepper - a pinch", "Salt - a pinch"],
   steps: ["Melt butter in a saucepan.", "Add flour and stir for about one minute.", "Gradually whisk in milk to avoid lumps.", "Cook until slightly thick.", "Lower the heat and add cheese.", "Stir until melted and smooth."]
  },
  {
   title: "4. Toppings and Assembly",
   items: ["Lettuce - 4 leaves", "Tomato - 1, sliced", "Onion - 1, sliced", "Cheese slices - 4", "Tomato ketchup - 2 tbsp"],
   steps: ["Spread ketchup on the bottom bun.", "Add lettuce, tomato and onion.", "Place the cooked vegetable patty.", "Add a cheese slice.", "Spoon over warm cheese sauce.", "Cover with the top bun and serve."]
  }
 ],
 equipment: ["Mixing bowls", "Saucepan", "Frying pan", "Whisk", "Spatula", "Knife"],
 tips: ["Use low heat when melting cheese into the sauce.", "Keep the patty firm by chilling it briefly before cooking."],
 storage: "Store the cheese sauce separately in the refrigerator and reheat gently. Assemble the burger fresh."
},

{
 name: "Paneer Tikka Burger",
 image: "images/burgers/paneer-tikka-burger.jpg",
 components: [
  {
   title: "1. Burger Bun",
   items: ["Burger buns - 4", "Butter - 2 tbsp"],
   steps: ["Slice the buns.", "Toast the cut sides with butter until lightly golden."]
  },
  {
   title: "2. Paneer Tikka Filling",
   items: ["Paneer - 250 g, thick slices", "Thick curd - 1/3 cup", "Besan - 1 tbsp", "Ginger garlic paste - 1 tsp", "Kashmiri chilli powder - 1 tsp", "Turmeric - 1/4 tsp", "Garam masala - 1/2 tsp", "Coriander powder - 1/2 tsp", "Lemon juice - 1 tbsp", "Salt - 1/2 tsp", "Oil - 1 tbsp"],
   steps: ["Whisk curd, besan, ginger garlic paste and all spices.", "Add lemon juice and oil.", "Coat paneer slices evenly with the marinade.", "Rest in the refrigerator for 20–30 minutes.", "Heat a pan and lightly grease it.", "Cook paneer on both sides until golden and heated through."]
  },
  {
   title: "3. Mint Yogurt Sauce",
   items: ["Thick curd - 1/2 cup", "Mint leaves - 2 tbsp", "Coriander - 2 tbsp", "Green chilli - 1/2", "Lemon juice - 1 tsp", "Salt - a pinch"],
   steps: ["Blend mint, coriander and green chilli.", "Mix the paste with thick curd.", "Add lemon juice and salt.", "Chill until serving."]
  },
  {
   title: "4. Toppings and Assembly",
   items: ["Onion - 1, rings", "Capsicum - 1/2, sliced", "Lettuce - 4 leaves", "Tomato - 1, sliced", "Cheese slices - 4"],
   steps: ["Lightly sauté capsicum and onion.", "Spread mint yogurt sauce on the bottom bun.", "Add lettuce and tomato.", "Place the cooked paneer tikka slices.", "Add sautéed vegetables and cheese.", "Cover with the top bun and serve."]
  }
 ],
 equipment: ["Mixing bowl", "Blender", "Frying pan", "Spatula", "Knife"],
 tips: ["Use thick curd so the marinade sticks to paneer.", "Turn paneer gently to prevent breaking.", "Do not overcook paneer or it may become rubbery."],
 storage: "Keep marinated paneer covered in the refrigerator and cook before assembling. Keep mint sauce refrigerated."
},

{
 name: "Aloo Tikki Burger",
 image: "images/burgers/aloo-tikki-burger.jpg",
 components: [
  {
   title: "1. Burger Bun",
   items: ["Burger buns - 4", "Butter - 2 tbsp"],
   steps: ["Slice the buns horizontally.", "Toast the cut sides with butter."]
  },
  {
   title: "2. Aloo Tikki Patty",
   items: ["Potatoes - 3 medium, boiled", "Green peas - 1/4 cup, boiled", "Breadcrumbs - 1/2 cup", "Cornflour - 2 tbsp", "Green chilli - 1, finely chopped", "Ginger - 1 tsp, grated", "Cumin powder - 1/2 tsp", "Chaat masala - 1/2 tsp", "Coriander - 2 tbsp", "Salt - 1/2 tsp", "Oil - 2 tbsp"],
   steps: ["Mash boiled potatoes until smooth.", "Add peas, chilli, ginger and coriander.", "Mix in cumin powder, chaat masala and salt.", "Add cornflour and breadcrumbs.", "Shape into 4 flat patties.", "Coat lightly with breadcrumbs.", "Shallow-fry on both sides until crisp and golden."]
  },
  {
   title: "3. Tangy Burger Chutney",
   items: ["Mint leaves - 1/2 cup", "Coriander - 1/2 cup", "Green chilli - 1", "Lemon juice - 1 tbsp", "Curd - 2 tbsp", "Salt - 1/4 tsp"],
   steps: ["Blend mint, coriander and chilli.", "Add curd, lemon juice and salt.", "Blend into a smooth chutney.", "Keep refrigerated until serving."]
  },
  {
   title: "4. Toppings and Assembly",
   items: ["Onion - 1, sliced", "Tomato - 1, sliced", "Cucumber - 1/2, sliced", "Lettuce - 4 leaves", "Cheese slices - 4", "Tomato ketchup - 2 tbsp"],
   steps: ["Spread chutney on the bottom bun.", "Add lettuce, tomato and cucumber.", "Place the hot aloo tikki.", "Add onion and cheese.", "Add a little ketchup.", "Cover with the top bun and serve."]
  }
 ],
 equipment: ["Mixing bowl", "Potato masher", "Frying pan", "Spatula", "Blender"],
 tips: ["Cool the boiled potatoes before mashing.", "If the mixture feels too soft, add a little more breadcrumbs.", "Fry on medium heat for a crisp outside."],
 storage: "Keep uncooked patties covered in the refrigerator and cook thoroughly before serving. Store chutney separately."
},

{
 name: "Mushroom Burger",
 image: "images/burgers/mushroom-burger.jpg",
 components: [
  {
   title: "1. Burger Bun",
   items: ["Burger buns - 4", "Butter - 2 tbsp"],
   steps: ["Slice the buns.", "Toast the cut sides with butter until lightly crisp."]
  },
  {
   title: "2. Mushroom Patty",
   items: ["Mushrooms - 250 g, finely chopped", "Potato - 1 medium, boiled", "Breadcrumbs - 1/2 cup", "Onion - 1 small, chopped", "Garlic - 2 cloves, minced", "Cornflour - 1 tbsp", "Black pepper - 1/2 tsp", "Mixed herbs - 1/2 tsp", "Salt - 1/2 tsp", "Oil - 2 tbsp"],
   steps: ["Clean mushrooms and chop finely.", "Cook mushrooms in a pan until their moisture evaporates.", "Add onion and garlic and cook until soft.", "Cool the mixture.", "Mash the boiled potato and mix it with mushrooms.", "Add breadcrumbs, cornflour, pepper, herbs and salt.", "Shape into 4 patties.", "Shallow-fry until firm, golden and cooked through."]
  },
  {
   title: "3. Garlic Mayo Sauce",
   items: ["Eggless mayonnaise - 4 tbsp", "Garlic - 1 clove, finely grated", "Lemon juice - 1 tsp", "Black pepper - a pinch"],
   steps: ["Mix mayonnaise and grated garlic.", "Add lemon juice and black pepper.", "Stir until smooth.", "Refrigerate until serving."]
  },
  {
   title: "4. Toppings and Assembly",
   items: ["Lettuce - 4 leaves", "Tomato - 1, sliced", "Onion - 1, sliced", "Cheese slices - 4"],
   steps: ["Spread garlic mayo on the toasted bun.", "Add lettuce, tomato and onion.", "Place the cooked mushroom patty.", "Add a cheese slice.", "Spread a little more garlic mayo on the top bun.", "Close and serve."]
  }
 ],
 equipment: ["Chopping board", "Knife", "Frying pan", "Mixing bowl", "Spatula"],
 tips: ["Cook mushrooms until their excess moisture evaporates.", "Cool the mushroom mixture before shaping patties.", "Avoid making patties too thick."],
 storage: "Store cooked mushroom patties in a covered container in the refrigerator and reheat thoroughly. Keep sauce separate."
}
];

// Upgrade existing burger recipes without creating duplicates
burgerUpgrades.forEach(function (upgrade) {
    const recipe = recipes.find(function (item) {
        return item.name === upgrade.name;
    });

    if (recipe) {
        recipe.image = upgrade.image;
        recipe.components = upgrade.components;
        recipe.equipment = upgrade.equipment;
        recipe.tips = upgrade.tips;
        recipe.storage = upgrade.storage;
    }
});

// Show detailed burger information
document.addEventListener("DOMContentLoaded", function () {

    const results = document.getElementById("recipeResults");
    const details = document.getElementById("recipeDetails");

    if (!results || !details) return;

    function safeText(value) {
        return String(value ?? "").replace(/[&<>"']/g, function (char) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            }[char];
        });
    }

    results.addEventListener("click", function (event) {

        const card = event.target.closest(".recipe-card");
        if (!card) return;

        const index = Number(card.dataset.index);
        const recipe = recipes[index];

        if (!recipe || !recipe.components) return;

        const componentsHTML = recipe.components.map(function (component) {
            return `
                <section class="recipe-component">
                    <h3>${safeText(component.title)}</h3>
                    <h4>Ingredients</h4>
                    <ul>
                        ${component.items.map(item =>
                            `<li>${safeText(item)}</li>`
                        ).join("")}
                    </ul>
                    <h4>Preparation</h4>
                    <ol>
                        ${component.steps.map(step =>
                            `<li>${safeText(step)}</li>`
                        ).join("")}
                    </ol>
                </section>
            `;
        }).join("");

        details.innerHTML = `
            <div class="full-recipe">
                <h2>${safeText(recipe.name)}</h2>

                <img
                    src="${safeText(recipe.image)}"
                    alt="${safeText(recipe.name)}"
                    style="width:100%;max-width:650px;border-radius:14px;"
                >

                <p>${safeText(recipe.description)}</p>

                <p><strong>Cooking time:</strong> ${safeText(recipe.time)}</p>
                <p><strong>Servings:</strong> ${safeText(recipe.servings)}</p>

                <h3>Complete Recipe</h3>
                ${componentsHTML}

                <h3>Equipment Required</h3>
                <ul>
                    ${recipe.equipment.map(item =>
                        `<li>${safeText(item)}</li>`
                    ).join("")}
                </ul>

                <h3>Chef's Tips</h3>
                <ul>
                    ${recipe.tips.map(item =>
                        `<li>${safeText(item)}</li>`
                    ).join("")}
                </ul>

                <h3>Storage Instructions</h3>
                <p>${safeText(recipe.storage)}</p>

                <button type="button" id="closeDetailedRecipe">
                    Close Recipe
                </button>
            </div>
        `;

        details.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        document.getElementById("closeDetailedRecipe")
            .addEventListener("click", function () {
                details.innerHTML = "";
            });
    });
});
const moreBurgerUpgrades = [
  {
    name: "Corn Cheese Burger",
    image: "images/burgers/corn-cheese-burger.jpg",
    components: [
      {
        title: "Burger Bun",
        ingredients: [
          "2 burger buns",
          "1 tsp butter"
        ],
        steps: [
          "Buns ko horizontally cut karo.",
          "Tawa par butter lagakar dono sides halka toast karo."
        ]
      },
      {
        title: "Corn Cheese Patty",
        ingredients: [
          "1 cup boiled sweet corn",
          "1 medium boiled potato",
          "1/2 cup grated cheese",
          "3 tbsp breadcrumbs",
          "2 tbsp cornflour",
          "1/2 tsp chilli flakes",
          "1/2 tsp black pepper",
          "Salt as required",
          "Oil for shallow frying"
        ],
        steps: [
          "Sweet corn ko halka crush karo.",
          "Boiled potato mash karo.",
          "Corn, potato, cheese, breadcrumbs aur spices mix karo.",
          "Cornflour add karke mixture bind karo.",
          "Round patty shape banao.",
          "Medium heat par dono sides golden hone tak shallow fry karo."
        ]
      },
      {
        title: "Cheese Sauce",
        ingredients: [
          "2 tbsp butter",
          "1 tbsp maida",
          "1/2 cup milk",
          "1/3 cup grated cheese",
          "Black pepper"
        ],
        steps: [
          "Pan mein butter melt karo.",
          "Maida add karke mix karo.",
          "Milk gradually add karo.",
          "Cheese aur pepper add karo.",
          "Smooth sauce hone tak stir karo."
        ]
      },
      {
        title: "Toppings and Assembly",
        ingredients: [
          "2 lettuce leaves",
          "4 tomato slices",
          "4 onion rings",
          "2 tbsp mayonnaise",
          "2 tbsp ketchup"
        ],
        steps: [
          "Bottom bun par mayonnaise lagao.",
          "Lettuce aur tomato rakho.",
          "Corn cheese patty add karo.",
          "Cheese sauce spread karo.",
          "Onion rings add karo.",
          "Ketchup lagakar top bun rakho."
        ]
      }
    ],
    equipment: ["Mixing bowl", "Pan", "Spatula", "Knife", "Chopping board"],
    tips: ["Patty mixture bahut wet ho toh breadcrumbs add karo.", "Cheese sauce low heat par banao."],
    storage: "Patty mixture refrigerator mein airtight container mein 1 day tak rakho. Fresh assemble karna best hai."
  },

  {
    name: "Spicy Schezwan Burger",
    image: "images/burgers/spicy-schezwan-burger.jpg",
    components: [
      {
        title: "Burger Bun",
        ingredients: ["2 burger buns", "1 tsp butter"],
        steps: ["Buns ko cut karo.", "Butter ke saath lightly toast karo."]
      },
      {
        title: "Vegetable Patty",
        ingredients: [
          "1 boiled potato",
          "1/2 cup grated carrot",
          "1/4 cup boiled peas",
          "1/4 cup breadcrumbs",
          "2 tbsp cornflour",
          "1/2 tsp chilli powder",
          "1/2 tsp garam masala",
          "Salt",
          "Oil"
        ],
        steps: [
          "Potato mash karo.",
          "Carrot aur peas add karo.",
          "Breadcrumbs, cornflour aur spices mix karo.",
          "Patty shape banao.",
          "Medium heat par shallow fry karo."
        ]
      },
      {
        title: "Schezwan Sauce",
        ingredients: [
          "2 tbsp Schezwan chutney",
          "2 tbsp mayonnaise",
          "1 tsp tomato ketchup",
          "1 tsp lemon juice"
        ],
        steps: [
          "Saari ingredients ek bowl mein lo.",
          "Achhe se mix karke smooth sauce banao."
        ]
      },
      {
        title: "Toppings and Assembly",
        ingredients: ["Lettuce", "Onion rings", "Tomato slices", "Cucumber slices"],
        steps: [
          "Bottom bun par Schezwan sauce lagao.",
          "Lettuce aur patty rakho.",
          "Onion, tomato aur cucumber add karo.",
          "Extra sauce lagao.",
          "Top bun se cover karo."
        ]
      }
    ],
    equipment: ["Mixing bowl", "Pan", "Spatula", "Knife"],
    tips: ["Spice level apne taste ke according adjust karo.", "Patty ko medium heat par cook karo."],
    storage: "Sauce refrigerator mein airtight container mein 2 days tak rakho. Burger fresh assemble karo."
  },

  {
    name: "Crispy Vegetable Burger",
    image: "images/burgers/crispy-vegetable-burger.jpg",
    components: [
      {
        title: "Burger Bun",
        ingredients: ["2 burger buns", "1 tsp butter"],
        steps: ["Buns cut karo.", "Butter lagakar toast karo."]
      },
      {
        title: "Vegetable Patty",
        ingredients: [
          "1 boiled potato",
          "1/2 cup finely chopped cabbage",
          "1/4 cup grated carrot",
          "1/4 cup boiled peas",
          "1/2 tsp mixed herbs",
          "1/2 tsp black pepper",
          "3 tbsp breadcrumbs",
          "Salt"
        ],
        steps: [
          "Potato mash karo.",
          "Cabbage, carrot aur peas mix karo.",
          "Herbs, pepper aur salt add karo.",
          "Breadcrumbs add karke patty shape karo.",
          "Tawa par oil ke saath dono sides crisp hone tak cook karo."
        ]
      },
      {
        title: "Crispy Coating",
        ingredients: [
          "3 tbsp maida",
          "4 tbsp water",
          "1/2 cup breadcrumbs"
        ],
        steps: [
          "Maida aur water ka smooth slurry banao.",
          "Patty ko slurry mein dip karo.",
          "Breadcrumbs se evenly coat karo.",
          "Shallow fry karke golden crisp banao."
        ]
      },
      {
        title: "Sauce and Assembly",
        ingredients: [
          "2 tbsp eggless mayonnaise",
          "1 tbsp ketchup",
          "Lettuce leaves",
          "Tomato slices",
          "Onion rings"
        ],
        steps: [
          "Mayonnaise aur ketchup mix karo.",
          "Bottom bun par sauce spread karo.",
          "Lettuce aur crispy patty rakho.",
          "Tomato aur onion add karo.",
          "Top bun se cover karo."
        ]
      }
    ],
    equipment: ["Mixing bowl", "Pan", "Spatula", "Knife", "Plate"],
    tips: ["Breadcrumb coating evenly lagao.", "Patty ko overcrowded pan mein cook mat karo."],
    storage: "Uncooked patty refrigerator mein airtight container mein 1 day tak rakho."
  },

  {
    name: "Double Cheese Burger",
    image: "images/burgers/double-cheese-burger.jpg",
    components: [
      {
        title: "Burger Bun",
        ingredients: ["2 large burger buns", "1 tsp butter"],
        steps: ["Buns ko cut karo.", "Butter se lightly toast karo."]
      },
      {
        title: "Two Vegetable Patties",
        ingredients: [
          "2 boiled potatoes",
          "1/2 cup grated carrot",
          "1/4 cup boiled peas",
          "1/2 cup breadcrumbs",
          "2 tbsp cornflour",
          "1/2 tsp chilli powder",
          "1/2 tsp garam masala",
          "Salt",
          "Oil"
        ],
        steps: [
          "Potatoes mash karo.",
          "Vegetables aur spices mix karo.",
          "Breadcrumbs aur cornflour add karo.",
          "Mixture ko 2 equal patties mein shape karo.",
          "Dono patties shallow fry karo."
        ]
      },
      {
        title: "Double Cheese Layer",
        ingredients: [
          "2 cheese slices",
          "1/4 cup grated mozzarella cheese",
          "1 tbsp mayonnaise"
        ],
        steps: [
          "Ek patty par cheese slice rakho.",
          "Doosri patty par grated mozzarella add karo.",
          "Warm pan mein briefly cover karke cheese melt hone do."
        ]
      },
      {
        title: "Assembly",
        ingredients: ["Lettuce", "Tomato slices", "Onion rings", "2 tbsp ketchup"],
        steps: [
          "Bottom bun par mayonnaise lagao.",
          "Lettuce aur first patty rakho.",
          "Second patty cheese ke saath stack karo.",
          "Tomato aur onion add karo.",
          "Ketchup lagakar top bun rakho."
        ]
      }
    ],
    equipment: ["Mixing bowl", "Pan", "Spatula", "Knife"],
    tips: ["Patties ka size bun ke according rakho.", "Cheese melt karne ke liye low heat use karo."],
    storage: "Cooked patties refrigerator mein airtight container mein 1 day tak rakho."
  },

  {
    name: "Spinach Corn Burger",
    image: "images/burgers/spinach-corn-burger.jpg",
    components: [
      {
        title: "Burger Bun",
        ingredients: ["2 burger buns", "1 tsp butter"],
        steps: ["Buns cut karo.", "Butter lagakar lightly toast karo."]
      },
      {
        title: "Spinach Corn Patty",
        ingredients: [
          "1 cup spinach leaves",
          "1/2 cup boiled sweet corn",
          "1 boiled potato",
          "1/4 cup breadcrumbs",
          "2 tbsp cornflour",
          "1/2 tsp black pepper",
          "1/2 tsp mixed herbs",
          "Salt",
          "Oil"
        ],
        steps: [
          "Spinach ko wash karke finely chop karo.",
          "Pan mein spinach ko halka cook karo aur extra water drain karo.",
          "Potato mash karo.",
          "Spinach, corn aur potato mix karo.",
          "Breadcrumbs, cornflour aur spices add karo.",
          "Patty shape karke shallow fry karo."
        ]
      },
      {
        title: "Herb Yogurt Sauce",
        ingredients: [
          "3 tbsp thick curd",
          "1 tbsp mayonnaise",
          "1/2 tsp mixed herbs",
          "1 tsp lemon juice",
          "Salt"
        ],
        steps: [
          "Curd aur mayonnaise mix karo.",
          "Herbs, lemon juice aur salt add karo.",
          "Smooth sauce prepare karo."
        ]
      },
      {
        title: "Toppings and Assembly",
        ingredients: ["Lettuce", "Cucumber slices", "Tomato slices", "Onion rings"],
        steps: [
          "Bottom bun par herb sauce lagao.",
          "Lettuce aur spinach corn patty rakho.",
          "Cucumber, tomato aur onion add karo.",
          "Extra sauce lagao.",
          "Top bun se cover karo."
        ]
      }
    ],
    equipment: ["Chopping board", "Knife", "Pan", "Mixing bowl", "Spatula"],
    tips: ["Spinach ka extra water nikalna zaroori hai.", "Fresh spinach use karo."],
    storage: "Patty refrigerator mein airtight container mein 1 day tak rakho."
  }
];

moreBurgerUpgrades.forEach(upgrade => {
  const recipe = recipes.find(r => r.name === upgrade.name);

  if (recipe) {
    Object.assign(recipe, upgrade);
  }
});
const burgerUpgrades2 = [
  {
    name: "Peri Peri Veg Burger",
    image: "images/burgers/peri-peri-veg-burger.jpg",
    components: [
      {
        title: "Burger Bun",
        ingredients: ["2 burger buns", "1 tsp butter"],
        steps: ["Buns ko cut karo.", "Butter lagakar tawa par lightly toast karo."]
      },
      {
        title: "Peri Peri Vegetable Patty",
        ingredients: [
          "1 large boiled potato",
          "1/2 cup grated carrot",
          "1/4 cup boiled peas",
          "1/4 cup sweet corn",
          "1/2 tsp peri peri seasoning",
          "1/2 tsp chilli flakes",
          "3 tbsp breadcrumbs",
          "2 tbsp cornflour",
          "Salt",
          "Oil"
        ],
        steps: [
          "Potato mash karo.",
          "Carrot, peas aur corn add karo.",
          "Peri peri seasoning, chilli flakes aur salt mix karo.",
          "Breadcrumbs aur cornflour add karo.",
          "Round patty shape banao.",
          "Medium heat par dono sides golden hone tak shallow fry karo."
        ]
      },
      {
        title: "Peri Peri Sauce",
        ingredients: [
          "2 tbsp mayonnaise",
          "1 tbsp ketchup",
          "1 tsp peri peri seasoning",
          "1 tsp lemon juice"
        ],
        steps: ["Saari ingredients bowl mein mix karo.", "Smooth sauce prepare karo."]
      },
      {
        title: "Toppings and Assembly",
        ingredients: ["Lettuce", "Tomato slices", "Onion rings", "Cucumber slices"],
        steps: [
          "Bottom bun par peri peri sauce lagao.",
          "Lettuce aur patty rakho.",
          "Tomato, onion aur cucumber add karo.",
          "Extra sauce lagakar top bun close karo."
        ]
      }
    ],
    equipment: ["Mixing bowl", "Pan", "Spatula", "Knife", "Chopping board"],
    tips: ["Peri peri seasoning apne taste ke according adjust karo.", "Patty ko medium heat par crisp banao."],
    storage: "Patty refrigerator mein airtight container mein 1 day tak rakho."
  },

  {
    name: "Hara Bhara Burger",
    image: "images/burgers/hara-bhara-burger.jpg",
    components: [
      {
        title: "Burger Bun",
        ingredients: ["2 burger buns", "1 tsp butter"],
        steps: ["Buns cut karo.", "Butter ke saath lightly toast karo."]
      },
      {
        title: "Hara Bhara Patty",
        ingredients: [
          "1 cup spinach",
          "1/2 cup boiled peas",
          "1 boiled potato",
          "2 tbsp coriander leaves",
          "1 green chilli",
          "1/2 tsp garam masala",
          "1/4 cup breadcrumbs",
          "2 tbsp cornflour",
          "Salt",
          "Oil"
        ],
        steps: [
          "Spinach ko wash karke briefly blanch karo.",
          "Extra water drain karke spinach finely chop karo.",
          "Peas ko lightly mash karo.",
          "Potato mash karke spinach aur peas mix karo.",
          "Coriander, chilli aur spices add karo.",
          "Breadcrumbs aur cornflour se mixture bind karo.",
          "Round patties bana kar shallow fry karo."
        ]
      },
      {
        title: "Mint Yogurt Sauce",
        ingredients: [
          "3 tbsp thick curd",
          "1 tbsp mint chutney",
          "1 tsp lemon juice",
          "Salt"
        ],
        steps: ["Saari ingredients mix karo.", "Sauce ko smooth hone tak stir karo."]
      },
      {
        title: "Toppings and Assembly",
        ingredients: ["Lettuce", "Onion rings", "Tomato slices", "Cucumber"],
        steps: [
          "Bottom bun par mint yogurt sauce lagao.",
          "Lettuce aur hara bhara patty rakho.",
          "Onion, tomato aur cucumber add karo.",
          "Top bun se cover karo."
        ]
      }
    ],
    equipment: ["Pot", "Mixing bowl", "Pan", "Spatula", "Knife"],
    tips: ["Spinach ka extra water achhe se drain karo.", "Mixture sticky ho toh breadcrumbs add karo."],
    storage: "Uncooked patties refrigerator mein airtight container mein 1 day tak rakho."
  },

  {
    name: "BBQ Paneer Burger",
    image: "images/burgers/bbq-paneer-burger.jpg",
    components: [
      {
        title: "Burger Bun",
        ingredients: ["2 burger buns", "1 tsp butter"],
        steps: ["Buns cut karo.", "Butter lagakar lightly toast karo."]
      },
      {
        title: "BBQ Paneer Patty",
        ingredients: [
          "200 g paneer",
          "2 tbsp breadcrumbs",
          "1 tbsp cornflour",
          "1 tbsp BBQ sauce",
          "1/2 tsp black pepper",
          "1/2 tsp chilli flakes",
          "Salt",
          "1 tsp oil"
        ],
        steps: [
          "Paneer ko mash ya finely crumble karo.",
          "BBQ sauce, breadcrumbs aur cornflour add karo.",
          "Pepper, chilli flakes aur salt mix karo.",
          "Mixture se two patties shape karo.",
          "Pan mein oil heat karo.",
          "Patties ko dono sides golden hone tak shallow fry karo.",
          "Thoda BBQ sauce brush karo."
        ]
      },
      {
        title: "BBQ Burger Sauce",
        ingredients: [
          "2 tbsp mayonnaise",
          "1 tbsp BBQ sauce",
          "1 tsp tomato ketchup",
          "1/2 tsp black pepper"
        ],
        steps: ["Saari ingredients bowl mein mix karo.", "Creamy BBQ sauce ready karo."]
      },
      {
        title: "Toppings and Assembly",
        ingredients: ["Lettuce", "Onion rings", "Tomato slices", "Cheese slice"],
        steps: [
          "Bottom bun par BBQ sauce lagao.",
          "Lettuce aur paneer patty rakho.",
          "Cheese slice add karo.",
          "Onion aur tomato add karo.",
          "Top bun se cover karo."
        ]
      }
    ],
    equipment: ["Mixing bowl", "Pan", "Spatula", "Knife"],
    tips: ["Paneer mixture ko bahut dry mat hone do.", "BBQ sauce ki quantity taste ke according rakho."],
    storage: "Paneer patties refrigerator mein airtight container mein 1 day tak rakho."
  },

  {
    name: "Masala Potato Burger",
    image: "images/burgers/masala-potato-burger.jpg",
    components: [
      {
        title: "Burger Bun",
        ingredients: ["2 burger buns", "1 tsp butter"],
        steps: ["Buns cut karo.", "Butter lagakar toast karo."]
      },
      {
        title: "Masala Potato Patty",
        ingredients: [
          "2 medium boiled potatoes",
          "1/4 cup boiled peas",
          "1 small chopped onion",
          "1 green chilli",
          "1/2 tsp cumin powder",
          "1/2 tsp coriander powder",
          "1/4 tsp turmeric",
          "1/2 tsp garam masala",
          "3 tbsp breadcrumbs",
          "Salt",
          "Oil"
        ],
        steps: [
          "Potatoes ko mash karo.",
          "Peas, onion aur green chilli add karo.",
          "Saare spices aur salt mix karo.",
          "Breadcrumbs add karke mixture bind karo.",
          "Round patties shape karo.",
          "Tawa par oil ke saath golden hone tak shallow fry karo."
        ]
      },
      {
        title: "Indian Mint Sauce",
        ingredients: [
          "2 tbsp mint chutney",
          "2 tbsp mayonnaise",
          "1 tsp lemon juice"
        ],
        steps: ["Saari ingredients mix karo.", "Smooth mint sauce ready karo."]
      },
      {
        title: "Toppings and Assembly",
        ingredients: ["Onion rings", "Tomato slices", "Cucumber slices", "Lettuce"],
        steps: [
          "Bottom bun par mint sauce lagao.",
          "Lettuce aur potato patty rakho.",
          "Onion, tomato aur cucumber add karo.",
          "Extra sauce lagao.",
          "Top bun close karo."
        ]
      }
    ],
    equipment: ["Pot", "Mixing bowl", "Pan", "Spatula", "Knife"],
    tips: ["Potato mixture mein moisture kam rakho.", "Patties ko carefully flip karo."],
    storage: "Cooked patties refrigerator mein airtight container mein 1 day tak rakho."
  },

  {
    name: "Falafel Burger",
    image: "images/burgers/falafel-burger.jpg",
    components: [
      {
        title: "Burger Bun",
        ingredients: ["2 burger buns", "1 tsp olive oil"],
        steps: ["Buns cut karo.", "Pan par lightly toast karo."]
      },
      {
        title: "Falafel Patty",
        ingredients: [
          "1 cup soaked chickpeas",
          "2 tbsp chopped coriander",
          "2 tbsp chopped parsley",
          "2 garlic cloves",
          "1 small onion",
          "1/2 tsp cumin powder",
          "1/2 tsp coriander powder",
          "2 tbsp breadcrumbs",
          "Salt",
          "Oil"
        ],
        steps: [
          "Soaked chickpeas ko drain karo.",
          "Chickpeas, coriander, parsley, garlic aur onion ko coarse grind karo.",
          "Cumin, coriander powder aur salt add karo.",
          "Breadcrumbs mix karke patties shape karo.",
          "Mixture ko 20 minutes refrigerator mein rest do.",
          "Pan par medium heat mein shallow fry karo jab tak dono sides golden ho jaayein."
        ]
      },
      {
        title: "Tahini Yogurt Sauce",
        ingredients: [
          "3 tbsp thick curd",
          "1 tbsp tahini",
          "1 tsp lemon juice",
          "1 small grated garlic clove",
          "Salt"
        ],
        steps: ["Saari ingredients bowl mein mix karo.", "Smooth creamy sauce banao."]
      },
      {
        title: "Toppings and Assembly",
        ingredients: ["Lettuce", "Cucumber slices", "Tomato slices", "Onion rings"],
        steps: [
          "Bottom bun par tahini yogurt sauce lagao.",
          "Lettuce aur falafel patty rakho.",
          "Cucumber, tomato aur onion add karo.",
          "Extra sauce lagao.",
          "Top bun se cover karo."
        ]
      }
    ],
    equipment: ["Food processor or mixer", "Mixing bowl", "Pan", "Spatula"],
    tips: ["Canned cooked chickpeas ki jagah soaked raw chickpeas use karo.", "Mixture watery nahi hona chahiye."],
    storage: "Falafel mixture refrigerator mein covered container mein 1 day tak rakho. Fresh cook karo."
  }
];

burgerUpgrades2.forEach(upgrade => {
  const recipe = recipes.find(r => r.name === upgrade.name);

  if (recipe) {
    Object.assign(recipe, upgrade);
  }
});
const burgerUpgrades3 = [
  {
    name: "Sweet Potato Burger",
    image: "images/burgers/sweet-potato-burger.jpg",
    components: [
      {
        title: "Burger Bun",
        ingredients: ["2 burger buns", "1 tsp butter"],
        steps: ["Buns ko cut karo.", "Butter lagakar dono sides lightly toast karo."]
      },
      {
        title: "Sweet Potato Patty",
        ingredients: [
          "1 cup boiled sweet potato",
          "1/4 cup boiled peas",
          "1/4 cup grated carrot",
          "1/2 tsp cumin powder",
          "1/2 tsp paprika",
          "1/4 cup breadcrumbs",
          "2 tbsp cornflour",
          "Salt",
          "Oil"
        ],
        steps: [
          "Sweet potato ko peel karke mash karo.",
          "Boiled peas aur grated carrot add karo.",
          "Cumin, paprika aur salt mix karo.",
          "Breadcrumbs aur cornflour add karke mixture bind karo.",
          "Round patties shape karo.",
          "Medium heat par shallow fry karo.",
          "Dono sides golden hone tak cook karo."
        ]
      },
      {
        title: "Honey Mustard Sauce",
        ingredients: [
          "2 tbsp mayonnaise",
          "1 tsp mustard sauce",
          "1 tsp honey",
          "1 tsp lemon juice"
        ],
        steps: ["Saari ingredients ek bowl mein lo.", "Achhe se whisk karke smooth sauce banao."]
      },
      {
        title: "Toppings and Assembly",
        ingredients: ["Lettuce", "Tomato slices", "Cucumber slices", "Onion rings"],
        steps: [
          "Bottom bun par honey mustard sauce lagao.",
          "Lettuce aur sweet potato patty rakho.",
          "Tomato, cucumber aur onion add karo.",
          "Extra sauce lagakar top bun close karo."
        ]
      }
    ],
    equipment: ["Pot", "Mixing bowl", "Pan", "Spatula", "Knife"],
    tips: ["Sweet potato ka extra moisture drain karo.", "Patty ko flip karte waqt carefully handle karo."],
    storage: "Cooked patties refrigerator mein airtight container mein 1 day tak rakho."
  },

  {
    name: "Indian Chutney Burger",
    image: "images/burgers/indian-chutney-burger.jpg",
    components: [
      {
        title: "Burger Bun",
        ingredients: ["2 burger buns", "1 tsp butter"],
        steps: ["Buns cut karo.", "Butter lagakar toast karo."]
      },
      {
        title: "Masala Vegetable Patty",
        ingredients: [
          "2 boiled potatoes",
          "1/4 cup boiled peas",
          "1 small chopped onion",
          "1 green chilli",
          "1/2 tsp garam masala",
          "1/2 tsp cumin powder",
          "3 tbsp breadcrumbs",
          "Salt",
          "Oil"
        ],
        steps: [
          "Potatoes mash karo.",
          "Peas, onion aur green chilli add karo.",
          "Spices aur salt mix karo.",
          "Breadcrumbs add karke mixture bind karo.",
          "Patties shape karo.",
          "Pan par shallow fry karke golden banao."
        ]
      },
      {
        title: "Green Coriander Chutney",
        ingredients: [
          "1/2 cup coriander leaves",
          "1/4 cup mint leaves",
          "1 green chilli",
          "1 tbsp lemon juice",
          "2 tbsp curd",
          "Salt"
        ],
        steps: [
          "Coriander aur mint wash karo.",
          "Green chilli aur lemon juice add karo.",
          "Curd aur salt add karo.",
          "Mixer mein smooth chutney grind karo."
        ]
      },
      {
        title: "Toppings and Assembly",
        ingredients: ["Onion rings", "Tomato slices", "Cucumber slices", "Lettuce"],
        steps: [
          "Bottom bun par green chutney lagao.",
          "Lettuce aur vegetable patty rakho.",
          "Onion, tomato aur cucumber add karo.",
          "Extra chutney lagao.",
          "Top bun se cover karo."
        ]
      }
    ],
    equipment: ["Mixer grinder", "Mixing bowl", "Pan", "Spatula", "Knife"],
    tips: ["Chutney mein lemon juice taste ke according add karo.", "Patty ko crispy rakho."],
    storage: "Chutney refrigerator mein covered container mein 1 day tak rakho."
  },

  {
    name: "Garlic Mushroom Burger",
    image: "images/burgers/garlic-mushroom-burger.jpg",
    components: [
      {
        title: "Burger Bun",
        ingredients: ["2 burger buns", "1 tsp butter"],
        steps: ["Buns cut karo.", "Butter lagakar lightly toast karo."]
      },
      {
        title: "Garlic Mushroom Patty",
        ingredients: [
          "1 cup finely chopped mushrooms",
          "1 boiled potato",
          "2 garlic cloves",
          "2 tbsp chopped onion",
          "1/4 cup breadcrumbs",
          "1 tbsp cornflour",
          "1/2 tsp black pepper",
          "1/2 tsp mixed herbs",
          "Salt",
          "Oil"
        ],
        steps: [
          "Mushrooms ko wash karke finely chop karo.",
          "Pan mein garlic aur onion saute karo.",
          "Mushrooms add karke moisture evaporate hone tak cook karo.",
          "Mixture cool hone do.",
          "Mashed potato, breadcrumbs aur spices add karo.",
          "Cornflour mix karke patty shape karo.",
          "Medium heat par shallow fry karo."
        ]
      },
      {
        title: "Garlic Mayo",
        ingredients: [
          "3 tbsp eggless mayonnaise",
          "1 garlic clove finely grated",
          "1 tsp lemon juice",
          "1/4 tsp black pepper"
        ],
        steps: ["Saari ingredients mix karo.", "Creamy garlic sauce ready karo."]
      },
      {
        title: "Toppings and Assembly",
        ingredients: ["Lettuce", "Tomato slices", "Onion rings", "Cheese slice"],
        steps: [
          "Bottom bun par garlic mayo lagao.",
          "Lettuce aur mushroom patty rakho.",
          "Cheese slice add karo.",
          "Tomato aur onion add karo.",
          "Top bun se cover karo."
        ]
      }
    ],
    equipment: ["Pan", "Mixing bowl", "Spatula", "Knife", "Chopping board"],
    tips: ["Mushroom ka moisture completely evaporate karo.", "Patty mixture thanda hone ke baad shape karo."],
    storage: "Cooked mushroom patty refrigerator mein airtight container mein 1 day tak rakho."
  },

  {
    name: "Mexican Bean Burger",
    image: "images/burgers/mexican-bean-burger.jpg",
    components: [
      {
        title: "Burger Bun",
        ingredients: ["2 burger buns", "1 tsp butter"],
        steps: ["Buns cut karo.", "Butter lagakar toast karo."]
      },
      {
        title: "Mexican Bean Patty",
        ingredients: [
          "1 cup boiled kidney beans",
          "1 boiled potato",
          "1/4 cup sweet corn",
          "2 tbsp chopped onion",
          "1/2 tsp cumin powder",
          "1/2 tsp paprika",
          "1/2 tsp oregano",
          "1/4 cup breadcrumbs",
          "Salt",
          "Oil"
        ],
        steps: [
          "Boiled kidney beans ko mash karo.",
          "Potato mash karke beans mein mix karo.",
          "Corn aur chopped onion add karo.",
          "Cumin, paprika, oregano aur salt mix karo.",
          "Breadcrumbs add karke patty shape karo.",
          "Pan mein oil heat karke patties shallow fry karo.",
          "Dono sides golden hone tak cook karo."
        ]
      },
      {
        title: "Mexican Salsa",
        ingredients: [
          "1 small chopped tomato",
          "2 tbsp chopped onion",
          "1 tbsp coriander",
          "1 tsp lemon juice",
          "1/4 tsp chilli flakes",
          "Salt"
        ],
        steps: [
          "Tomato aur onion finely chop karo.",
          "Coriander, lemon juice aur chilli flakes add karo.",
          "Salt mix karke fresh salsa ready karo."
        ]
      },
      {
        title: "Toppings and Assembly",
        ingredients: ["Lettuce", "Cheese slice", "Cucumber slices", "Mayonnaise"],
        steps: [
          "Bottom bun par mayonnaise lagao.",
          "Lettuce aur bean patty rakho.",
          "Cheese slice add karo.",
          "Fresh salsa aur cucumber add karo.",
          "Top bun se cover karo."
        ]
      }
    ],
    equipment: ["Mixing bowl", "Pan", "Spatula", "Knife", "Chopping board"],
    tips: ["Beans ka extra water drain karo.", "Salsa fresh serve karne se pehle prepare karo."],
    storage: "Bean patties refrigerator mein airtight container mein 1–2 days tak rakho."
  },

  {
    name: "Classic Paneer Burger",
    image: "images/burgers/classic-paneer-burger.jpg",
    components: [
      {
        title: "Burger Bun",
        ingredients: ["2 burger buns", "1 tsp butter"],
        steps: ["Buns cut karo.", "Butter ke saath lightly toast karo."]
      },
      {
        title: "Paneer Patty",
        ingredients: [
          "200 g grated paneer",
          "1 boiled potato",
          "1/4 cup grated carrot",
          "2 tbsp breadcrumbs",
          "1 tbsp cornflour",
          "1/2 tsp garam masala",
          "1/2 tsp black pepper",
          "Salt",
          "Oil"
        ],
        steps: [
          "Paneer ko grate karo.",
          "Boiled potato mash karo.",
          "Paneer, potato aur carrot mix karo.",
          "Breadcrumbs, cornflour aur spices add karo.",
          "Mixture se patties shape karo.",
          "Pan mein oil heat karo.",
          "Patties ko dono sides golden hone tak shallow fry karo."
        ]
      },
      {
        title: "Creamy Paneer Sauce",
        ingredients: [
          "2 tbsp mayonnaise",
          "1 tbsp thick curd",
          "1/2 tsp black pepper",
          "1 tsp lemon juice",
          "Salt"
        ],
        steps: ["Saari ingredients bowl mein mix karo.", "Smooth creamy sauce banao."]
      },
      {
        title: "Toppings and Assembly",
        ingredients: ["Lettuce", "Tomato slices", "Onion rings", "Cheese slice"],
        steps: [
          "Bottom bun par creamy sauce lagao.",
          "Lettuce aur paneer patty rakho.",
          "Cheese slice add karo.",
          "Tomato aur onion add karo.",
          "Top bun se cover karo."
        ]
      }
    ],
    equipment: ["Grater", "Mixing bowl", "Pan", "Spatula", "Knife"],
    tips: ["Fresh paneer use karo.", "Patty mixture bahut soft ho toh breadcrumbs add karo."],
    storage: "Paneer patties refrigerator mein airtight container mein 1 day tak rakho."
  }
];

burgerUpgrades3.forEach(upgrade => {
  const recipe = recipes.find(r => r.name === upgrade.name);

  if (recipe) {
    Object.assign(recipe, upgrade);
  }
});

const pizzaUpgrades1 = [
  {
    name: "Margherita Pizza",
    prepTime: "25 minutes",
    cookTime: "12-15 minutes",
    temperature: "220°C",
    difficulty: "Medium",
    servings: 2,
    components: [
      {
        title: "Pizza Dough / Base",
        ingredients: [
          "2 cups maida (250 g)",
          "1 tsp instant yeast",
          "1 tsp sugar",
          "3/4 tsp salt",
          "2 tbsp olive oil",
          "3/4 cup lukewarm water (approx.)"
        ],
        steps: [
          "Ek large mixing bowl mein maida, yeast aur sugar combine karo.",
          "Salt add karo aur mix karo.",
          "Lukewarm water gradually add karte hue dough banana start karo.",
          "Olive oil add karo aur 8-10 minutes knead karo.",
          "Dough smooth aur elastic hona chahiye.",
          "Bowl ko halka oil lagakar dough rakho.",
          "Cover karke 60-90 minutes warm place mein rise hone do.",
          "Dough double hone par gently punch down karo.",
          "2 equal portions mein divide karo.",
          "Har portion ko round pizza base mein stretch karo."
        ]
      },
      {
        title: "Classic Italian Pizza Sauce",
        ingredients: [
          "1 cup crushed tomatoes",
          "2 garlic cloves, finely chopped",
          "1 tbsp olive oil",
          "1/2 tsp dried oregano",
          "1/2 tsp dried basil",
          "1/4 tsp black pepper",
          "Salt as required"
        ],
        steps: [
          "Pan mein olive oil warm karo.",
          "Chopped garlic add karke briefly saute karo.",
          "Crushed tomatoes add karo.",
          "Oregano, basil, pepper aur salt mix karo.",
          "Low-medium heat par 10-12 minutes simmer karo.",
          "Sauce slightly thick hone par cool hone do."
        ]
      },
      {
        title: "Cheese Layer",
        ingredients: [
          "1 cup grated mozzarella cheese",
          "2 tbsp grated parmesan (optional)"
        ],
        steps: [
          "Mozzarella ko evenly grate karo.",
          "Pizza base par sauce spread karo.",
          "Mozzarella ko evenly distribute karo.",
          "Optional parmesan sprinkle karo."
        ]
      },
      {
        title: "Toppings and Final Assembly",
        ingredients: [
          "1 medium tomato, thinly sliced",
          "Fresh basil leaves",
          "1 tsp olive oil",
          "Pinch of oregano"
        ],
        steps: [
          "Prepared pizza base ko baking tray ya pizza stone par rakho.",
          "Sauce ka thin, even layer spread karo.",
          "Mozzarella cheese add karo.",
          "Tomato slices arrange karo.",
          "Preheated oven mein 220°C par approximately 12-15 minutes bake karo.",
          "Crust golden aur cheese melted hone par remove karo.",
          "Fresh basil aur olive oil se finish karo.",
          "2 minutes rest karke slices cut karo."
        ]
      }
    ],
    equipment: [
      "Large mixing bowl",
      "Measuring cups and spoons",
      "Rolling pin",
      "Pizza tray or pizza stone",
      "Oven",
      "Saucepan",
      "Pizza cutter"
    ],
    tips: [
      "Water lukewarm hona chahiye, hot nahi.",
      "Dough ko properly knead karna soft crust ke liye important hai.",
      "Pizza sauce bahut watery mat rakho.",
      "Oven ko baking se pehle properly preheat karo.",
      "Fresh basil baking ke baad add karo."
    ],
    storage: "Baked pizza refrigerator mein airtight container mein 3-4 days tak rakho. Oven ya pan mein thoroughly reheat karo."
  },

  {
    name: "Farmhouse Pizza",
    prepTime: "30 minutes",
    cookTime: "12-16 minutes",
    temperature: "220°C",
    difficulty: "Medium",
    servings: 2,
    components: [
      {
        title: "Soft Pizza Dough",
        ingredients: [
          "2 cups maida",
          "1 tsp instant yeast",
          "1 tsp sugar",
          "3/4 tsp salt",
          "2 tbsp olive oil",
          "3/4 cup lukewarm water"
        ],
        steps: [
          "Maida, yeast aur sugar mix karo.",
          "Salt add karke combine karo.",
          "Water gradually add karke dough prepare karo.",
          "Olive oil add karo.",
          "8-10 minutes knead karo.",
          "Covered bowl mein 60-90 minutes rise hone do.",
          "Dough ko punch down karke round pizza base shape karo.",
          "Base ki thickness evenly maintain karo."
        ]
      },
      {
        title: "Farmhouse Pizza Sauce",
        ingredients: [
          "1 cup tomato puree",
          "2 garlic cloves",
          "1 tbsp olive oil",
          "1/2 tsp oregano",
          "1/2 tsp chilli flakes",
          "1/2 tsp sugar",
          "Salt and pepper"
        ],
        steps: [
          "Pan mein olive oil heat karo.",
          "Garlic lightly saute karo.",
          "Tomato puree add karo.",
          "Oregano, chilli flakes, sugar aur salt add karo.",
          "10-12 minutes simmer karo.",
          "Thick hone par cool karo."
        ]
      },
      {
        title: "Vegetable Toppings Preparation",
        ingredients: [
          "1/2 capsicum, sliced",
          "1 small onion, sliced",
          "1/2 cup mushrooms, sliced",
          "1/2 tomato, deseeded and sliced",
          "1/4 cup sweet corn",
          "1/2 cup mozzarella cheese"
        ],
        steps: [
          "Saari vegetables wash karo.",
          "Capsicum aur onion thin slices mein cut karo.",
          "Mushrooms ko clean karke slice karo.",
          "Tomato ke seeds aur extra moisture remove karo.",
          "Corn ko boil karke drain karo.",
          "Vegetables ko completely dry kar lo.",
          "Mozzarella grate karke ready rakho."
        ]
      },
      {
        title: "Assembly and Baking",
        ingredients: [
          "Prepared pizza dough",
          "Prepared pizza sauce",
          "Prepared vegetables",
          "Mozzarella cheese",
          "1/2 tsp oregano",
          "1/2 tsp chilli flakes"
        ],
        steps: [
          "Oven ko 220°C par preheat karo.",
          "Pizza base ko tray par rakho.",
          "Sauce evenly spread karo.",
          "Mozzarella cheese ki first layer add karo.",
          "Onion, capsicum, mushrooms, tomato aur corn arrange karo.",
          "Remaining cheese sprinkle karo.",
          "Oregano aur chilli flakes add karo.",
          "12-16 minutes bake karo.",
          "Crust golden aur cheese melted hone par remove karo.",
          "Rest karke slices mein cut karo."
        ]
      }
    ],
    equipment: [
      "Mixing bowl",
      "Rolling pin",
      "Chopping board",
      "Knife",
      "Saucepan",
      "Pizza tray",
      "Oven"
    ],
    tips: [
      "Vegetables dry honi chahiye, warna pizza soggy ho sakta hai.",
      "Mushrooms ko extra moisture ke saath use mat karo.",
      "Cheese ko evenly spread karo.",
      "Base bahut thick mat rakho."
    ],
    storage: "Baked pizza refrigerator mein airtight container mein 3-4 days tak rakho."
  },

  {
    name: "Paneer Tikka Pizza",
    prepTime: "35 minutes",
    cookTime: "12-16 minutes",
    temperature: "220°C",
    difficulty: "Medium",
    servings: 2,
    components: [
      {
        title: "Pizza Dough",
        ingredients: [
          "2 cups maida",
          "1 tsp instant yeast",
          "1 tsp sugar",
          "3/4 tsp salt",
          "2 tbsp olive oil",
          "3/4 cup lukewarm water"
        ],
        steps: [
          "Maida, yeast aur sugar mix karo.",
          "Salt aur water gradually add karo.",
          "Olive oil add karke soft dough prepare karo.",
          "8-10 minutes knead karo.",
          "Cover karke 60-90 minutes rise hone do.",
          "Dough ko divide karke round pizza base stretch karo."
        ]
      },
      {
        title: "Paneer Tikka Marinade",
        ingredients: [
          "200 g paneer cubes",
          "3 tbsp thick curd",
          "1 tsp ginger garlic paste",
          "1/2 tsp Kashmiri chilli powder",
          "1/4 tsp turmeric",
          "1/2 tsp garam masala",
          "1/2 tsp coriander powder",
          "1/2 tsp cumin powder",
          "1 tsp lemon juice",
          "1 tsp oil",
          "Salt"
        ],
        steps: [
          "Thick curd ko mixing bowl mein lo.",
          "Ginger garlic paste add karo.",
          "Saare spices, lemon juice aur salt add karo.",
          "Oil add karke marinade mix karo.",
          "Paneer cubes ko gently coat karo.",
          "20-30 minutes refrigerator mein marinate karo.",
          "Pan mein paneer ko lightly sear karo.",
          "Paneer ko golden spots aane tak cook karo."
        ]
      },
      {
        title: "Indian Pizza Sauce",
        ingredients: [
          "1 cup tomato puree",
          "2 garlic cloves",
          "1 tbsp oil",
          "1/2 tsp oregano",
          "1/2 tsp chilli flakes",
          "1/4 tsp garam masala",
          "Salt"
        ],
        steps: [
          "Pan mein oil heat karo.",
          "Garlic saute karo.",
          "Tomato puree add karo.",
          "Oregano, chilli flakes, garam masala aur salt mix karo.",
          "10 minutes simmer karke cool karo."
        ]
      },
      {
        title: "Toppings and Baking",
        ingredients: [
          "1/2 cup mozzarella cheese",
          "1/2 capsicum, diced",
          "1 small onion, sliced",
          "1/4 cup sweet corn",
          "Prepared paneer tikka",
          "1 tbsp coriander leaves",
          "Pinch of oregano"
        ],
        steps: [
          "Oven ko 220°C par preheat karo.",
          "Pizza base ko baking tray par rakho.",
          "Indian pizza sauce spread karo.",
          "Mozzarella cheese add karo.",
          "Paneer tikka cubes evenly arrange karo.",
          "Capsicum, onion aur corn add karo.",
          "Remaining cheese sprinkle karo.",
          "12-16 minutes bake karo.",
          "Crust golden hone par pizza remove karo.",
          "Fresh coriander aur oregano se garnish karo."
        ]
      }
    ],
    equipment: [
      "Mixing bowl",
      "Rolling pin",
      "Frying pan",
      "Saucepan",
      "Pizza tray",
      "Oven",
      "Knife"
    ],
    tips: [
      "Paneer ko bahut der cook mat karo, warna dry ho sakta hai.",
      "Marinade ke liye thick curd use karo.",
      "Pizza sauce ko thick rakho.",
      "Paneer ko pizza par add karne se pehle lightly sear karna flavour badhata hai."
    ],
    storage: "Baked pizza refrigerator mein airtight container mein 3-4 days tak rakho. Thoroughly reheat karke serve karo."
  },

  {
    name: "Cheese Burst Pizza",
    prepTime: "35 minutes",
    cookTime: "14-18 minutes",
    temperature: "220°C",
    difficulty: "Medium",
    servings: 2,
    components: [
      {
        title: "Thick Pizza Dough",
        ingredients: [
          "2 cups maida",
          "1 tsp instant yeast",
          "1 tsp sugar",
          "3/4 tsp salt",
          "2 tbsp olive oil",
          "3/4 cup lukewarm water"
        ],
        steps: [
          "Maida, yeast aur sugar mix karo.",
          "Salt aur water gradually add karo.",
          "Olive oil add karo.",
          "8-10 minutes knead karo.",
          "Dough cover karke 60-90 minutes rise hone do.",
          "Dough ko two portions mein divide karo.",
          "Base ko normal pizza se slightly thicker stretch karo."
        ]
      },
      {
        title: "Classic Pizza Sauce",
        ingredients: [
          "1 cup tomato puree",
          "2 garlic cloves",
          "1 tbsp olive oil",
          "1/2 tsp oregano",
          "1/2 tsp chilli flakes",
          "Salt"
        ],
        steps: [
          "Olive oil mein garlic saute karo.",
          "Tomato puree add karo.",
          "Oregano, chilli flakes aur salt mix karo.",
          "10-12 minutes simmer karo.",
          "Completely cool hone do."
        ]
      },
      {
        title: "Cheese Burst Filling",
        ingredients: [
          "1/2 cup grated mozzarella",
          "1/4 cup processed cheese",
          "2 tbsp cream cheese",
          "1 tbsp milk"
        ],
        steps: [
          "Mozzarella aur processed cheese grate karo.",
          "Cream cheese aur milk add karo.",
          "Low heat par gently mix karo.",
          "Smooth, thick cheese mixture banne par heat off karo.",
          "Filling ko slightly cool hone do."
        ]
      },
      {
        title: "Top Layer and Baking",
        ingredients: [
          "1/2 cup grated mozzarella",
          "1/2 capsicum, diced",
          "1 small onion, sliced",
          "1/4 cup sweet corn",
          "1/2 tsp oregano",
          "1/2 tsp chilli flakes"
        ],
        steps: [
          "Oven ko 220°C par preheat karo.",
          "Pizza dough ko thick base mein stretch karo.",
          "Base ke edges par border maintain karo.",
          "Cheese burst filling ko centre mein evenly spread karo.",
          "Second dough layer ya prepared thin dough layer se cover karo.",
          "Edges ko carefully seal karo.",
          "Top surface par pizza sauce spread karo.",
          "Mozzarella aur vegetables add karo.",
          "Oregano aur chilli flakes sprinkle karo.",
          "14-18 minutes bake karo, jab tak crust cooked aur golden ho.",
          "2-3 minutes rest karke slice karo."
        ]
      }
    ],
    equipment: [
      "Mixing bowl",
      "Rolling pin",
      "Saucepan",
      "Spatula",
      "Pizza tray",
      "Oven",
      "Pizza cutter"
    ],
    tips: [
      "Cheese filling bahut watery nahi honi chahiye.",
      "Edges properly seal karna important hai.",
      "Overfilling se cheese leak ho sakti hai.",
      "Base ko underbake mat karo."
    ],
    storage: "Cheese burst pizza refrigerator mein airtight container mein 2-3 days tak rakho. Reheat thoroughly."
  },

  {
    name: "Veggie Supreme Pizza",
    prepTime: "30 minutes",
    cookTime: "12-16 minutes",
    temperature: "220°C",
    difficulty: "Easy",
    servings: 2,
    components: [
      {
        title: "Homemade Pizza Base",
        ingredients: [
          "2 cups maida",
          "1 tsp instant yeast",
          "1 tsp sugar",
          "3/4 tsp salt",
          "2 tbsp olive oil",
          "3/4 cup lukewarm water"
        ],
        steps: [
          "Maida, yeast aur sugar mix karo.",
          "Salt add karo.",
          "Water gradually add karke dough banao.",
          "Olive oil add karke 8-10 minutes knead karo.",
          "Covered bowl mein 60-90 minutes rise hone do.",
          "Dough ko punch down karo.",
          "Round pizza base shape karo."
        ]
      },
      {
        title: "Rich Tomato Pizza Sauce",
        ingredients: [
          "1 cup tomato puree",
          "2 garlic cloves",
          "1 tbsp olive oil",
          "1/2 tsp oregano",
          "1/2 tsp basil",
          "1/2 tsp black pepper",
          "Salt"
        ],
        steps: [
          "Pan mein olive oil warm karo.",
          "Garlic lightly saute karo.",
          "Tomato puree add karo.",
          "Oregano, basil, pepper aur salt add karo.",
          "10-12 minutes low-medium heat par cook karo.",
          "Thick hone par cool karo."
        ]
      },
      {
        title: "Supreme Vegetable Preparation",
        ingredients: [
          "1/2 capsicum, sliced",
          "1/2 red capsicum, sliced",
          "1 small onion, sliced",
          "1/2 cup mushrooms, sliced",
          "1/4 cup sweet corn",
          "1 small tomato, sliced and deseeded",
          "4-5 black olives, sliced"
        ],
        steps: [
          "Saari vegetables wash aur dry karo.",
          "Capsicum ko thin strips mein cut karo.",
          "Onion ko thin slices mein cut karo.",
          "Mushrooms ko clean karke slice karo.",
          "Corn boil karke drain karo.",
          "Tomato ke seeds remove karo.",
          "Olives slice karke ready rakho."
        ]
      },
      {
        title: "Cheese, Assembly and Baking",
        ingredients: [
          "1 cup grated mozzarella",
          "Prepared pizza sauce",
          "Prepared vegetables",
          "1/2 tsp oregano",
          "1/2 tsp chilli flakes",
          "1 tsp olive oil"
        ],
        steps: [
          "Oven ko 220°C par preheat karo.",
          "Pizza base ko tray par arrange karo.",
          "Tomato sauce evenly spread karo.",
          "Half mozzarella cheese add karo.",
          "Saari prepared vegetables arrange karo.",
          "Remaining mozzarella sprinkle karo.",
          "Oregano aur chilli flakes add karo.",
          "Olive oil ki light drizzle karo.",
          "12-16 minutes bake karo.",
          "Golden crust aur melted cheese check karo.",
          "Rest karke slices mein cut karo."
        ]
      }
    ],
    equipment: [
      "Mixing bowl",
      "Rolling pin",
      "Knife",
      "Chopping board",
      "Saucepan",
      "Pizza tray",
      "Oven"
    ],
    tips: [
      "Vegetables ko evenly slice karo.",
      "Tomato ka extra moisture remove karo.",
      "Pizza par toppings bahut zyada pile mat karo.",
      "Preheated oven se better crust milta hai."
    ],
    storage: "Baked pizza refrigerator mein airtight container mein 3-4 days tak rakho."
  }
];

pizzaUpgrades1.forEach(upgrade => {
  const recipe = recipes.find(r => r.name === upgrade.name);

  if (recipe) {
    Object.assign(recipe, upgrade);
  } else {
    console.warn("Pizza recipe not found:", upgrade.name);
  }
});