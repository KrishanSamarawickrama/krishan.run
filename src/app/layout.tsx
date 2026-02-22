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
  title: 'krishan.run',
  description: 'Software Engineer portfolio — an interactive terminal experience. Type commands to explore skills, experience, projects, and more.',
  keywords: ['software engineer', 'portfolio', 'terminal', 'krishan', 'web developer', 'full stack'],
  authors: [{ name: 'Krishan Samarawickrama' }],
  openGraph: {
    title: 'krishan.run',
    description: 'Interactive terminal portfolio — explore my skills, experience, and projects through a CLI interface.',
    url: 'https://krishan.run',
    siteName: 'krishan.run',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'krishan.run',
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
            <h1>Krishan Samarawickrama — Senior Technical Lead</h1>
            <p>This interactive terminal portfolio requires JavaScript.</p>
            <h2>About</h2>
            <p>Technical Lead at Rootcode with over 10 years in software development. Skilled in C#, ASP.NET, SQL, Docker, and cloud technologies. Passionate about driving innovation and solving complex problems.</p>
            <h2>Skills</h2>
            <p>C#, .NET, ASP.NET, Azure, Angular, SQL Server, Docker, Power BI</p>
            <h2>Contact</h2>
            <p>Email: Krishan.Samarawickrama@outlook.com | GitHub: github.com/KrishanSamarawickrama | LinkedIn: linkedin.com/in/krishan-samarawickrama</p>
          </div>
        </noscript>
      </body>
    </html>
  );
}
