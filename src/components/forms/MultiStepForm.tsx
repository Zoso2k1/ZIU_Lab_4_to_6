import React, { useState, useRef, useEffect } from 'react';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step1Data, Step2Data } from '../../schemas/formSchemas'; [cite: 900-904]

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1); [cite: 906]
  const [formData, setFormData] = useState<{ step1?: Step1Data; step2?: Step2Data }>({}); [cite: 907]
  const [globalError, setGlobalError] = useState<string | null>(null);
  
  const headingRef = useRef<HTMLHeadingElement>(null); [cite: 908]

  useEffect(() => {
    // Focus management - po zmianie kroku [cite: 896, 909-911]
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, [currentStep]);

  const handleStep1Complete = (data: Step1Data) => {
    setFormData(prev => ({ ...prev, step1: data })); [cite: 913]
    setCurrentStep(2); [cite: 913]
    setGlobalError(null);
  };

  const handleStep2Complete = (data: Step2Data) => {
    setFormData(prev => ({ ...prev, step2: data }));
    setCurrentStep(3);
  };

  const handleServerError = (type: 'email' | 'root', message: string) => {
    if (type === 'email') {
      // Symulacja błędu z backendu wymusza powrót do kroku 1 [cite: 815, 888]
      // Uwaga: W rzeczywistej implementacji musisz przekazać ten błąd do Step1 (np. przez props lub useForm hook). 
      // Tutaj używamy uproszczenia (powrót + komunikat)
      setCurrentStep(1); 
      setGlobalError(message);
    } else {
      setGlobalError(message);
    }
  };

  const getStepTitle = () => { [cite: 921]
    if (currentStep === 1) return 'Krok 1: Dane osobowe';
    if (currentStep === 2) return 'Krok 2: Preferencje';
    return 'Krok 3: Podsumowanie';
  };

  return (
    <main aria-label="Formularz rejestracji"> [cite: 916]
      <nav aria-label="Postęp rejestracji" style={{ marginBottom: '1rem' }}> [cite: 917]
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', padding: 0 }}>
          <li aria-current={currentStep === 1 ? 'step' : undefined}>1. Dane</li> [cite: 896, 918]
          <li aria-current={currentStep === 2 ? 'step' : undefined}>2. Preferencje</li>
          <li aria-current={currentStep === 3 ? 'step' : undefined}>3. Podsumowanie</li>
        </ul>
      </nav>
      
      <h2 tabIndex={-1} ref={headingRef} style={{ outline: 'none' }}> [cite: 920]
        {getStepTitle()} 
      </h2>
      
      {globalError && (
        <div role="alert" style={{ backgroundColor: '#ffebee', padding: '1rem', marginBottom: '1rem' }}>
          {globalError}
        </div>
      )}

      {currentStep === 1 && (
        <Step1 
          onComplete={handleStep1Complete} 
          defaultValues={formData.step1} // Zapobieganie utracie danych [cite: 955]
        />
      )}
      
      {currentStep === 2 && (
        <Step2 
          onComplete={handleStep2Complete} 
          onBack={() => setCurrentStep(1)}
          defaultValues={formData.step2} 
        />
      )}
      
      {currentStep === 3 && (
        <Step3 
          data={formData} 
          onBack={() => setCurrentStep(2)}
          onSuccess={() => alert('Zarejestrowano pomyślnie!')}
          onServerError={handleServerError}
        />
      )}
    </main>
  );
}