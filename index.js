import express from 'express'

// Express app
const app = express()
// Router
const router = express.Router()
// Port
const port = +process.env.PORT || 4000

app.use(
    express.json(),
    router
)
router.get('^/$|/ejd', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg: 'You\'re home'
    })
})
router.get('/person1', (req, res)=>{
    let person1 = new Person()
    person1.FirstName = "Thimna"
    person1.lastName = "Alam"
    person1.Age = 21
    person1.display()
    res.end('Please check the console')
})
router.get('/person2', (req, res)=>{
    let person2 = new Person()
    person2.FirstName = "Phawu"
    person2.lastName = "Alam"
    person2.Age = 2
    person2.display()
    res.end('Please check the console')
})
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
