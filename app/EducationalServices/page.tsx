// Importing necessary components and assets for the Educational Services page
import ProductCard from "../components/ProductCard";
import ImageTextBlock from "../components/ImageTextBlock";
import Hero from "../components/Hero";
import { Urbanist } from "next/font/google";
import StMauriceChurchFromBackPicture from "../../public/Images/EducationalServices/StMauriceChurchFromBack.jpg";
import SoccerWatchingStMauriceHallPicture from "../../public/Images/EducationalServices/SoccerWatchingStMauriceHall.jpg";

// Initialize the Urbanist font with specific settings for consistent typography
const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

// Main component for the Educational Services page
export default function EducationalServices() {
  // Array of products to be displayed as cards, each representing a unique educational service
  const products = [
    {
      id: 1,
      image: "/Images/EducationalServices/LetThereBeLight.png",
      title: "Let There Be Light (Foundations + Apologetics)",
      subheading: "Articulate Your Faith Confidently",
      description: `Dive into the core of Christian belief with 'Let There Be Light,' a program at St. Mary and St. Maurice Church
      designed to build a solid foundation in faith and equip you with the skills for apologetics.
      \n- Foundations: Explore essential Christian doctrines, their scriptural roots, and their relevance today.
      \n- Apologetics: Learn to defend your faith against skepticism from atheists, pagans, and others.`,
      buttontext: "JOIN TODAY",
    },
    {
      id: 2,
      image: "/Images/EducationalServices/StMoses.png",
      title: "St. Moses the Strong Continuing Servant Education",
      subheading: "Build Your Spiritual Base",
      description: `Join the Catechesis Program to nurture a deep understanding of Christian doctrines and practices.
      This program is tailored for individuals eager to build a strong foundation in their spiritual life through lectures and discussions.`,
      buttontext: "JOIN THE PROGRAM",
    },
    {
      id: 3,
      image: "/Images/EducationalServices/ServantsPrep.png",
      title: "Servants Preparation",
      subheading: "Shaping Future Servants",
      description: `St. Mary and St. Maurice Church's Servants Preparation Program is designed to thoroughly equip volunteers for effective
      ministry and ensure they are well-prepared to serve the church's community.
      \n- Curriculum\n- Schedule\n- Co-op Services`,
      buttontext: "ENROLL NOW",
    },
    {
      id: 4,
      image: "/Images/EducationalServices/BibleStudies.png",
      title: "Bible Studies",
      subheading: "For All",
      description: `Dive deeper into the Bible to enhance your understanding and application of biblical truth;
      our studies cater to all members eager to strengthen their faith.
      \n- Daily Readings\n- Sermons\n- Retreats & Bible Studies\n- Bookstore\n- Spiritual Articles\n- Quiet Time\n- Questions & Answers`,
      buttontext: "START TODAY",
    },
  ];

  return (
    <>
      {/* Hero section with a background image and overlay.
          This visually introduces the Educational Services page with a prominent title and themed imagery. */}
      <Hero
        image={SoccerWatchingStMauriceHallPicture}
        altText="Vespers in St Mary's church"
        title={<div className="pt-30 text-center">Educational Services</div>}
        titleSize="64px"
        textColor="#0D111D"
        textWidth="1312px"
        overlayColor="#FEFAF1CC"
        overlayOpacity={0.8}
        height="464px"
        imagePlacement="47%"
        textPosition="Center"
        contentAlignment="center"
      />

      {/* Image and text block introducing the Educational Services.
          Provides a welcoming message and sets the tone for the page content. */}
      <ImageTextBlock
        inverted={false} // Normal layout (image on the left, text on the right)
        title="Enrich Your Journey"
        image={StMauriceChurchFromBackPicture}
        altText="Fr. Athansius praying over newly wed couple in St. Mary's Church"
        bgColor="#FEFAF1"
      >
        {/* Description of the Educational Services.
            Briefly explains the purpose and offerings of the church's educational programs. */}
        Explore our learning and spiritual growth services with the Educational
        Services at St. Mary and St. Maurice Church. Our diverse services will
        deepen your knowledge and strengthen your faith.
      </ImageTextBlock>

      {/* Section for displaying product cards.
          This area showcases the various educational programs available at the church. */}
      <div className="w-full px-[100px] py-[100px] gap-[80px] flex flex-col items-center justify-center bg-[#171E34]">
        {/* Section title for the educational services card grid */}
        <h1
          className={`${urbanist.className} font-[700] text-[52px] leading-[120%] tracking-[-0.02em] text-white text-center`}
        >
          Educational Services
        </h1>

        {/* Grid layout for product cards.
            Each card represents a distinct educational service, rendered dynamically from the products array. */}
        <div className="w-full max-w-[1312px] grid grid-cols-1 md:grid-cols-2 gap-[48px] justify-center">
          {products.map((product) => (
            // Render each product as a card using the ProductCard component
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
