import { Gender } from "./shared";

export type Patient = {
  email: string;
  phone: string;
  userId: string;
  name: string;
  privacyConsent: string;
  gender: Gender;
  birthDate: Date;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies: string;
  currentMedication: string;
  familyMedicalHistory: string;
  pastMedicalHistory: string;
  identificationType: string;
  identificationNumber: string;
  identificationDocumentId: string;
  identificationDocumentURL: string;
  primaryPhysician: string;
}

