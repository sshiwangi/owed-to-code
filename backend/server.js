require('dotenv').config();
const express = require('express');
const app = express();
const tasksRoutes = require('./routes/task');
const authRoutes = require('./routes/auth');

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const database = (module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI);
    mongoose.connect(
        process.env.MONGO_URI,
        connectionParams
    );
    console.log("Database connected succesfully");
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
});
database();

app.use(express.json());
try {
  app.use('/routes/tasks', tasksRoutes);
  console.log("task created")
}
catch (error){
  console.log('task model not created');
}

app.use('/routes/auth', authRoutes);

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Server is running!");
});

const cors = require('cors');
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });