$(document).ready(function(){
   fillCountryList(); 
    
   $("input").keyup(function(e){
       console.log("keydown");
                filter($("input").val());
   });
});

var countries = [  
                    ["Spain" , "es"],
                    ["France" , "fr"],
                    ["Italy" , "it"],
                    ["Germany","de"],
                    ["Russia","ru"],
                    ["Ukraine","ua"],
                    ["Finland","fi"],
                    ["Sweden","se"],
                    ["Norway","no"],
                    ["Denmark","dk"],
                    ["Latvia","lv"],
                    ["Lithuania","lt"],
                    ["Belarus","by"],
                    ["Moldova","md"],
                    ["Poland","pl"],
                    ["Czech","cz"],
                    ["Slovakia","sk"],
                    ["Hungary","hu"],
                    ["Austria","at"],
                    ["Switzerland","ch"],
                    ["Ireland","ie"],
                    ["Holland","nl"],
                    ["Belgium","be"],
                    ["Luxembourg","lu"],
                    ["Romania","ro"],
                    ["Bulgaria","bg"],
                    ["Macedonia","mk"],
                    ["Albania","al"],
                    ["Greece","gr"],
                    ["Slovenia","si"],
                    ["Croatia","hr"],
                    ["Bosnia","ba"],
                    ["Turkey","tr"],
                    ["UnitedKingdom" , "gb"],
                    ["Portugal","pt"],
                    ["Andorra","ad"],
                    ["Serbia","rs"]
];

var img_root="https://raw.githubusercontent.com/Leonardo-Ciocan/Leonardo-Ciocan.github.io/master/";

function fillCountryList(){
       for(var i = 0; i < countries.length;i++){
               $("#countryHolder").append(make_item(countries[i]));
       }
}

function make_item(country){
    var item = $('<div />', {
        "class": 'item',
        html: "<img class='icon' src='"+img_root+"images/" + country[0].toLocaleLowerCase()+".png'/>"+"<h2>"+country[0]+"<h2>",
        click: function(e){
            e.preventDefault();
            alert("test")
        }});
    jQuery.data(item , "name" , country[0]);
    return item;
}

function filter(name){
    
    var items = $("#countryHolder").children();
    
    for(var i = 0; i < items.length;i++){
        console.log(name +" , " + countries[i][0]);
        items.eq(i).css("height" , countries[i][0].toLowerCase().indexOf(name.toLowerCase()) != -1 ? "100px" : "0px");
        items.eq(i).css("padding" , countries[i][0].toLowerCase().indexOf(name.toLowerCase()) != -1  ? "10px" : "0px");
    }
}