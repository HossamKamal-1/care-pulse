'use server';
import { PatientFormValues, PatientSchema } from '@/validations/patient-schema';
import { users } from '../appwrite.config';
import { AppwriteException, ID, Models } from 'node-appwrite';
import { ResponseData } from '../types/shared';

type CreatePatientResponse = ResponseData<
  PatientFormValues,
  Models.User<Models.Preferences>
>;
export const createPatient = async (
  userData: PatientFormValues
): CreatePatientResponse => {
  const result = PatientSchema.safeParse(userData);

  // Uniformly handle Zod validation errors
  if (!result.success) {
    return { success: false, error: result.error.format() };
  }

  const userInfo = result.data;
  try {
    const response = await users.create(
      ID.unique(),
      userInfo.email,
      userInfo.phoneNum,
      undefined,
      userInfo.fullName
    );
    return { success: true, user: response };
  } catch (e) {
    return {
      success: false,
      error:
        e instanceof AppwriteException
          ? {
              code: e.code,
              message:
                e.code === 409
                  ? 'User email or phone is already taken.'
                  : e.message,
              type: e.type,
            }
          : { code: 500, message: (e as Error).message },
    };
  }
};
