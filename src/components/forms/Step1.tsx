import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { step1Schema, Step1Data } from '../../schemas/formSchemas';

interface Step1Props {
  onComplete: (data: Step1Data) => void;
  defaultValues?: Partial<Step1Data>;
}

export function Step1({ onComplete, defaultValues }: Step1Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema), [cite: 846]
    mode: 'onBlur', [cite: 847, 952]
    reValidateMode: 'onChange', [cite: 848, 952]
    defaultValues: defaultValues || {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const passwordValue = watch('password'); [cite: 930]

  const getPasswordStrength = (pwd: string) => { [cite: 931]
    if (!pwd) return '';
    if (pwd.length < 8) return 'słabe'; [cite: 933]
    if (/[A-Z]/.test(pwd) && /[0-9]/.test(pwd) && /[^A-Za-z0-9]/.test(pwd)) return 'silne'; [cite: 933]
    return 'średnie';
  };

  const strength = getPasswordStrength(passwordValue);

  return (
    <form onSubmit={handleSubmit(onComplete)}>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="firstName">Imię *</label> [cite: 953]
        <input
          id="firstName"
          type="text"
          aria-required="true" [cite: 896]
          aria-invalid={!!errors.firstName} [cite: 896]
          aria-describedby={errors.firstName ? 'firstName-err' : undefined} [cite: 896]
          {...register('firstName')}
        />
        {errors.firstName && <span id="firstName-err" role="alert" style={{color: 'red'}}>{errors.firstName.message}</span>} [cite: 896]
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="lastName">Nazwisko *</label>
        <input id="lastName" type="text" aria-required="true" aria-invalid={!!errors.lastName} {...register('lastName')} />
        {errors.lastName && <span role="alert" style={{color: 'red'}}>{errors.lastName.message}</span>}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="email">E-mail *</label>
        <input id="email" type="email" aria-required="true" aria-invalid={!!errors.email} {...register('email')} />
        {errors.email && <span role="alert" style={{color: 'red'}}>{errors.email.message}</span>}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="password">Hasło *</label> [cite: 935]
        <input
          id="password"
          type="password"
          aria-required="true" [cite: 939]
          aria-invalid={!!errors.password} [cite: 940]
          aria-describedby={errors.password ? 'pwd-err' : 'pwd-hint'} [cite: 941]
          {...register('password')} [cite: 942]
        />
        <span id="pwd-hint" aria-live="polite"> [cite: 944]
          Siła hasła: {strength}
        </span>
        {errors.password && (
          <span id="pwd-err" role="alert" style={{color: 'red', display: 'block'}}>{errors.password.message}</span> [cite: 948]
        )}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="confirmPassword">Potwierdź hasło *</label>
        <input id="confirmPassword" type="password" aria-required="true" aria-invalid={!!errors.confirmPassword} {...register('confirmPassword')} />
        {errors.confirmPassword && <span role="alert" style={{color: 'red'}}>{errors.confirmPassword.message}</span>}
      </div>

      <button type="submit">Dalej</button>
    </form>
  );
}