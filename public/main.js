let sdSpots = [];
$(document).ready(function(){
  $.getJSON('data.json', function(data){
    $.each(data, function(key, value){
    let sdSpots = '<tr>' + key + '<td>' + value.name + '</td><td>'
    + value.description + '</td><td>' + "<a href = 'https://www.google.com/maps?q=value.location'>Location Link</a>"
    + '</td></tr>';
    $('#topspots tbody').append(sdSpots);
    })
  })
})
