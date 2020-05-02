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
            <footer className="footer bg-success text-white mt-auto py-3">
                <div className="text-warning text-center font-weight-bold font-italic" style={{fontSize: 20}}>Copyrights are reserved to An inc.,</div>
                <div className="text-center">
                    <button className="btn btn-primary btn-lg" style={{borderRadius: 10}}>Contact Us</button>
                </div>
            </footer>
        </div>
    );
}

export default Base;