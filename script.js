$(document).ready(function(){
    $("#clear").click(function(){
        $("#results").empty();
    });
    $("#search").click(function(){
       var searchVal1 = $("#location").val();
       var searchVal2 = $("#food").val();
       var part1= "https://api.foursquare.com/v2/venues/search?v=20161016&near="
       var part2= "&query="
       var part3= "&intent=checkin&client_id=2WXQFD3HEVCBIYPT2JXGUU45GODUQU2PP4WMZXNTTXNO4VBX&client_secret=QEAA0PIPMCERJ4UY0BMAXUJZHSSI3PPHDEXG1U2CWUACHAYH"
       var url= part1 + searchVal1 + part2 + searchVal2 + part3;
       console.log(url);
       $.getJSON(url, function(data){
           console.log(data);
           var info= data.response.venues;
           for( var i=0; i < info.length; i++){
               var venue= info[i]
               console.log(info[i]);
               $("#results").append("<p>" + venue.name + "<br>" + "Contact: " + venue.contact.phone + "<br>" + "Address: " + venue.location.address + " " + venue.location.crossStreet + "</p>");
           }
       
       })
    })
})