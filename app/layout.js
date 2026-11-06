

import "./globals.css";

export const metadata = {
  title: "KHOJ GLOBAL | Discover Indian Brands",
  description:
    "Discover Indian brands, craftsmanship and stories from across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}