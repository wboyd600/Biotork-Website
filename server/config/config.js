//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
    db: {
      uri: 'mongodb+srv://wesley:pp@mongo-activity-io2xg.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
    }, 
    openCage: {
      key: '9aca1d8d7c6342b8a7a14090592b1b06' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
    },
    auth: {
      api_key: "23ee6f13c7b5552352251e48ac00823f-e470a504-92721efc",
      domain: "sandbox9993c24d24b24b5eb997928156b1a325.mailgun.org"
    }
  };