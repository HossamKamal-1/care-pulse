import { z } from 'zod';

export const PatientSchema = z.object({
  fullName: z
    .string({
      required_error: 'Full name is required.',
    })
    .regex(
      /^[a-zA-ZÀ-ÿ]+(?: [a-zA-ZÀ-ÿ]+)+$/,
      'Full name must consist of at least two words, separated by a space, and use valid characters.'
    ),
  email: z
    .string({
      required_error: 'Email is required.',
    })
    .email({
      message: 'Please enter a valid email address.',
    }),
  phoneNum: z
    .string({
      required_error: 'Phone number is required.',
    })
    .refine((phone) => /^\+?[1-9]\d{1,14}$/.test(phone), {
      message: 'Please enter valid phone number',
    }),
});

export type PatientFormValues = z.infer<typeof PatientSchema>;
