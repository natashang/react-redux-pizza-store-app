/*
    name     : corresponds to the React view component name
    next     : URL address to redirect the <Link> tag to, forwards
    prev     : URL address to redirect the <Link> tag to, backwards
    plabel   : UI button text to previous page 
    nlabel   : UI button text to next page
    progress : how far the user is in the application

*/
const links = [
  {
    name: "Home",
    label: "Click here to begin",
    next: "/addcustomer",
    progress: 0
  },
  {
    name: "Add Customer",
    prev: "/",
    next: "/addcrust",
    plabel: "Back",
    nlabel: "Next",
    progress: 20
  },
  {
    name: "Add Crust",
    prev: "/addcustomer",
    next: "/addsauce",
    plabel: "Back",
    nlabel: "Next",
    progress: 40
  },
  {
    name: "Add Sauce",
    label: "Next : Toppings --> ",
    prev: "/addcrust",
    next: "/addToppings",
    plabel: "Back",
    nlabel: "Next",
    progress: 60
  },
  {
    name: "Add Toppings",
    label: "Display My Order!",
    prev: "/addsauce",
    next: "/display",
    plabel: "Back",
    nlabel: "Next",
    progress: 80
  },
  {
    name: "Display Order",
    label: "Done",
    prev: "/addtoppings",
    next: "/",
    plabel: "Back",
    nlabel: "Finish",
    progress: 100
  }
];
export default links;
