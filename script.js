console.log('Hello')

const select = document.querySelector('select');
const html = document.querySelector('body');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener('change', () => select.value === 'black'
  ? update('black', 'white')
  : update('white', 'black')
);


// area and volume of a box
// define area and volume
// a box is a a container with parallel rectangular or square sides
// area of a box is 2dw+2dh+2hw, due to there being two parallel sides
// volume is width*height*depth
// first create a function for get size
// function getSize(width, height, depth)
// set up the two variables area and volume
// const area = 1
// const volume = 1
// then apply the math fomrulas written above
//  area = (2*depth*width)+(2*depth*height)+(2*width*height)
//  volume = width*height*depth

function getSize (width, height, depth) {
    let area = 0
    let volume = 0

    area = ((2*depth*width)+(2*depth*height)+(2*width*height))
    volume = width*height*depth

    return [ area, volume]
}


console.log('hello')
// completed the area and volume

// Given two integers a and b, which can be positive or negative, find the sum of all the integers 
//between and including them and return it. If the two numbers are equal return a or b.

// This will need math function and a for loop
// function getSum( a,b )
// {
//    Math.getSum(a,b)
// }

