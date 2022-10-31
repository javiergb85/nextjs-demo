import React from 'react'
import styles from './Navbar.module.css'
import {ActiveLink} from './ActiveLink'
import { useRouter } from 'next/router'
const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];
 


export const NavBar = () => {
  const {asPath} = useRouter()
 
 
  
  return (
    <nav className={styles['menu-container']}>
        {/* <ActiveLink text="home" href="/"/> 
        <ActiveLink text="about"  href="/about"/> 
        <ActiveLink text="contact"  href="/contact"/> 
        <ActiveLink text="pricing"  href="/pricing"/>  */}

        
        {menuItems.map((index)=><ActiveLink key={index.href} text={index.text}  href={index.href}/>) }
    </nav>
  )
}

 