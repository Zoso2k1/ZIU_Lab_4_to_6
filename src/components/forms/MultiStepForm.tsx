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
    <main aria-label="Formularz rejestracji">
      {/* Pasek postępu ARIA */}
      <div 
        role="progressbar" 
        aria-valuemin={1} 
        aria-valuemax={3} 
        aria-valuenow={currentStep}
        aria-label={`Krok ${currentStep} z 3`}
        style={{ height: '10px', background: '#eee', marginBottom: '20px' }}
      >
        <div style={{ width: `${(currentStep / 3) * 100}%`, background: 'blue', height: '100%' }} />
      </div>
  
      <nav aria-label="Menu kroków">
         {/* ... tutaj Twoja lista kroków ... */}
      </nav>
      
      <h2 tabIndex={-1} ref={headingRef}>
        {getStepTitle()} 
      </h2>
      {/* ... reszta kodu ... */}
    </main>
  );
}