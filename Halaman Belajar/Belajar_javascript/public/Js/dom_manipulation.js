const content = document.getElementById('content-card');
const btn = document.getElementById('add_button');
const moda = document.getElementById('moda');
const btn_close_moda = document.getElementById('btn-close');


// btn.addEventListener('click',function(event){
//    moda.style.display = "block";
// });

// btn_close_moda.addEventListener('click',function(event){
//     moda.style.display = "none";
// })

btn.addEventListener('click',function(event){
   content.innerHTML += `
    <div class="card m-2" style="width: 18rem;">
        <img src="https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/Z3G6DSJ6DROXVMPUI7ZWC3OGLY.jpg" class="card-img-top" alt="metal_gear_hd_collection">
        <div class="card-body">
            <h5 class="card-title">Metal Gear Solid HD Collection</h5>
            <p class="card-text">Konami / Kojima Productions</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
   `;
})