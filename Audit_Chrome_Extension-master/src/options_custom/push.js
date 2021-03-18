// with the exception of one of Identity, Email, or FBID
// each of the following fields is optional

clevertap.onUserLogin.push({
 "Site": {
   "Name": "Karan Tiwari",            // String
   "Identity": 61026090,              // String or number
   "Email": "karan@gmail.com",         // Email address of the user
   "Phone": "+14155551234",           // Phone (with the country code)
   "Gender": "M",                     // Can be either M or F
   "DOB": new Date(),                 // Date of Birth. Date object
// optional fields. controls whether the user will be sent email, push etc.
   "MSG-email": false,                // Disable email notifications
   "MSG-push": true,                  // Enable push notifications
   "MSG-sms": true,                   // Enable sms notifications
   "MSG-whatsapp": true,              // Enable WhatsApp notifications
 }
})