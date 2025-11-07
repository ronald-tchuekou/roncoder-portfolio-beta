"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  attribute?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  systemTheme: "dark" | "light";
  resolvedTheme: "dark" | "light";
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  systemTheme: "light",
  resolvedTheme: "light",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  disableTransitionOnChange = false,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [systemTheme, setSystemTheme] = useState<"dark" | "light">("light");
  const [mounted, setMounted] = useState(false);

  // Get system theme preference
  const getSystemTheme = (): "dark" | "light" => {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  // Apply theme to document with transition handling
  const applyTheme = useCallback(
    (newTheme: "dark" | "light") => {
      const root = window.document.documentElement;

      if (disableTransitionOnChange) {
        root.style.setProperty("transition", "none");
        root.classList.remove("light", "dark");
        root.classList.add(newTheme);
        // Force a reflow
        // root.offsetHeight
        root.style.removeProperty("transition");
      } else {
        root.classList.remove("light", "dark");
        root.classList.add(newTheme);
      }

      // Update color-scheme
      root.style.colorScheme = newTheme;
    },
    [disableTransitionOnChange],
  );

  // Resolve the actual theme to apply
  const resolvedTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    // Set mounted state
    setMounted(true);

    // Get initial system theme
    const initialSystemTheme = getSystemTheme();
    setSystemTheme(initialSystemTheme);

    // Load saved theme from localStorage
    try {
      const savedTheme = localStorage.getItem(storageKey) as Theme;
      if (savedTheme && ["dark", "light", "system"].includes(savedTheme)) {
        setTheme(savedTheme);
      }
    } catch (e) {
      console.error(e);
      // localStorage not available
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const newSystemTheme = e.matches ? "dark" : "light";
      setSystemTheme(newSystemTheme);
      if (theme === "system") {
        applyTheme(newSystemTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [storageKey, theme, applyTheme]);

  useEffect(() => {
    if (!mounted) return;

    const themeToApply = theme === "system" ? systemTheme : theme;

    // Add a small delay to ensure smooth transitions
    requestAnimationFrame(() => {
      applyTheme(themeToApply);
    });
  }, [theme, systemTheme, mounted, applyTheme]);

  // Prevent flash of incorrect theme
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <ThemeProviderContext.Provider
      {...props}
      value={{
        theme,
        setTheme(newTheme: Theme) {
          try {
            localStorage.setItem(storageKey, newTheme);
          } catch (e) {
            console.error(e);
            // localStorage not available
          }
          setTheme(newTheme);
        },
        systemTheme,
        resolvedTheme,
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
