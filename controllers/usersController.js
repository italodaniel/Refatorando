const data = require('../data.json')

exports.home = (req, res) => {   
    return res.render('users/home', { recipes : data.recipes })
}

exports.about = (req,res) => {
    return res.render('users/about')
}

exports.recipes = (req, res) => {
    return res.render('users/recipes', { recipes : data.recipes })
}

exports.showRecipe = (req, res) => {
    const { id } = req.params
    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })

    if(!foundRecipe) return res.send('Recipe not found!')
    
    const recipe = { ...foundRecipe }

    return res.render('users/recipe', { recipe })
}