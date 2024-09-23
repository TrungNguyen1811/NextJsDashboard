import '@/app/ui/global.css';
import { inter } from '../ui/font';
import SideNav from '@/app/ui/dashboard/sidenav';
// export const experimental_ppr = true;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-row antialiased`}>
        <SideNav />
        {children}
      </body>
    </html>
  );
}
