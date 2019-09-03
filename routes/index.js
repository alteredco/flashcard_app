const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render('index', {name});
  }else {
    res.redirect('/hello')
  }
});

router.get('/hello', (req, res)=> {
  const name = req.cookies.username;
  if(name) {
    res.redirect('/')
  }else {
    res.render('hello')
  }
})

router.get('/goodbye', (req, res)=>{
     res.render('bye')
})

module.exports = router;