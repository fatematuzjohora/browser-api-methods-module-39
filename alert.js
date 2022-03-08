console.log('i am here');
// alert('dont move!!');
const dontMove = () => {
    alert('dont move')
}

const askPicnic = () => {
    const response = confirm('Are you sure you want');
    console.log(response);
    if (response === true) {
        alert('send money in BKash')
    }
    else{
        console.log('go away');
    }
}

const askName = () => {
    const name = prompt('What is Your Name?');
    if (name) {
        console.log(name);
    }
}