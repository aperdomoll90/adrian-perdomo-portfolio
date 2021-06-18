import React from 'react'
import '../styles/_main.scss'
import 'materialize-css'
import { Icon, Button, SideNav, SideNavItem } from 'react-materialize'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <SideNav
      id='SideNav-10'
      options={{ draggable: false }}
      trigger={
        <Button className='btn-floating btn-large waves-effect waves-light nav-button' node='button'>
          <i className='material-icons'>view_headline</i>
        </Button>
      }>
      <SideNavItem user={{ email: 'Welcome' }} userView />
      <Link to='/'>
        <SideNavItem icon={<Icon>home</Icon>}>Home</SideNavItem>
      </Link>
      <Link to='/resume'>
        <SideNavItem icon={<Icon>home</Icon>}>Resume </SideNavItem>
      </Link>
      <Link to='/ContactMe'>
        <SideNavItem icon={<Icon>mail</Icon>}>Contact Me </SideNavItem>
      </Link>
    </SideNav>
  )
}

export default Header
