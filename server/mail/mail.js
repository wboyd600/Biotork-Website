const mailer = require("nodemailer");
const {Hello} = require("./hello_template");
const getEmailData = (firstName,lastName,email,subject,message) =>{
    let data = null;
            data = {
                from: "Wesley Boyd <wboyd600@gmail.com>",
                to: email,
                subject: `Hello ${firstName}`,
                html: Hello()
            }
    return data;
}

const sendEmail = (firstName,lastName,email,subject,message) => {
    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "",
            pass: ""
        }
    });
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