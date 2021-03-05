const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const {OAuth2} = google.auth;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'

const {
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS
} = process.env

const oauth2Client = new OAuth2(
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    OAUTH_PLAYGROUND
)

// send mail
const sendEmail = (to, url, txt) => {
    oauth2Client.setCredentials({
        refresh_token: MAILING_SERVICE_REFRESH_TOKEN
    })

    const accessToken = oauth2Client.getAccessToken()
    const smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: SENDER_EMAIL_ADDRESS,
            clientId: MAILING_SERVICE_CLIENT_ID,
            clientSecret: MAILING_SERVICE_CLIENT_SECRET,
            refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
            accessToken
        }
    })

    const mailOptions = {
        from: SENDER_EMAIL_ADDRESS,
        to: to,
        subject: "Confirm your email address",
        html: `
            <div style="background:#172B4D;max-width: 700px; margin:auto; border: 5px solid #11cdef; padding: 50px 20px; font-size: 110%;">
            <h2 style="text-align: center; color:#fff">Welcome to CPaaSelector</h2>
            <p style="text-align: center; color:#fff">Hey, confirm your email address to get started with CPaaS Decision Engine!
            </p>
            
            <a href=${url} style="display: inline-flex;
            align-items: center;
            padding: 1.0em 1.2em;
            margin: 0 auto;   
            margin-left:14%; 
            box-sizing: border-box;
            text-decoration: none;
            font-family: 'Roboto',sans-serif;
            font-size: 14px;   
            font-weight: 300;
            color:#FFFFFF;
            background-color: #5e72e4;
            text-align: center;
            transition: all 0.2s;
            cursor: pointer;
            border: none;
            border-radius: 8px;
            -webkit-transition: all 0.4s;
            -moz-transition: all 0.4s;
            transition: all 0.4s;">${txt}</a>
            </div>
        `
    }

    smtpTransport.sendMail(mailOptions, (err, infor) => {
        if(err) return err;
        return infor
    })
}

module.exports = sendEmail