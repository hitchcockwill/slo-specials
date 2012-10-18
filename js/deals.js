$(document).ready(function(){
  $('.sparkbox-custom').sbCustomSelect();
  Path.listen();
});

// dealsTab script #1
  
  //Global Variables 
  DATE = new Date();
  TODAY = DATE.getDay();
  
  // end global variables


// -----------------------------------------------------------------------------
//----------- Page style fixes  ------------------------------------------------
//------------------------------------------------------------------------------

function dealListStyleFix() {  
  var dealTabH3 = $(".dealTab h3");
  var singleRowHeight = 80;
  var doubleRowHeight = 100;
  dealTabH3.each(function(){
    var thisH3 = $(this);
    if(thisH3.innerHeight() > singleRowHeight && thisH3.innerHeight() > doubleRowHeight ) {
      thisH3.css({"padding":"7px 0"});
    }
    else if (thisH3.innerHeight() > singleRowHeight) {
      thisH3.css({"padding":"16px 0"});
    }
  });
}

function placesListStyleFix() {
  var dealTabH3 = $(".placesTab h3");
  var singleRowHeight = 54;
  dealTabH3.each(function(){
    var thisH3 = $(this);
    if(thisH3.innerHeight() > singleRowHeight) {
      thisH3.css({"padding":"7px 0"});
    }
  });
}

function dealsByDayLinks(defineDay) { //Navigation events
  var subNavLinks = $('ul.subnav li a');
  if (defineDay) {
    subNavLinks.removeClass('active');
    subNavLinks.eq(defineDay).addClass("active");
  } 
  subNavLinks.click(function(event){
    var thisLink = $(this);
    $(".dealList").fadeOut(100).delay(100);
    subNavLinks.removeClass('active');
    thisLink.addClass("active");
  });
  
}

// -----------------------------------------------------------------------------
//----------- AJAX Functions for populating deals pages and modals -------------
//------------------------------------------------------------------------------

function populateDealListByDay(dayIndex) { // 0 = Monday, 1 = Tuesday, etc. | 7 = all days;
  dayName = "";
      if(dayIndex===0){dayName = "sunday";}       else if(dayIndex===1){dayName="monday";}
      else if(dayIndex===2){dayName="tuesday";}   else if(dayIndex===3){dayName="wednesday";}
      else if(dayIndex===4){dayName="thursday";}  else if(dayIndex===5){dayName="friday";}
      else if(dayIndex===6){dayName="saturday";}  else {dayName="all";}
  
  var dealList = $(".dealList");
  var markup = " ";
  var k=0;
  dealList.children().remove();
  for(i=0; i<placesArray.length; i++) {
    for (j=0; j<placesArray[i].deals.length; j++) {
      if (placesArray[i].deals[j].daysArray[dayIndex] === true || dayIndex == 7) {
        var thisURL     = placesArray[i].place;
        var thisName    = placesArray[i].busInfo.busName;
        var thisUnit    = placesArray[i].deals[j].unit;
        var thisDollars = placesArray[i].deals[j].dollars;
        var thisCents   = placesArray[i].deals[j].cents;
        var thisDeal    = placesArray[i].deals[j].deal;
        var thisOff     = placesArray[i].deals[j].off;
        var thisKind    = placesArray[i].deals[j].kind;
        var thisDay     = placesArray[i].deals[j].days;
        var thisHours   = placesArray[i].deals[j].hours;
        
        k++
        markup += "<li class='dealTab box2' data-id='id-"+k+"'>";
        markup +=   "<div class='dealStripe " + thisKind +"'></div>";
        markup +=   "<a href='places/" + thisURL  +".php'><div class='dealData'>";
        markup +=     "<h4 class='row'>";
        
        if (thisUnit === "%"){
          markup += "<span class='dollars'>" + thisDollars + "</span><span>%</span><span class='off'>" + thisOff + "<span></h4>";
        }
        else if (thisUnit === "for") {
          markup += "<span class='dollars'>" + thisDollars +"</span><span class='for'>for</span><span class='for2'>" + thisCents + "</span></h4>";
        }
        else {
          markup += "<span>$</span><span class='dollars'>" + thisDollars +"</span><span>" + thisCents + "</span><span class='off offFix'>" + thisOff + "</span></h4>";
        }  
             
         markup += "<h3 class='row'>" + thisDeal + "</h3>";
         markup += "<h5>" + thisName + "</h5>";
         markup += "<h6>" + thisDay +"<span>" + thisHours + "</span></h6>";
         markup += "</div></a></li>";
        
         if(placesArray.length-i===1 && placesArray[i].deals.length-j===1) {
           dealList.append(markup);
           markup=" ";
         }
      }
    }
  }
  pathMapDealsByDay();
  dealListStyleFix();
  tSortInit();
}

function populateDealListByType(dealType) { // "food" or "drink";
  var dealList = $(".dealList");
  var markup = " ";
  dealList.children().remove();
  for(i=0; i<placesArray.length; i++) {
    for (j=0; j<placesArray[i].deals.length; j++) {
      if (placesArray[i].deals[j].kind === dealType || placesArray[i].deals[j].kind === "both") {
        var thisURL     = placesArray[i].place;
        var thisName    = placesArray[i].busInfo.busName;
        var thisUnit    = placesArray[i].deals[j].unit;
        var thisDollars = placesArray[i].deals[j].dollars;
        var thisCents   = placesArray[i].deals[j].cents;
        var thisDeal    = placesArray[i].deals[j].deal;
        var thisOff     = placesArray[i].deals[j].off;
        var thisKind    = placesArray[i].deals[j].kind;
        var thisDay     = placesArray[i].deals[j].days;
        var thisHours   = placesArray[i].deals[j].hours;
        var dealToday   = 0;
            if(placesArray[i].deals[j].daysArray[TODAY] === true) {
              dealToday = 1;
            }
            
        markup += "<li class='dealTab box2' data-dealToday='" +dealToday+ "'>";
        markup +=   "<div class='dealStripe " + thisKind +"'></div>";
        markup +=   "<a href='places/" + thisURL  +".php'><div class='dealData'>";
        markup +=     "<h4 class='row'>";
        
        if (thisUnit === "%"){
          markup += "<span class='dollars'>" + thisDollars + "</span><span>%</span><span class='off'>" + thisOff + "<span></h4>";
        }
        else if (thisUnit === "for") {
          markup += "<span class='dollars'>" + thisDollars +"</span><span class='for'>for</span><span class='for2'>" + thisCents + "</span></h4>";
        }
        else {
          markup += "<span>$</span><span class='dollars'>" + thisDollars +"</span><span>" + thisCents + "</span><span class='off offFix'>" + thisOff + "</span></h4>";
        }
               
        markup += "<h3 class='row'>" + thisDeal + "</h3>";
        markup += "<h5>" + thisName + "</h5>";
        markup += "<h6>" + thisDay +"<span>" + thisHours + "</span></h6>";
        markup += "</div></a></li>";
      }
      
      if(placesArray.length-i===1 && placesArray[i].deals.length-j===1) {
        dealList.append(markup);
      }
    }
  }
  dealListStyleFix();
  tSortInit();
}

function populatePlacesList() {
  var placesList = $(".placesList");
  var markup = " ";
  var dealsToday;
  placesList.children().remove();
  for(i=0; i<placesArray.length; i++) {
    var thisName    = placesArray[i].busInfo.busName;
    var thisType1   = placesArray[i].busInfo.type1;
    var thisType2   = placesArray[i].busInfo.type2;
    var thisURL     = placesArray[i].place
    dealsToday = false;
      for(j=0; j<placesArray[i].deals.length; j++) {
        if(placesArray[i].deals[j].daysArray[TODAY] === true) {
          dealsToday = true;
        }
      }
      
    markup += "<li class='dealTab placesTab box2'><a href='"+ thisURL +".php'>";
    markup +=   "<div class='dealStripe'></div>";
    markup +=   "<div class='dealData'>";
    markup +=     "<h3 class='row'>" + thisName + "</h3>";       
    markup +=     "<h5>" + thisType1  
    if(thisType2) {
      markup += ", " + thisType2;
    }
    markup +=     "</h5>";
    if(dealsToday === true) {
      markup += "<h6>Deals Today</h6>"
    }
    else {
      markup += "<h6 class='noDeals'>No Deals Today</h6>"
    }
    markup += "</div></a></li>";
      
      if(placesArray.length-i===1) {
        placesList.append(markup);
    }
  }
  placesListStyleFix();
  tSortInit();
}

// AJAX functions for places pages

function populatePlacesPage(thisPlace) {
  var placeIndex;
  
  for(i=0; i<placesArray.length; i++) {
    if(placesArray[i].place === thisPlace) {
      placeIndex = i;
    }
  }
  
  populateDealListByPlace(thisPlace, placeIndex);
  populateTodaysDeals(thisPlace, placeIndex);
  placesInfo(thisPlace, placeIndex);
}

function populateDealListByPlace(thisPlace, placeIndex) {
  var dealList = $(".dealList");
  var markup = " ";
  dealList.children().remove();
  for (i=0; i<placesArray[placeIndex].deals.length; i++) {
      var thisURL     = placesArray[i].place;
      var thisName    = placesArray[placeIndex].busInfo.busName;
      var thisUnit    = placesArray[placeIndex].deals[i].unit;
      var thisDollars = placesArray[placeIndex].deals[i].dollars;
      var thisCents   = placesArray[placeIndex].deals[i].cents;
      var thisDeal    = placesArray[placeIndex].deals[i].deal;
      var thisOff     = placesArray[placeIndex].deals[i].off;
      var thisKind    = placesArray[placeIndex].deals[i].kind;
      var thisDay     = placesArray[placeIndex].deals[i].days;
      var thisHours   = placesArray[placeIndex].deals[i].hours;

      markup += "<li class='dealTab box2'>";
      markup +=   "<div class='dealStripe " + thisKind +"'></div>";
      markup +=   "<a href='places/" + thisURL  +".php'><div class='dealData'>";
      markup +=     "<h4 class='row'>";

      if (thisUnit === "%"){
        markup += "<span class='dollars'>" + thisDollars + "</span><span>%</span><span class='off'>" + thisOff + "<span></h4>";
      }
      else if (thisUnit === "for") {
        markup += "<span class='dollars'>" + thisDollars +"</span><span class='for'>for</span><span class='for2'>" + thisCents + "</span></h4>";
      }
      else {
        markup += "<span>$</span><span class='dollars'>" + thisDollars +"</span><span>" + thisCents + "</span><span class='off offFix'>" + thisOff + "</span></h4>";
      }

      markup += "<h3 class='row'>" + thisDeal + "</h3>";
      markup += "<h5>" + thisName + "</h5>";
      markup += "<h6>" + thisDay +"<span>" + thisHours + "</span></h6>";
      markup += "</div></a></li>";
    if(placesArray[placeIndex].deals.length-i===1) {
      dealList.append(markup);
    }
  }
  dealListStyleFix();
  tSortInit();
}

function populateTodaysDeals(thisPlace, placeIndex) { 
  var dealList = $(".placesList");
  var markup = " ";
  var dealsToday = false;
  dealList.children().remove();
  for (i=0; i<placesArray[placeIndex].deals.length; i++) {
      var thisURL     = placesArray[i].place;
      var thisUnit    = placesArray[placeIndex].deals[i].unit;
      var thisDollars = placesArray[placeIndex].deals[i].dollars;
      var thisCents   = placesArray[placeIndex].deals[i].cents;
      var thisDeal    = placesArray[placeIndex].deals[i].deal;
      var thisOff     = placesArray[placeIndex].deals[i].off;
      var thisKind    = placesArray[placeIndex].deals[i].kind;
      var thisDay     = placesArray[placeIndex].deals[i].days;
      var thisHours   = placesArray[placeIndex].deals[i].hours;
      if(placesArray[placeIndex].deals[i].daysArray[TODAY] === true) {
          dealsToday = true;
        
          markup += "<li class='dealTab placesTab box2'>";
          markup +=   "<div class='dealStripe " + thisKind +"'></div>";
          markup +=   "<div class='dealData'>";
          markup +=     "<div class='row'><h4>";

          if (thisUnit === "%"){
            markup += thisDollars + "<span>%</span><span class='off'>" + thisOff + "</h4>";
          }
          else if (thisUnit === "for") {
            markup+= thisDollars + "<span class='for'>for</span><span class='for2'>" + thisCents + "</h4>";
          }
          else {
            markup += "<span>$</span>" + thisDollars +"<span>" + thisCents + "</span><span class='off'>" + thisOff + "</span></h4>";
          }

          markup += "<h5>" + thisHours + "</h5>";
          markup += "<h5><span>" + thisDay + "</span></h5></div>";
          markup += "<h3>" + thisDeal + "</h3>";
          markup += "</div></li>";
      }
      
    if ( dealsToday ) { $("#dailyDeals .listWrap > h3").remove(); }
    
    if (placesArray[placeIndex].deals.length-i===1) { dealList.append(markup); } 
    
  }
  //Style Fix for places Today's deals tabs 
  
  var targetBox = $(".placesList li h3");
  var singleHeight = 20;
  var doubleHeight = 40;
  targetBox.each(function(){
    var thisH3 = $(this);
    if(thisH3.height() > singleHeight && thisH3.height() > doubleHeight ) {
      thisH3.css({"padding-top" : "6px", "font-size": "16px", "line-height": "16px"});
    }
    else if ( thisH3.height() > singleHeight ) {
      thisH3.css({"padding-top" : "4px"});
    }
  }); 
  
  tSortInit();
  $(".dealList li").tsort("h3");
}

// function to build places pages
function placesInfo(thisPlace, placeIndex) {
  var busName     = placesArray[placeIndex].busInfo.busName;
  var busType1    = placesArray[placeIndex].busInfo.type1;
  var busType2    = placesArray[placeIndex].busInfo.type2;
  var busHours    = placesArray[placeIndex].busInfo.hours;
  var busAddress  = placesArray[placeIndex].busInfo.address;
  var busPhone    = placesArray[placeIndex].busInfo.phone;
  var busSite     = placesArray[placeIndex].busInfo.website;
  var busAgeLimit = placesArray[placeIndex].busInfo.ageLimit;
  var busDetails  = placesArray[placeIndex].busInfo.additionalDetails;
  var busLogo     = placesArray[placeIndex].busInfo.logo;
  
  
  var header = $(".buslogo");
  if (busLogo) {
    header.css({
      "background-image" : "url("+ busLogo  +")",
      "height" : placesArray[placeIndex].busInfo.logoHeight,
      "width" : placesArray[placeIndex].busInfo.logoWidth
    }).html("<h1 class='visuallyhidden'>" +  busName  + "</h1>");
  }
  else {
    header.html("<h1>" +  busName  + "</h1>");
  }
  
  var list = $("#busInfo ul");
  var markup  =   "<li>Type: <span>" + ((busType2) ? busType1+", " + busType2 : busType1) + "</span></li>";
  markup      +=  (busHours) ? "<li>Hours: <span>" + busHours + "</span></li>" : " ";
  markup      +=  (busAddress) ? "<li>Address: <span>" + busAddress + "</span></li>" : " ";
  markup      +=  (busPhone) ? "<li>Phone: <span>" + busPhone + "</span></li>" : " ";
  markup      +=  (busSite) ? "<li>Website: <span>" + busSite + "</span></li>" : " ";
  markup      +=  (busDetails) ? "<li>Info: <span>" + busDetails + "</span></li>" : " ";
  
  list.children().remove();
  list.html(markup);
  
  $("#dailyDeals h2 span").html("at " + busName);
  $(".places .dealsPages > h2").html(busName);
}


// end functions for places pages

// end AJAX functions

// ------------------------------------------------------------------------------
//------------------------Tsort settings ||| Sort all the deals!!! ---------------
//------------------------------------------------------------------------------

function tSortInit(){
  
  //variables
  var dealListItems = $(".listWrap ul li");
  var dealList = $(".listWrap ul");
  var orderAsc = "asc";
  
  // onLoad events
  var sorterTitle = $(".sort ul li.selected").attr("title");
  var filterTitle = $(".filter ul li.selected").attr("title");
  tSortChecks(sorterTitle, orderAsc);
  filterHandler(filterTitle);
  
  // sort events
  $('.sort li a').live("click", function(event){
    event.preventDefault();
    var thisTitle = $(this).parent().attr("title");
    orderAsc = "asc";
    
    tSortChecks(thisTitle, orderAsc);
  });
  
  $('.filter li a').live("click", function(event) {
    event.preventDefault();
    var thisTitle = $(this).parent().attr("title");
    
    filterHandler(thisTitle);
  });
  
  $('#sorterWrap h3 a').click(function(event){
    event.preventDefault();
    var thisTitle = $('form.sort li.selected').attr('title');
    
    if(orderAsc === "asc") {
      orderAsc = "desc";
    }
    else {
      orderAsc = "asc";
    }
    
    tSortChecks(thisTitle, orderAsc);
  });
  
  // end events
  
  // sort helper functions
  
  function tSortChecks(thisTitle, inputOrder) {
    dealListItems.parent().fadeOut(150, function() {
      
    if(thisTitle === "price") {
      dealListItems.tsort("h4 span.dollars", {order:inputOrder});
    }
    else if (thisTitle === "restaurant" || thisTitle === "category") { 
      dealListItems.tsort("h5", {order:inputOrder});
    }
    else if (thisTitle === "type") { // food or drink
      if (orderAsc === "desc") {
        dealListItems.tsort("div.drink", {order:inputOrder});
      }
      else {
        dealListItems.tsort("div.food", {order:inputOrder});
      }
    }
    else {
      dealListItems.tsort("h3", {order:inputOrder});
    }
    dealListItems.parent().fadeIn(400);
    });
    
  }
  
  function filterHandler(thisTitle) {
    if(thisTitle === "foodDeals") {
      for(i=0; i<dealListItems.length; i++) {
        if(dealListItems.eq(i).children(":first").hasClass("drink") === true) {
          dealListItems.css({display: "block"});
          dealListItems.eq(i).fadeOut(200);
        }
      }
    }
    else if(thisTitle === "drinkDeals") {
      for(i=0; i<dealListItems.length; i++) {
        if(dealListItems.eq(i).children(":first").hasClass("food") === true) {
          dealListItems.css({display: "block"});
          dealListItems.eq(i).fadeOut(200);
        }
      }
    }
    else if (thisTitle === "today") {
      for(i=0; i<dealListItems.length; i++) {
        if(dealListItems.eq(i).attr("data-dealToday") === "0") {
          dealListItems.css({display: "block"});
          dealListItems.eq(i).fadeOut(200); 
        }
      }
    }
    else if (thisTitle === "placeToday") {
      for(i=0; i<dealListItems.length; i++) {
        if(dealListItems.eq(i).children().children(".dealData").children("h6").hasClass("noDeals") === true) {
          dealListItems.css({display: "block"});
          dealListItems.eq(i).fadeOut(200); 
        }
      }
    }
    else {
      dealListItems.css({display: "block"});
    }
  }
  
  
  //end helper functions
  
} // end tSort ---------------------------------------------------------------
  // -------------------------------------------------------------------------
  
// ------------------------------------------------------------------------------
//----------------------- Path.JS settings ||| #! URL definitions ---------------
//------------------------------------------------------------------------------

function pathMapDealsByDay() {
  Path.map("#!/sunday" ).to(function() {
    populateDealListByDay(0);
    dealsByDayLinks(0);
  });

  Path.map("#!/monday" ).to(function() {
    populateDealListByDay(1);
    dealsByDayLinks(1);
  });

  Path.map("#!/tuesday" ).to(function() {
    populateDealListByDay(2);
    dealsByDayLinks(2);
  });

  Path.map("#!/wednesday" ).to(function() {
    populateDealListByDay(3);
    dealsByDayLinks(3);
  });

  Path.map("#!/thursday" ).to(function() {
    populateDealListByDay(4);
    dealsByDayLinks(4);
  });

  Path.map("#!/friday" ).to(function() {
    populateDealListByDay(5);
    dealsByDayLinks(5);
  });

  Path.map("#!/saturday" ).to(function() {
    populateDealListByDay(6);
    dealsByDayLinks(6);
  });

  Path.map("#!/all-week" ).to(function() {
    populateDealListByDay(7);
    dealsByDayLinks(7);
  });
}


Path.map("#!/all-food" ).to(function() {
  populateDealListByType("food");
  $(".filter ul li.all").trigger("click");
});

Path.map("#!/all-drink" ).to(function() {
  populateDealListByType("drink");
  $(".filter ul li.all").trigger("click");
});


// end Path.js ---------------------------------------------------------------
// -------------------------------------------------------------------------

