const { Router } = require('express');
const router = Router();

router.post('/send-email', (req, res) => {
      const { name, email, phone, message } = req.body;
      
      contentHTML = `
             <h1>User Information</h1>
             <ul>
                 <li>Username: ${name}</li> 
                 <li>User Email: ${email}</li>
                 <li>Phone: ${phone}</li>           
             </ul>
             <p>${message}</p>
      `; 
      console.log(contentHTML)
      res.send('Hemos recibido tu mensaje')
})

module.exports = router;