import React from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { step2Schema, Step2Data } from '../../schemas/formSchemas';

interface Step2Props {
  onComplete: (data: Step2Data) => void;
  onBack: () => void;
  defaultValues?: Partial<Step2Data>;
}

export function Step2({ onComplete, onBack, defaultValues }: Step2Props) {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    mode: 'onBlur',
    defaultValues: defaultValues || {
      categories: [],
      notifications: { email: false, push: false },
      newsletter: false,
    },
  });

  const availableCategories = ['Technologia', 'Sport', 'Muzyka'];

  return (
    <form onSubmit={handleSubmit(onComplete)}>
      <fieldset style={{ marginBottom: '1rem' }}>
        <legend>Wybierz kategorie *</legend>
        {availableCategories.map((cat) => (
          <div key={cat}>
            <input
              type="checkbox"
              id={`cat-${cat}`}
              value={cat}
              {...register('categories')}
            />
            <label htmlFor={`cat-${cat}`}>{cat}</label>
          </div>
        ))}
        {errors.categories && <span role="alert" style={{color: 'red'}}>{errors.categories.message}</span>}
      </fieldset>

      <fieldset style={{ marginBottom: '1rem' }}>
        <legend>Powiadomienia</legend>
        <div>
           {/* Użycie Controllera zgodnie ze specyfikacją [cite: 852-864] */}
          <Controller
            name="notifications.email"
            control={control}
            render={({ field }) => (
              <input
                type="checkbox"
                id="notif-email"
                aria-label="Powiadomienia e-mail" [cite: 810, 859]
                checked={field.value} [cite: 860]
                onChange={field.onChange} [cite: 861]
              />
            )}
          />
          <label htmlFor="notif-email">E-mail</label>
        </div>
        <div>
          <Controller
            name="notifications.push"
            control={control}
            render={({ field }) => (
              <input
                type="checkbox"
                id="notif-push"
                checked={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <label htmlFor="notif-push">Push</label>
        </div>
      </fieldset>

      <div style={{ marginBottom: '1rem' }}>
         <input type="checkbox" id="newsletter" {...register('newsletter')} />
         <label htmlFor="newsletter">Zapisz się do newslettera (opcjonalnie)</label>
      </div>

      <button type="button" onClick={onBack} style={{ marginRight: '1rem' }}>Wstecz</button>
      <button type="submit">Dalej</button>
    </form>
  );
}