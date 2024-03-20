import  Link from 'next/link';

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
        <ul>
            <li><Link href="/contactus/career">Looking for a career</Link></li>
            <li><Link href="/contactus/business">Business Enquiry</Link></li>
          </ul>
          {children}
        </>
    );
  }
  