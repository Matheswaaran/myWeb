import React from "react"
import '../components/Layout/Layout.css';
import {graphql} from "gatsby";
import { ScrollingProvider, Section } from "react-scroll-section";
import IntroHeader from "../components/IntroHeader";
import AboutMe from "../components/AboutMe";
import Layout from "../components/Layout";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Blog from "../components/BlogPosts";
import MyProjects from "../components/MyProjects";
import Contact from "../components/Contact";

const App = ({data}) => (
  <ScrollingProvider scrollBehavior="smooth">
    <Layout>
      <Section id="home">
        <IntroHeader introHeader={data.dataJson.introHeader} name={data.dataJson.name} />
      </Section>
      <Section id="about">
        <AboutMe
          aboutMe={data.dataJson.aboutMe}
          socialLinks={data.dataJson.socialLinks}
          data={{ ...data.dataJson }}
        />
      </Section>
      <Section id="resume">
        <Resume resume={data.dataJson.resume} />
      </Section>
      <Section id="skills">
        <Skills resume={data.dataJson.resume}/>
      </Section>
      <Section id="blog">
        <Blog/>
      </Section>
      <Section id="my_projects">
        <MyProjects myProjects={data.dataJson.projects}/>
      </Section>
      <Section id="contact">
        <Contact/>
      </Section>
    </Layout>
  </ScrollingProvider>
);

export const query = graphql`
  query DataJsonQuery {
    dataJson {
      name
      contactNo
      emailId
      Address
      socialLinks {
        fb twitter g_plus instagram linkedIn github
      }
      introHeader {
        resumeUrl designation
      }
      aboutMe {
        dataOfBirth Nationality introData
      }
      resume{
        experience {
          company designation from to icon description
        }
        education {
          college course from to icon description
        }
        skills {
          name percentage
        }
        languages {
          name percentage level
        }
      }
      projects{
        name title fromTime toTime description
      }
    }
  }
`;

export default App;