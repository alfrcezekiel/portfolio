// src/components/theme-toggle.tsx
'use client';

import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '@/context/use-theme';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
    className?: string;
    isMobile?: boolean;
}

export function ThemeToggle({ className, isMobile = false }: ThemeToggleProps) {
    const { theme, setTheme } = useTheme();

    // For mobile, show the current theme name and icon
    if (isMobile) {
        return (
            <div className="w-full">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="w-full justify-start px-4 py-2 text-base cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                {theme === 'dark' ? (
                                    <Moon className="h-5 w-5" />
                                ) : theme === 'light' ? (
                                    <Sun className="h-5 w-5" />
                                ) : (
                                    <Monitor className="h-5 w-5" />
                                )}
                                <span>Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
                            </div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align="start"
                        className="w-48"
                        sideOffset={5}
                        alignOffset={-10}
                    >
                        <DropdownMenuItem
                            onClick={() => setTheme('light')}
                            className="cursor-pointer px-4 py-2 text-sm"
                        >
                            <Sun className="mr-3 h-4 w-4" />
                            <span>Light</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => setTheme('dark')}
                            className="cursor-pointer px-4 py-2 text-sm"
                        >
                            <Moon className="mr-3 h-4 w-4" />
                            <span>Dark</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => setTheme('system')}
                            className="cursor-pointer px-4 py-2 text-sm"
                        >
                            <Monitor className="mr-3 h-4 w-4" />
                            <span>System</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        );
    }

    // Desktop version remains the same but with improved accessibility
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                        "relative flex items-center justify-center h-10 w-10 rounded-full cursor-pointer",
                        "hover:bg-gray-200 dark:hover:bg-gray-800",
                        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 focus:ring-gray-400",
                        className
                    )}
                    aria-label="Toggle theme"
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="w-40"
                sideOffset={10}
                alignOffset={0}
            >
                <DropdownMenuItem
                    onClick={() => setTheme('light')}
                    className="cursor-pointer px-3 py-2 text-sm"
                >
                    <Sun className="mr-3 h-4 w-4" />
                    <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme('dark')}
                    className="cursor-pointer px-3 py-2 text-sm"
                >
                    <Moon className="mr-3 h-4 w-4" />
                    <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme('system')}
                    className="cursor-pointer px-3 py-2 text-sm"
                >
                    <Monitor className="mr-3 h-4 w-4" />
                    <span>System</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}