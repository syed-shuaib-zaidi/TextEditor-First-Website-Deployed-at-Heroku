express=require('express')
app=express()
app.use('/',express.static('public'))
const PORT = process.env.PORT || 4444
app.listen(PORT,()=>{
    console.log(`server started at https://localhost:${PORT}`)
})
