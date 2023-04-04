const breakfast = ['Instant Pot Oatmeal', 'Avocado Toast', 'Scrambled Eggs', 'Yogurt with Fruit or Granola'
, 'Toad in the Hole', 'Cottage Cheese with Fruit', 'Bananas and Peanut Butter', '2 Ingredient Pancakes', 'Egg McMuffin'
, 'Monte Cristo Sandwich'];
const lunch = ['Vegan chickpea curry jacket potatoes', 'Salmon salad with sesame dressing'
, 'Smoky tomato, chipotle & charred corn soup', 'Herby warm cucumbers with lemon', 'Lemon & spinach rice with feta'
, 'Healthy pesto eggs on toast', 'Cavolo nero orecchiette', 'Chicken satay salad'
, 'Veggie olive wraps with mustard vinaigrette', 'Bulgur & aubergine pilaf'];
const dinner = ['Creamy Chicken Soup', 'Stovetop Burgers', 'Crockpot Chicken Breast Recipe', 'Birria Tacos'
, 'Chili Mac Recipe', 'Air Fryers Chicken Thighs', 'Baked Ranch Chicken with Bacon', 'Crockpot Taco Soup'
, 'Homemade Alfredo Sauce', 'Oven Fried Chicken Breast'];

const createTheMessage = (breakfast, lunch, dinner) => {
    todayBreakfast = breakfast[Math.floor(Math.random() * breakfast.length)];
    todayLunch = lunch[Math.floor(Math.random() * lunch.length)];
    todayDinner = dinner[Math.floor(Math.random() * dinner.length)];

    console.log(`Your menu today is: ${todayBreakfast} for breakfast, ${todayLunch} for lunch and ${todayDinner} for 
    dinner.`);
}

createTheMessage(breakfast, lunch, dinner);