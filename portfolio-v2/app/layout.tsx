import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Riya Singh — Full-Stack Developer & Cybersecurity Professional',description:'Explore WebShield, PrivacyGuard and freelance web projects by Riya Singh, a full-stack developer and cybersecurity professional in Bengaluru.',robots:{index:false,follow:false},icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>;}
