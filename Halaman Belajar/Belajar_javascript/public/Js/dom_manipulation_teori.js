function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

var parm = document.createElement("p");
parm.innerText = "Ini di isi dengan inerText";

document.getElementById('Create_element').appendChild(parm);



const formlogin = document.getElementById('form-login');
const feedbackMessange = document.getElementById('feedback');


formlogin.addEventListener("submit",function(event){
    event.preventDefault();
    const data = new FormData(event.target); // ini 
    feedbackMessange.innerHTML = `Login dengan username <code>${data.get("username")}<code> dikirim!`;
});

formlogin.addEventListener("reset",function(){
    feedbackMessange.textContent = "Form dibersihkan!";
})

