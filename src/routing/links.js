
import Home from '../components/Home.js'
import Customer from '../components/Customer.js'
import Crust from '../components/Crust.js'
import Sauce from '../components/Sauce.js'
import Toppings from '../components/Toppings.js'
import Display from '../components/Display.js'

/*
    name     : corresponds to the React view component name
    label    : text on UI components (buttons)
    component: assigns the specific React view component for that address
    path     : URL address that appears in the browser address bar
    next     : URL address to redirect the application to
*/
const links = [
    {
        'id'       : 1,
        'name'     :'Home',
        'label'    :"I'm hangry!",
        'component': Home, 
        'path'     :'/home',
        'next'     : '/addcustomer'
    },
    {
        'id'       : 2,
        'name'     :'Add Customer',
        'label'    :'Next : Crust --> ',
        'component': Customer,
        'path'     :'/addcustomer',
        'next'     :'/addcrust'
    },
    {
        'id'       : 3,
        'name'     :'Add Crust',
        'label'    :'Next : Sauce --> ',
        'component': Crust,
        'path'     :'/addcrust',
        'next'     :'/addsauce'
    },
    {
        'id'       : 4,
        'name'     :'Add Sauce',
        'label'    :'Next : Toppings --> ',
        'component': Sauce,
        'path'     :'/addsauce',
        'next'     :'/addToppings'
    },
    {
        'id'       : 5,
        'name'     :'Add Toppings',
        'label'    :'Display My Order!',
        'component': Toppings,
        'path'     :'/addtoppings',
        'next'     :'/display'
    },
    {
        'id'       : 6,
        'name'     :'Display Order',
        'label'    :'Done',
        'component': Display,
        'path'     :'/display',
        'next'     :'/home'
    }
]
export default links