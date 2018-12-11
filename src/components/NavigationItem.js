import React from 'react';
import { SectionLink } from "react-scroll-section";

class NavigationItem extends React.Component{
    render() {
        return (
            <SectionLink section={this.props.section}>
                {link => (
                    <li className={link.isSelected ? "active" : ""}>
                        <a onClick={link.onClick}>{this.props.name}</a>
                    </li>
                )}
            </SectionLink>
        )
    }
}

export default NavigationItem;