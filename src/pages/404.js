import React from 'react';
import {graphql} from "gatsby";
import '../css/404.css';
import Layout from '../components/Layout'

const NotFoundPage = ({ data }) => (
  <Layout socialLinks={data.dataJson.socialLinks} name={data.dataJson.name}>
    <section className="content-scroller">
      <div className="error-bg gradient-01">
        <div className="error">
          <div className="error-contact">
            <div className="container">
              <div className="row">
                <div className="col-md-offset-3 col-md-6 text-center">
                  <h2>error</h2>
                  <h1>404 </h1>
                  <p>opppsss! it looks like you are lost</p>
                  <div className="button">
                    <a href="#">return home</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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