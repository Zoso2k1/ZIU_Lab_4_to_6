import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Step1Data, Step2Data } from '../../schemas/formSchemas';

interface Step3Props {
  data: { step1?: Step1Data; step2?: Step2Data };
  onBack: () => void;
  onSuccess: () => void;
  onServerError: (type: 'email' | 'root', message: string) => void;
}

export function Step3({ data, onBack, onSuccess, onServerError }: Step3Props) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  
  const submitData = async () => {
    // Symulacja wywołania API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Zmień to, aby przetestować różne scenariusze
        const shouldSimulateEmailError = false; 
        
        if (shouldSimulateEmailError) {
          reject({ status: 409 }); [cite: 882]
        } else {
          resolve(true);
        }
      }, 1500);
    });
  };

  const onSubmit = async () => {
    try {
      await submitData();
      onSuccess();
    } catch (err: any) {
      if (err.status === 409) {
        onServerError('email', 'Ten adres e-mail jest już zarejestrowany'); [cite: 883-887]
      } else {
        onServerError('root', 'Błąd serwera, spróbuj ponownie'); [cite: 889-890]
      }
    }
  };

  return (
    <div>
      <h3>Podsumowanie danych</h3>
      <div>
        <p><strong>Imię:</strong> {data.step1?.firstName}</p>
        <p><strong>E-mail:</strong> {data.step1?.email}</p>
        <p><strong>Kategorie:</strong> {data.step2?.categories.join(', ')}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <input 
            type="checkbox" 
            id="rodo" 
            aria-required="true" [cite: 896]
            {...register('rodo', { required: 'Akceptacja RODO jest wymagana' })} 
          />
          <label htmlFor="rodo"> Akceptuję politykę prywatności (RODO) *</label> [cite: 813]
          {errors.rodo && <span role="alert" style={{color: 'red', display: 'block'}}>{errors.rodo.message as string}</span>}
        </div>

        <button type="button" onClick={onBack} disabled={isSubmitting} style={{ marginRight: '1rem' }}>Wstecz</button>
        
        {/* Odpowiednie zarządzanie stanem przycisku [cite: 896, 956] */}
        <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
           {isSubmitting ? 'Rejestrowanie...' : 'Zarejestruj się'} [cite: 814, 956]
        </button>
      </form>
    </div>
  );
}