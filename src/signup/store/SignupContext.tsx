import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';
import React from 'react';

interface License {
  licenseName: string;
  licenseNumber: string;
  licenseGrade: string;
}

interface OptionalData {
  career: string;
  description: string;
}

interface InformationData {
  hasDementiaTraining: boolean;
  toiletingAssistance: string[];
  feedingAssistance: string[];
  mobilityAssistance: string[];
  dailyLivingAssistance: string[];
  licenses: License[];
}

interface SignupData {
  loginId: string;
  password: string;
  name: string;
  phoneNumber: string;
  address: string;
  hasCar: boolean;
  profileImage: File | string | null;
  information: InformationData;
  optional: OptionalData;
}

interface SignupContextType {
  signupData: SignupData;
  setSignupData: Dispatch<SetStateAction<SignupData>>;
}

const SignupContext = createContext<SignupContextType | undefined>(undefined);

export const SignupProvider = ({ children }: { children: React.ReactNode }) => {
  const [signupData, setSignupData] = useState<SignupData>({
    loginId: '',
    password: '',
    name: '',
    phoneNumber: '',
    address: '',
    hasCar: false,
    profileImage: null,
    information: {
      hasDementiaTraining: true,
      toiletingAssistance: [],
      feedingAssistance: [],
      mobilityAssistance: [],
      dailyLivingAssistance: [],
      licenses: [],
    },
    optional: {
      career: 'NONE',
      description: '',
    },
  });

  return <SignupContext.Provider value={{ signupData, setSignupData }}>{children}</SignupContext.Provider>;
};

export const useSignupContext = () => {
  const context = useContext(SignupContext);
  if (!context) {
    throw new Error('useSignupContext must be used within a SignupProvider');
  }
  return context;
};
