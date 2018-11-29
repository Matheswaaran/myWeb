import React from 'react';
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import NavigationBar from "../components/NavigationBar";
import FavIcon from '../images/icon.png';

const Layout = (props) => {
    return (
        <StaticQuery
            query={graphql`query { site { siteMetadata { title description keywords author } } }`}
            render={(data => (
                <>
                    <Helmet
                        title={data.site.siteMetadata.title}
                        meta={[
                            {name: 'description', content: data.site.siteMetadata.description},
                            {name: 'keywords', content: data.site.siteMetadata.keywords},
                            {name: 'author', content: data.site.siteMetadata.author}
                        ]}
                        link={[
                            {rel: 'shortcut icon', type: 'image/png', href: FavIcon}
                        ]}
                    >
                        <html lang="en" />
                    </Helmet>
                    <NavigationBar/>
                    <div>
                        {props.children}
                    </div>
                </>
            ))}
        />
    )
};

export default Layout;