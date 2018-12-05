import React from "react"
import '../css/Layout.css';
import {graphql} from "gatsby";
import IntroHeader from "../components/IntroHeader";
import AboutMe from "../components/AboutMe";
import Layout from "../components/Layout";

const App = ({data}) => (
    <Layout socialLinks={data.dataJson.socialLinks} name={data.dataJson.name}>
        <IntroHeader introHeader={data.dataJson.introHeader} name={data.dataJson.name} />
        <AboutMe
            aboutMe={data.dataJson.aboutMe}
            socialLinks={data.dataJson.socialLinks}
            data={{ name : data.dataJson.name, contactNo: data.dataJson.contactNo, emailId: data.dataJson.emailId, Address: data.dataJson.Address }}
        />
    </Layout>
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