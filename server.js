let expressHbs = require('express-handlebars');
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let app = express();
let fs = require('fs');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.engine(
    'hbs',
    expressHbs({
        layoutsDir: 'views/layouts',
        defaultLayout: 'main-layout',
        extname: 'hbs'
    })
);
app.set('view engine', 'hbs');
app.set('views', 'views');

let artistRoutes = require('./routes/artistRoutes');
app.use(artistRoutes);


app.listen(process.env.PORT || 4000);