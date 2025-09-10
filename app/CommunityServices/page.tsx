import ProductCard from "../components/ProductCard";
import ImageTextBlock from "../components/ImageTextBlock";
import Hero from "../components/Hero";
import { Urbanist } from "next/font/google";
import StMauriceChurchFromBackPicture from "../../public/Images/CommunityServices/StMauriceChurchFromBack.jpg";
import StMauriceSunlightPicture from "../../public/Images/CommunityServices/StMauriceSunlight.jpg";

// CommunityServices page: Displays church community services with cards and images

// Initialize the Urbanist font for consistent typography
const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

export default function CommunityServices() {
  // List of community service offerings displayed as cards
  const products = [
    {
      id: 1,
      image: "/Images/CommunityServices/FamilyRetreat.png",
      title: "Family Retreat Services",
      subheading: "Renew and Reconnect",
      description: `St. Mary and St. Maurice Church offers enriching Family Retreat Services designed to deepen family ties
      and spiritual connections through structured retreats. A blend of: 
      \n- Liturgical services\n- Engaging lectures\n- Interactive workshops\n- Family-centered activities`,
      buttontext: "BOOK A RETREAT",
    },
    {
      id: 2,
      image: "/Images/CommunityServices/Maintenance.png",
      title: "Maintenance Group",
      subheading: "Enhancing Your Second Home",
      description: `Join the dedicated Maintenance Group to keep our sacred spaces beautiful and welcoming for all.
      This team plays a crucial role in the care and upkeep of our church facilities.
      \n\nVolunteers in the Maintenance Group engage in various activities like managing repairs and landscaping 
      to ensure our church remains pristine for worship and community events.`,
      buttontext: "LET'S START",
    },
    {
      id: 3,
      image: "/Images/CommunityServices/Newcomers.png",
      title: "Newcomer Services",
      subheading: "Embracing New Beginnings",
      description: `Welcome Home! Our church warmly welcomes new members with comprehensive Newcomer Services to assist with integration into both the church and the local community.\n\nOur services include:\n• Airport pickup service\n• Government document assistance\n• Banking guidance\n• Housing and education support\n• Basic furniture provision\n• Settlement program guidance`,
      buttontext: "CONTACT US",
    },
    {
      id: 4,
      image: "/Images/CommunityServices/Homeless.png",
      title: "Homeless Ministry",
      subheading: "Compassion in Action",
      description: `St. Mary and St. Maurice Church's Homeless Ministry supports our community's most vulnerable, offering meals, clothing, and compassionate care.
      \n- Meal Programs\n- Clothing Donations\n- Shelter Support\n- Rehabilitation Services`,
      buttontext: "JOIN OUR SERVICE",
    },
    {
      id: 5,
      image: "/Images/CommunityServices/KitchenService.png",
      title: "Kitchen Service",
      subheading: "SMSM Commercial Kitchen: Equip Your Culinary Event",
      description: `St. Mary and St. Maurice Church offers a fully equipped commercial kitchen for rent,
      perfect for community events, catering needs, and culinary projects. 
      \n- State-of-the-art appliances\n- Ample preparation areas\n- Versatile cooking equipment`,
      buttontext: "RENT OUR KITCHEN",
    },
    {
      id: 6,
      image: "/Images/CommunityServices/Bookstore.png",
      title: "St. Basil and St. Joseph's Bookstore",
      subheading: "A Treasure of Knowledge",
      description: `St. Basil and St. Joseph's Bookstore enriches our church community
      with a diverse selection of spiritual and educational resources.
      \n- Theology books\n- Prayer guides\n- Children's Christian stories`,
      buttontext: "BUY A BOOK",
    },
    {
      id: 7,
      image: "/Images/CommunityServices/GymService.png",
      title: "Gym Service",
      subheading: "Promote Your Wellness, Strengthen Your Body",
      description: `Get active and join our fully-equipped gym tailored to our community's fitness needs.`,
      buttontext: "JOIN THE GYM",
    },
    {
      id: 8,
      image: "/Images/CommunityServices/RayOfHope.png",
      title: "Ray of Hope",
      subheading: "Illuminating Paths, Lifting Spirits",
      description: `Ray of Hope embodies St. Mary and St. Maurice Church's commitment to transformative
      community support, tackling pressing needs through dedicated outreach initiatives`,
      buttontext: "GET STARTED",
    },
    {
      id: 9,
      image: "/Images/CommunityServices/RideService.png",
      title: "Ride Service",
      subheading: "Ensuring Access",
      description: `St. Mary and St. Maurice Church's Ride Service ensures that all
      congregation members without other transportation means can attend church services and events.`,
      buttontext: "BOOK A RIDE",
    },
  ];

  return (
    <>
      {/* Hero section with main image and page title */}
      <Hero
        image={StMauriceSunlightPicture}
        altText="St. Maurice chairs under illuminated by sunlight from the windows"
        textPosition="Center"
        title={
          <div className="pt-[50px]">
            Community Services <br></br> Serving and Supporting Together
          </div>
        }
        titleSize="64px"
        textColor="#0D111D"
        textWidth="1312px"
        overlayColor="#FEFAF1"
        overlayOpacity={0.8}
        height="464px"
        backgroundPosition="center 50%"
      ></Hero>
      {/* Section with image and introductory text */}
      <ImageTextBlock
        inverted={false}
        title="Fostering Care and Connection"
        image={StMauriceChurchFromBackPicture}
        altText="Fr. Athansius praying over newly wed couple in St. Mary's Church"
        bgColor="#FEFAF1"
      >
        We share various community services designed to support and enrich the
        lives of our parishioners and the local community. 
      </ImageTextBlock>
      {/* Main cards section for all community services */}
      <div className="w-full px-[100px] py-[100px] gap-[80px] flex flex-col items-center justify-center bg-[#171E34]">
        {/* Title */}
        <h1
          className={`${urbanist.className} font-[700] text-[52px] leading-[120%] tracking-[-0.02em] text-white text-center`}
        >
          Community Services
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
