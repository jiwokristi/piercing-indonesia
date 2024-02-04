import { z } from 'zod'

const signInBaseSchema = z.object({
  isNewUser: z.boolean().default(false),
  name: z.string().optional().nullable().default(''),
  dob: z.string().datetime().optional().nullable().default(null),
  email: z.string().email({ message: 'Email is invalid' }).default(''),
  password: z.string().min(1, 'Please fill out your password').default(''),
})

export const signInSchema = signInBaseSchema
  .refine(
    (data) => {
      // passes the validation if isNewUser is a falsy value
      return (!data.isNewUser && !data.name) || data.name
    },
    {
      message: 'Please fill out your name',
      path: ['name'], // paths of the error
    },
  )
  .refine(
    (data) => {
      return (!data.isNewUser && !data.dob) || data.dob
    },
    {
      message: 'Please fill out your date of birth',
      path: ['dob'],
    },
  )

export type SignInValues = z.infer<typeof signInSchema>
