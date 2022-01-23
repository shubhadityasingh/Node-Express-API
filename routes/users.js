import express from 'express';

const router = express.Router();

const users = [
    {
    first_name: "shubhaditya",
    last_name: "singh",
    age: "21"
    },
    {
        first_name: "Lavanya",
        last_name: "singh",
        age: "17"
    }
]

// all routes in this file are already starting from '/users'

// to send the details of all the users
router.get('/', (req, res)=>{
    res.send(users);
    // res.send('Hello');
});

// to receive details of a user from the client and add it to the database
router.post('/', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send("Data Received.");
});

export default router;