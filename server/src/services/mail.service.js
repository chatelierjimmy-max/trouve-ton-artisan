const nodemailer = require("nodemailer");

const sendContactEmail = async ({ artisan, name, email, subject, message }) => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log("SMTP non configuré : email non envoyé.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Trouve ton artisan" <${process.env.SMTP_USER}>`,
    to: artisan.email,
    replyTo: email,
    subject: `[Trouve ton artisan] ${subject}`,
    text: `
Nouveau message depuis la plateforme Trouve ton artisan.

Artisan : ${artisan.name}

Nom : ${name}
Email : ${email}
Objet : ${subject}

Message :
${message}
    `,
  });
};

module.exports = {
  sendContactEmail,
};
