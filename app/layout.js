import "./globals.scss";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "News App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="Headbar">
          <Header />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
