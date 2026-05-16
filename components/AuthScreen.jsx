'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthScreen({ mode }) {
  const isRegister = mode === 'register';
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-midnight">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Indian palace landscape at sunrise"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-midnight/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-midnight/40" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col px-6 py-6 md:px-10 lg:px-14">
        <header className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-ivory transition-colors duration-300 hover:text-saffron">
            <BrandMark />
            <span className="font-sans text-xs font-medium tracking-[0.3em]">
              VISIT INDIA
            </span>
          </Link>

          <Link
            href={isRegister ? '/signin' : '/register'}
            className="border border-ivory/20 px-5 py-3 font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-ivory transition-colors duration-300 hover:border-saffron hover:text-saffron"
          >
            {isRegister ? 'Sign In' : 'Join'}
          </Link>
        </header>

        <section className="flex flex-1 items-center py-10">
          <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-5">
                <div className="h-px w-12 bg-ivory/40" />
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-ivory/60">
                  {isRegister ? 'Join The Journey' : 'Member Access'}
                </span>
              </div>

              <h1 className="max-w-xl font-serif text-5xl font-light leading-none text-ivory md:text-7xl">
                {isRegister ? (
                  <>
                    Join the <span className="italic text-saffron">journey</span>
                  </>
                ) : (
                  <>
                    Welcome <span className="italic text-saffron">back</span>
                  </>
                )}
              </h1>

              <p className="mt-6 max-w-lg font-serif text-lg italic leading-relaxed text-ivory/70 md:text-xl">
                {isRegister
                  ? 'Join to save itineraries, keep trip notes, and hear about private departures first.'
                  : 'Sign in to review your saved route, traveler details, and upcoming departures.'}
              </p>
            </div>

            <div className="glass-panel w-full rounded-lg p-6 md:p-8">
              <div className="mb-8">
                <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.3em] text-ivory/45">
                  {isRegister ? 'New Member' : 'Member Sign In'}
                </p>
                <h2 className="font-serif text-3xl leading-tight text-ivory">
                  {isRegister ? 'Join' : 'Sign in'}
                </h2>
              </div>

              <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
                {isRegister && (
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="First Name" placeholder="Anjali" />
                    <Field label="Last Name" placeholder="Sharma" />
                  </div>
                )}

                <Field label="Email" type="email" placeholder="you@example.com" />

                <PasswordField
                  label="Password"
                  placeholder={isRegister ? 'At least 8 characters' : 'Enter your password'}
                  visible={showPassword}
                  onToggle={() => setShowPassword((current) => !current)}
                />

                {isRegister && (
                  <PasswordField
                    label="Confirm Password"
                    placeholder="Repeat your password"
                    visible={showConfirmPassword}
                    onToggle={() => setShowConfirmPassword((current) => !current)}
                  />
                )}

                {isRegister ? (
                  <label className="flex items-start gap-3 text-sm text-ivory/65">
                    <input
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 border border-ivory/30 bg-transparent accent-[#D9A441]"
                    />
                    <span className="leading-relaxed">
                      I agree to the terms and privacy policy for trip planning and member updates.
                    </span>
                  </label>
                ) : (
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <label className="flex items-center gap-3 text-ivory/65">
                      <input
                        type="checkbox"
                        className="h-4 w-4 border border-ivory/30 bg-transparent accent-[#D9A441]"
                      />
                      <span>Remember me</span>
                    </label>
                    <button
                      type="button"
                      className="font-sans text-xs uppercase tracking-[0.2em] text-saffron transition-opacity duration-300 hover:opacity-75"
                    >
                      Forgot password
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  className="flex h-14 w-full items-center justify-center bg-saffron font-sans text-xs font-semibold uppercase tracking-[0.3em] text-midnight transition-colors duration-300 hover:bg-ivory"
                >
                  {isRegister ? 'Join Now' : 'Sign In'}
                </button>
              </form>

              <p className="mt-8 text-center font-serif text-base italic text-ivory/60">
                {isRegister ? 'Already have an account?' : 'New to Visit India?'}{' '}
                <Link
                  href={isRegister ? '/signin' : '/register'}
                  className="text-saffron transition-opacity duration-300 hover:opacity-75"
                >
                  {isRegister ? 'Sign in' : 'Join'}
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Field({ label, type = 'text', placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block font-sans text-[10px] uppercase tracking-[0.25em] text-ivory/45">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-12 w-full border-b border-ivory/20 bg-transparent font-sans text-sm text-ivory placeholder:text-ivory/25 focus:border-saffron focus:outline-none"
      />
    </label>
  );
}

function PasswordField({ label, placeholder, visible, onToggle }) {
  return (
    <label className="block">
      <span className="mb-2 block font-sans text-[10px] uppercase tracking-[0.25em] text-ivory/45">
        {label}
      </span>
      <span className="relative block">
        <input
          type={visible ? 'text' : 'password'}
          placeholder={placeholder}
          className="h-12 w-full border-b border-ivory/20 bg-transparent pr-12 font-sans text-sm text-ivory placeholder:text-ivory/25 focus:border-saffron focus:outline-none"
        />
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-ivory/45 transition-colors duration-300 hover:text-saffron"
          aria-label={visible ? 'Hide password' : 'Show password'}
        >
          <EyeIcon open={visible} />
        </button>
      </span>
    </label>
  );
}

function BrandMark() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function EyeIcon({ open }) {
  return open ? (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
      <path d="M3 3l18 18" />
    </svg>
  ) : (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
