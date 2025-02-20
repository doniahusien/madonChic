import React from 'react';
import imgSrc from '../../../../public/login.png';
import Link from 'next/link';
import LoginForm from '@/components/auth/LoginForm';
import AuthWrapper from '@/components/auth/AuthWrapper';
const LoginPage = () => {
    return (
        <AuthWrapper imgSrc={imgSrc} header="Login">
                <LoginForm />
                <h2 className="text-center mt-5 text-gray-600">
                    Don't have an account?{" "}
                    <Link href="/signup"><span className="text-blue-600 hover:underline cursor-pointer">Sign Up</span></Link>
                </h2>
        </AuthWrapper>
    );
};

export default LoginPage;
