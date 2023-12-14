window.addEventListener('load', getDate);
window.addEventListener('load', getCalendar);

const now = new Date();

function getDate(){
    const arrBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let tahun = now.getFullYear();
    let bulan = arrBulan[now.getMonth()];
    document.getElementById("bulan-tahun").innerHTML = bulan + " " + tahun;
}

function getCalendar(){
    const tanggal = document.getElementById("kolom-tanggal");

    let firstDayNumber = firstDayInMonth();
    let daysInMonth = findDaysInMonth();
    let daysInMonthCounter = 1;
    let date = now.getDate();
    let textDiv;
    let blankTextDiv = document.createTextNode(" ");
    let totalBox;

    if(firstDayNumber == 6 && daysInMonth >= 30){
        totalBox = 41;
    } else if(firstDayNumber == 5 && daysInMonth == 31) {
        totalBox = 41;
    } else if(firstDayNumber == 0 && daysInMonth == 28) {
        totalBox = 27;
    } else {
        totalBox = 34;
    }

    for(let i = 0; i <= totalBox; i++){
        const createDiv = document.createElement("div");
        createDiv.className = "column";
        if(i > firstDayNumber - 1 && i < daysInMonth + firstDayNumber){
            textDiv = document.createTextNode(daysInMonthCounter);
            createDiv.appendChild(textDiv);
            tanggal.appendChild(createDiv);
            if(daysInMonthCounter == date)
                createDiv.classList.add("today");
            daysInMonthCounter++;
        }
        else{
            createDiv.appendChild(blankTextDiv);
            tanggal.appendChild(createDiv);
        }
    }
}

function firstDayInMonth(){

    let firstDay = String(new Date(now.getFullYear(), now.getMonth(), 1));

    firstDay = firstDay.substring(0, 3);

    if(firstDay == "Mon")
        return 0;
    else if(firstDay == "Tue")
        return 1;
    else if(firstDay == "Wed")
        return 2;
    else if(firstDay == "Thu")
        return 3;
    else if(firstDay == "Fri")
        return 4;
    else if(firstDay == "Sat")
        return 5;
    else if(firstDay == "Sun")
        return 6;
}

function findDaysInMonth(){
    let year = now.getFullYear();
    let month = now.getMonth();
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    return daysInMonth;
}