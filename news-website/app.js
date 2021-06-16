const express = require('express');
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const app = express();
app.use(express.static(__dirname+'/public'));
app.use(morgan('dev'))
const port = 3000

app.engine('hbs',exphbs({
    defaultLayout: 'main.hbs'
}));
app.set('view engine','hbs');

app.get('/',function (req,res) {
   res.render('home')
});

app.listen(port,function () {
    console.log('start')
    
});