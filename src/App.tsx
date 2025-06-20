
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import PythonCourse from "./pages/PythonCourse";
import JavaCourse from "./pages/JavaCourse";
import MathCourse from "./pages/MathCourse";
import TestPrepCourse from "./pages/TestPrepCourse";
import PhysicsTutoring from "./pages/PhysicsTutoring";
import CompetitionTutoring from "./pages/CompetitionTutoring";
import MathTutoring from "./pages/MathTutoring";
import Impact from "./pages/Impact";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/python" element={<PythonCourse />} />
          <Route path="/programs/java" element={<JavaCourse />} />
          <Route path="/programs/mathematics" element={<MathCourse />} />
          <Route path="/programs/test-prep" element={<TestPrepCourse />} />
          <Route path="/programs/physics" element={<PhysicsTutoring />} />
          <Route path="/programs/competition" element={<CompetitionTutoring />} />
          <Route path="/programs/math-tutoring" element={<MathTutoring />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
