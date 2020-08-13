import React from 'react';

import './styles.css';

const PageHeader = (props) => {
    return (
        <header className="page-header">
            <div className="header-content">
                <strong>{props.title}</strong>
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader
