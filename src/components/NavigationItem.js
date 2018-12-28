import React from 'react';
import { Link } from "gatsby";
import { SectionLink } from "react-scroll-section";

class NavigationItem extends React.Component{
    render() {
        return (
            <SectionLink section={this.props.section}>
                {link => (
                    <>
                        {this.props.page ? (
                            <li className={link.isSelected ? "active" : ""}>
                                <Link to={this.props.page}>
                                    <a onClick={link.onClick}>{this.props.name}</a>
                                </Link>
                            </li>
                        ) : (
                            <li className={link.isSelected ? "active" : ""}>
                                <a onClick={link.onClick}>{this.props.name}</a>
                            </li>
                        )}
                    </>
                )}
            </SectionLink>
        )
    }
}

export default NavigationItem;