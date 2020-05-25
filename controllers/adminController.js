const data = require('../data.json')
const fs = require('fs')


exports.index = (req, res) => {
    return res.render('admin/index', { recipes: data.recipes })
}

exports.show = (req, res) => {
    const { id } = req.params
    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })

    if(!foundRecipe) return res.send('Recipe not found!')
    
    const recipe = { ...foundRecipe }

    return res.render('admin/show', { recipe })
}

exports.create = (req, res) => {
    return res.render('admin/create')
}

exports.post = (req, res) => {
    let { image, title, author, ingredients, preparation, information } = req.body
    const id = Number(data.recipes.length + 1)

    data.recipes.push({ id, image, title, author, ingredients, preparation, information })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err){
            return res.send("Writefile error")
        }
    })
    return res.redirect(`/admin/recipes/${id}`)
}

exports.edit = (req, res) => {
    const { id } = req.params
    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })

    if(!foundRecipe) return res.send('Recipe not found!')

    const recipe = { ...foundRecipe }

    return res.render('admin/edit', { recipe })
}

exports.put = (req, res) => {
    const { id } = req.body
    let index = 0
    const foundRecipe = data.recipes.find(function(recipe, foundIndex){
        if(id == recipe.id){
            index = foundIndex
            return true
        }
    })

    if(!foundRecipe) return res.send('Recipe not found!')

    const recipe = { ...foundRecipe, ...req.body, id: Number(req.body.id) }
    data.recipes[index] = recipe
    
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err){
            return res.send("Writefile error")
        }
    })
    return res.redirect(`/admin/recipes/${id}`)
}

exports.delete = (req, res) => {
    const { id } = req.body
    const filteredRecipes = data.recipes.filter(function(recipe){
        return recipe.id != id
    })

    data.recipes = filteredRecipes

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err){
            return res.send("Writefile error")
        }
    })
    return res.redirect(`/admin/recipes`)
}