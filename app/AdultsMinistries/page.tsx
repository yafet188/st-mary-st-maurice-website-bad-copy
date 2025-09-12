import ProductCard from "../components/ProductCard";
import { Urbanist } from "next/font/google";
import ImageTextBlock from "../components/ImageTextBlock";
import Hero from "../components/Hero";
import FatherAthanasiusAtWeddingPicture from "../../public/Images/AdultsMinistries/FrAthanasiusAtWedding.jpg";
import StMaryVespersPicture from "../../public/Images/AdultsMinistries/StMaryVespers.jpg";

// AdultsMinistries page: Displays adult ministry services with cards and images

// Initialize the Urbanist font for consistent typography
const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

export default function AdultsMinistries() {
  // List of adult ministry offerings displayed as cards
  const products = [
    {
      id: 1,
      image: "/Images/AdultsMinistries/YoungAdultMinistries.png",
      title: "Young Adult Ministries",
      subheading: "Faith, Fellowship, and Service",
      description: `St. Mary and St. Maurice Church's Young Adult Ministries provide a dynamic environment for individuals
      in their 20s and 30s to explore faith, form meaningful relationships, and engage in community service. 
      \n- Lectures and Discussion Groups\n- Local Community Service\n- Social Events`,
      buttontext: "START TODAY",
    },
    {
      id: 2,
      image: "/Images/AdultsMinistries/FamilyMeeting.png",
      title: "Pope Kyrillos Family Meeting",
      subheading: "Spiritual Sermons",
      description: `Join us to enrich our spiritual lives in the name of Pope Kyrillos. These meetings offer insightful sermons
      and discussions to deepen our understanding and connection to our faith.`,
      buttontext: "ATTEND OUR MEETING",
    },
    {
      id: 3,
      image: "/Images/AdultsMinistries/MarriagePrep.png",
      title: "Marriage Preparation",
      subheading: "Foundations for a Lifetime",
      description: `Getting married? Embark on your marital journey with confidence through our Marriage Preparation program.
      Our course is designed to strengthen bonds and foster mutual understanding.`,
      buttontext: "SIGN UP",
    },
    {
      id: 4,
      image: "/Images/AdultsMinistries/FamilyServices.png",
      title: "Family Services",
      subheading: "Empowered Families",
      description: `St. Mary and St. Maurice Church offers
      comprehensive Family Services designed to support, educate, and empower families in our community`,
      buttontext: "JOIN TODAY",
    },
    {
      id: 5,
      image: "/Images/AdultsMinistries/SeniorServices.png",
      title: "Senior Services",
      subheading: "Embracing the Golden Years",
      description: `Join dedicated support for the senior members of our community through our program,
      which will enhance well-being, foster spiritual growth, and encourage social interaction among our elders. 
      \n- Weekly Meetings\n- Health Advice\n- Spiritual Guidance\n- Social Gatherings\n- Special Events`,
      buttontext: "CONTACT US",
    },
    {
      id: 6,
      image: "/Images/AdultsMinistries/AdultsChoir.png",
      title: "Adults Choir",
      subheading: "Celebrate & Worship",
      description: `Raise your voice in song with the Adult Choir at St. Mary and St. Maurice Church.
      Our choir brings together adult members to celebrate and worship through music and beautiful chanting.
      \n\nA diverse selection of traditional hymns in Coptic, English, and Arabic that inspire and uplift.`,
      buttontext: "BECOME A MEMBER",
    },
    {
      id: 7,
      image: "/Images/AdultsMinistries/UsherService.png",
      title: "Usher Service",
      subheading: "Serve with Heart",
      description: `Embrace a pivotal role at St. Mary and St. Maurice Church by joining our Usher Service.
      Ushers facilitate a welcoming and orderly environment during worship services, feasts and events.`,
      buttontext: "JOIN OUR USHER TEAM",
    },
  ];

  return (
    <>
      {/* Hero section with main image and page title */}
      <Hero
        image={StMaryVespersPicture}
        altText="Vespers in St Mary's church"
        title="ADULTS MINISTRIES"
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

      {/* Section with image and introductory text */}
      <ImageTextBlock
        roundedText=""
        textColor=""
        titleColor=""
        inverted={false}
        title="Nurturing Spiritual Growth"
        image={FatherAthanasiusAtWeddingPicture}
        altText="Fr. Athansius praying over newly wed couple in St. Mary's Church"
        bgColor="#FEFAF1"
      >
        Enriching the spiritual journey of our adult and senior parishioners by
        engaging them with us through tailored programs that foster community
        connections and personal development.
      </ImageTextBlock>
      {/* Main cards section for all adult ministries */}
      <div className="w-full px-[100px] py-[100px] gap-[80px] flex flex-col items-center justify-center bg-[#171E34]">
        {/* Title */}
        <h1
          className={`${urbanist.className} font-[700] text-[52px] leading-[120%] tracking-[-0.02em] text-white text-center`}
        >
          Adult Ministries
        </h1>

        {/* Cards Section: Render each product as a ProductCard */}
        <div className="w-full max-w-[1312px] grid grid-cols-1 md:grid-cols-2 gap-[48px] justify-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
