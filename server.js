
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const formRoutes = require('./routes/formRoutes');
app.use('/api/forms', formRoutes);


app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://aavularuchitha:1234@cluster0.gzbss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.listen(6000, () => console.log('Server running on port'));
