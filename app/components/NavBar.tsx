"use client";

// Imports
import Link from "next/link";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Font setup
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function NavBar() {
  // Get current route and router for navigation
  const pathname = usePathname();
  const router = useRouter();

  // Determine if navbar text should be black based on route
  const useBlackText = [
    "/ContactUs",
    "/AboutUs",
    "/YouthKidsServices",
    "/AdultsMinistries",
    "/CommunityServices",
    "/EducationalServices",
    "/Donation",
    "/JoinAMinistryForm",
    "/Volunteer",
    "/UpcomingEvents",
  ].includes(pathname);

  // Navigation items for the main menu
  const navItems = [
    { text: "MINISTRIES", route: "/AdultsMinistries" },
    { text: "EVENTS", route: "/UpcomingEvents" },
    { text: "ABOUT US", route: "/AboutUs" },
    { text: "CONTACT US", route: "/ContactUs" },
    { text: "DONATION", route: "/Donation" },
    { text: "VOLUNTEER", route: "/Volunteer" },
  ];

  // State for dropdowns and navbar shrink effect
  const [ministriesHovered, setMinistriesHovered] = useState(false);
  const [ministriesTimeout, setMinistriesTimeout] =
    useState<NodeJS.Timeout | null>(null);

  const [shrink, setShrink] = useState(false);
  const [youthHovered, setYouthHovered] = useState(false);
  const [adultsHovered, setAdultsHovered] = useState(false);
  const [educationHovered, setEducationHovered] = useState(false);
  const [communityHovered, setCommunityHovered] = useState(false);

  // Custom navigation handler with delay for animation
  const handleNavigation = (href: string, event: React.MouseEvent) => {
    event.preventDefault();
    setTimeout(() => {
      router.push(href);
    }, 500);
  };

  // Shrink navbar on scroll
  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 15 },
    },
  };

  const glassContainerVariants = {
    hidden: {
      scaleX: 0,
      scaleY: 0.8,
      opacity: 0,
      transformOrigin: "center",
    },
    show: {
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      transformOrigin: "center",
      transition: {
        type: "spring" as const,
        stiffness: 250,
        damping: 18,
        delay: 0.1,
        duration: 0.6,
      },
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: {
        duration: 0.15,
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const submenuVariants = {
    hidden: { opacity: 0, x: 10, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: 10,
      scale: 0.98,
      transition: {
        duration: 0.15,
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -10, y: -10 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring" as const, stiffness: 200, damping: 20 },
    },
    exit: {
      opacity: 0,
      x: -10,
      y: -10,
      transition: { duration: 0.1 },
    },
  };

  // Navbar background class based on shrink state
  const navBgClass = shrink
    ? "bg-dark/90 backdrop-blur-xl shadow-lg"
    : "bg-transparent";

  return (
    <motion.nav
      key={pathname}
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className={`transition-all duration-500 ease-in-out ${
        shrink ? "h-[80px] py-[12px]" : "h-[104.26px] py-[24px]"
      } flex items-center justify-between w-full fixed top-0 left-0 z-[9999] px-[80px] ${navBgClass}`}
    >
      {/* Logo section */}
      <motion.div
        variants={itemVariants}
        className="mr-8"
        animate={{
          scale: shrink ? 0.75 : 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        whileHover={{
          scale: shrink ? 0.85 : 1.1,
          rotate: [0, -5, 5, -5, 0],
          transition: {
            duration: 0.5,
            rotate: {
              repeat: 0,
              duration: 0.5,
            },
          },
        }}
      >
        <Link href="/Home" onClick={(e) => handleNavigation("/Home", e)}>
          <Image
            src="/Images/Logos/NavBarLogo.png"
            alt="logo"
            width={102.31}
            height={78.63}
          />
        </Link>
      </motion.div>

      {/* Main navigation menu */}
      <motion.ul
        variants={glassContainerVariants}
        initial="hidden"
        animate="show"
        className={`flex items-center list-none m-0 p-0 gap-6 transition-all duration-500 ease-in-out ${
          shrink
            ? "bg-transparent h-[37px] px-0 py-0"
            : "bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-3 shadow-2xl ring-1 ring-white/20 h-[53px]"
        }`}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex items-center gap-6"
        >
          {/* Render each nav item, handle dropdown for MINISTRIES */}
          {navItems.map((item) => {
            const isMinistries = item.text === "MINISTRIES";
            const liProps = isMinistries
              ? {
                  onMouseEnter: () => {
                    if (ministriesTimeout) clearTimeout(ministriesTimeout);
                    setMinistriesHovered(true);
                  },
                  onMouseLeave: () => {
                    const timeout = setTimeout(
                      () => setMinistriesHovered(false),
                      150
                    );
                    setMinistriesTimeout(timeout);
                  },
                }
              : {};

            return (
              <motion.li
                key={item.text}
                variants={itemVariants}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative inline-block rounded-xl transition-colors duration-300 hover:bg-[#695532]"
                {...liProps}
              >
                {/* Main nav link */}
                <Link
                  href={item.route}
                  onClick={
                    !isMinistries
                      ? (e) => handleNavigation(item.route, e)
                      : undefined
                  }
                  className={`${
                    outfit.className
                  } flex items-center justify-center gap-1 ${
                    useBlackText
                      ? "text-black hover:text-white"
                      : "text-[#E8E9EB]"
                  } no-underline font-semibold text-sm leading-[21px] tracking-[0.02em] uppercase whitespace-nowrap px-3 py-2 rounded-xl transition-colors duration-200`}
                >
                  {item.text}
                  {/* Dropdown arrow and menu for MINISTRIES */}
                  {isMinistries && (
                    <>
                      <Image
                        src={
                          useBlackText
                            ? ministriesHovered
                              ? "/Images/Icons/ArrowUpWhite.png"
                              : "/Images/Icons/ArrowDownBlack.png"
                            : ministriesHovered
                            ? "/Images/Icons/ArrowUpWhite.png"
                            : "/Images/Icons/ArrowDownWhite.png"
                        }
                        alt="dropdown arrow"
                        width={16}
                        height={16}
                        className={`ml-[4px] transition-transform duration-200`}
                      />

                      {/* Ministries dropdown menu */}
                      <AnimatePresence>
                        {ministriesHovered && (
                          <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                            className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg z-40 origin-top"
                          >
                            {/* Youth submenu */}
                            <motion.li
                              onMouseEnter={() => setYouthHovered(true)}
                              onMouseLeave={() => setYouthHovered(false)}
                              className="relative"
                            >
                              <Link
                                href="/YouthKidsServices"
                                onClick={(e) =>
                                  handleNavigation("/YouthKidsServices", e)
                                }
                                className="flex items-center justify-between px-4 py-3 text-black hover:bg-[#FEFAF1] hover:shadow-md hover:rounded-xl transition-colors duration-200 text-sm font-semibold uppercase tracking-wide"
                              >
                                Youth & Kids Services
                                <Image
                                  src="/Images/Icons/ArrowRightBlack.png"
                                  alt="right arrow"
                                  width={6}
                                  height={6}
                                />
                              </Link>
                              <AnimatePresence>
                                {youthHovered && (
                                  <motion.ul
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={submenuVariants}
                                    className="absolute left-full top-0 ml-2 w-64 bg-white rounded-xl shadow-lg z-50 origin-left"
                                  >
                                    {[
                                      "Sunday School",
                                      "High School",
                                      "Children's Choir",
                                    ].map((label) => (
                                      <motion.li
                                        variants={menuItemVariants}
                                        key={label}
                                      >
                                        <Link
                                          href={`/YouthKidsServices#${label
                                            .toLowerCase()
                                            .replace(/ /g, "-")
                                            .replace(/'/g, "")}`}
                                          onClick={(e) =>
                                            handleNavigation(
                                              `/YouthKidsServices#${label
                                                .toLowerCase()
                                                .replace(/ /g, "-")
                                                .replace(/'/g, "")}`,
                                              e
                                            )
                                          }
                                          className="block px-4 py-3 text-black hover:bg-[#FEFAF1] hover:shadow-lg hover:rounded-xl transition-colors duration-200 text-sm font-medium"
                                        >
                                          {label}
                                        </Link>
                                      </motion.li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </motion.li>
                            {/* Adults submenu */}
                            <motion.li
                              onMouseEnter={() => setAdultsHovered(true)}
                              onMouseLeave={() => setAdultsHovered(false)}
                              className="relative"
                            >
                              <Link
                                href="/AdultsMinistries"
                                onClick={(e) =>
                                  handleNavigation("/AdultsMinistries", e)
                                }
                                className="flex items-center justify-between px-4 py-3 text-black hover:bg-[#FEFAF1] hover:shadow-md hover:rounded-xl transition-colors duration-200 text-sm font-semibold uppercase tracking-wide"
                              >
                                Adults Services
                                <Image
                                  src="/Images/Icons/ArrowRightBlack.png"
                                  alt="right arrow"
                                  width={6}
                                  height={6}
                                />
                              </Link>
                              <AnimatePresence>
                                {adultsHovered && (
                                  <motion.ul
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={submenuVariants}
                                    className="absolute left-full top-0 ml-2 w-64 bg-white rounded-xl shadow-lg z-50 origin-left"
                                  >
                                    {[
                                      "Young Adult Ministries",
                                      "Pope Kyrillos Family Meeting",
                                      "Marriage Preparation",
                                      "Family Services",
                                      "Senior Services",
                                      "Adults Choir",
                                      "Usher Service",
                                    ].map((label) => (
                                      <motion.li
                                        variants={menuItemVariants}
                                        key={label}
                                      >
                                        <Link
                                          href={`/AdultsMinistries#${label
                                            .toLowerCase()
                                            .replace(/ /g, "-")
                                            .replace(/'/g, "")}`}
                                          onClick={(e) =>
                                            handleNavigation(
                                              `/AdultsMinistries#${label
                                                .toLowerCase()
                                                .replace(/ /g, "-")
                                                .replace(/'/g, "")}`,
                                              e
                                            )
                                          }
                                          className="block px-4 py-3 text-black hover:bg-[#FEFAF1] hover:shadow-lg hover:rounded-xl transition-colors duration-200 text-sm font-medium"
                                        >
                                          {label}
                                        </Link>
                                      </motion.li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </motion.li>
                            {/* Education submenu */}
                            <motion.li
                              onMouseEnter={() => setEducationHovered(true)}
                              onMouseLeave={() => setEducationHovered(false)}
                              className="relative"
                            >
                              <Link
                                href="/EducationalServices"
                                onClick={(e) =>
                                  handleNavigation("/EducationalServices", e)
                                }
                                className="flex items-center justify-between px-4 py-3 text-black hover:bg-[#FEFAF1] hover:shadow-md hover:rounded-xl transition-colors duration-200 text-sm font-semibold uppercase tracking-wide"
                              >
                                Educational Services
                                <Image
                                  src="/Images/Icons/ArrowRightBlack.png"
                                  alt="right arrow"
                                  width={6}
                                  height={6}
                                />
                              </Link>
                              <AnimatePresence>
                                {educationHovered && (
                                  <motion.ul
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={submenuVariants}
                                    className="absolute left-full top-0 ml-2 w-64 bg-white rounded-xl shadow-lg z-50 origin-left"
                                  >
                                    {[
                                      {
                                        label: "Let There Be Light",
                                        subtitle: "(Foundations + Apologetics)",
                                      },
                                      {
                                        label: "St. Moses the Strong",
                                        subtitle:
                                          " (Continuing Servant Education)",
                                      },
                                      { label: "Catechesis Program" },
                                      { label: "Servants Preparation" },
                                      { label: "Bible Studies" },
                                    ].map(({ label, subtitle }) => (
                                      <motion.li
                                        variants={menuItemVariants}
                                        key={label}
                                      >
                                        <Link
                                          href={`/Education#${label
                                            .toLowerCase()
                                            .replace(/ /g, "-")
                                            .replace(/'/g, "")}`}
                                          onClick={(e) =>
                                            handleNavigation(
                                              `/Education#${label
                                                .toLowerCase()
                                                .replace(/ /g, "-")
                                                .replace(/'/g, "")}`,
                                              e
                                            )
                                          }
                                          className="block px-4 py-3 text-black hover:bg-[#FEFAF1] hover:shadow-lg hover:rounded-xl transition-colors duration-200 text-sm font-medium"
                                        >
                                          {label}
                                          {subtitle && (
                                            <div className="text-xs text-gray-500 leading-tight">
                                              {subtitle}
                                            </div>
                                          )}
                                        </Link>
                                      </motion.li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </motion.li>
                            {/* Community submenu */}
                            <motion.li
                              onMouseEnter={() => setCommunityHovered(true)}
                              onMouseLeave={() => setCommunityHovered(false)}
                              className="relative"
                            >
                              <Link
                                href="/CommunityServices"
                                onClick={(e) =>
                                  handleNavigation("/CommunityServices", e)
                                }
                                className="flex items-center justify-between px-4 py-3 text-black hover:bg-[#FEFAF1] hover:shadow-md hover:rounded-xl transition-colors duration-200 text-sm font-semibold uppercase tracking-wide"
                              >
                                Community Services
                                <Image
                                  src="/Images/Icons/ArrowRightBlack.png"
                                  alt="right arrow"
                                  width={6}
                                  height={6}
                                />
                              </Link>
                              <AnimatePresence>
                                {communityHovered && (
                                  <motion.ul
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={submenuVariants}
                                    className="absolute left-full top-0 ml-2 w-64 bg-white rounded-xl shadow-lg z-50 origin-left"
                                  >
                                    {[
                                      "Family Retreat Services",
                                      "Maintenance Group",
                                      "Newcomer Services",
                                      "Homeless Ministry",
                                      "Kitchen Service",
                                      "St. Joseph Bookstore",
                                      "Gym Service",
                                      "Ray of Hope",
                                      "Ride Service",
                                    ].map((label) => (
                                      <motion.li
                                        variants={menuItemVariants}
                                        key={label}
                                      >
                                        <Link
                                          href={`/CommunityServices#${label
                                            .toLowerCase()
                                            .replace(/ /g, "-")
                                            .replace(/'/g, "")}`}
                                          onClick={(e) =>
                                            handleNavigation(
                                              `/CommunityServices#${label
                                                .toLowerCase()
                                                .replace(/ /g, "-")
                                                .replace(/'/g, "")}`,
                                              e
                                            )
                                          }
                                          className="block px-4 py-3 text-black hover:bg-[#FEFAF1] hover:shadow-md hover:rounded-xl transition-colors duration-200 text-sm font-medium"
                                        >
                                          {label}
                                        </Link>
                                      </motion.li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </motion.li>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </Link>
              </motion.li>
            );
          })}
        </motion.div>
      </motion.ul>

      {/* Call-to-action button */}
      <motion.button
        variants={itemVariants}
        whileHover={{
          scale: 1.06,
          boxShadow: "0px 0px 12px rgba(224, 174, 84, 0.7)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`${outfit.className} bg-[#E0AE54] ${
          useBlackText ? "text-black" : "text-black"
        } border-none rounded-lg px-6 py-3 leading-[21px] font-semibold uppercase text-sm cursor-pointer transition-colors duration-300 hover:bg-[#B18F54]`}
      >
        SCHEDULE A SPACE
      </motion.button>
    </motion.nav>
  );
}

export default NavBar;
