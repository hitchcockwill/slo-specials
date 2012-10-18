<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>Places: restaurants and bars | SLO Specials | San Luis Obispo, California food and drink specials</title>
  <meta name="description" content="All the best food and drink specials in San Luis Obispo, California. Deals for Cal Poly and Cuesta students and anyone else on a budget.">
  <meta name="author" content="Will Hitchcock | slospecials.com">

  <meta name="viewport" content="width=device-width,initial-scale=1">

  <!-- CSS concatenated and minified via ant build script-->
  <link rel="stylesheet" href="../css/style.css">
  <!-- end CSS-->
  <link rel="shortcut icon" href="../img/favicon.png">
  
  <!-- Google Fonts -->
  <link href='http://fonts.googleapis.com/css?family=Arvo:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
  
  <!-- Facebook open graph meta information -->
  <meta property="og:title" content="SLO Specials | All the San Luis Obispo food and drink deals that you need to know about." />
  <meta property="og:description" content="SLO Specials, your number one source for San Luis Obispo food and drink specials. Poor college student? On a budget? Pinching pennies? This is the place for you to find your next cheap meal or beverage.">
  <meta property="og:type" content="website" />
  <meta property="og:url" content="http://slospecials.com" />
  <meta property="og:image" content="http://slospecials.com/img/fbScreenShot.png" />
  <meta property="og:site_name" content="SLO Specials" />
  <meta property="fb:admins" content="544150150" />
  
  <!-- Google Analytics -->
  <script type="text/javascript">

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-27685515-1']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

  </script>

</head>

<body class="places">
  
  <!-- necessary div for Facebook like button -->
  <div id="fb-root"></div>

<div id="container">
  <div id="sitestripe"></div>
  <header class="clearfix">
    <a href="../index.html"><img src="../img/ssLogo.png" alt="S.L.O. Specials"></a>
    <h2>You are living in San Luis Obispo on a budget.<br/>Here are all the deals you should know about.</h2>
    
    <!-- Google Search Bar -->
    <div id="cse-search-form" style="width: 100%;"></div>
    <script src="//www.google.com/jsapi" type="text/javascript"></script>
    <script type="text/javascript"> 
      google.load('search', '1', {language : 'en', style : google.loader.themes.MINIMALIST});
      google.setOnLoadCallback(function() {
        var customSearchControl = new google.search.CustomSearchControl(
          '005310613111481045422:f5j8hmobvvi');

        customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
        var options = new google.search.DrawOptions();
        options.setSearchFormRoot('cse-search-form');
        customSearchControl.draw('cse', options);
      }, true);
    </script>
    
    <nav>
      <ul class="box1 mainnav">
        <li class="last"><a href="index.html" class="active">places</a></li>
        <li><a href="../drinks.html">drinks</a></li>
        <li><a href="../food.html">food</a></li>
        <li><a href="../deals-by-day.html" class="double">deals<br/>by day</a></li>
      </ul>
      <ul class="rightnav">
        <li><a href="../about.html">about</a></li>
        <li><a href="../contact.html">contact</a></li>
      </ul>
    </nav>
  </header>

    <div id="main" role="main" class="clearfix places">
      <div class="box1 left" id="busInfo">
        <div class="buslogo"></div>
        <ul>
          <li id="busType">Type: <span></span></li>
          <li id="busHours">Hours: <span></span></li>
          <li id="busAddress">Address: <span></span></li>
          <li id="busPhone">Phone: <span></span></li>
          <li id="busWebsite">Website: <span></span></li>
          <li id="busAgeLimit">Age limit: <span></span></li>
          <li id="busDetails">Other info: <span></span></li>
        </ul>
      </div>
      <div class="box1 left" id="dailyDeals">
        <h2>Today&acute;s Deals <span></span></h2>
        <div class="listWrap">
          <h3>No deals today.</h3>
          <ul class="placesList clearfix">
            
            <!-- AJAX content goes here 
              <li class="dealTab placesTab box2">
                  <div class="dealStripe"></div>
                  <div class="dealData">
                    <div class="row">
                      <h4>20<span>%</span><span class="off">off</span></h4>
                      <h5>9&ndash;close</h5>
                      <h5>tuesdays</h5>
                    </div>
                    <h3>Pitchers</h>
                  </div>
              </li>  -->
              
          </ul>
        </div>
      </div>
      <div class="clearfix"></div>
      <div class="dealsPages box1">
        <h3 class="cta1"><a href="index.html">places &gt;</a></h3>
        <h2 class="cta1">SLO Brew</h2>
        
        <div id="sorterWrap">
          <h3 class="cta2">Order<a href="">reverse</a></h3>
          <form class="filter">
            <select name="filterBy" class="sparkbox-custom">
              <option value="all" class="all" title="all"><a href="">view all deals</a></option>
              <option value="foodDeals" class="foodDeals" title="foodDeals"><a href="">view food deals</a></option>
              <option value="drinkDeals" class="drinkDeals" title="drinkDeals"><a href="">view drink deals</a></option>
            </select>
          </form>
          <h3 class="cta2">Filter</h3>
          <form class="sort">
            <select name="sortBy" class="sparkbox-custom">
              <option value="dealName" class="dealName" title="dealName"><a href="">name</a></option>
              <option value="price" class="price" title="price"><a href="">price</a></option>
              <option value="type" class="type" title="type"><a href="">type</a></option>
            </select>
          </form>
          <h3 class="cta2">Sort by</h3>
        </div>
        
        <div class="listWrap">
          <ul class="dealList clearfix">
            
            <!-- AJAX Content goes here 
            <li class="dealTab box2">
                <div class="dealStripe"></div>
                <div class="dealData">
                  <h4 class="row">20<span>%</span><span class="off">off</span></h4>
                  <h3 class="row">Pints</h3>
                  <h5>SLO Brew</h5>
                  <h6>tuesdays <span>9&ndash;close</span></h6>
                </div>
            </li>
            -->
           
          </ul>
          </div>
      </div>
    </div>
    
    <footer class="clearfix box2">
      <div id="footerwrap">
        <ul>
          <li class="first">
            <h3><a href="../food.html">Food</a></h3>
            <ul>
              <li><a href="../food.html">Today&acute;s Deals</a></li>
              <li><a href="../food.html#!/all-food">See all deals</a></li>
            </ul>
             <h3><a href="../drinks">Drinks</a></h3>
              <ul>
                <li><a href="../drinks.html">Today&acute;s Deals</a></li>
                <li><a href="../drinks.html#!/all-drink">See all deals</a></li>
              </ul>
            <h3><a href="/places/index.html">Places</a></h3>
            <ul>
              <li><a href="">All Places</a></li>
              <li><a href="">Deals Today</a></li>
            </ul>
          </li>
          <li>
            <h3><a href="../deals-by-day.html">Deals by Day</a></h3>
            <ul>
              <li><a href="../deals-by-day.html">Today&acute;s Deals</a></li>
              <li><a href="../deals-by-day.html#!/sunday">Sunday</a></li>
              <li><a href="../deals-by-day.html#!/monday">Monday</a></li>
              <li><a href="../deals-by-day.html#!/tuesday">Tuesday</a></li>
              <li><a href="../deals-by-day.html#!/wednesday">Wednesday</a></li>
              <li><a href="../deals-by-day.html#!/thursday">Thursday</a></li>
              <li><a href="../deals-by-day.html#!/friday">Friday</a></li>
              <li><a href="../deals-by-day.html#!/saturday">Saturday</a></li>
            </ul>
          </li>
        </ul>
        <div class="social">
          <h3>Share SLO Specials</h3>
          <div class="twitter clearfix">
            <h4>on Twitter</h4>
            <a href="https://twitter.com/share" class="twitter-share-button" data-count="horizontal" data-via="SLOspecials">Tweet</a><script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
          </div>
          <div class="facebook clearfix">
            <h4>on Facebook</h4>
            <div class="fb-like" data-href="http://slospecials.com/" data-send="true" data-layout="button_count" data-width="110" data-show-faces="false" data-colorscheme="dark" data-font="lucida grande"></div>
          </div>
          <h3>Follow us on Twitter</h3>
          <a href="https://twitter.com/SLOspecials" class="twitter-follow-button" data-button="grey" data-text-color="#FFFFFF" data-link-color="#00AEFF">Follow @SLOspecials</a>
          <script src="//platform.twitter.com/widgets.js" type="text/javascript"></script>
        </div>
        <div id="footerContact">
          <h2>Want to tell us about more deals?</h2>
          <h2>Like what we are doing here?</h2>
          <h2>Interested in getting ad space?</h2>
          <h2>Want to learn more?</h2>
          </h2>
          <a href="../contact.html">Get in touch>></a>
        </div>
        <div class="clearfix"></div>
        <p class="legal left">Copyright 2011 all rights reserved | slospecials.com</p>
        <p class="legal right">San Luis Obispo, Ca 93405 | slospecials@gmail.com</p>
      </div>
    </footer>

  </div> <!--! end of #container -->


  <script>window.jQuery || document.write('<script src="../js/libs/jquery-1.6.2.min.js"><\/script>')</script>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
  <script src="../js/libs/modernizr-2.0.6.min.js"></script>
  
  <!-- SparkBox custom select menus -->
  <script type="text/javascript" src="../js/mylibs/jquery.sparkbox-select.js"></script>
  <link type="text/css" href="../css/sparkbox-select.css" rel="stylesheet" />
  
  <!-- Quicksand jQuery plugin -->
  <script type="text/javascript" src="../js/mylibs/jquery.quicksand.js"></script>
  <!-- tSort jQuery sorter plugin -->
  <script type="text/javascript" src="../js/mylibs/jquery.tinysort.min.js"></script>
  <!-- path.js jQuery hashbang URL plugin -->
  <script type="text/javascript" src="../js/mylibs/path.min.js"></script>
  
  <!-- Google search bar css -->
  <link rel="stylesheet" type="text/css" href="../css/search.css">


  <!-- scripts concatenated and minified via ant build script-->
  <script defer src="../js/plugins.js"></script>
  <script defer src="../js/script.js"></script>
  
  <!-- JSON Array & other page scripts -->
  <script type="text/javascript" src="../js/placesArray.js"></script>
  <script type="text/javascript" src="../js/deals.js"></script>
  
  <script type="text/javascript">
  
    $(document).ready(function(){