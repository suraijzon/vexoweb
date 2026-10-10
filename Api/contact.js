import nodemailer from "nodemailer";

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  phone: 30,
  company: 150,
  service: 100,
  message: 5000,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const clean = (value) => (typeof value === "string" ? value.trim() : "");

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const body = req.body || {};

  // Honeypot: real users never see the "website" field, so bots that fill it get a fake success.
  if (clean(body.website)) {
    return res.status(200).json({ success: true });
  }

  const fields = {
    name: clean(body.name),
    email: clean(body.email),
    phone: clean(body.phone),
    company: clean(body.company),
    service: clean(body.service),
    message: clean(body.message),
  };

  if (!fields.name || !fields.email || !fields.message) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }

  if (!EMAIL_REGEX.test(fields.email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  for (const [key, max] of Object.entries(MAX_LENGTHS)) {
    if (fields[key].length > max) {
      return res.status(400).json({ error: `The ${key} field must be ${max} characters or fewer.` });
    }
  }

  const budget = Number(body.budget);
  const hasBudget = body.budget !== undefined && body.budget !== "" && Number.isFinite(budget) && budget > 0;

  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS) {
    console.error("Contact form: EMAIL_USER and/or EMAIL_PASS environment variables are not set.");
    return res.status(500).json({ error: "Email service is not configured. Please contact us directly at info@vexoweb.lk." });
  }

  const port = Number(EMAIL_PORT) || 465;

  const safe = Object.fromEntries(
    Object.entries(fields).map(([key, value]) => [key, escapeHtml(value)])
  );
  const budgetText = hasBudget ? `LKR ${budget.toLocaleString("en-LK")}` : "";

  try {

    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST || "smtp.gmail.com",
      port,
      secure: port === 465,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Vexoweb Website" <${EMAIL_USER}>`,
      to: EMAIL_TO || EMAIL_USER,
      replyTo: fields.email,
      subject: `New message from ${fields.name}`,
      text: [
        "New Website Message",
        "",
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        `Phone: ${fields.phone}`,
        `Company: ${fields.company}`,
        fields.service ? `Service: ${fields.service}` : null,
        budgetText ? `Budget: ${budgetText}` : null,
        "",
        "Message:",
        fields.message,
      ].filter((line) => line !== null).join("\n"),
      html: `
        <h3>New Website Message</h3>
        <p><b>Name:</b> ${safe.name}</p>
        <p><b>Email:</b> ${safe.email}</p>
        <p><b>Phone:</b> ${safe.phone}</p>
        <p><b>Company:</b> ${safe.company}</p>
        ${safe.service ? `<p><b>Service:</b> ${safe.service}</p>` : ""}
        ${budgetText ? `<p><b>Budget:</b> ${escapeHtml(budgetText)}</p>` : ""}
        <p><b>Message:</b></p>
        <p>${safe.message.replace(/\r?\n/g, "<br>")}</p>
      `
    });

    return res.status(200).json({ success: true });

  } catch (error) {

    console.error("Contact form: email sending failed", {
      code: error.code,
      responseCode: error.responseCode,
      command: error.command,
      response: error.response,
      message: error.message,
    });

    return res.status(500).json({
      error: "Email sending failed. Please try again or email info@vexoweb.lk."
    });

  }
}
