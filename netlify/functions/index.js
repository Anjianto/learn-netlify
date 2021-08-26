const app = require("express")()

app.get("/",(req,res)=>{
	res.json({ok:"ok"})
}
)

app.listen(3000,()=>{
	console.log("Running on http://localhost:3000")
})


module.exports = app
