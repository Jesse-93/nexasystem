import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function clean(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";

  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const nom = clean(body.nom, 100);
    const entreprise = clean(body.entreprise, 150);
    const email = clean(body.email, 254);
    const telephone = clean(body.telephone, 30);
    const projet = clean(body.projet, 100);
    const budget = clean(body.budget, 100);
    const message = clean(body.message, 3000);

    // Vérification des champs obligatoires
    if (!nom || !email || !message) {
      return Response.json(
        {
          success: false,
          error: "Les champs nom, email et message sont obligatoires.",
        },
        { status: 400 }
      );
    }

    // Vérification de l'adresse email
    if (!isValidEmail(email)) {
      return Response.json(
        {
          success: false,
          error: "Veuillez saisir une adresse email valide.",
        },
        { status: 400 }
      );
    }

    // Échappement HTML pour empêcher l'injection de code
    const safeNom = escapeHtml(nom);
    const safeEntreprise = escapeHtml(
      entreprise || "Non renseignée"
    );
    const safeEmail = escapeHtml(email);
    const safeTelephone = escapeHtml(
      telephone || "Non renseigné"
    );
    const safeProjet = escapeHtml(
      projet || "Non renseigné"
    );
    const safeBudget = escapeHtml(
      budget || "Non renseigné"
    );
    const safeMessage = escapeHtml(message).replace(
      /\n/g,
      "<br>"
    );

    const { error } = await resend.emails.send({
      from: "NEXASYSTEM <onboarding@resend.dev>",
      to: ["jessekebani@gmail.com"],
      replyTo: email,
      subject: `Nouvelle demande de contact - ${nom}`,
      html: `
        <h2>Nouvelle demande de contact NEXASYSTEM</h2>

        <p><strong>Nom :</strong> ${safeNom}</p>
        <p><strong>Entreprise :</strong> ${safeEntreprise}</p>
        <p><strong>Email :</strong> ${safeEmail}</p>
        <p><strong>Téléphone :</strong> ${safeTelephone}</p>
        <p><strong>Projet :</strong> ${safeProjet}</p>
        <p><strong>Budget :</strong> ${safeBudget}</p>

        <h3>Message</h3>
        <p>${safeMessage}</p>
      `,
    });

    if (error) {
      console.error("Erreur Resend :", error);

      return Response.json(
        {
          success: false,
          error: "Impossible d'envoyer le message.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Votre demande a bien été envoyée.",
    });
  } catch (error) {
    console.error("Erreur serveur :", error);

    return Response.json(
      {
        success: false,
        error: "Une erreur est survenue lors de l'envoi.",
      },
      { status: 500 }
    );
  }
}