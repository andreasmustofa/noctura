"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./Logo.module.scss";
import { SpacingToken } from "../types";

const sizeMap: Record<string, SpacingToken> = {
  xs: "20",
  s: "24",
  m: "32",
  l: "40",
  xl: "48",
};

interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  size?: "xs" | "s" | "m" | "l" | "xl";
  style?: React.CSSProperties;
  wordmark?: boolean;
  icon?: boolean;
  href?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = "m",
  wordmark = true,
  icon = true,
  href = "/",
  className,
  style,
  ...props
}) => {
  useEffect(() => {
    if (!icon && !wordmark) {
      console.warn(
        "Both 'icon' and 'wordmark' props are set to false. The logo will not render any content."
      );
    }
  }, [icon, wordmark]);

  const owlIcon = (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="32" fill="#FFF" />
      <circle cx="24" cy="24" r="8" fill="#FFF" />
      <circle cx="40" cy="24" r="8" fill="#FFF" />
      <circle cx="24" cy="24" r="4" fill="#FFF" />
      <circle cx="40" cy="24" r="4" fill="#FFF" />
      <path
        d="M20 40C20 35.58 24.58 32 29 32H35C39.42 32 44 35.58 44 40"
        stroke="#FFF"
        strokeWidth="2"
      />
    </svg>
  );

  const owlWordmark = (
    <svg viewBox="0 0 200 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#FFF"
        stroke="red"
        fontSize="68"
      >
        1010 1100
      </text>
    </svg>
  );

  return (
    <Link
      className={classNames("radius-l", "flex", className)}
      style={{ height: "fit-content", ...style }}
      href={href}
      aria-label="Trademark"
      {...props}
    >
      {icon && (
        <div
          style={{ height: `var(--static-space-${sizeMap[size]})` }}
          className={styles.icon}
        >
          {owlIcon}
        </div>
      )}
      {wordmark && (
        <div
          style={{ height: `var(--static-space-${sizeMap[size]})` }}
          className={styles.type}
        >
          {owlWordmark}
        </div>
      )}
    </Link>
  );
};

Logo.displayName = "Logo";

export { Logo };
