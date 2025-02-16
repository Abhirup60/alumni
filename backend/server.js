require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-route");
const contactRoute = require("./router/contact-route")
const adminRoute = require("./router/admin-route")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// lets tackle cors
const corsOption = {
    origin:"https://alumni-user.onrender.com",
    methods:"GET, PUT, POST, PATCH, HEAD, DELETE",
    credentials:true,
}

app.use(cors(corsOption));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

const PORT = 5000;

// listening
connectDb().then(()=>{
    app.listen(PORT, () => {
        console.log(`server is running on port: ${PORT}`)
    })
});
