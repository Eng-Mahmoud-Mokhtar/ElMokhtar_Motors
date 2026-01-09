
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import logoFavicon from "./app/components/figma/freepik-gradient-professional-autofix-mechanic-logo-202601082314247GPe-removebg-preview.png";

  // Set English tab title and favicon (logo)
  document.title = "Al Mokhtar Motors";
  // Add multiple favicon link sizes so browsers can pick a larger icon when available
  const setFavicons = (href: string) => {
    const head = document.getElementsByTagName('head')[0];

    // Remove existing icon links
    const existing = Array.from(document.querySelectorAll("link[rel~='icon']"));
    existing.forEach((el) => el.parentNode?.removeChild(el));

    const sizes = ["16x16", "32x32", "64x64"];
    sizes.forEach((s) => {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/png';
      link.sizes = s;
      link.href = href;
      head.appendChild(link);
    });

    // Also add an apple-touch-icon for some platforms
    const apple = document.createElement('link');
    apple.rel = 'apple-touch-icon';
    apple.href = href;
    head.appendChild(apple);
  };
  setFavicons(logoFavicon);

  createRoot(document.getElementById("root")!).render(<App />);
  