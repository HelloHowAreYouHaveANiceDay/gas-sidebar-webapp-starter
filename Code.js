// Web App
// doGet() is reserved as a response to GET requests
// https://developers.google.com/apps-script/guides/web

function doGet() {
  //template is used to share dependencies between webapp and sidebar
  return HtmlService.createTemplateFromFile('Index.html')
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}


// Sidebar
// onOpen() is a reserved trigger 
// here SpreadsheetApp is used
// but other Gsuite apps that allow sidebars
// can be accessed in a similar fashion

function onOpen() {
  SpreadsheetApp.getUi()
    // will create a menu level button, once the script loads 
    // it will appear to the right of other menu items
    .createMenu('GAS menu')
    // the menu can be leveraged to run any function. 
    // here we run showSidebar below 
    .addItem('show sidebar', 'showSidebar')
    .addToUi();
}


// showSidebar function works similar to what is happening in doGet()
function showSidebar() {
  var html = HtmlService.createTemplateFromFile('Sidebar.html')
    .evaluate()
    .setTitle('sidebar')
    // sidebars have a maxwidth of 400
    .setWidth(400)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);

  SpreadsheetApp.getUi()
    .showSidebar(html);
}
