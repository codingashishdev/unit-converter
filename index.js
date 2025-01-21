const Length = document.getElementById('length');
const Weight = document.getElementById('weight');
const Temperature = document.getElementById('temperature');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const data = btn.firstChild;
    console.log(data)
    // data.forEach(element => {
    //     console.log(element + " ");
    // });
})