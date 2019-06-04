const app = require('http')
.createServer((req, res) => res.sendDate('on hi there!'));

// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => {
//     console.log(`Smart Brain API Server is running on port ${ PORT }`)
// })

const DATABASE_URL = process.env.DATABASE_URL
app.listen(3000, () => {
    console.log(`Smart Brain API Server is running on port ${ DATABASE_URL }`)
})



console.log(3000);