"use client";
import React from "react";
import clsx from "clsx";

const Appbutton = ({
  variant = "primary",
  size = "lg",
  fullWidth = false,
  leftIcon,
  rightIcon,
  loading = false,
  disabled,
  children,
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "bg-brand-emerald hover:bg-emerald-600 text-white shadow-lg shadow-emerald-200",
    secondary:
      "bg-white border border-slate-200 hover:border-slate-300 text-slate-700 shadow-sm",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-base rounded-xl",
  };

  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {!loading && leftIcon}

      {loading ? "Loading..." : children}

      {!loading && rightIcon}
    </button>
  );
};

export default Appbutton;
