//=========================================================
//
//     FILE : appScript.js
//
//  PROJECT : Responsive Mobile Web App Template
//
//   AUTHOR : Bill Daniels (bill@dstechlabs.com)
//            See LICENSE.md
//
//=========================================================

//--- Globals ---------------------------------------------





//--- Initial JS ------------------------------------------

try
{
  // Browser stuff
  window.devicePixelRatio = 1.0;  // set pixel density to 1

  // Splash is showing, so hide appBar and navBar
  $("#appBar").hide ();
  $("#navBar").hide ();

  // Load all pages
  LoadContentPages ();
}
catch (ex)
{
  ShowException (ex);
}

//--- Startup ---------------------------------------------

function Startup ()
{
  try
  {
    // Show appBar and navBar
    $("#appBar").show ();
    $("#navBar").show ();

    // Click on first navButton
    // $(".navButton").first().mousedown();  // Not working for pointerdown; no pointerdown() method in jQuery ???
    firstNavButton = document.getElementsByClassName ('navButton')[0];
    ShowPage ('home', firstNavButton);
  }
  catch (ex)
  {
    ShowException (ex);
  }
}
