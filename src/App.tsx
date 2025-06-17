import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AuthProvider } from '@/context/AuthContext';
import Navigation from '@/components/Navigation';
import HomePage from '@/pages/HomePage';
import AnalysisPage from '@/pages/AnalysisPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import ForgotPasswordPage from '@/pages/ForgotPasswordPage';
import ResetPasswordPage from '@/pages/ResetPasswordPage';
import OnAuthSuccessPage from '@/pages/OnAuthSuccessPage';
import FeedbackPage from '@/pages/FeedbackPage';
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} data-id="u8lihhh6l" data-path="src/App.tsx">
      <TooltipProvider data-id="7hbtoixow" data-path="src/App.tsx">
        <AuthProvider data-id="2ffb6k7zq" data-path="src/App.tsx">
          <Router data-id="9ckuo0lce" data-path="src/App.tsx">
            <div className="min-h-screen" data-id="uynz1tmeh" data-path="src/App.tsx">
              <Navigation data-id="rbzmeawy3" data-path="src/App.tsx" />
              <Routes data-id="ss1yizkvp" data-path="src/App.tsx">
                <Route path="/" element={<HomePage data-id="rv6r1uk8t" data-path="src/App.tsx" />} data-id="cxk3jen2e" data-path="src/App.tsx" />
                <Route path="/analysis" element={<AnalysisPage data-id="e87k9fv73" data-path="src/App.tsx" />} data-id="dyqfuypke" data-path="src/App.tsx" />
                <Route path="/login" element={<LoginPage data-id="qxqv3z0z6" data-path="src/App.tsx" />} data-id="v1fgqzefo" data-path="src/App.tsx" />
                <Route path="/register" element={<RegisterPage data-id="dvo3pjyg4" data-path="src/App.tsx" />} data-id="h33qqhl4d" data-path="src/App.tsx" />
                <Route path="/forgot-password" element={<ForgotPasswordPage data-id="z38bmy4a0" data-path="src/App.tsx" />} data-id="7j2998hah" data-path="src/App.tsx" />
                <Route path="/resetpassword" element={<ResetPasswordPage data-id="ks4randog" data-path="src/App.tsx" />} data-id="sqkigkjtr" data-path="src/App.tsx" />
                <Route path="/onauthsuccess" element={<OnAuthSuccessPage data-id="eftpa2pr7" data-path="src/App.tsx" />} data-id="up1rdw5g2" data-path="src/App.tsx" />
                <Route path="/feedback" element={<FeedbackPage data-id="dknihgkm6" data-path="src/App.tsx" />} data-id="21s7e2iig" data-path="src/App.tsx" />
                <Route path="*" element={<NotFound data-id="d1xzuedko" data-path="src/App.tsx" />} data-id="odwesyojh" data-path="src/App.tsx" />
              </Routes>
            </div>
            <Toaster data-id="81fw1hn7h" data-path="src/App.tsx" />
          </Router>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>);

}

export default App;