import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';

const plugJakarata = Plus_Jakarta_Sans({
  subsets: ['latin'],
  fallback: [
    'Plus Jakarta Sans Fallback',
    'Segoe UI', // Widely available on Windows
    'Tahoma', // Another common font on Windows
    'Geneva', // Available on macOS
    'Verdana', // Available on most systems
    'sans-serif', // Fallback generic sans-serif],
  ],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'CarePulse',
  description: 'Healthcare management system',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plugJakarata.className} antialiased min-h-screen bg-primary`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
