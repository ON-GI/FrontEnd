import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

interface License {
  licenseName: string;
  licenseNumber: string;
  licenseGrade: string;
}

interface SignupData {
  loginId: string;
  password: string;
  name: string;
  phoneNumber: string;
  address: string;
  hasCar: boolean;
  profileImage: File | string | null;
  hasDementiaTraining: boolean;
  caregiverLicense: string;
  licenses: License[];
  experienceServices: { [key: string]: string[] };
  experienceServices2: { [key: string]: string[] };
  career: string;
  description: string;
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
    hasDementiaTraining: true,
    caregiverLicense: '',
    licenses: [],
    experienceServices: {},
    experienceServices2: {},
    career: 'NO_EXPERIENCE',
    description: '',
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
