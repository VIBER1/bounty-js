# bounty-js
     HTML Structure:
        The HTML file defines a basic structure for the web page with a form for user input and elements to display 
          account information and messages.

    CSS Styles:
        The CSS styles define the appearance of the web page, such as fonts, colors, and layout.

    BankAccount Class:
        You've defined a BankAccount class that represents a bank account.
        The constructor initializes the accountHolder, accountType, and balance properties.

    Getting User Input:
        You retrieve user input from the HTML form elements using getElementById and store the values in the 
          accountHolder and accountType variables. This is done when the page loads.

    Creating the Account Instance:
        After retrieving the user input, you create an instance of the BankAccount class called account using the 
        values of accountHolder and accountType. This represents the bank account associated with the user input.

    performTransaction Function:
        This function is triggered when the user clicks the "Submit" button.
        It retrieves the selected transaction type and amount from the form elements.
        Inside a try-catch block, it uses a switch statement to perform different actions based on the selected 
         transaction type:
            For "deposit," it calls the account.deposit(amount) method to add money to the account.
            For "withdraw," it calls the account.withdraw(amount) method to subtract money from the account, with 
            error handling for insufficient funds.
            For "balance," it does nothing, as it's just checking the balance.
            If an invalid transaction type is selected, it throws an error.
        After performing the transaction or catching an error, it updates the HTML elements to display the account 
         information and any error messages.

    Error Handling (try-catch-finally):
        If any errors occur during the transaction (e.g., insufficient funds or an invalid transaction type), they 
         are caught in the catch block, and an error message is displayed in the "message" element.
        In the finally block, the "amount" input field is cleared, ensuring that the user can enter a new 
         transaction amount.

    Updating the UI:
        The code updates the HTML elements with account information:
            "account-holder" displays the account holder's name.
            "account-type" displays the account type.
            "balance" displays the current balance.
            "message" displays a success message or an error message.





          [u][url=your_link_here]GitHub Repository[/url][/u]  
          [u][url=https://viber-bankaccount-app.netlify.app]Website[/url][/u]