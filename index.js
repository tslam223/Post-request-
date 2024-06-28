function signUp(event) {
    event.preventDefault();
  const username = document.getElementById("text").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  fetch("https://deluxgem-2.onrender.com/sig", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      alert(res.message);
      console.log(res);
    })
    .catch((error) =>{
      console.log(error)
      alert("Failed")
    })
}





