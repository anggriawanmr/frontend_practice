import '@styles/globals.css';

export const metadata = {
  title: 'Age Calculator',
  description: 'Frontend Mentor challenge',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="">
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
