# Covid-19-SMS
A nodejs api to send sms msg using africatalking api for delevering information about COVID-19 virus

To start the project do ```npm run start```

It starts on `port:3000` and expects a post request with:
  ```
    "to": "list of phine numbers",
    "message": "the message to be sent"
   ```
  parameters, and the route is `/sendsms`
  