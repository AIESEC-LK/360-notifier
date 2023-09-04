function sendChatMessage() {
  // Replace with your Google Chat webhook URL
  var webhookUrl = "https://chat.googleapis.com/v1/spaces/AAAAtY-3NYg/messages?key=YOUR_API_KEY&token=YOUR_TOKEN";

  // Replace with the desired sheet tab name
  var sheetName = "Form Responses 1";

  // Get the sheet by name
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  // Get the last added row
  var lastRow = range.getLastRow();
  var addedRow = values[lastRow - 1];

  // Customize the column indices based on your sheet's structure
  var person = addedRow[3]; // Value in column D (Person)
  var totalAmount = addedRow[4]; // Value in column E (Total Amount)
  var weeklyBudgetLink = addedRow[5]; // Value in column F (Weekly Budget Link)

  // Customize the message format as needed
  var message = {
    text: "Mr/Ms " + person + "* has made a *" + totalAmount + "* *LKR* Petty Cash Request." + "\n(Weekly Budget Link :" + weeklyBudgetLink + ")" 
  };

  // Log the data for debugging (optional)
  Logger.log("Person: " + person);
  Logger.log("Total Amount: " + totalAmount);
  Logger.log("Weekly Budget Link: " + weeklyBudgetLink);

  // Send the message to the Google Chat space
  var options = {
    method: "POST",
    contentType: "application/json",
    payload: JSON.stringify(message)
  };
  
  UrlFetchApp.fetch(webhookUrl, options);
}
