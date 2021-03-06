const router = require('express').Router();
const Articles = require('../models/articles');

//GET ALL ARTICLES REQUEST
router.get('/', (req, res) => {
    Articles.find()
        .then(article => res.json(article))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

//ADD ARTICLE REQUEST
router.post("/add", (req, res) => {
    const newArticle = new Articles({
        title: req.body.title,
        article: req.body.article,
        authorname: req.body.authorname
    })
    newArticle.save()
        .then(()=> res.json("The new Article posted successfully!!!"))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

//FIND ARTICLE BY ID
router.get('/:id', (req, res) => {
    Articles.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(400).json(`Error: ${err}`))
});

//UPDATE ARTICLE BY ID
router.put('/update/:id', (req, res) => {
    Articles.findById(req.params.id)
    .then(article => {
        article.title = req.body.title;
        article.article = req.body.article;
        article.authorname = req.body.authorname;

        article
            .save()
            .then(()=> res.json("Article updated!"))
            .catch(err => res.status(400).json(`Error: ${err}`))
    })
    //one here too just in case...
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//DELETE ARTICLE BY ID
router.delete('/:id', (req, res)=>{
    Articles.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Article deleted!!!!"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router;