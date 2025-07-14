import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FileUpload from "@/components/FileUpload";
import AnalysisResults from "@/components/AnalysisResults";
import InterviewSimulator from "@/components/InterviewSimulator";
import JobSelection from "@/components/JobSelection";
import Footer from "@/components/Footer";
import { AppProvider } from "@/contexts/AppContext";

export default function Index() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <FileUpload />
          <JobSelection />
          <AnalysisResults />
          <InterviewSimulator />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}
