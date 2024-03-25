import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6)
    .refine(
      (pass) => {
        return /[0-9]/.test(pass) && /[A-Z]/.test(pass);
      },
      {
        message:
          "Password must be at least 6 characters long and contain at least one number and one uppercase letter.",
      }
    ),
  remember: z.boolean().default(false).optional(),
});

export const SignupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z
     .string()
     .min(6)
     .refine(
       (pass) => {
         return /[0-9]/.test(pass) && /[A-Z]/.test(pass);
       },
       {
         message:
           "Password must be at least 6 characters long and contain at least one number and one uppercase letter.",
       }
     ),
     confirmPassword: z.string().min(6),
    }).refine(data => data.password === data.confirmPassword, {
     message: "Passwords do not match.",
     path: ["confirmPassword"], // This path is used to indicate where the error occurred
    });


export const ForgotPasswordSchema = z.object({
  email: z.string().email(),
});
