import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [], // Add any external domains if needed
    unoptimized: false,
  },
  theme: {
    extend: {
      keyframes: {
        dropdownEnter: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'dropdownEnter': 'dropdownEnter 0.15s ease-out forwards'
      }
    }
  }
};

export default nextConfig;
