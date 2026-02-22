import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { TerminalProvider } from '@/context/TerminalContext';

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Krishan Samarawickrama | Terminal Portfolio',
  description: 'Software Engineer portfolio — an interactive terminal experience. Type commands to explore skills, experience, projects, and more.',
  keywords: ['software engineer', 'portfolio', 'terminal', 'krishan', 'web developer', 'full stack'],
  authors: [{ name: 'Krishan Samarawickrama' }],
  openGraph: {
    title: 'Krishan Samarawickrama | Terminal Portfolio',
    description: 'Interactive terminal portfolio — explore my skills, experience, and projects through a CLI interface.',
    url: 'https://krishan.run',
    siteName: 'krishan.run',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishan Samarawickrama | Terminal Portfolio',
    description: 'Interactive terminal portfolio — explore my skills, experience, and projects through a CLI interface.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="font-mono antialiased">
        <TerminalProvider>
          {children}
        </TerminalProvider>
        <noscript>
          <div style={{ padding: '2rem', fontFamily: 'monospace', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Krishan Samarawickrama — Software Engineer</h1>
            <p>This interactive terminal portfolio requires JavaScript.</p>
            <h2>About</h2>
            <p>Software Engineer with a passion for building elegant, performant, and user-centric applications.</p>
            <h2>Skills</h2>
            <p>TypeScript, JavaScript, Python, React, Next.js, Node.js, PostgreSQL, Docker, AWS</p>
            <h2>Contact</h2>
            <p>Email: hello@krishan.run | GitHub: github.com/krishan | LinkedIn: linkedin.com/in/krishan</p>
          </div>
        </noscript>
      </body>
    </html>
  );
}
