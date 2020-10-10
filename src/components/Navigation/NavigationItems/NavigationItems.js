import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
        { !props.isAuthenticated
        ? <NavigationItem link="/auth">Login / Sign up</NavigationItem>
        : <NavigationItem link="/Logout">Logout</NavigationItem>
        }
    </ul>
);

export default navigationItems;