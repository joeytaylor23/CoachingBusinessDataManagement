document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault();


const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const data = {username: username, password:password};

fetch('/signup', {
    method: 'Post',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(data)
})

.then(Response => Response.json())
.then(data => {
    console.log('All set!', data);
})

.catch(error => {
    console.error('Error', error);
});
});