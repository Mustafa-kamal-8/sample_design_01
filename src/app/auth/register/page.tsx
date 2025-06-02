"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate registration
    setTimeout(() => {
      setIsLoading(false);
      router.push("/auth/verify-otp");
    }, 1500);
  };

  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] shadow-lg rounded-xl bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Create Free account
          </h1>
        </div>

        <div className="grid gap-6">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Input
                  id="name"
                  placeholder="Name"
                  type="text"
                  autoCapitalize="none"
                  autoCorrect="off"
                  disabled={isLoading}
                  required
                  className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
                />
              </div>

              <div className="grid gap-2">
                <Input
                  id="email"
                  placeholder="Email"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isLoading}
                  required
                  className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
                />
              </div>

              <div className="grid gap-2">
                <div className="relative">
                  <Input
                    id="password"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    autoCapitalize="none"
                    autoComplete="new-password"
                    disabled={isLoading}
                    required
                    className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
              </div>

              <Button disabled={isLoading}>
                {isLoading && (
                  <svg
                    className="mr-2 h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                )}
                Create Account
              </Button>
            </div>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4 px-2 dark:text-gray-400">
            By clicking on “Create Account”, you agree to our{" "}
            <Link href="/terms" className="hover:text-primary dark:hover:text-white">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link href="/license" className="hover:text-primary dark:hover:text-white">
              License Terms
            </Link>
            . In our{" "}
            <Link href="/privacy-policy" className="hover:text-primary dark:hover:text-white">
              Privacy Policy
            </Link>
            , we explain how we process your personal data and what rights you
            have.
          </p>
        </div>

        <p className="px-8 text-center text-sm font-bold text-gray-800 dark:text-gray-200">
          Already have an account? <br />
          <Link
            href="/auth/login"
            className="text-primary underline-offset-4 hover:underline dark:text-blue-400"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
