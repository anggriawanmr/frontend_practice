import '@styles/globals.css';

export const metadata = {
  title: 'Multi Step Form',
  description: 'Frontend Mentor challenge',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
