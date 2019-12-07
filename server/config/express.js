const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    exampleRouter = require('../routes/examples.server.routes'),
    cors = require('cors'),
    {sendEmail} = require('../mail/mail');
module.exports.init = () => {
    /* 
        connect to database
        - reference README for db uri
    */
    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    var db=mongoose.connection; 
    db.on('error', console.log.bind(console, "connection error")); 
    db.once('open', function(callback){ 
        console.log("connection succeeded"); 
    }) 


    // initialize app
    const app = express();
    app.use(cors());
    // enable request logging for development debugging
    app.use(morgan('dev'));

    app.use(bodyParser.urlencoded({extended: true}));

    // body parsing middleware
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.post("/api/sendMail",(req,res) => {
        console.log(req.body)
        sendEmail(req.body.firstName,req.body.lastName,req.body.email,req.body.subject,req.body.message)
    })
    
    // add a router
    app.use('/api/example', exampleRouter);

    const Schema = mongoose.Schema;
    // create a schema
    const messageSchema = new Schema({
        email: String,
    });
    const Message = mongoose.model('Message', messageSchema);
    module.exports = Message;


    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }
    app.post("/api/sendMail",(req,res) => {
        console.log(req.body)
    
        //sendEmail(req.body.email,req.body.name,"hello")
    })
    app.post('/post-email', function(req,res){ 
        console.log(req.body.email);
        const doc = new Message({ email: req.body.email })
        doc.save(); 
              
        return res.redirect('index.html'); 
    }) 
    

    return app
}

