import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "intersection-observer";
import { setupServer } from "msw/node";
import { rest } from "msw";
import AppContext from "../AppContext";
import Education from "./Education";

const mockResponse = {
  mainTitle: "Education",
  education: [
    {
      title: "Apr 2022 - Oct 2022",
      cardTitle: "Software Engineering",
      url: "https://generalassemb.ly/education/software-engineering-immersive/sydney?topic=&mkt_account_id=1056949875&mkt_campaign_id=18014985978&mkt_ad_group_id=143659600487&mkt_device_type=c&mkt_keyword=software%20engineer%20general%20assembly&mkt_matchtype=e&mkt_placement=&mkt_ad_id=619148936159&mkt_network=g&mkt_target_id=kwd-865210826762&mkt_feed_item_id=&utm_source=google&utm_medium=paid-search-bra&utm_campaign=TS:TX:BRA:SYD:BR:GeneralAssembly:X:Exact&utm_content=campus-lead-lander&utm_term=software%20engineer%20general%20assembly&gclid=CjwKCAjw-rOaBhA9EiwAUkLV4n1gvLzCfe01mHdsKihyZ9zxkn3T58mCLdL9t3cUoQzijkqQfSsGqhoCQNcQAvD_BwE&gclsrc=aw.ds",
      cardSubtitle: "General Assembly",
      cardDetailedText:
        "React, Jest, AXIOS, HTM/CSS, Javascript, NodeJS, JSON, API, REST, SOAP, Python, Flask, Postgres, Git",
      icon: {
        src: "images/education/general-assembly.png",
        alt: "GA",
      },
    },
    {
      title: "2020 - 2021",
      cardTitle: "Diploma - Web development",
      cardSubtitle: "Warwick Institute of Australia",
      cardDetailedText: [
        "Research and apply emerging web technology trends",
        "Create, debug, monitor and deploy dynamic web pages and web-based applications to business requirements using rapid application development",
        "Establish disaster recovery and contingency plans",
        "ITIL Service Management Framework",
      ],
      icon: {
        src: "images/education/warwick.png",
        alt: "Warwick",
      },
    },
    {
      title: "2018 - 2020",
      cardTitle: "Diploma - Software development",
      cardSubtitle: "Warwick Institute of Australia",
      cardDetailedText: [
        "Match ICT needs with the strategic direction",
        "Manage, measure and course correct ICT projects",
        "Apply advanced object-oriented language skills",
        "Debug, monitor, test and deploy applications",
      ],
      icon: {
        src: "images/education/warwick.png",
        alt: "Warwick",
      },
    },
    {
      title: "2017",
      cardTitle: "English language",
      cardSubtitle: "ELSIS - Australia",
      cardDetailedText: [
        "Elementary English",
        "Intermediate English",
        "Uper-Intermediate English",
        "Advanced English",
      ],
      icon: {
        src: "images/education/elsis.png",
        alt: "",
      },
    },
    {
      title: "2015 - 2016",
      cardTitle: "MBA in Project Management",
      cardSubtitle: "Impacta Tecnologia, Brazil",
      cardDetailedText: [
        "MBA with emphasis on PMI® project management best practices including PMBOK® 7 innovations",
        "Agile® - Hybrid Toolkit",
        "MDP - Precedence Diagram Method",
        "PERT Estimate",
        "Critical path analysis including project leveling and compression",
      ],
      icon: {
        src: "images/education/impacta.png",
        alt: "Impacta",
      },
    },
    {
      title: "2008 - 2013",
      cardTitle: "Bachelor of Computer Science",
      cardSubtitle: "University São Judas Tadeu, Brazil",
      cardDetailedText: [
        "Diversity and Critical Thinking",
        "Legislation and Ethics in Information Technology",
        "Distributed Systems and Cloud Computing",
        "Mobile Development and Internet of Things",
        "3D Interdisciplinary Project",
        "Computational Artificial Intelligence Algorithm Complexity",
        "Business Intelligence and Big Data",
      ],
      icon: {
        src: "",
        alt: "",
      },
    },
  ],
};
const darkMode = {
  value: true,
};

const server = setupServer(
  rest.get("profile/education.json", (req, res, ctx) => {
    return res(ctx.json(mockResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("first test", () => {});

test("Title Education/h1 has to be on the screen", async () => {
  render(
    <AppContext.Provider value={{ darkMode }}>
      <Education url="profile/education.json" />
    </AppContext.Provider>
  );

  const h1Title = await waitFor(() => screen.getByText("Education"));
  expect(h1Title).toBeInTheDocument();
});

test("Titles for each container to be on the screen", async () => {
  render(
    <AppContext.Provider value={{ darkMode }}>
      <Education url="profile/education.json" />
    </AppContext.Provider>
  );

  const container1Title = await waitFor(() =>
    screen.getByText("Software Engineering")
  );
  expect(container1Title).toBeInTheDocument();

  const container2Title = await waitFor(() =>
    screen.getByText("Diploma - Web development")
  );
  expect(container2Title).toBeInTheDocument();

  const container3Title = await waitFor(() =>
    screen.getByText("Diploma - Software development")
  );
  expect(container3Title).toBeInTheDocument();

  const container4Title = await waitFor(() =>
    screen.getByText("English language")
  );
  expect(container4Title).toBeInTheDocument();

  const container5Title = await waitFor(() =>
    screen.getByText("MBA in Project Management")
  );
  expect(container5Title).toBeInTheDocument();
});
