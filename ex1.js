// 1.Create a function that could take an argument which is an array of objects. Each object should contain property name and age. The function should return a new list which only contains the user who have higher than 18 years old

const users = [
    { name: "John", age: 15 },
    { name: "Jane", age: 23 },
    { name: "Jim", age: 17 },
    { name: "Jill", age: 21 },
    { name: "Jack", age: 19 },
];

function filterUsers(users, callback) {
    const result = [];

    for (let i = 0; i < users.length; i++) {
        if (callback(users[i])) {
            result.push(users[i]);
        }
    }
    return result;
}

function checkAge(users) {
    return users.age > 18;
}

console.log(filterUsers(users, checkAge));
