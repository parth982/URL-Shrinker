const express = require('express');
const router  = express.Router();

const {
    main_page,
    Add_url,
    goto_url
} = require('../controllers/url_cntr');

router.route('/').get(main_page);
router.route('/SHORTURL').post(Add_url);
router.route('/:s_url').get(goto_url);

module.exports = router;