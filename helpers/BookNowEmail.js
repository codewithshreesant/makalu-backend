
const nodemailer=require('nodemailer');

const SendBookNow=async (BookNowDetails)=>{
    const {tripname, Children, Adults, ArrivalDate, DepartureDate, fullname, email, contact, country, address, message}=BookNowDetails;

    const createBookTransport=nodemailer.createTransport({
        'service':'gmail',

        auth:{
            user:'shreesantadhikari4590@gmail.com',
            pass:'fpjjtxgypiovsied'
        }
    })

    const authDetails={
        from:'shreesantadhikari4590@gmail.com',
        to: email,
        subject: "Welcome Message",
        text: `Hello ${fullname}
        Welcome to Makalu Travel ${fullname.split(' ')[0]}. We are glad to have you as our Tourist.`
    }

    const authDetails2={
        from: email,
        to: 'adhikaritushant18@gmail.com',
        subject: "Package Booking Detail",
        text: `Trip Name: ${tripname}, Number of Children: ${Children}, Number of Adults: ${Adults}, ArrivalDate: ${ArrivalDate}, DepartureDate: ${DepartureDate}
            Users Information
            fullname: ${fullname}
            email: ${email}
            contact Numer: ${contact}
            country: ${country}
            address: ${address}
            message: ${message}
        `
    }

    createBookTransport.sendMail(authDetails2, (err, info)=>{
        if(err)
        {
            console.log("error occured while sending mail to manager ", err);
        }else{
            console.log("Mail send successfully to manager ");
        }
    })

    createBookTransport.sendMail(authDetails, (err, info)=>{
        if(err){
            console.log("error occured while sending mail to user ", err);
        }else{
            console.log("email send successfully ");
        }
    })
}

module.exports=SendBookNow;