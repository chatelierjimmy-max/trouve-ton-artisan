import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setFieldErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Le nom est obligatoire.";
    }

    if (!formData.email.trim()) {
      errors.email = "L’email est obligatoire.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Veuillez saisir un email valide.";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Le sujet est obligatoire.";
    }

    if (!formData.message.trim()) {
      errors.message = "Le message est obligatoire.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Le message doit contenir au moins 10 caractères.";
    }

    setFieldErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSuccess("");
    setError("");

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de l’envoi du message.");
      }

      setSuccess("Votre message a bien été envoyé.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setFieldErrors({});
    } catch (err) {
      setError(err.message || "Une erreur est survenue.");
    }
  };

  return (
    <section className="container py-5">
      <h1 className="mb-4">Contact</h1>

      <p className="mb-4">
        Vous pouvez nous envoyer un message via ce formulaire.
      </p>

      {success && <div className="alert alert-success">{success}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} noValidate className="row g-3">
        <div className="col-12 col-md-6">
          <label htmlFor="name" className="form-label">
            Nom
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className={`form-control ${fieldErrors.name ? "is-invalid" : ""}`}
            value={formData.name}
            onChange={handleChange}
          />
          {fieldErrors.name && (
            <div className="invalid-feedback">{fieldErrors.name}</div>
          )}
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className={`form-control ${fieldErrors.email ? "is-invalid" : ""}`}
            value={formData.email}
            onChange={handleChange}
          />
          {fieldErrors.email && (
            <div className="invalid-feedback">{fieldErrors.email}</div>
          )}
        </div>

        <div className="col-12">
          <label htmlFor="subject" className="form-label">
            Sujet
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            className={`form-control ${fieldErrors.subject ? "is-invalid" : ""}`}
            value={formData.subject}
            onChange={handleChange}
          />
          {fieldErrors.subject && (
            <div className="invalid-feedback">{fieldErrors.subject}</div>
          )}
        </div>

        <div className="col-12">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className={`form-control ${fieldErrors.message ? "is-invalid" : ""}`}
            value={formData.message}
            onChange={handleChange}
          />
          {fieldErrors.message && (
            <div className="invalid-feedback">{fieldErrors.message}</div>
          )}
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
