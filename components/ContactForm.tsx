
"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  Loader2,
  CheckCircle2,
  AlertCircle,
  Send,
} from "lucide-react";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  project_type: string;
  message: string;
};

const PROJECT_TYPES = [
  "Residential Construction",
  "Commercial Infrastructure",
  "Industrial Project",
  "Civil Engineering",
  "Turnkey Solution",
];

const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [statusMessage, setStatusMessage] = useState("");

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setStatus("idle");
    setStatusMessage("");

    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      console.error("EmailJS environment variables are missing.");

      setStatus("error");
      setStatusMessage(
        "The contact form is not configured correctly. Please try again later."
      );

      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          project_type: data.project_type,
          message: data.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");

      setStatusMessage(
        "Thank you for contacting us. Our team will get back to you shortly."
      );

      reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus("error");

      setStatusMessage(
        "We couldn't send your enquiry. Please try again or contact us directly."
      );
    }
  };

  const inputClasses =
    "w-full rounded-md border bg-white px-4 py-3 text-sm text-ink placeholder:text-steel-light focus:outline-none focus:ring-2 focus:ring-amber/60";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5"
    >
      {/* Full Name + Phone Number */}
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Your full name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            className={`${inputClasses} ${
              errors.name
                ? "border-red-400"
                : "border-line"
            }`}
            {...register("name", {
              required: "Please enter your name.",
              minLength: {
                value: 2,
                message:
                  "Name must be at least 2 characters.",
              },
            })}
          />

          {errors.name && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
              <AlertCircle size={13} />
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Phone Number
          </label>

          <input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            className={`${inputClasses} ${
              errors.phone
                ? "border-red-400"
                : "border-line"
            }`}
            {...register("phone", {
              required: "Please enter your phone number.",
              pattern: {
                value: /^[+()\-\s0-9]{7,20}$/,
                message:
                  "Please enter a valid phone number.",
              },
            })}
          />

          {errors.phone && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
              <AlertCircle size={13} />
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Email + Project Type */}
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Email Address */}
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className={`${inputClasses} ${
              errors.email
                ? "border-red-400"
                : "border-line"
            }`}
            {...register("email", {
              required: "Please enter your email address.",
              pattern: {
                value:
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:
                  "Please enter a valid email address.",
              },
            })}
          />

          {errors.email && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
              <AlertCircle size={13} />
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Project Type */}
        <div>
          <label
            htmlFor="project_type"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Project Type
          </label>

          <select
            id="project_type"
            defaultValue=""
            aria-invalid={!!errors.project_type}
            className={`${inputClasses} ${
              errors.project_type
                ? "border-red-400"
                : "border-line"
            }`}
            {...register("project_type", {
              required: "Please select a project type.",
            })}
          >
            <option value="" disabled>
              Select project type
            </option>

            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          {errors.project_type && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
              <AlertCircle size={13} />
              {errors.project_type.message}
            </p>
          )}
        </div>
      </div>

      {/* Project Details */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Project Details
        </label>

        <textarea
          id="message"
          rows={6}
          placeholder="Tell us about your project, location, approximate scope, timeline and any specific requirements."
          aria-invalid={!!errors.message}
          className={`${inputClasses} resize-none ${
            errors.message
              ? "border-red-400"
              : "border-line"
          }`}
          {...register("message", {
            required:
              "Please share a few details about your project.",
            minLength: {
              value: 20,
              message:
                "Please provide at least 20 characters.",
            },
          })}
        />

        {errors.message && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
            <AlertCircle size={13} />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-amber px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-amber-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2
              size={16}
              className="animate-spin"
            />
            Sending...
          </>
        ) : (
          <>
            Send Enquiry
            <Send size={16} />
          </>
        )}
      </button>

      {/* Success Message */}
      {status === "success" && (
        <div
          role="status"
          className="flex items-start gap-2 rounded-md bg-green-50 px-4 py-3 text-sm text-green-700"
        >
          <CheckCircle2
            size={17}
            className="mt-0.5 shrink-0"
          />

          <span>{statusMessage}</span>
        </div>
      )}

      {/* Error Message */}
      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle
            size={17}
            className="mt-0.5 shrink-0"
          />

          <span>{statusMessage}</span>
        </div>
      )}
    </form>
  );
}

