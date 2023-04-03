import React, { Component } from 'react';
import { Panel, PanelGroup } from 'rsuite';
import '../About.css';
import 'rsuite/dist/styles/rsuite-default.css';

export default function About(props) {
    
        return(

            <div>
                <center><h1 className="about-header" >About Us</h1></center>
                <Panel bordered>
                <p>Shoe Palace is an online sneaker store application that offers a vast selection of high-quality sneakers from the world's leading brands. With a user-friendly interface, Shoe Palace makes it easy for customers to browse, select, and purchase their favorite sneakers from the comfort of their homes. The app provides detailed product descriptions, high-quality images, and real-time stock availability updates, ensuring a seamless shopping experience for sneaker enthusiasts and casual buyers alike.

In addition to its vast product selection, Shoe Palace offers competitive prices and exclusive deals on the latest sneaker releases. Customers can also sign up for the Shoe Palace loyalty program, which offers rewards points and exclusive access to sales and promotions.

Shoe Palace prides itself on providing excellent customer service, with a knowledgeable and friendly customer support team available to assist with any inquiries or issues. The app also offers a convenient and secure checkout process, with multiple payment options available to suit customers' needs.

Overall, Shoe Palace is the ultimate destination for sneaker enthusiasts looking for the latest and greatest styles from the world's top brands.
                The company is headquartered in Nairobi, Kenya.</p>
                </Panel>
            </div>
            
        )
    
}
