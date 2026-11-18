// User Registration Module 
 
export const registerUser = ( 
    name = "Pawan", 
    email = "Pawan@gmail.com", 
    callback = () => {}, 
    ...interests 
) => { 
 
    console.log("Starting registration..."); 
 
    let status = "Pending"; 
    var userType = "New User"; 
    const userId = 101; 
    const user = { 
        userId, 
        name, 
        email, 
        userType, 
        status, 
 
        interests, 
 
        displayInfo() { 
            return `${this.name} - ${this.email}`; 
        } 
    }; 
 
    const savedUser = { 
        ...user, 
        status: "Registered" 
    }; 
    return new Promise((resolve) => { 
        console.log("Saving user..."); 
        setTimeout(() => { 
            status = "Completed"; 
            console.log("User saved successfully!"); 
            callback(savedUser); 
            resolve(savedUser); 
        }, 2000); 
 
    }); 
 
};