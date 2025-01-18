export const animations = {
    keyframes: {
      "slide-in-from-right": {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0)" },
      },
      "slide-out-to-right": {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(100%)" },
      },
    },
    animation: {
      "slide-in-from-right": "slide-in-from-right 0.3s ease-out",
      "slide-out-to-right": "slide-out-to-right 0.3s ease-in",
    },
  };
  