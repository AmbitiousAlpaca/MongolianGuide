import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import DestinationsPage from "@/pages/destinations";
import HowItWorksPage from "@/pages/how-it-works";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/destinations" component={DestinationsPage} />
      <Route path="/how-it-works" component={HowItWorksPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-body text-neutral-dark bg-neutral-light min-h-screen">
        <Router />
        <ScrollToTop />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
