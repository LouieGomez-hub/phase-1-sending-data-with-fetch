function submitData(userName, userEmail) {
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    };
    return fetch('http://localhost:3000/users', configObj)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            document.body.innerHTML = object.id
            console.log(object);
        })
        .catch(function (error) {
            document.body.innerHTML = error.message
            alert("Unauthorized Access");
            console.log(error.message);
        })
};