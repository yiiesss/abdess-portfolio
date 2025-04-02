
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Toggle 
      variant="outline" 
      size="sm" 
      aria-label="Toggle theme"
      pressed={theme === "dark"}
      onPressedChange={toggleTheme}
      className="border-primary/20 hover:bg-primary/10"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      <span className="sr-only">{theme === "dark" ? "Light mode" : "Dark mode"}</span>
    </Toggle>
  );
}
