import React from 'react';
import Menu from './Menu';
import '../styles.css'


const Base = ({
    title = "Title area",
    description = "Description area",
    class_ = "bg-dark text-white p-4",
    children
}
) => {
    return (
        <div>
            <Menu></Menu>
            <div className="jumbotron bg-dark text-white text-center">
                <div className="contianer-fluid">
                    <div className="display-4">{title}</div>
                    <div className="lead">{description}</div>
                </div>
                <div className={class_}>{children}</div>
            </div>
            <footer className="footer bg-warning text-white mt-auto py-3">
                <span className="text-muted">Copy right are reserved to <span className="text-success">An inc.,</span></span>
            </footer>
        </div>
    );
}

export default Base;