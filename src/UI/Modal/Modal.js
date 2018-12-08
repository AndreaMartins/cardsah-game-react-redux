import React, { Component } from 'react';
import classes from './Modal.css';


const modal = (props) => {

        return (
            <div>
                <div className="Modal"
                      style = {{color: props.show ? 'black':'red',
                                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                                opacity: props.show ? '1': '0',
                                }}>
                    {props.children}
                </div>
            </div>
        )
};

export default modal;
