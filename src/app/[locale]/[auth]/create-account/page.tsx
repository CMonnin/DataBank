'use client';

import React from 'react';

import { Form } from '@douglasneuroinformatics/react-components';

import { Branding } from '@/components/Branding';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useClientTranslations } from '@/hooks/useClientTranslations';
import { trpc } from '@/utils/trpc';

export type CreateUserData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const CreateAccountPage = () => {
  const t = useClientTranslations();

  const createUser = trpc.user.create.useMutation();

  const createAccount = async (data: CreateUserData) => {
    const createdUser = await createUser.mutateAsync(data);
    // eslint-disable-next-line no-alert
    alert(JSON.stringify({ createdUser }));
  };

  return (
    <div className="flex w-full flex-col gap-4 rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800 md:p-8">
      <div className="mb-3 flex flex-col items-center text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
        <Branding />
        <h3 className="mt-2">{t.createAccount}</h3>
      </div>
      <Form<CreateUserData>
        content={{
          firstName: { kind: 'text', label: t.firstName, variant: 'short' },
          lastName: { kind: 'text', label: t.lastName, variant: 'short' },
          email: { kind: 'text', label: t.email, variant: 'short' },
          password: { kind: 'text', label: t.password, variant: 'password' }
        }}
        validationSchema={{
          type: 'object',
          properties: {
            firstName: {
              type: 'string',
              minLength: 1
            },
            lastName: {
              type: 'string',
              minLength: 1
            },
            email: {
              type: 'string',
              pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.source
            },
            password: {
              type: 'string',
              minLength: 1
            }
          },
          required: ['firstName', 'lastName', 'email', 'password']
        }}
        onSubmit={(data) => {
          void createAccount(data);
        }}
      />
      <div className="flex w-full justify-between">
        <LanguageToggle dropdownDirection="up" />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default CreateAccountPage;
