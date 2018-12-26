import React from 'react';
import {graphql} from "gatsby";
// import '../css/404.css';
import Layout from '../components/Layout'

const NotFoundPage = ({ data }) => (
  <Layout socialLinks={data.dataJson.socialLinks} name={data.dataJson.name}>
    <h1>404 Error</h1>
  </Layout>
);

export const query = graphql`
  query NoPageDataJsonQuery {
    dataJson {
      name
      socialLinks {
        fb twitter g_plus instagram linkedIn github
      }
    }
  }
`;

export default NotFoundPage;