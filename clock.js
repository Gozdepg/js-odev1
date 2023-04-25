let fullName = prompt("lütfen adınızı giriniz")
let greeting = document.querySelector("#myName")
greeting.innerHTML = `${greeting.innerHTML} ${fullName}`

function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}


setInterval(myTimer, 1000);

function myTimer() {
    const d = new Date();

    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());


    let time = h + ":" + m + ":" + s;



    const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = weekday[d.getUTCDay()];

    document.querySelector("#myClock").innerHTML = `${time} ${day}`;

}
