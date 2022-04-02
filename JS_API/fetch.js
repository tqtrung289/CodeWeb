// API tỉnh thành
var cities = 'https://provinces.open-api.vn/api/'

// fetch(cities)
// .then(function(response) {
//     return response.json(); //Get response: JSON.parse (JSON->JS)
// })
// .then(function(callBack){
//     console.log(callBack);
// }); 


function getInfo() {
    getCitiesApi(renderCityApi)
}

getInfo()

function getCitiesApi(callBack) {
    fetch(cities)
        .then(function(response) {
            return response.json() //Get response: JSON.parse (JSON->JS)
        })
        .then(function(callBack){
            console.log(callBack);
            // document.write(callBack);
        }); 
}


function renderCityApi(cities) {
    var listCities = document.querySelector('[name="city"]')
    var html = cities.map( (cities) => {
        // return 
        //     ${cities.code} ${cities.name}
        
        html += `<li>${cities.code}: ${cities.name}</li>`;
    })
    html.join('')
    listCities.innerHTML += html
    document.getElementById('city').innerHTML = html;
}

