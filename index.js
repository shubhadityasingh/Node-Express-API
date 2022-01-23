import express from 'express'; //after adding type = module in package.json file, we can import module using this syntax now instead of using the 'require' function
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) =>{
    console.log("get function of '/' is running");

    res.send("You're on the homepage");
});

app.listen(PORT, () => {console.log(`Server running on port: http://localhost:${PORT}`)});