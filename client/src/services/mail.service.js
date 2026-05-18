/**
 * Import de Nodemailer
 * permettant l’envoi d’emails
 */
const nodemailer = require("nodemailer");

/**
 * Fonction d’envoi email contact artisan
 */
const sendContactEmail = async ({ artisan, name, email, subject, message }) => {
  /**
   * Vérification configuration SMTP
   * Empêche les erreurs si SMTP absent
   */
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_PORT ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS ||
    process.env.SMTP_USER === "ton_email@gmail.com"
  ) {
    console.log("SMTP non configuré : email non envoyé.");

    return;
  }

  /**
   * Création du transporteur SMTP
   */
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,

    port: Number(process.env.SMTP_PORT),

    secure: false,

    auth: {
      user: process.env.SMTP_USER,

      pass: process.env.SMTP_PASS,
    },
  });

  /**
   * Envoi email
   */
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

/**
 * Export du service email
 */
module.exports = {
  sendContactEmail,
};
