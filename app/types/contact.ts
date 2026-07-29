export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactMessage = ContactFormData & {
  id: string;
  createdAt: string;
};

export type ContactApiResponse = {
  success: boolean;
  message: string;
  data?: ContactMessage;
  errors?: Partial<Record<keyof ContactFormData, string>>;
};