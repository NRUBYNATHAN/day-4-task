// compare the JSON same properties without order;
var a =
    {"name":"john",
    "age":"21"

}
var b ={
    "age":"21",
    "name":"john"
}
JSON.stringify(a)===JSON.stringify(b);

//display all country flags;
var request = new XMLHttpRequest;

request.open("GET","https://restcountries.com/v3.1/all",true);

request.send();

request.onload = function(){

var data  =request.response;
var result =JSON.parse(data);

for(var country of result){
 console.log(country.flag)
}
}

//print countries name region ,subregion,population;
var request = new XMLHttpRequest;

request.open("GET","https://restcountries.com/v3.1/all",true);

request.send();

request.onload = function(){

    var data  = request.response;

    var result = JSON.parse(data);

 
    for(var ans of result){
        console.log(ans.name.common,ans.region,ans.subregion,ans.population)
    }


}