const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json(
    [
        {
            name: 'Ehab',
            email: 'ehab.ahmed.yassen@gmail.com'
        },
        {
            name: 'Aya',
            email: 'aya.ahmed.yassen@gmail.com'
        },
        {
            name: 'Eslam',
            email: 'eslam.ahmed.yassen@gmail.com'
        },
        {
            name: 'Ahmed',
            email: 'ahmed.yassen@gmail.com'
        }
    ]
))

app.listen(port, () => console.log(`Example app listening on port ${port}`))