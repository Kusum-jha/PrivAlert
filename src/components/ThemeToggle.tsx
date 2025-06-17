import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setIsDark(!isDark)}
      className="w-10 h-10 p-0" data-id="oujyynotx" data-path="src/components/ThemeToggle.tsx">

      {isDark ?
      <Sun className="h-4 w-4" data-id="yyzkl4vd3" data-path="src/components/ThemeToggle.tsx" /> :

      <Moon className="h-4 w-4" data-id="tgvrubggi" data-path="src/components/ThemeToggle.tsx" />
      }
    </Button>);

};

export default ThemeToggle;