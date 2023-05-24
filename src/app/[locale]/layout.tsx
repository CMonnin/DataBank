import { Sidebar } from '@/components/Sidebar';
import { Inter } from 'next/font/google';
import { clsx } from 'clsx';
import '@/styles/index.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Data Bank',
  description: 'Minimum Viable Product'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'flex')}>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}