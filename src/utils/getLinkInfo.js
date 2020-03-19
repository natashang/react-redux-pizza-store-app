/**
 * Iterates through all possible in-app links for the correct link info object.
 * Helper function
 * 
 * @param {*} arrOfLinks all link information, from links.js
 * @param {*} linkName the component's link name, from links.js
 * @returns {Object} the object from the array corresponding to this component's link
 */
const getLinkInfo = (arrOfLinks, linkName) => {
    for (let i = 0; i < arrOfLinks.length; i++){
        if (arrOfLinks[i].name === linkName)
            return arrOfLinks[i]
    }
}

// TODO: i.e. 'Add Customer' becomes hard coded, maybe COMP_NAME='Add Customer'?

export default getLinkInfo