// Objeto servindo como mapa para localizar os números em romano
const map = {
    1 : 
    [
        '',     //0 | 0
        'I',    //1 | 1
        'II',   //2 | 2
        'III',  //3 | 3
        'IV',   //4 | 4
        'V',    //5 | 5
        'VI',   //6 | 6
        'VII',  //7 | 7
        'VIII', //8 | 8
        'IX',   //9 | 9
    ],
    2 : 
    [
        '',     //0 |
        'X',    //1 | 10
        'XX',   //2 | 20
        'XXX',  //3 | 30
        'XL',   //4 | 40
        'L',    //5 | 50
        'LX',   //6 | 60
        'LXX',  //7 | 70
        'LXXX', //8 | 80
        'XC',   //9 | 90
    ],
    3 : 
    [
        '',     //0 |
        'C',    //1 | 100
        'CC',   //2 | 200
        'CCC',  //3 | 300				
        'CD',   //4 | 400
        'D',    //5 | 500
        'DC',   //6 | 600
        'DCC',  //7 | 700
        'DCCC', //8 | 800
        'CM',   //9 | 900
    ],
    4 : 
    [
        '',    //0 | 
        'M',   //1 | 1000
        'MM',  //2 | 2000
        'MMM', //3 | 3000
    ]
};

function numberToRoman (input) {
    // Looping para fazer a limpeza de caracteres que não sejam os aceitos pelo software
    var context = '';
    for (var i = 0; i <= input.length; i++)
        context += input.charAt(i).replace(/[^0-9]/, '');

    // Verifica se o número informado está dentro do limite máximo
    if (parseInt(context) > 3999)
        return "Limite maximo permitido é de '3999'";
    
    // Looping para fazer a busca pelo número correspondente em romano 
    var result = '';    
    for (var i = context.length; i >= 1 ;i--) {
        var j = context.length - i;
        var auxVar = parseInt(context.charAt(j));
        /* 
            A busca é feita para cada caractere informado, sendo usada a quantidade de caracteres 
            e o número informado para isso.
            Exemplo: 
            i  |  auxVar
            2  |  5
            1  |  5

            Ele pega o primeiro caractere e busca o valor no objeto map:
                1º Vai pegar o objeto 2 (Dezena) e retornar o item 5 ('L')
                2º Vai pegar o objeto 1 (Unidade) e retornar o item 5 ('V');
                resultado: 'LV'
        */
        result += map[i][auxVar];
    }
    return result;
};

module.exports.numberToRoman = numberToRoman;