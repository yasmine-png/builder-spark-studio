import { createContext, useContext, useState, ReactNode } from "react";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  skills: string[];
  description: string;
}

interface AppState {
  // CV Upload State
  uploadedFile: File | null;
  isAnalyzing: boolean;

  // Job Selection State
  selectedJob: Job | null;

  // Results State
  showResults: boolean;
  matchingScore: number | null;
}

interface AppContextType {
  state: AppState;
  uploadFile: (file: File) => void;
  removeFile: () => void;
  analyzeCV: () => Promise<void>;
  selectJob: (job: Job) => void;
  resetApp: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>({
    uploadedFile: null,
    isAnalyzing: false,
    selectedJob: null,
    showResults: false,
    matchingScore: null,
  });

  const uploadFile = (file: File) => {
    setState((prev) => ({
      ...prev,
      uploadedFile: file,
      showResults: false,
      matchingScore: null,
      selectedJob: null,
    }));
  };

  const removeFile = () => {
    setState((prev) => ({
      ...prev,
      uploadedFile: null,
      showResults: false,
      matchingScore: null,
      selectedJob: null,
      isAnalyzing: false,
    }));
  };

  const analyzeCV = async () => {
    if (!state.uploadedFile) return;

    setState((prev) => ({ ...prev, isAnalyzing: true }));

    // Simulate analysis
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setState((prev) => ({ ...prev, isAnalyzing: false }));

    // Scroll to job selection
    document
      .getElementById("job-selection")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const selectJob = (job: Job) => {
    if (!state.uploadedFile) return;

    // Calculate matching score based on job and CV
    const matchingScore = Math.floor(Math.random() * 30) + 70; // 70-100%

    setState((prev) => ({
      ...prev,
      selectedJob: job,
      matchingScore,
      showResults: true,
    }));

    // Scroll to results after a short delay
    setTimeout(() => {
      document
        .getElementById("results")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  const resetApp = () => {
    setState({
      uploadedFile: null,
      isAnalyzing: false,
      selectedJob: null,
      showResults: false,
      matchingScore: null,
    });
  };

  return (
    <AppContext.Provider
      value={{ state, uploadFile, removeFile, analyzeCV, selectJob, resetApp }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
