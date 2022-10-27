/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Vector from "assets/key-feature/vector.svg";
import Editing from "assets/key-feature/editing.svg";
import Speed from "assets/key-feature/speed.svg";

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: "SEO",
    title: "SEO",
    text: "Improving your site to increase its visibility when people search for products or services related to your business in Google, Bing, and other search engines.",
  },
  {
    id: 2,
    imgSrc: Speed,
    altText: "CMS",
    title: "CMS",
    text: "A content management system is software that helps users create, manage, and modify content on a website without the need for specialized technical knowledge.",
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: "CRM",
    title: "CRM",
    text: "Customer relationship management is a technology for managing all your company's relationships and interactions with customers, potential",
  },
  {
    id: 4,
    imgSrc: Editing,
    altText: "AI Data Analysis",
    title: "AI Data Analysis",
    text: "process of inspecting, cleansing, transforming, and AI modelling with the goal of discovering useful information, informing conclusions, and supporting decision-making.",
  },
  {
    id: 5,
    imgSrc: Vector,
    altText: "The Internet of things",
    title: "The Internet of things",
    text: "IoT describes physical objects with sensors, processing ability, software, and other technologies that connect and exchange data with other devices and system.",
  },
  {
    id: 6,
    imgSrc: Editing,
    altText: "3rd Party Intergations",
    title: "3rd Party Intergations",
    text: " A third-party integration is a connection between two or more apps that is built on an external platform. Distinction between native integrations",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Meet exciting feature of app"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, "40px", null, "80px"],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ["35px 0", null, "40px 0"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    "& > div": {
      px: [0, "15px", null, "25px", null, "30px", "40px", "60px"],
    },
  },
};
