import VideoComponent from "./home/VideoComponent";
import Summary from "./home/Summary";
import Benefits from "./home/Benefits";
import StartJourney from "./home/StartJourney";
import SummaryCards from "./home/SummaryCards";

export default function Home() {
  return (
    <>
      <VideoComponent />
      <Summary />
      <Benefits />
      <StartJourney />
      <SummaryCards />
    </>
  );
}
