var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$("#search").click(searchCountries);

function searchCountries() {
  var countryName = $('#country-name').val();
  if (!countryName) {
    countryName = 'Poland';
  }

  $.ajax({
    url: url + countryName,
    method: 'GET',
    success: showCountriesList
  })
}
