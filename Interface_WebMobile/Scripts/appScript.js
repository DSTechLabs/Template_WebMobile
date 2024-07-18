//=========================================================
//
//     FILE : appScript.js
//
//  PROJECT : Mobile Web App Template
//
//   AUTHOR : Bill Daniels
//            Copyright 2023-2024, D+S Tech Labs, Inc.
//            MIT License
//
//=========================================================

//--- Globals ---------------------------------------------



//--- Initial JS ------------------------------------------

try
{
  // Browser stuff
  window.devicePixelRatio = 1.0;  // set pixel density to 1

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
    // Hide Splash and show app screen
    $("#dsSplash" ).hide ();
    $("#appScreen").show ();
    $("#appScreen").css  ('display', 'flex');

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
