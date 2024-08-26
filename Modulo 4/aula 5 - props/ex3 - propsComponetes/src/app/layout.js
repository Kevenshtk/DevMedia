import "./globals.css";

export const metadata = {
  title: "BarberShop",
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