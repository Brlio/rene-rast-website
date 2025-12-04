import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Career from "@/pages/Career";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Partners from "@/pages/Partners";
import Stats from "@/pages/Stats";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/career"} component={Career} />
      <Route path={"/stats"} component={Stats} />
      <Route path={"/partners"} component={Partners} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
