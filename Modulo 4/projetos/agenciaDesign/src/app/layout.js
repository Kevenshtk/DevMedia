import "./globals.css";

export const metadata = {
  title: "M - Agência Digital",
  description: "",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}