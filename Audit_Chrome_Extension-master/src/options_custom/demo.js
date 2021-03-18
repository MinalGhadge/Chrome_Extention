clevertap.onUserLogin.push({
 "Site": {
   "Name": "Raj Sharma", // String
   "Identity": 690979590,  // String or number
   "Email": "r@gmail.com", // Email address of the user
   "Phone": "+919856979143",  // Phone (with the country code)
   "Gender": "M", // Can be either M or F
   "DOB": new Date(), // Date of Birth. Date object

// optional fields. controls whether the user will be sent email, push etc.
   "MSG-email": false, // Disable email notifications
   "MSG-push": true,   // Enable push notifications
   "MSG-sms": true,    // Enable sms notifications
   "MSG-whatsapp": true, // Enable WhatsApp notifications
 }
});
