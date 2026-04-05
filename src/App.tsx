import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import Servers from "./pages/Servers";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "wouter";

// حذف الـ Toaster و TooltipProvider مؤقتاً
const Toaster = () => null;
const TooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/servers"} component={Servers} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
