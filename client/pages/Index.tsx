import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FileUpload from "@/components/FileUpload";
import AnalysisResults from "@/components/AnalysisResults";
import InterviewSimulator from "@/components/InterviewSimulator";
import JobRecommendations from "@/components/JobRecommendations";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FileUpload />
        <AnalysisResults />
        <InterviewSimulator />
        <JobRecommendations />
      </main>
      <Footer />
    </div>
  );
}
