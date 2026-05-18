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
   */
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_PORT ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS
  ) {
    console.log("SMTP non configuré : email non envoyé.");

    return;
  }

  /**
   * Création transporteur Nodemailer
   */
  const transporter = nodemailer.createTransport({
    /**
     * Serveur SMTP
     */
    host: process.env.SMTP_HOST,

    /**
     * Port SMTP
     */
    port: Number(process.env.SMTP_PORT),

    /**
     * Connexion sécurisée
     */
    secure: false,

    /**
     * Authentification SMTP
     */
    auth: {
      user: process.env.SMTP_USER,

      pass: process.env.SMTP_PASS,
    },
  });

  /**
   * Envoi email artisan
   */
  await transporter.sendMail({
    /**
     * Expéditeur email
     */
    from: `"Trouve ton artisan" <${process.env.SMTP_USER}>`,

    /**
     * Destinataire artisan
     */
    to: artisan.email,

    /**
     * Adresse réponse utilisateur
     */
    replyTo: email,

    /**
     * Sujet email
     */
    subject: `[Trouve ton artisan] ${subject}`,

    /**
     * Contenu email texte
     */
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
 * Export service email
 */
module.exports = {
  sendContactEmail,
};
