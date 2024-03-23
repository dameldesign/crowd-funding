let totalUsers = 0;
let allUsers = [];

// Function to find a specific player from players list
function findUser (allUsers, playerAddress) {
    console.log("allUsers: ", allUsers, "playerAddress: ", playerAddress);
    const foundPlayer = allUsers.find(player => player.walletAddress === playerAddress);
    return foundPlayer;
}

class Player {
    constructor(Monika, walletAddress, logoURI) {
        this.Monika = Monika;
        this.walletAddress = walletAddress;
        this.logoURI = logoURI;
        this.characters = [];
        this.id = 0;
        this.point = 1000;
        this.nebulaBalance = 0;
        this.NebulaTokenBalance = 0;
     }

    displayInfo() {
        console.log(`
            Monika: ${this.Monika}
            walletAddress: ${this.walletAddress}
            logoURI: ${this.logoURI}
            characters: ${this.characters}
            id: ${this.id}
            NebulaTokenBalance: ${this.NebulaTokenBalance}
        `);
    }

    setId(id){
        this.id = id;
    }

    modifyMonika( newMonika) {
        this.Monika = newMonika;
    }

    modifyAvatar( newAvatar ) {
        this.logoURI = newAvatar;
    }
}

// Function to create a player
function createUser(Monika, walletAddress, logoURI) {
    //check if player already exist
    if(findUser(allUsers, walletAddress)) {
        throw new Error("Player already exist");
    }

    totalUsers = totalUsers + 1;

    const newPlayer = new Player(Monika, walletAddress, logoURI);

    newPlayer.setId(totalUsers);

    allUsers.push(newPlayer);

    console.log("New Player Created:");

    return newPlayer;
}

// View profile
function getUser(userAddress) {
    let user = findUser(allUsers, userAddress);
    return user;
}



// Example: Create a new Player
// createUser("Player Bot", "0xPlayerBot", "X7ysdsa8");

module.exports = { allUsers, createUser, Player, totalUsers , findUser, getUser};
