var auto = [
    ['ZBG 123', 98450, 3645],
    ['ABC 345', 1500, 2000],
    ['LRS 222', 49506, 3250],
    ['LRS 222',  985622,  7551]
];

var headerAuto = ['Valstybiniai numeriai', 'Navažiuotas atstumas, km', 'Sugaištas laikas, h', 'Vidutinis greitis, km/h'];

//Kvieciame funkcija kuri atspausdins lentele
createTable(auto, headerAuto);

//Lentelės sukūrimas
function createTable(auto, headerAuto) {
    var text = '';

    text += '<table border="2">';
        text += '<thead>';
            text += '<tr>';
                for(var i =0; i< headerAuto.length; i++){
                    text += '<td>' + headerAuto[i] + '</td>';
                }
            text += '</tr>';
        text += '</thead>';
        text += '<tbody>';
            for(var i=0; i < auto.length; i++){
                text += '<tr>';
                    var atstumas, laikas;
                    for(var j = 0; j < auto[i].length; j++){
                        text += '<td>';
                        switch (j){
                            case 1:
                                atstumas = auto[i][j] / 1000;
                                text += atstumas.toFixed(2);
                                break;
                            case 2:
                                laikas = auto[i][j] / 3600;
                                text += laikas.toFixed(2);
                                break;
                            default:
                                text += auto[i][j];
                        }
                        text += '</td>';
                    }
                    text += '<td>' + (atstumas / laikas).toFixed(2) + '</td>';
                text += '</tr>';
            }
        text += '</tbody>';
    text += '</table>';

    document.querySelector('.table').innerHTML = text;
}