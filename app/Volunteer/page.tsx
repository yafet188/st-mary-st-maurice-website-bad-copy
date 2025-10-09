/* eslint-disable react/no-unescaped-entities */

// Import reusable image/text block component
import ImageTextBlock from "../components/ImageTextBlock";

// Import images used in the volunteer page
import OrdainingDeaconsPicture from "../../public/Images/Volunteer/OrdainingDeacons.jpg";
import DeaconUnderSunPicture from "../../public/Images/Volunteer/DeaconUnderSun.jpg";
import AltarDuringLiturgy from "../../public/Images/Volunteer/AltarDuringLiturgy.jpg";

// Volunteer page component
export default function Volunteer() {
  // NOTE btnHoverColor is NOT yet implemented

  // Render three sections highlighting volunteering opportunities
  return (
    <div className="pt-[100px] bg-[#FEFAF1]">
      {/* Section 1: General invitation to volunteer */}
      {/* This block introduces volunteering and its impact at the church */}
      <ImageTextBlock
        inverted={false}
        title="Serve, Support, Succeed: Volunteer Today"
        image={OrdainingDeaconsPicture}
        altText="A picture of the priests and Bishop Mina with the newly ordained young chanters in St. Maurice Church"
        bgColor="#FEFAF1"
        roundedText=""
        roundedBgColor=""
        roundedTextColor=""
      >
        {/* Description of volunteering opportunities */}
        At St. Mary and St. Maurice's, volunteering is about making a meaningful
        difference. You can engage in our missions through community outreach,
        educational programs, or maintaining our worship services.
      </ImageTextBlock>

      {/* Section 2: Call to action with button to serve */}
      {/* This block encourages users to join as volunteers and highlights benefits */}
      <ImageTextBlock
        inverted={true}
        title="Give Your Time, Transform Lives"
        image={DeaconUnderSunPicture}
        altText="A picture of a deacon under ray of sunlight in St.Maurice's Church"
        bgColor="#E8E9EB"
        btnTxt="SERVE WITH US"
        btnColor="#171E34"
        btnHoverColor="#7A0C02"
        roundedText=""
        roundedBgColor=""
        roundedTextColor=""
      >
        {/* Description of volunteer roles and community impact */}
        Each volunteer role supports our church's activities and offers personal
        growth. Join our dedicated team of volunteers to contribute to a network
        of care that extends throughout Kitchener, strengthening both the church
        and its wider community.
      </ImageTextBlock>

      {/* Section 3: Final encouragement to get involved */}
      {/* This block provides a final motivational message and call to action */}
      <ImageTextBlock
        inverted={false}
        title="Join Our Mission: Volunteer with Us"
        image={AltarDuringLiturgy}
        altText="A picture of the back of Fr. Theodore in the foreground and the deacons holding candles around the altar with Fr.Athanasius in the background"
        bgColor="#FEFAF1"
        miniTitle="Your Efforts Are Crucial"
        btnTxt="GET INVOLVED"
        btnColor="#7A0C02"
        btnHoverColor="#171E34"
        roundedText=""
        roundedBgColor=""
        roundedTextColor=""
      >
        {/* Description of the importance of volunteers */}
        Your efforts embody our mission to spread love and foster spiritual
        growth, creating lasting impacts and deeper community connections.
      </ImageTextBlock>
    </div>
  );
}
