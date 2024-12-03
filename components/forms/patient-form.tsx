'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormMessage } from '@/components/ui/form';
import { CustomFormField } from '../common/custom-form-field';
import { PatientFormValues, PatientSchema } from '@/validations/patient-schema';
import { createPatient } from '@/lib/actions/patient';
import { SubmitButton } from '../common';
import { ElementRef, useRef, useState } from 'react';
import { isRequestNetworkError } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export function PatientForm() {
  const form = useForm<PatientFormValues>({
    resolver: zodResolver(PatientSchema),
    mode: 'all',
    defaultValues: {
      fullName: '',
      email: '',
      phoneNum: '',
    },
  });
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const onSubmit = async (formValues: PatientFormValues) => {
    setServerError(null);
    try {
      const response = await createPatient(formValues);
      if (response.success) {
        console.log('from if success', response);
        router.replace(`/patients/${response.user.$id}`);
        return;
      }
      if (isRequestNetworkError(response.error)) {
        setServerError(response.error.message);
      }
      console.log('from else fail', response);
    } catch (e) {
      // Client Issues (Network(404))
      console.log('Client Error', e);
    }
  };

  const formRef = useRef<ElementRef<'form'>>(null);
  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <CustomFormField
          control={form.control}
          label="Full Name"
          name="fullName"
          placeholder="Enter full name"
          iconSrc={'/assets/icons/avatar.svg'}
          iconAlt="avatar"
        />
        <CustomFormField
          control={form.control}
          label="Email Address"
          name="email"
          placeholder="Enter email address"
          iconSrc="/assets/icons/message.svg"
          iconAlt="email"
        />
        {/* FIXME: fix this phone issues not working properly and cause problems */}
        <CustomFormField
          control={form.control}
          placeholder="Phone number"
          label="Phone number"
          type="custom-phone"
          name="phoneNum"
        />
        <SubmitButton
          className="w-full"
          isLoading={form.formState.isSubmitting}
        >
          Get Started
        </SubmitButton>
      </form>
      {serverError && (
        <FormMessage className="mt-3 text-lg">{serverError}</FormMessage>
      )}
    </Form>
  );
}
