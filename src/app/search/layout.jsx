import SearchHeader from '@/components/SearchHeader';
import './../globals.css';

export const metadata = {
  title: 'Google Clone Next js 13',
  description: 'Google clone created with Next js 13',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function SearchLayout({ children }) {
  return (
    <>
      <div>
        <SearchHeader />
        {children}
      </div>
    </>
  );
}
