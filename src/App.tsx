import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Dashboard } from './pages/Dashboard';
import Home from './pages/Home';
import { SignInPage } from './pages/SigninPage';
import { CreateAccountPage } from './pages/CreateAccountPage';
import WeatherPage from './pages/WeatherPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/createaccount" element={<CreateAccountPage />} />
            <Route path="/weather" element={<WeatherPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;