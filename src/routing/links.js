
import Home from '../components/Home.js'
import Customer from '../components/Customer.js'
import Crust from '../components/Crust.js'
import Sauce from '../components/Sauce.js'
import Toppings from '../components/Toppings.js'
import Display from '../components/Display.js'

/*
    name: appears on the button
    to  : URL address that appears in the browser address bar
    comp: assigns the specific view component for that address
    next: the next view component the app should direct
*/
const links = [
    {
        'id'       : 1,
        'name'     :'Home',
        'to'       :'/',
        'component': Home,
        'next'     : Customer
    },

    {
        'id'       : 2,
        'name'     :'Add Customer',
        'to'       :'/addcustomer',
        'component': Customer,
        'next'     : Crust
    },
    {
        'id'       : 3,
        'name'     :'Add Crust',
        'to'       :'/addcrust',
        'component': Crust,
        'next'     : Sauce
    },
    {
        'id'       : 4,
        'name'     :'Add Sauce',
        'to'       :'/addsauce',
        'component': Sauce,
        'next'     : Toppings
    },
    {
        'id'       : 5,
        'name'     :'Add Toppings',
        'to'       :'/addtoppings',
        'component': Toppings,
        'next'     : Display
    },
    {
        'id'       : 6,
        'name'     :'Display',
        'to'       :'/display',
        'component': Display,
        'next'     : Home
    }
]
export default links