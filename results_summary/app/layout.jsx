import '@styles/globals.css';

export const metadata = {
  title: 'Results Summary Component',
  description: 'Frontend Mentor challenge',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="font-hanken min-h-screen grid place-items-center">
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
