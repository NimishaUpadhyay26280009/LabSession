import { registerUser } from './user.js'; 
import { loadDashboard } from './dashboard.js'; 
console.log("Application Started"); 
const registrationCallback = (user) => { 
    console.log(`${user.name} registered successfully!`); 
}; 
const interests = ["JavaScript", "HTML", "CSS"]; 
const button = document.getElementById("register"); 
button.addEventListener("click", async () => { 
    const name = document.getElementById("name").value.trim(); 
    const email = document.getElementById("email").value.trim(); 
    if (name === "" || email === "") { 
        document.getElementById("status").innerText = 
            "Please fill all fields!"; 
        return; 
    } 
    button.disabled = true; 
    try { 
        console.log("Registering user..."); 
        const user = await registerUser( 
            name, 
            email, 
            registrationCallback, 
            ...interests 
        ); 
        console.log("Registration completed!"); 
        const { name: userName } = user; 
        console.log(`Welcome ${userName}`); 
        await loadDashboard(user); 
    } 
    catch (error) { 
        console.log("Error:", error); 
        document.getElementById("status").innerText = 
            "Something went wrong!"; 
        button.disabled = false; 
    } 
}); 
console.log("Waiting for user registration...");