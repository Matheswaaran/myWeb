import React from 'react';
import { Link } from 'gatsby';
import '../css/404.css';
import { GoHome } from 'react-icons/go';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout pageTitle="404 Error, Page not Found" errorPage>
    <div className="error-bg gradient-01">
      <div className="error">
        <div className="error-contact">
          <h2>error</h2>
          <h1>404 </h1>
          <p>opppsss! it looks like you are lost</p>
          <div className="button">
            <Link to="/">
              <GoHome size={13} />
              {' '}return home
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
