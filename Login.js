function login(username, password) {
    const users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
        { username: 'user3', password: 'password3' }
    ];

    for (let user of users) {
        if (user.username === username && user.password === password) {
            return `Welcome, ${username}!`;
        }
    }

    return 'Invalid username or password';
}

console.log(login('user1', 'password1')); // Output: Welcome, user1!
console.log(login('user1', 'wrong_password')); // Output: Invalid username or password