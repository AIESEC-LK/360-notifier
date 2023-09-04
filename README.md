# 360-notifier

# Google Chat Message Sender using Google Apps Script

This Google Apps Script allows you to send messages to a Google Chat space when new data is added to a Google Sheets document. This README provides instructions on how to set up and use this script.

## Prerequisites

Before you can use this script, you'll need the following:

1. A Google account.
2. Access to Google Sheets where you want to trigger message sending.
3. A Google Chat space where you want to send messages.
4. Familiarity with Google Apps Script.

## Setup

Follow these step-by-step instructions to set up and use the script:

1. **Create a Google Apps Script Project:**

   - Open your Google Sheets document.
   - Click on `Extensions` > `Apps Script` to open the script editor.
   - Delete any existing code in the script editor.

2. **Copy and Paste the Provided Code:**

   - Copy the JavaScript code provided in the `sendChatMessage()` function from your Google Apps Script file.

3. **Configure Webhook URL:**

   - Replace `webhookUrl` with your Google Chat webhook URL. You can obtain this URL by following Google's official documentation on how to create a webhook in Google Chat.

4. **Configure Sheet Name:**

   - Replace `sheetName` with the name of the sheet tab where your form responses are recorded.

5. **Save the Script:**

   - Click the floppy disk icon or press `Ctrl + S` to save the script.

6. **Set Up Trigger:**

   - Click on the clock icon on the left sidebar to open the "Triggers" page.
   - Click on the "+ Add Trigger" button.
   - Choose the function `sendChatMessage`.
   - Choose deployment settings (e.g., run as yourself).
   - Choose the event source (e.g., "From spreadsheet," "On form submit").
   - Save the trigger.

7. **Test the Script:**

   - Add a new row of data to your Google Sheets document in the specified sheet.
   - Wait for the trigger to execute (this may take a few moments).
   - Check your Google Chat space for the message.

8. **Monitor Logs (Optional):**

   - You can monitor script execution by going to `View` > `Logs` in the script editor.

## Usage

Now that you have set up the script and tested it, new Google Sheets rows added to the specified sheet will automatically trigger messages to your Google Chat space with the provided data.

You can customize the message format by modifying the `message` object in the code.

## Troubleshooting

- If the script doesn't work as expected, review the logs in the script editor for error messages.
- Make sure that your Google Chat webhook URL is correctly configured.
- Ensure that the trigger is set up correctly and has the necessary permissions.

## Credits

This script was created using Google Apps Script. Credits to the original author.


