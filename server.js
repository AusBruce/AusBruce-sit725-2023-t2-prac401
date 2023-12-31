let express = require('express');
let app = express();

const cats = [{
    title: 'cat 2',
    path: 'images/cat2.png',
    subTitle: 'About Cat 2',
    description: 'Description of Cat 2'
},
{
    title: 'cat 3',
    path: 'images/cat3.png',
    subTitle: 'About Cat 3',
    description: 'Description of Cat 3'
},
{
    title: 'cat 4',
    path: 'images/cat4.png',
    subTitle: 'About Cat 4',
    description: 'Description of Cat 4'
}];

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/', function (req,res) {
    res.render('pages/index', {cats:cats});
});

let port = process.env.port || 3000;
app.listen(port, ()=>{
    console.log('express server started');
});