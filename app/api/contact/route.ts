"use client"; import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      nom,
      entreprise,
      email,
      telephone,
      projet,
      budget,
      message,
    } = body;

    if (!nom || !email || !message) {
      return Response.json(
        {
          success: false,
          error: "Les champs nom, email et message sont obligatoires.",
        },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "NEXASYSTEM <onboarding@resend.dev>",
      to: ["jessekebani@gmail.com"],
      replyTo: email,
      subject: `Nouvelle demande de contact - ${nom}`,
      html: `
        <h2>Nouvelle demande de contact NEXASYSTEM</h2>

        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Entreprise :</strong> ${entreprise || "Non renseignée"}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone || "Non renseigné"}</p>
        <p><strong>Projet :</strong> ${projet || "Non renseigné"}</p>
        <p><strong>Budget :</strong> ${budget || "Non renseigné"}</p>

        <h3>Message</h3>
        <p>${message}</p>
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