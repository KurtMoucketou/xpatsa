import React, { Component } from "react";
import Image from 'next/image';
import Link from 'next/link';
import {Helmet} from "react-helmet";



 const HelmetPage =({ title, description })=>{
    //const router = useRouter();

    
    return (
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title} | X-Patsa </title>
                <meta name="description" content={description} />
                <link rel="icon" href="/img/Logo_Xpatsa.png" />
            </Helmet>
            
    )

}

export default HelmetPage;