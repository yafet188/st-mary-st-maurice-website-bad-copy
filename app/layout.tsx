// Import the Footer and NavBar components, as well as global CSS styles
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";

// Define the props type for the RootLayout component
type RootLayoutProps = {
  children: React.ReactNode;
};

// RootLayout is the main layout component for the app
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    // Set the language of the document to English
    <html lang="en">
      <body>
        {/* Render the navigation bar at the top */}
        <NavBar />
        {/* Main content area where page content will be injected */}
        <main>{children}</main>
        {/* Render the footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
