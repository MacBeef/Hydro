/*Her importere vi alle funktionerne vi skal bruge i app.jsx*/

import NavBar from "./Components/NavBar.jsx";
import ImageCarousel from "./Components/ImageCarousel.jsx";
import Section from "./Components/Section.jsx";
import Footer from "./Components/Footer.jsx";
import VideoImage from "./Components/VideoImage.jsx";
import Title from "./Components/Title.jsx";

function App() {
  const getImagePath = (path) => {
    const base = import.meta.env.BASE_URL || "/";
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    return `${base}${cleanPath}`;
  };
  const images = [
    "/img/Hydro-BauxiteMineWorker.jpg",
    "/img/Hydro-HappyMechanic.jpg",
    "/img/Hydro-HoldingBauxite.jpg",
  ];
  const imageHeader = ["", "", ""];
  const imageBody = ["", "", ""];

  const navigate1 = "titlesContent.titles.whoAreWe";
  const navigate2 = "titlesContent.titles.values";
  const navigate3 = "titlesContent.titles.production";

  return (
    <>
      {/*NAVIGATIONS BAR SETUP GUIDE:
      -------------------------------------------------------------------------------------------
      -------------------------------------
      -------------------------------------------------------------------------------------------*/}
      <NavBar nav1={navigate1} nav2={navigate2} nav3={navigate3} />

      {/*IMAGE CAROUSEL SETUP GUIDE:
      -------------------------------------------------------------------------------------------
      -------------------------------------
      -------------------------------------------------------------------------------------------*/}
      <ImageCarousel images={images} header={imageHeader} body={imageBody} />

      {/*SECTION SETUP GUIDE:
      -------------------------------------------------------------------------------------------

      Først kalder vi vores Section komponent. Husk også at lave en kommentar og skriv hvad sektionen hedder.
            //{section navn}
            <Section
      -------------------------------------

      Bagefter så giver vi den en sektion type, som har formattet sectionType{nummer}
            section_Type = "sectionType1"
      Og en farve type, som har formattet {dark/light}Mode
            section_Color="darkMode"
      -------------------------------------

      Vi giver Section komponentet en header_ContentKey og en body_ContentKey, det er hvad der kommer til at stå
      i headeren og bodying for sectionen.
      Vi refere først til i18n.jsx resource navnet vi har sat op, for at have sprog support, fx loremIpsumContent,
      Så siger vi hvad den skal tage fra .json filen, fx loremIpsum.
      og så siger vi til sidst om vi vil have header eller body. Det vil sådan her ud med LoremIpsum filen:
            header_ContentKey="loremIpsumContent.loremIpsum.header"
            body_ContentKey="loremIpsumContent.loremIpsum.body"
      -------------------------------------

      Billeder skal i vores public folder, og under img. Hvis det billede du skal bruge er der kan du
      give det til img_ContentKey ved at sige "/img/{filnavm}.{filtype}"
            img_ContentKey="/img/example.jpeg"/>
      -------------------------------------

      Samlet vil det se sådan her ud:
            <Section section_Type="./components/{sektion type navn}.css"
            header_ContentKey="{i18n.jsx reference navn}.{json overtitel navn}.header"
            body_ContentKey="{i18n.jsx reference navn}.{json overtitel navn}.body"
            img_ContentKey="/img/{filnavm}.{filtype}"/>
      -------------------------------------------------------------------------------------------*/}

      <Title title_ContentKey={navigate1} />
      <VideoImage
        imgOrVid="vid"
        src={getImagePath("/video/ChangingTheAluminiumGame.mp4")}
      />
      {/**/}
      <Section
        section_Type="sectionType1"
        section_Color="lightMode"
        header_ContentKey="productionContent.Production.header"
        body_ContentKey="productionContent.Production.body"
        img_ContentKey={getImagePath("img/Hydro-ProductionLine.png")}
      />

      <Title title_ContentKey={navigate2} />
      {/**/}
      <Section
        section_Type="sectionType2"
        section_Color="lightMode"
        header_ContentKey="cooperationContent.Cooperation.header"
        body_ContentKey="cooperationContent.Cooperation.body"
        img_ContentKey={getImagePath("/img/Hydro-Coop.jpg")}
      />

      {/**/}
      <Section
        section_Type="sectionType1"
        section_Color="lightMode"
        header_ContentKey="sustainabilityContent.Sustainability.header"
        body_ContentKey="sustainabilityContent.Sustainability.body"
        img_ContentKey={getImagePath("/img/Hydro-Sustainability.png")}
      />

      <Title title_ContentKey={navigate3} />
      {/**/}
      <Section
        section_Type="sectionType3"
        section_Color="lightMode"
        header_ContentKey="ourTeamContent.ourTeam.header"
        body_ContentKey="ourTeamContent.ourTeam.body"
        img_ContentKey={getImagePath("/img/Hydro-HoldingBauxite.jpg")}
      />

      <VideoImage imgOrVid="img" src={getImagePath("/img/Hydro-Values.png")} />
      <Section
        section_Type="sectionType1"
        section_Color="lightMode"
        header_ContentKey="alluminumIndustryContent.alluminumIndustry.header"
        body_ContentKey="alluminumIndustryContent.alluminumIndustry.body"
        img_ContentKey={getImagePath("/img/Hydro-Aluminum.png")}
      />

      {/*FOOTER SETUP GUIDE:
      -------------------------------------------------------------------------------------------
      -------------------------------------
      -------------------------------------------------------------------------------------------*/}
      <Footer />
    </>
  );
}

//Vi eksportere App functionen så vi kan kalde den i main.jsx
export default App;
