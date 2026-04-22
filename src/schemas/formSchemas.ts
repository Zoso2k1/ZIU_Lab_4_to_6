import { z } from 'zod';

// Krok 1 - Dane osobowe [cite: 807, 824-837]
export const step1Schema = z
  .object({
    firstName: z.string().min(2, 'Imię musi mieć co najmniej 2 znaki'),
    lastName: z.string().min(2, 'Nazwisko musi mieć co najmniej 2 znaki'),
    email: z.string().email('Podaj poprawny adres e-mail'),
    password: z
      .string()
      .min(8, 'Hasło musi mieć co najmniej 8 znaków')
      .regex(/[A-Z]/, 'Hasło musi zawierać wielką literę')
      .regex(/[0-9]/, 'Hasło musi zawierać cyfrę'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Hasła muszą być identyczne',
    path: ['confirmPassword'],
  });

export type Step1Data = z.infer<typeof step1Schema>; [cite: 838]

// Krok 2 - Preferencje [cite: 810]
export const step2Schema = z.object({
  categories: z
    .array(z.string())
    .min(1, 'Wybierz co najmniej jedną kategorię'),
  notifications: z.object({
    email: z.boolean(),
    push: z.boolean(),
  }),
  newsletter: z.boolean().optional(),
});

export type Step2Data = z.infer<typeof step2Schema>;