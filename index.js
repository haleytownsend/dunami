const API_PEOPLE_URL = 'https://swapi.co/api/people/?page=';
const API_PLANET_URL = 'https://swapi.co/api/planets/?page=';
var searchParams = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];


function callPlanet(currentName){
  var API_PLANET_URL = currentName.homeworld
  console.log(API_PLANET_URL)
  $.ajax(API_PLANET_URL, {
    data:{},
    complete: function(jqXHR, textStatus) {
      var planetData = JSON.parse(jqXHR.responseText)
      $('ul').append($('<h3 id=currentName>').text(currentName.name))
      $('ul').append($('<li class="height">').text("Height: " + currentName.height))
      $('ul').append($('<li class="gender">').text("Gender: " + currentName.gender))
      $('ul').append($('<li class="birthYear">').text("Born in the year " + currentName.birth_year))
      $('ul').append($('<li class="homePlanetName">').text("From planet " + planetData.name))
      $('ul').append($('<li class="homePlanetName">').text("   Population: " + planetData.population))
    }
  })
};


function displaySearch() {

};


$(function callAPI() {
  $.ajax(API_PEOPLE_URL + 1 , {
    data:{},
    complete: function(jqXHR, textStatus) {
      var json = JSON.parse(jqXHR.responseText)
      console.log(json)
      console.log(json.count)
      for (var i = 0; i < 87; i++) {
        var currentName = json.results[i]
        callPlanet(currentName)
      }
    }
  })
});


$('.btnClick').on("click",(function (ev) {
  ev.preventDefault();
  character = $('#characterSearch').val()
  console.log(character);
  $.ajax('https://swapi.co/api/people/?search=' + character, {
    data: {},
    complete: function(jqXHR, textStatus) {
      var json = JSON.parse(jqXHR.responseText)
      console.log(json)
    }
  })
}));
