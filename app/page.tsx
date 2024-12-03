import { Brand } from '@/components/common';
import { PatientForm } from '@/components/forms/patient-form';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-screen max-h-screen flex ">
      <div className="py-8 flex-1">
        <div className="container px-4 md:px-14 h-full">
          <div className='flex flex-col justify-between h-full'>
            <Brand />
            <div>
              <div className="mb-6">
                <p className="font-bold text-2xl">Hi there, ...</p>
                <p className="mt-3 text-neutral text-sm">
                  Get Started with Appointments.
                </p>
              </div>
              <PatientForm />
            </div>
            <div className="flex items-center justify-between gap-2 text-muted text-sm">
              <span>&copy; carepulse copyright</span>
              <Link href="/admin" className='hover:text-secondary transition-colors'>Admin</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden md:block">
        <Image
          className="rounded-3xl h-full object-cover w-full"
          src="/assets/images/background-1.png"
          alt="doctors"
          width={1000}
          height={1000}
        />
      </div>
    </main>
  );
}
