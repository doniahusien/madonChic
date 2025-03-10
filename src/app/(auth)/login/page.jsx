"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import AuthWrapper from "@/components/auth/AuthWrapper";
import GuestRoute from "@/components/GuestRoute";
import imgSrc from "../../../../public/login.png";

const LoginForm = dynamic(() => import("@/components/auth/LoginForm"), { ssr: false });

const LoginPage = () => {
  return (
    <GuestRoute>
      <AuthWrapper imgSrc={imgSrc} header="Login">
        <LoginForm />
        <h2 className="text-center mt-5 text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup">
            <span className="text-blue-600 hover:underline cursor-pointer">Sign Up</span>
          </Link>
        </h2>
      </AuthWrapper>
    </GuestRoute>
  );
};

export default LoginPage;
