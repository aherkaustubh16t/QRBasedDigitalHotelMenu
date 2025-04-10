import React from "react";
import AnimatedText from "../components/AnimatedText";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-600 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-4">
          <AnimatedText prefix={"Scan"} words={["Eat", "It"]} />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
