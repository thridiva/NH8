import { Footer } from "../components/Footer";
import { MenuScrolling } from "../components/MenuScrolling";
import { SmallAbout } from "../components/SmallAbout";
import { Reservations } from "./ReservationsPage";
import { IntroImg } from "./../components/IntroImg";
import { ImageSlider } from "./../components/ImageSlider";

export function HomePage() {
  return (
    <div>
      <IntroImg />
      <SmallAbout />
      {/* <MenuScrolling /> */}
      <ImageSlider />
      {/* <Reservations /> */}
      <Footer />
    </div>
  );
}
