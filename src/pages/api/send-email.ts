import type { APIRoute } from "astro";

function buildEmailTemplate(name: string, email: string, message: string): string {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
      <h2 style="color: #333;">Submisi Form Website</h2>
      <p><b>Name:</b> &nbsp${name}</p>
      <p><b>Email:</b> &nbsp${email}</p>
      <p><b>Message:</b></p>
      <blockquote style="border-left: 4px solid #e0aa20; padding-left: 10px; color: #555; margin-bottom: 10px;">
        ${message}
      </blockquote>
      <hr style="margin-bottom: 10px;"/>
      <p style="font-size: 12px; color: #777;">
        Pesan ini dikirim dari form submisi <span style="font-weight: bold;">Alun-Alun Construction</span>.
      </p>
    </div>
  `;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, message } = await request.json();

    const receiverEmail = "aldrichwahyudi2004@gmail.com";

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": import.meta.env.BREVO_API_KEY,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        sender: { name, email },
        to: [{ email: receiverEmail }],
        subject: "Submisi Form Website",
        htmlContent: buildEmailTemplate(name, email, message)
      })
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ success: false, error: await response.text() }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    console.log("Email sending error: ", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
};
