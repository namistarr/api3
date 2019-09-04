const express = require('express');

const router = express.Router();

router.use(express.json());

// GET to /suppliers/
router.get('/', (req, res) => {
    res.send('get to /suppliers/');
  });

  // GET to /suppliers /name
  router.get('/name', (req, res) => {
    const { name } = req.params;
    res.send(`get to /products/${name}`);
  });


module.exports = router;