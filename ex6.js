// 6.You have an array of objects where each object has properties `name` and `category`. Use the `reduce` method to group these objects by category.
// Input: [ {name: “Bread”, category: “Grocery”}, {name: “Butter”, category: “Grocery”}, {name: “Shampoo”, category: “Personal Care”}]
// Output: { “Grocery”: [“Bread”, “Butter”], “Personal Care”: [“Shampoo”]}

const items = [
    { name: "Bread", category: "Grocery" },
    { name: "Butter", category: "Grocery" },
    { name: "Shampoo", category: "Personal Care" },
];

const groupedByCategory = items.reduce((acc, current) => {
    if (!acc[current.category]) {
        acc[current.category] = [];
    }
    acc[current.category].push(current.name);
    return acc;
}, {});

console.log(groupedByCategory);
