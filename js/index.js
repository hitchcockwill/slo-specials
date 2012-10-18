/* Author: 
  Will Hitchcock
*/
/*
jQuery(document).ready(function() {
    jQuery('#mycarousel').jcarousel({
        // Configuration goes here
    });
}); */

$(document).ready(function() {
  
  //global variables 
  DATE = new Date();
  TODAY = DATE.getDay();
});


/* ---------------------------------------------------------------------------------
------------------------------Slider for Today's Deals --------------------------------
------------------------------------------------------------------------------------------*/


    //Variables
     var tabs;
     var list = $('#todaysDeals .dealList');
     var tabWidth;
     var isAnimating;
     var nextButton = $('#rightNav');
     var prevButton = $('#leftNav');
     var isHovering = false;
     var INTERVAL_TIME = 4000;
     var slideSpeed = 400;


    // Main functions

      function initSlider() {
        setVars();
        setTimer();
        prevButton.click(function(){
            moveRight();
        });
        nextButton.click(function(){
            moveLeft();
        });
    
        list.hover(function() {
            isHovering = true;
            stopTimer();
        }, function() {
            isHovering = false;
            setTimer();
        });
      }


    //Helper functions
  
      function setVars() {
        tabs = $('#todaysDeals .dealList > li');
        tabWidth = tabs.outerWidth(true);
        
        list.css({left:"-" + tabWidth + "px"});
        isAnimating = false;
      }
  
  
      function moveLeft() {
        if(isAnimating === false && isHovering === false) {
          stopTimer();
          isAnimating = true;
          list.animate({left:"-=" + tabWidth}, slideSpeed, function(){
            isAnimating = false;
            setTimer();
            tabAppend();
          });
        }
      }
  
      function tabAppend() {
        var firstTab = list.children(':first');
        var thisHTML = firstTab.html();
        firstTab.remove();
        list.append(
          "<li class='dealTab box2'>" +
          thisHTML +
          "</li>"
          );
        list.css({left:"+=" + tabWidth});
      }
  
  
      function moveRight() {
        if(isAnimating === false && isHovering === false) {
          stopTimer();
          isAnimating = true;
          list.animate({left:"+=" + tabWidth}, slideSpeed, function(){
            isAnimating = false;
            setTimer();
            tabPrepend();
            console.log("animated")
          }); 
        } 
      }
  
      function tabPrepend() {
        var lastTab = list.children(':last');
        var thisHTML = lastTab.html();
        lastTab.remove();
        list.prepend(
          "<li class='previous dealTab box2'>" +
          thisHTML +
          "</li>"
          );
        list.css({left:"-=" + tabWidth});
      }
      
      // Timer functions
  
      function setTimer() {
          slideTimer = setTimeout(function() {
              moveLeft();
              setTimer();
          }, INTERVAL_TIME);
      }

      function stopTimer() {
          clearTimeout(slideTimer);
      }
      
      /* ---------------------------------------------------------------------------------
      ------------------------------Populate Today's Deals --------------------------------
      ------------------------------------------------------------------------------------------*/
  
      function populateDealListByDay(dayIndex) { // 0 = Monday, 1 = Tuesday, etc. | 7 = all days;
        var dealList = $(".dealList");
        var markup = " ";
        var markupConc = " ";
        var k = 1;
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

              k++;
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

               if(placesArray.length-i===1 && placesArray[i].deals.length-j===1) {
                 dealList.append(markup);
               }
            }
          }
        }
        dealListStyleFix();
        tSortIndex()
        
        initSlider();
      }
      
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
      
      function tSortIndex() {
        $(".dealList li").tsort("h3", {order: "random"});
      }





















