// Test API tỉnh thành, quận huyện Việt Nam
var citys = 'https://provinces.open-api.vn/api/'
var districts = 'https://provinces.open-api.vn/api/d/'

function startProvince() {
    getCitysApi(renderCityApi)
    getDistricts(renderDistrictsApi)
}

startProvince()

function getCitysApi(callBack) {
    fetch(citys)
        .then(function(response) {
            return response.json()
        })
        .then(callBack)
}

function getDistricts(callBack) {
    fetch(districts)
        .then(function(response) {
            return response.json()
        })
        .then(callBack)
}

function renderCityApi(citys) {
    var listCities = document.querySelector('[name="city"]')
    var opt = '<option selected="true" disabled="true" >Tỉnh thành...</option>'
    var htmls = citys.map((citys) => {
        return `
            <option value="${citys.code}">${citys.name}</option>
        `
    })
    htmls.join('')
    opt += htmls
    listCities.innerHTML = opt
}

function renderDistrictsApi(districts) {
    var onChange = document.querySelector('[name="city"]');
    onChange.addEventListener('change', function(e) {
        var listDistricts = document.querySelector('[name="district"]')
        var result = districts.filter((districts) => {
            return districts.province_code == e.target.value
        })
        var htmls = result.map((districts) => {
            return `
                <option>${districts.name}</option>
            `
        })
        listDistricts.innerHTML = htmls.join('')
    })
}