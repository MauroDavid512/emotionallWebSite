import VideoComponent from "./home/VideoComponent";
import Summary from "./home/Summary";
import Benefits from "./home/Benefits";
import StartJourney from "./home/StartJourney";
import SummaryCards from "./home/SummaryCards";
import ContactUs from "./home/ContactUs";

export default function Home() {
  return (
    <>
      <VideoComponent />
      <Summary />
      <Benefits />
      <StartJourney />
      <SummaryCards />
      <ContactUs />
    </>
  );
}
