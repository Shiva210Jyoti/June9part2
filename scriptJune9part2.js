// Save user data to localStorage
document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const user = {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      email: document.getElementById("email").value
    };
  
    // Store the object as a JSON string
    localStorage.setItem("userData", JSON.stringify(user));
  
    alert("Data saved to localStorage!");
  });
  
  // Load user data from localStorage
  function loadData() {
    const data = localStorage.getItem("userData");
  
    if (data) {
      const user = JSON.parse(data);
  
      // Show loaded data in the form
      document.getElementById("name").value = user.name;
      document.getElementById("age").value = user.age;
      document.getElementById("email").value = user.email;
  
      // Optional output display
      document.getElementById("output").innerText = `Loaded: ${user.name}, ${user.age}, ${user.email}`;
    } else {
      alert("No data found in localStorage.");
    }
  }
  