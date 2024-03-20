import Link from 'next/link';


export default function Navbar({children}: {children: React.ReactNode}) {
    return (
        <nav>
            {children}
        </nav>
    );
}