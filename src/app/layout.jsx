import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Google Clone Next js 13',
  description: 'Google clone created with Next js 13',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='relative min-h-screen'>
        {children}
        <Footer />
      </body>
    </html>
  );
}
