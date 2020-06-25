//Get Button


const colorPink = document.getElementById('colorPink');

colorPink.addEventListener('click', () => {
    // post-click logic goes here!
    const nametag = document.getElementById('nametag');
    nametag.style.background = 'pink';
})

const colorLightGreen = document.getElementById('colorLightGreen');

colorLightGreen.addEventListener('click', () => {
    const nametag = document.getElementById('nametag');
    nametag.style.background = 'lightGreen';
})

const colorLightBlue = document.getElementById('colorLightBlue');

colorLightBlue.addEventListener('click', () => {
    const nametag = document.getElementById('nametag');
    nametag.style.background = "lightBlue";
})


