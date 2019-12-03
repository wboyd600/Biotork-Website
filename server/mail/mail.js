const mailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const getEmailData = (firstName,lastName,email,subject,message) =>{
    let data = null;
            data = {
                from: `${firstName} ${lastName} <${email}>`,
                to: "wboyd600@ufl.edu",
                subject: `${subject}`,
                html: `<!DOCTYPE html>
                <html style="margin: 0; padding: 0;">
                
                    <head>
                        <title>Sent from Bio-Tork Contact Us</title>
                    </head>
                
                        <body style="margin: 0; padding: 0;">
                           <br />
                           <br />
                           <div>${message}</div>
                           <br />
                           <br />
                        </body>
                
                  </html>
                 `
            }
    return data;
}
const mailgunAuth = {
    auth: {
        api_key: require("../config/config").auth.api_key,
        domain: require("../config/config").auth.domain
      } 
  } 
const sendEmail = (firstName,lastName,email,subject,message) => {
    const smtpTransport = mailer.createTransport(mg(mailgunAuth));
    const mail = getEmailData(firstName,lastName,email,subject,message)
    smtpTransport.sendMail(mail,function(error,response){
        if(error){
            console.log(error)
        }else{
            console.log("Email sent successfully")
        }
        smtpTransport.close();
    })
}

module.exports = {sendEmail}