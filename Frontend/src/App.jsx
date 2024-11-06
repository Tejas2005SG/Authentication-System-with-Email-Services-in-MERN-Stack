import React, {  useEffect } from 'react'
import FloatingShape from './Components/Floating-Shapes/Floating-Shapes.jsx';
import { Routes, Route, Navigate } from "react-router-dom"
import SignupPage from "./Components/Signup-Page/Signup.jsx";
import LoginPage from "./Components/Login-Page/Login.jsx";
import HomePage from "./Components/Dashboard-Page/Dashboard.jsx";
import EmailVerificationPage from "./Components/EmailVerificationPage/EmailVerificationPage.jsx";
import ForgotPasswordPage  from './Components/Forgot-Password/ForgotPassword.jsx';
import ResetPasswordPage from './Components/Reset-Password/ResetPassword.jsx';
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './Components/Store/AuthStore.js';



const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	if (!user.isVerified) {
		return <Navigate to='/verify-email' replace />;
	}

	return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated && user.isVerified) {
		return <Navigate to='/' replace />;
	}

	return children;
};


function App() {

  const { isCheckingAuth, checkAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	// if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div
      className='min-h-screen bg-gradient-to-br
    from-gray-900 via-blue-900 to-sky-900 flex items-center justify-center relative overflow-hidden'
    >
      <FloatingShape color='bg-blue-500' size='w-64 h-64' top='-5%' left='10%' delay={0} />
      <FloatingShape color='bg-sky-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
      <FloatingShape color='bg-cyan-500' size='w-32 h-32' top='40%' left='-10%' delay={2} />

      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
          <HomePage/>
        </ProtectedRoute>
        } />
        <Route path='/signup' element={
          <RedirectAuthenticatedUser>
							<SignupPage />
              </RedirectAuthenticatedUser>
        } />
        <Route path='/login' element={
           <RedirectAuthenticatedUser>
           <LoginPage />
           </RedirectAuthenticatedUser>
        } />
        <Route path='/verify-email' element={<EmailVerificationPage />} />

        <Route
					path='/forgot-password'
					element={
						<RedirectAuthenticatedUser>
							<ForgotPasswordPage />
						</RedirectAuthenticatedUser>
					}
				/>

				<Route
					path='/reset-password/:token'
					element={
						<RedirectAuthenticatedUser>
							<ResetPasswordPage />
						</RedirectAuthenticatedUser>
					}
				/>
				{/* catch all routes */}
				<Route path='*' element={<Navigate to='/' replace />} />
      </Routes>

      <Toaster />

    </div>
  )
}

export default App