const user = {
    id: 20201023101,
    name: "S.Sirzil Shanon",
    lover: {
        name: 'Esha', 
        favFood: "pizza" 
    } ,
    
    friendsAge: [12, 14, 15, 18, 42],
    friends: ['kamal', 'Jamal', 'samal']
    };
const userJson = JSON.stringify(user);
console.log(userJson);

const userFromJson = JSON.parse(userJson);
console.log(userFromJson);


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => displayUser(json))

    function displayUser(users){
        const userNames = users.map(user => user.username);
        const ul = document.getElementById("user-Container");

        for(let i = 0; i < userNames.length; i++){
            const username= userNames[i];
            const li = document.createElement("li");
            li.innerText = username;
            ul.appendChild(li);
        }
    }
