import SimpleSchema from 'simpl-schema';
import nodemailer from 'nodemailer'

const contactform = async (req, res) => {
    const body = req.body,
        validationSchema = new SimpleSchema({
            name: String,
            city: String,
            email: String,
            phone: String,
            company: String,
            role: String,
            message: String
        }).newContext();

    if (!validationSchema.validate(body)) return res.status(400).json({
        status: "error",
        message: "Please fill all the required fields to continue.",
        trace: validationSchema.validationErrors()
    });
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'siteinpl@gmail.com',
            pass: 'utvxxcejxuwblgpx'
        }
    });

    let mailDetails = {
        from: 'siteinpl@gmail.com',
        to: `ktaha7976@gmail.com`,
        subject: `New Lead: ${body.name} | ${body.city}`,
        html: `
            <b>Name:</b><p>${body.name}</p><br />
            <b>City:</b><p>${body.city}</p><br />
            <b>Email:</b><p>${body.email}</p><br />
            <b>Phone:</b><p>${body.phone}</p><br />
            <b>Company:</b><p>${body.company}</p><br />
            <b>Role:</b><p>${body.role}</p><br />
            <b>Message:</b><p>${body.message}</p><br />
        `
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) return res.status(500).json({
            status: "error",
            message: "An unexpected error ocurred while proceeding your request.",
            trace: err.message
        })

        res.json({
            status: "success",
            message: "Email sent successfully",
        });
    });
}
const careersform = async (req, res) => {
    const body = req.body,
        validationSchema = new SimpleSchema({
            name: String,
            city: String,
            email: String,
            phone: String,
            company: String,
            role: String,
            message: String
        }).newContext();

    if (!validationSchema.validate(body)) return res.status(400).json({
        status: "error",
        message: "Please fill all the required fields to continue.",
        trace: validationSchema.validationErrors()
    });

    if (req.files?.attachment === undefined) return res.status(400).json({
        status: "error",
        message: "Please attach your resume to proceed further.",
        trace: "req.files?.attachment is undefined!"
    });

    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'siteinpl@gmail.com',
            pass: 'utvxxcejxuwblgpx'
        }
    });

    let mailDetails = {
        from: 'siteinpl@gmail.com',
        to: `ktaha7976@gmail.com`,
        subject: `New Lead: ${body.name} | ${body.city}`,
        html: `
            <b>Name:</b><p>${body.name}</p><br />
            <b>City:</b><p>${body.city}</p><br />
            <b>Email:</b><p>${body.email}</p><br />
            <b>Phone:</b><p>${body.phone}</p><br />
            <b>Company:</b><p>${body.company}</p><br />
            <b>Role:</b><p>${body.role}</p><br />
            <b>Message:</b><p>${body.message}</p><br />

        `,
        attachments: [
            {
                filename: req.files.attachment.name,
                content: req.files.attachment.data
            }
        ]
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) return res.status(500).json({
            status: "error",
            message: "An unexpected error ocurred while proceeding your request.",
            trace: err.message
        })

        res.json({
            status: "success",
            message: "Email sent successfully",
        });
    });
}

export default {
    contactform,
    careersform
};