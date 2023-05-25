import '@styles/globals.css';

export const metadata = {
  title: 'Sunnyside Agency Landing Page',
  description: 'Frontend Mentor challenge',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="font-barlow">
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
