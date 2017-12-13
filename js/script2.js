var auto = [
    ['ZBG 123', 98450, 3645],
    ['ABC 345', 1500, 2000],
    ['LRS 222', 49506, 3250],
    ['LRS 222',  985622,  7551]
];

var headerAuto = ['Valstybiniai numeriai', 'Navažiuotas atstumas, km', 'Sugaištas laikas, h', 'Vidutinis greiti, km/h'];
//Kvieciame funkcija, kuri sukuria lentele
createTable(auto, headerAuto);

//Funkcija skirta lenteles sukurimui
function createTable(auto, headerAuto) {

    //Gaunam hmtl kur bus talpinama lentele
    var htmlTable = document.querySelector('.table');

    //Susikuriame lente
    var table = document.createElement('table');

    //=====================Table head START==============

    //Susikuriame lenteles head dali
    var tableHead = document.createElement('thead');

    //Susikuriame lenteles head dalies eilute
    var tableHeadRow = document.createElement('tr');

    //Sukame cikla per lenteles head dali
    for(var i = 0; i < headerAuto.length; i++){
        //Sukuriame lenteles head dalies celes
        var tableHeadCell = document.createElement('td');
        //Sukuriame celes teksta
        var tableHeadCellName = document.createTextNode(headerAuto[i]);

        //Pridedame teksta i cele
        tableHeadCell.appendChild(tableHeadCellName);

        //Prideda cele i header eilute
        tableHeadRow.appendChild(tableHeadCell);
    }

    //I lenteles head dali idedame eilute
    tableHead.appendChild(tableHeadRow);

    //I lentele pridedame jos head dali
    table.appendChild(tableHead);
//=====================Table head END==============

    //=====================Table body START==============

    //Sukuriame lenteles body
    var tableBody = document.createElement('tbody');

    for(var i = 0; i < auto.length; i++){
        //Sukuriame lenteles body eilute
        var tableBodyRow = document.createElement('tr');

        var atstumas, laikas, greitis;

        for(var j = 0; j < auto[i].length; j++){

            //Sukuriame lenteles eilutes cele
            var tableBodyRowCell = document.createElement('td');

            var cellValue;

            switch (j){
                case 1:
                    atstumas = (auto[i][j] / 1000).toFixed(2);
                    cellValue = atstumas;
                    break;
                case 2:
                    laikas = (auto[i][j] / 3600).toFixed(2);
                    cellValue = laikas;
                    break;
                default:
                    cellValue = auto[i][j];
            }

            //Pridedame teksta i eilutes cele
            var tableBodyRowCellValue = document.createTextNode(cellValue);

            //Pridedame celes reiksme
            tableBodyRowCell.appendChild(tableBodyRowCellValue);

            //Pridedame cele i eilute
            tableBodyRow.appendChild(tableBodyRowCell);
        }

        //Apskaiciuojame vidutini greiti, 2 skaiciai po kablelio
        greitis = (atstumas/laikas).toFixed(2);

        //Sukuriame celes reiksme
        var tableBodyCellValue = document.createTextNode(greitis);

        //Sukuriame leneteles body cele
        var tableBodyCell = document.createElement('td');

        //Pridedama greiti i lenteles body cele
        tableBodyCell.appendChild(tableBodyCellValue);

        //I eilute pridedame cele
        tableBodyRow.appendChild(tableBodyCell);

        //Pridedame eilute i lenteles body
        tableBody.appendChild(tableBodyRow);
    }

    //Pridedame i lentele jos body
    table.appendChild(tableBody);

    //=====================Table body END==============

    //Uzdedame lentelei borderi
    table.setAttribute('border', 2);

    //atvaizduojame lentele html'e
    htmlTable.appendChild(table);
}