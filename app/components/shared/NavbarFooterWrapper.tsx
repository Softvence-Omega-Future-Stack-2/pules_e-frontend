"use client"
import { usePathname } from "next/navigation";
import LandingNavbar from "./LandingNavbar";
import LandingFooter from "./LandingFooter";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function NavbarFooterWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isLandingPage = pathname === "/";
  const isDashboard = pathname.startsWith("/dashboard"); 
const isShopDetail = pathname.startsWith("/site/shop/");

  if (isDashboard) {
    return <>{children}</>;
  }


  if (isLandingPage) {
    return (
      <>
        <LandingNavbar />
        {children}
        <LandingFooter />
      </>
    );
  }


  return (
    <>
      <Navbar />
      {children}
      <LandingFooter />
    </>
  );
}





// "use client";

// import { usePathname } from "next/navigation";

// // import Footer from "./Footer";
// // import Navbar from "./Navbar";
// import LandingNavbar from "./LandingNavbar";
// import LandingFooter from "./LandingFooter";

// export default function NavbarFooterWrapper({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const isDashboard = pathname.startsWith("/dashboard");

//   if (isDashboard) return <>{children}</>;

//   return (
//     <>
//       {/* <Navbar />
//       {children}
//       <Footer /> */}

//       <LandingNavbar/>
//       {children}
//       <LandingFooter />
//     </>
//   );
// }