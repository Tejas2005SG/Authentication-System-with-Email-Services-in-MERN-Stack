import React from 'react'
import { motion } from "framer-motion";
import Input from "../Input/Input.jsx";
import { useState } from 'react';
import { User, Mail, Lock, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrength from '../PasswordStrenght/PasswordStrenght.jsx';
import { useAuthStore } from "../Store/AuthStore.js";
import toast from 'react-hot-toast';
// import { useNavigate } from "react-router-dom"

function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate();

    const { signup, error, isLoading } = useAuthStore();

    const handleSignUp = async (evt) => {
        evt.preventDefault();
        if(password!==confirmPassword){
            const error = "Passwords do not match"
            toast.error(error)
        }
        try {
            await signup(email, password, name, confirmPassword);
            navigate("/verify-email");

        } catch (error) {
            // throw error (`Something went wrong`);
            
        }
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
			overflow-hidden'
        >
 {/* <Link to={/home} className='text-blue-500 text-center p-4 hover:underline'>Back To Home Page</Link> */}
            <div className='p-8'>
               
                <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-skyd-500 text-transparent bg-clip-text'>
                    Create Account
                </h2>
                <form onSubmit={handleSignUp}>
                    <Input
                        icon={User}
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(evt) => setName(evt.target.value)}
                    />

                    <Input
                        icon={Mail}
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(evt) => setEmail(evt.target.value)}
                    />

                    <Input
                        icon={Lock}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(evt) => setPassword(evt.target.value)}
                    />
                     <Input
                        icon={Lock}
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(evt) => setConfirmPassword(evt.target.value)}
                    />
                    {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}

                   {/* { toast.error(error)} */}
                    <PasswordStrength password={password} />

                    <motion.button
                        className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-sky-600 text-white 
						font-bold rounded-lg shadow-lg hover:from-blue-600
						hover:to-sky-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200'
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type='submit'
                        disabled={isLoading}

                    >
                        {isLoading ? <Loader className='animate-spin mx-auto' size={24}/> : "Sign Up"}
                    </motion.button>
                </form>
            </div>

            <div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center'>
                <p className='text-sm text-gray-400'>
                    Already have an account?{" "}
                    <Link to={"/login"} className='text-blue-400 hover:underline'>
                        Login
                    </Link>
                </p>
            </div>


        </motion.div>
    )
}

export default Signup