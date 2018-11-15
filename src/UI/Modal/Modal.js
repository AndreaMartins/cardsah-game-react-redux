import React, { Component } from 'react';
import classes from './Modal.css';


const Modal = ({children}) => {

        return (
            <div>
                <div className={classes.Modal}>
                    {children}
                </div>
            </div>
        )
};

export default Modal;
