
import Home from '../components/Home'
import Customer from '../components/Customer'
import Crust from '../components/Crust'
import Sauce from '../components/Sauce'
import Toppings from '../components/Toppings'
import Display from '../components/Display'

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
        'label'    :"Click here to begin",
        'component': Home, 
        'path'     :'/home',
        'next'     :'/addcustomer',
        'progress' : 0
    },
    {
        'id'       : 2,
        'name'     :'Add Customer',
        'component': Customer,
        'prev'     :'/home',
        'path'     :'/addcustomer',
        'next'     :'/addcrust',
        'plabel'   :'Back',
        'nlabel'    :'Next',
        'progress' : 20
    },
    {
        'id'       : 3,
        'name'     :'Add Crust',
        'component': Crust,
        'prev'     :'/addcustomer',
        'path'     :'/addcrust',
        'next'     :'/addsauce',
        'plabel'   :'Back',
        'nlabel'    :'Next',
        'progress' : 40
    },
    {
        'id'       : 4,
        'name'     :'Add Sauce',
        'label'    :'Next : Toppings --> ',
        'component': Sauce,
        'prev'     :'/addcrust',
        'path'     :'/addsauce',
        'next'     :'/addToppings',
        'plabel'   :'Back',
        'nlabel'    :'Next',
        'progress' : 60

    },
    {
        'id'       : 5,
        'name'     :'Add Toppings',
        'label'    :'Display My Order!',
        'component': Toppings,
        'prev'     :'/addsauce',
        'path'     :'/addtoppings',
        'next'     :'/display',
        'plabel'   :'Back',
        'nlabel'    :'Next',
        'progress' : 80

    },
    {
        'id'       : 6,
        'name'     :'Display Order',
        'label'    :'Done',
        'component': Display,
        'prev'     :'/addtoppings',
        'path'     :'/display',
        'next'     :'/home',   
        'plabel'   :'Back',
        'nlabel'    :'Finish',     
        'progress' : 100
    }
]
export default links