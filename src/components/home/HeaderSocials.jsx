import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import {CgMail} from 'react-icons/cg'


const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/dikshakushawaha9628' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

          

         

            <a href='https://www.linkedin.com/in/diksha-kushawaha-81b778293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>
            <a href='hkushwaha880@gmail.com' className='home__social-link' target='_blank' rel='noreferrer'>
                <CgMail />
            </a>

            <a href='https://x.com/dikshaa_0211?t=qCd-Q1FueTn0isJSZnToCQ&s=09' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
