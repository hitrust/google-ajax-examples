var ge;

/* If connecting to a private Google Earth Enterprise virtual server
 * or an Earth Builder layer that requires authentication,
 * you will need to specify your Google Maps Premier client id, as
 * documented at
 * http://code.google.com/apis/maps/documentation/premier/guide.html#EarthAPI
*/

// Set optional premier parameters
// var params = {"other_params":"client=gme-yourKey&sensor=false"};
var params = {};

google.load("earth", "1", params);

function init() {
  google.earth.createInstance('map3d', initCB, failureCB);
}

function initCB(instance) {
  ge = instance;
  ge.getWindow().setVisibility(true);

  // Call the function which loads a secondary globe from GEE or Earth Builder.
  // so users automatically see data from both servers.
  addSideDatabase();

  // Add controls for the window
  ge.getOptions().setStatusBarVisibility(true);
  ge.getNavigationControl().setVisibility(ge.VISIBILITY_AUTO);

  // Update the view in Google Earth
  var lookAt = ge.createLookAt('');
  lookAt.setLatitude(29.0);
  lookAt.setLongitude(-95.0);
  lookAt.setRange(1200000); //default is 0.0
  ge.getView().setAbstractView(lookAt);
  }

  function failureCB(errorCode) {
    alert(errorCode);
  }

  function sideDatabaseSuccess(db) {
    sideDatabase = db;
    db.setDrawOrder(2);
  }

  function sideDatabaseFail() {
      alert('ALERT! Failed to add side database connection!');
  }

  /** Add the URL for the globe served by Earth Enterprise or Earth Builder.
  *     This function operates similarly to the File => Add Database feature
  *     in Google Earth EC.
  */
  function addSideDatabase() {
    window.google.earth.addSideDatabase(
      ge, "https://earthbuilder.google.com/10446176163891957399-13516001307527776624-4/kh/",
      sideDatabaseSuccess,
      sideDatabaseFail,
      {
        userName: '',
        password: '' 
      }
    );
  }

