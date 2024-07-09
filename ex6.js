// 6.You have an array of objects where each object has properties `name` and `category`. Use the `reduce` method to group these objects by category.
// Input: [ {name: “Bread”, category: “Grocery”}, {name: “Butter”, category: “Grocery”}, {name: “Shampoo”, category: “Personal Care”}]
// Output: { “Grocery”: [“Bread”, “Butter”], “Personal Care”: [“Shampoo”]}

const item = [
    { name: "Bread", category: "Grocery" },
    { name: "Butter", category: "Grocery" },
    { name: "Shampoo", category: "Personal Care" },
];

const groupedByCategory = item.reduce((current, item) => {
    if (!current[item.category]) {
        current[item.category] = [];
    }
    current[item.category].push(item.name);
    return current;
}, {});

console.log(groupedByCategory);
