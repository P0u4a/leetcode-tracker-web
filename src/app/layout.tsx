import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`min-h-screen bg-background font-sans antialiased ${inter.className}`}
            >
                <header className="container z-40 bg-background">
                    <div className="float-right h-20 py-6">
                        <nav>
                            <Link
                                href="/login"
                                className={cn(
                                    buttonVariants({
                                        variant: 'secondary',
                                        size: 'sm',
                                    }),
                                    'px-4'
                                )}
                            >
                                Login
                            </Link>
                        </nav>
                    </div>
                </header>

                {children}
            </body>
        </html>
    );
}