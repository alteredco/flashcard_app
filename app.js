const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render('index', {name});
  }else {
    res.redirect('/hello')
  }
});

app.get('/cards', (req, res) => {
  res.render('card', { prompt: "Who is buried in Grant's Tomb?"});
});

app.get('/hello', (req, res)=> {
  const name = req.cookies.username;
  if(name) {
    res.redirect('/')
  }else {
    res.render('hello')
  }
})

app.get('/goodbye', (req, res)=>{
     res.render('goodbye')
})

app.post('/hello', (req, res)=> {
  res.cookie('username', req.body.username);
  res.redirect('/')
})

app.post('/goodbye', (req, res)=>{
  res.clearCookie('username');
  res.redirect('/hello')
})

app.listen(3000, () => {
  console.log('The application is running on localhost: 3000')
});