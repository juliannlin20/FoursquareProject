$(document).ready(function(){
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
           var info= data.response.venues.name
           alert(info);
           
          
    })
})