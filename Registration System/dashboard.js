 
// Dashboard Module 
 
export const loadDashboard = async (user) => { 
 
    console.log("Loading dashboard..."); 
 
 
    document.getElementById("status").innerText = 
        "Loading dashboard..."; 
 
    await new Promise(resolve => { 
        setTimeout(resolve, 2000); 
    }); 
 
    const { userId, name, email, status } = user; 
 
    document.getElementById("registration").style.display = "none"; 
 
    document.getElementById("dashboard").style.display = "block"; 
 
    document.getElementById("userDetails").innerText = ` 
        User ID: ${userId} 
        Name: ${name} 
        Email: ${email} 
        Status: ${status} 
    `; 
 
    document.getElementById("status").innerText = 
        "Dashboard Loaded Successfully!"; 
 
    console.log("Dashboard loaded successfully!"); 
 
}; 
