import { ContactApiResponse, ContactFormData, ContactMessage } from "@/app/types/contact";
import { NextResponse } from "next/server";


const messages: ContactMessage[] = [];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateContactData(
  data: Partial<ContactFormData>,
): Partial<Record<keyof ContactFormData, string>> {
  const errors: Partial<
    Record<keyof ContactFormData, string>
  > = {};

  if (!data.name?.trim()) {
    errors.name = "Le nom est obligatoire.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Le nom doit contenir au moins 2 caractères.";
  }

  if (!data.email?.trim()) {
    errors.email = "L’adresse e-mail est obligatoire.";
  } else if (!isValidEmail(data.email.trim())) {
    errors.email = "L’adresse e-mail n’est pas valide.";
  }

  if (!data.subject?.trim()) {
    errors.subject = "Le sujet est obligatoire.";
  } else if (data.subject.trim().length < 3) {
    errors.subject =
      "Le sujet doit contenir au moins 3 caractères.";
  }

  if (!data.message?.trim()) {
    errors.message = "Le message est obligatoire.";
  } else if (data.message.trim().length < 10) {
    errors.message =
      "Le message doit contenir au moins 10 caractères.";
  } else if (data.message.trim().length > 1000) {
    errors.message =
      "Le message ne doit pas dépasser 1 000 caractères.";
  }

  return errors;
}

export async function POST(
  request: Request,
): Promise<NextResponse<ContactApiResponse>> {
  try {
    const body = (await request.json()) as Partial<ContactFormData>;

    const errors = validateContactData(body);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Certaines informations sont manquantes ou invalides.",
          errors,
        },
        {
          status: 400,
        },
      );
    }

    const newMessage: ContactMessage = {
      id: crypto.randomUUID(),
      name: body.name!.trim(),
      email: body.email!.trim().toLowerCase(),
      subject: body.subject!.trim(),
      message: body.message!.trim(),
      createdAt: new Date().toISOString(),
    };

    messages.unshift(newMessage);

    return NextResponse.json(
      {
        success: true,
        message: "Votre message a bien été envoyé.",
        data: newMessage,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error(
      "Erreur lors de l’enregistrement du message :",
      error,
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Le corps de la requête est invalide ou illisible.",
      },
      {
        status: 400,
      },
    );
  }
}

export async function GET(): Promise<
  NextResponse<{
    success: boolean;
    count: number;
    data: ContactMessage[];
  }>
> {
  return NextResponse.json(
    {
      success: true,
      count: messages.length,
      data: messages,
    },
    {
      status: 200,
    },
  );
}