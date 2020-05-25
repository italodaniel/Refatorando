const express = require('express')
const users = require('./controllers/usersController')
const admin = require('./controllers/adminController')

const routes = express.Router()


routes.get('/',users.home)
routes.get('/sobre', users.about)
routes.get('/receitas', users.recipes)
routes.get('/receitas/:id', users.showRecipe)


routes.get('/admin', (req, res) => { 
return res.redirect('/admin/recipes')
})
routes.get('/admin/recipes', admin.index)
routes.get('/admin/recipes/create', admin.create)
routes.get('/admin/recipes/:id', admin.show)
routes.get('/admin/recipes/:id/edit', admin.edit)

routes.post('/admin/recipes', admin.post)
routes.put('/admin/recipes', admin.put)
routes.delete('/admin/recipes', admin.delete)

module.exports = routes