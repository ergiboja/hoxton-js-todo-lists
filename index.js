/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/
// - Create an alert that lists all users, with their ids, names and what city they're from
// - Prompt the user for a user id
// - Display an alert with the username and all the todos titles that belong to that user 

// Tips
// - The user id creates an identifiable relationship with the todos
// - Sometimes it's good to map some values into a new data structure


console.log("users: ", window.users);

console.log("todos: ", window.todos);
let text = "";

for (let user of users){
  text += ("ID  " + user.id  + " Full name : " + user.name + " city: " + user.address.city + "\n\n")
}

alert(text);


let userID = Number(prompt("Enter User ID ..."));

console.log(userID);


