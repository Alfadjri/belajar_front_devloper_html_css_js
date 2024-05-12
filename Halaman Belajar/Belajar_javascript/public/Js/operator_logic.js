// sekenario
// kita akan melakukan belanja dengan diskon
// var total_belanja = prompt("Total Belanja",0);
 var total_belanja = 500;
// if 
if(total_belanja == 1000){
    document.write("<h1>Selamat kamu mendapatkan hadian dari if </h1>");
}
// if else
if(total_belanja < 1000){
    document.write("<h1>Selamat kamu mendapatkan hadian dari if else </h1>");
}else{
    document.write("<h1>Selamat kamu mendapatkan hadian dari else </h1>");
}
document.write("<hr>");
document.write("<br>");
// if ternary 
let jujur = true;
jujur ? document.write("<h1>Orang ini berkata jujur</h1>") : document.write("<h1>Orang ini tidak berkata jujur");

// switch
document.write("<hr>");
document.write("<br>");

let menu = "D";
switch(menu){
    case "A":
        document.write("<h1>Ini jawaban A</h1>");
    break; // break ini untuk memberhentikan switch secara pakasa 
    case "B":
        document.write("<h1>Ini jawaban b</h1>");
    break;
    case "C":
        document.write("<h1>Ini jawaban C</h1>");
    break;
    // tujuan untuk bikin notifikasi 
    default:
        document.write("<h1>Ini jawaban default</h1>");
    break;
}
document.write("<hr>");
document.write("<br>");
//looping 
// for 
let urutan_nomer_sampai = 5;
// index++ itu sama dengan index = index + 1;
for(var index = 0 ; index <= urutan_nomer_sampai ; index++){
    document.write("<h1>Nomer urut dari : "+index+"</h1>");
}
document.write("<hr>");
document.write("<br>");
// while
while(urutan_nomer_sampai <= 10){
    document.write("<h1>Nomer urut dari : "+urutan_nomer_sampai+"</h1>");
    urutan_nomer_sampai++;
}
// do while
let urut = 10;
document.write("<hr>");
document.write("<br>");
do{
    urut++;
    document.write("<h1>Nomer urut dari : "+urut+"</h1>");
}while(urut <= 12);
