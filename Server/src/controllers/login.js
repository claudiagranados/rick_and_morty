const users = require('../utils/users');

const login = (req, res) => {
    const {email, password } = req.query;

    const userFound = users.find((user) => user.email === email && user.password === password)

    userFound
    ? res.status(200).json({ access: true })
    : res.status(404).json({ accsess: false })
}


module.exports = {
    login
};