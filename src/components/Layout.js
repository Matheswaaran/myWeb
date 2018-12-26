import React from 'react';
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import NavigationBar from "../components/NavigationBar";
import FavIcon from '../images/icon.png';

class Layout extends React.Component{

  render() {
    return (
      <StaticQuery
        query={graphql`query { site { siteMetadata { title description keywords author } } dataJson { name socialLinks { fb twitter g_plus instagram linkedIn github } } }`}
        render={(data => (
          <>
            <Helmet
              title={`${this.props.errorPage ? "404 Error Page not Found" : data.site.siteMetadata.title} - matheswaaran.com`}
              meta={[
                  {name: 'description', content: data.site.siteMetadata.description},
                  {name: 'keywords', content: data.site.siteMetadata.keywords},
                  {name: 'author', content: data.site.siteMetadata.author}
                ]}
              link={[
                {rel: 'shortcut icon', type: 'image/png', href: FavIcon},
                {
                  rel: 'stylesheet',
                  href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
                  integrity: "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO",
                  crossorigin: 'anonymous',
                }
              ]}
            >
              <html lang="en" />
            </Helmet>
            {this.props.errorPage ? null : (
              <NavigationBar
                socialLinks={data.dataJson.socialLinks}
                name={data.dataJson.name}
              />
            )}
            <div>
              {this.props.children}
            </div>
          </>
        ))}
      />
    );
  }
}

export default Layout;