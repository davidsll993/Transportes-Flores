"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface QuoteState {
  step: number;
  origen: string;
  destino: string;
  tipoCarga: string;
  peso: string;
  fecha: string;
}

interface QuoteContextType {
  quoteData: QuoteState;
  setQuoteData: React.Dispatch<React.SetStateAction<QuoteState>>;
  nextStep: () => void;
  prevStep: () => void;
  resetQuote: () => void;
}

const initialState: QuoteState = {
  step: 1,
  origen: "",
  destino: "",
  tipoCarga: "",
  peso: "",
  fecha: "",
};

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [quoteData, setQuoteData] = useState<QuoteState>(initialState);

  const nextStep = () => setQuoteData((prev) => ({ ...prev, step: prev.step + 1 }));
  const prevStep = () => setQuoteData((prev) => ({ ...prev, step: Math.max(1, prev.step - 1) }));
  const resetQuote = () => setQuoteData(initialState);

  return (
    <QuoteContext.Provider value={{ quoteData, setQuoteData, nextStep, prevStep, resetQuote }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
}
