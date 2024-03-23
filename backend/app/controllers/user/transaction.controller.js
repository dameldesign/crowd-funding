let totalUsers = 0;
let allUsers = [];

// Function to find a specific player from players list
function findUser (allUsers, userAddress) {
    console.log("allUsers: ", allUsers, "userAddress: ", userAddress);
    const foundUser = allUsers.find(user => user.walletAddress === userAddress);
    return foundUser;
}

class User {
    constructor(first_name, last_name, walletAddress) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.walletAddress = walletAddress;
        this.id = 0;
     }

    displayInfo() {
        console.log(`
            first_name: ${this.first_name}
            last_name: ${this.last_name}
            walletAddress: ${this.walletAddress}
            id: ${this.id}
        `);
    }

    setId(id){
        this.id = id;
    }

    modifyFirstName( newFirstName ) {
        this.first_name = newFirstName;
    }

    modifyFirstName( newLastName ) {
        this.last_name = newLastName;
    }
}

// Function to create a user
function createUser(first_name, last_name, walletAddress) {
    //check if user already exist
    if(findUser(allUsers, walletAddress)) {
        throw new Error("User already exist");
    }

    totalUsers = totalUsers + 1;

    const newUser = new User(first_name, last_name, walletAddress);

    newPlayer.setId(totalUsers);
    allUsers.push(newUser);

    console.log("New User Created:", newUser);
    return newUser;
}

// View profile
function getUser(userAddress) {
    let user = findUser(allUsers, userAddress);
    return user;
}



// Example: Create a new User
// createUser("Francis", "Okeke", "X7ysdsa8");

module.exports = { allUsers, createUser, User, totalUsers , findUser, getUser};
