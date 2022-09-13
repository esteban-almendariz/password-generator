// declare all characters
let characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '&', '*'];
let password1 = document.getElementById('pswrd1')
let password2 = document.getElementById('pswrd2')
let password3 = document.getElementById('pswrd3')
let password4 = document.getElementById('pswrd4')

function generatePassword() {
    let result1 = '';
    let result2 = '';
    let result3 = '';
    let result4 = '';

    // I THINK ALL OF THESE FUNCTIONS ARE RUNNING MAY NEED TO FIX
    if (document.getElementById('length-10').checked) {

        for (let i = 0; i < 10; i++) {
            result1 += characters[Math.floor(Math.random() * characters.length)];
        }
        for (let i = 0; i < 10; i++) {
            result2 += characters[Math.floor(Math.random() * characters.length)];
        }
        for (let i = 0; i < 10; i++) {
            result3 += characters[Math.floor(Math.random() * characters.length)];
        }
        for (let i = 0; i < 10; i++) {
            result4 += characters[Math.floor(Math.random() * characters.length)];
        }
    }

    else if (document.getElementById('length-12').checked) {
        // function genPassword12() {
        for (let i = 0; i < 12; i++) {
            result1 += characters[Math.floor(Math.random() * characters.length)];
        }
        for (let i = 0; i < 12; i++) {
            result2 += characters[Math.floor(Math.random() * characters.length)];
        }
        for (let i = 0; i < 12; i++) {
            result3 += characters[Math.floor(Math.random() * characters.length)];
        }
        for (let i = 0; i < 12; i++) {
            result4 += characters[Math.floor(Math.random() * characters.length)];
        }
    }

    else if (document.getElementById('length-14').checked) {
        // function genPassword14() {
        for (let i = 0; i < 14; i++) {
            result1 += characters[Math.floor(Math.random() * characters.length)];
        }
        for (let i = 0; i < 14; i++) {
            result2 += characters[Math.floor(Math.random() * characters.length)];
        }
        for (let i = 0; i < 14; i++) {
            result3 += characters[Math.floor(Math.random() * characters.length)];
        }
        for (let i = 0; i < 14; i++) {
            result4 += characters[Math.floor(Math.random() * characters.length)];
        }
    }

    else {
        for (let i = 0; i < 16; i++) {
            result1 += characters[Math.floor(Math.random() * characters.length)];
        }
        for (let i = 0; i < 16; i++) {
            result2 += characters[Math.floor(Math.random() * characters.length)];
        }
        for (let i = 0; i < 16; i++) {
            result3 += characters[Math.floor(Math.random() * characters.length)];
        }
        for (let i = 0; i < 16; i++) {
            result4 += characters[Math.floor(Math.random() * characters.length)];
        }
    }

    password1.value = result1
    password2.value = result2
    password3.value = result3
    password4.value = result4

}

// document.querySelector('.password-container').addEventListener('click', () => {
//     console.log('clicked')
// })


[...document.querySelectorAll('.password')].forEach(password => {
    password.addEventListener('click', () => {
        console.log(password.value)
        // Select the text field
        password.select();
        password.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(password.value);

        // Alert the copied text
        alert("Password has been Copied to Clipboard");

    })
})

// }).addEventListener('click', (e) => {
//     console.log('cliecked')
//     e.preventDefault();
//     e.clipboardData.setData('text/plain', `${e.target.value}`)
//     console.log(e.target.value)
// })

