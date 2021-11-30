/* 
    1. If the color is yellow, pink or orange return from the function “light color”.
    2. If the color is blue, purple, brown return from the function “dark color”.
    3. If the color is none of the above return “Unknown color”.
    
    * It shouldn’t be case sensitive
*/
function darkOrLight(color) {
    color = color.toLowerCase();
    let theme;
    switch (color) {
        case 'yellow':
        case 'pink':
        case 'orange':
            theme = 'light color'
            break;
        case 'blue':
        case 'purple':
        case 'brown':
            theme = 'dark color'
            break;
        default:
            theme = 'Unknown color'
            break;
    }
    return theme;
}

console.log(darkOrLight('pink'));//'light color'
console.log(darkOrLight('red'));//'Unknown color'
console.log(darkOrLight('brown'));//'dark color'
console.log(darkOrLight('Purple'));//'dark color'
console.log(darkOrLight('oRANGE'));//'light color'