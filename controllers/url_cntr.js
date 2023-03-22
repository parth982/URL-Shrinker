const url_model = require('../models/url_model');

const main_page = async (req,res)=>{
    const All_urls = await url_model.find({});
    res.render('index.ejs',{ALL_URLS: All_urls});
};

const Add_url = async (req,res)=>{
    const f_url = req.body.FULLURL;
    await url_model.create({fullurl_s: f_url});
    res.redirect('/');
};

const goto_url = async (req,res)=>{
    const url_doc = await url_model.findOne({shorturl_s: req.params.s_url});
    if(!url_doc){return res.status(404).json({msg:'Cannot Find Page!!!'});}
    url_doc.clicks_s++;
    url_doc.save();
    res.redirect(url_doc.fullurl_s);
};

module.exports = {
    main_page,
    Add_url,
    goto_url
}