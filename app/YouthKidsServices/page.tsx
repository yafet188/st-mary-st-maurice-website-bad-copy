import ProductCard from "../components/ProductCard";
import ImageTextBlock from "../components/ImageTextBlock";
import Hero from "../components/Hero";
import { Urbanist } from "next/font/google";
import YouthSittingAroundBonfirePicture from "../../public/Images/YouthKidsServices/YouthSittingAroundBonfire.jpg";
import KidsByStMaryAltarPicture from "../../public/Images/UpcomingEvents/KidsByStMaryAltar.jpg";

// Initialize the Urbanist font
const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

// Main page component for Youth & Kids Services
export default function YouthKidsServices() {
  // List of youth and kids ministry programs
  const products = [
    {
      id: 1,
      image: "/Images/YouthKidsServices/SundaySchool.png",
      title: "Sunday School",
      subheading: "Building Foundations in Faith",
      description: `Our curriculum at St. Mary and St. Maurice
      is tailored to each age and educates children and youth about
      Orthodox faith, Biblical stories, Christian values, and community service`,
      buttontext: "SIGN UP",
    },
    {
      id: 2,
      image: "/Images/YouthKidsServices/HighSchool.png",
      title: "High School",
      subheading: "Empowering Tomorrow's Leaders",
      description: `Dive into a journey of faith and fellowship with our High School Ministry at St. Mary and St. Maurice Church.
      \nTailored for teens, our program encourages spiritual growth, community service, and personal development in a supportive and engaging environment.`,
      buttontext: "SIGN UP",
    },
    {
      id: 3,
      image: "/Images/YouthKidsServices/ChildrensChoir.png",
      title: "Children's Choir",
      subheading: "Harmony and Joy",
      description: `This program offers children the chance to develop their musical talents, build confidence, and partake in a nurturing community 
      focused on spiritual growth and artistic expression.
      \nChildren learn a rich repertoire of spiritual and Coptic hymns, receiving focused training with exciting performance opportunities.`,
      buttontext: "SIGN UP",
    },
    {
      id: 4,
      image: "/Images/YouthKidsServices/KidsClub.png",
      title: "Summer Kids Club",
      subheading: "Fun, Learn, and Grow!",
      description: `Our Kids Club at St. Mary and St. Maurice Church is a Christ-centered ministry for children, 
      focusing on Bible study, Scripture memory, life skills, and relational discipleship to foster personal and spiritual growth.
      \nInteractive lessons on Bible topics, skill-building activities, and recreational games crafted to engage and educate.`,
      buttontext: "JOIN US",
    },
    {
      id: 5,
      image: "/Images/YouthKidsServices/SummerKidsCamp.png",
      title: "Summer Kids Camp",
      subheading: "Summer of Spirit & Exploring Faith",
      description: `Summer Kids Camp at St. Mary and St. Maurice Church offers a special camp filled with spiritual growth and fun.
      \nIt's a season where children and servants come together to explore Coptic traditions, hymns, and Bible studies in an atmosphere bursting with enjoyable activities.`,
      buttontext: "JOIN THE CAMP",
    },
    {
      id: 6,
      image: "/Images/YouthKidsServices/MosaicClub.png",
      title: "Mosaic Club",
      subheading: "Craft Your Creativity",
      description: `Dive into the rich tradition of mosaic art.
      \nOur Mosaic Club celebrates this ancient craft, inviting members
      to create and preserve the beauty of Coptic mosaic art while connecting with community and heritage.`,
      buttontext: "BECOME A MEMBER",
    },
    {
      id: 7,
      image: "/Images/YouthKidsServices/Gym.png",
      title: "Gym",
      subheading: "Fitness and Fellowship for Youth & Kids",
      description: `Our gym serves as a hub for physical and community health.
      \nThis facility supports all ages, focusing on the youth and children with programs integrating physical fitness and social interaction.`,
      buttontext: "JOIN THE GYM",
    },
    {
      id: 8,
      image: "/Images/YouthKidsServices/FineArts.png",
      title: "Fine Arts",
      subheading: "Unleasing the Artistic Side",
      description: `We proudly offer a Fine Arts Program that cultivates artistic skills
      within a faith-based community. Our experienced instructors teach courses in painting.`,
      buttontext: "SIGN UP",
    },
    {
      id: 9,
      image: "/Images/YouthKidsServices/HymnsPractice.png",
      title: "Hymns Practice",
      subheading: "Harmonizing Faith and Music",
      description: `St. Mary and St. Maurice Church warmly welcomes children and youth to our Hymns Practice, where they will 
      learn the art of praising the Lord and chanting.\nSpecialized sessions for children and youth to learn and practice hymns
      in English and Coptic enhance their liturgical participation.`,
      buttontext: "GET STARTED",
    },
  ];

  return (
    <>
      {/* Hero section with background image and title */}
      <Hero
        image={KidsByStMaryAltarPicture}
        altText="Vespers in St Mary's church"
        title={
          <div className="pt-[50px]">
            Youth & Kids Services
            <br />
            Growing in Faith and Fun
          </div>
        }
        titleSize="64px"
        textColor="#0D111D"
        textWidth="1312px"
        overlayColor="#FEFAF1CC"
        overlayOpacity={0.8}
        height="464px"
        textPosition="Center"
        contentAlignment="center"
        backgroundPosition="center 30%"
      ></Hero>

      {/* Section describing the mission and environment */}
      <ImageTextBlock
        inverted={false}
        title="Empowering Young Lives"
        image={YouthSittingAroundBonfirePicture}
        altText="Young youth sitting on lawn chairs around a bonfire at night in the yard beside St. Mary Church"
        bgColor="#FFFFFF"
      >
        Our vibrant Youth & Kids programs foster a nurturing environment that
        promotes spiritual growth and character development.
        <br /> <br />
        Each program is tailored to empower our young members with Orthodox
        Christian faith, creativity, and community values, supporting them in
        every stage of their lives.
      </ImageTextBlock>

      {/* Ministries section with title and cards */}
      <div className="w-full px-[100px] py-[100px] gap-[80px] flex flex-col items-center justify-center bg-[#171E34]">
        {/* Title */}
        <h1
          className={`${urbanist.className} font-[700] text-[52px] leading-[120%] tracking-[-0.02em] text-white text-center`}
        >
          Youth & Kids Ministries
        </h1>

        {/* Cards Section: displays each ministry as a ProductCard */}
        <div className="w-full max-w-[1312px] grid grid-cols-1 md:grid-cols-2 gap-[48px] justify-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
