import app from "./app.js";

app.listen(process.env.PORT, function(){
    console.log(`Server runing on PORT ${process.env.PORT}`)
})