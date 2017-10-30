import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import FontIcon from 'react-md/lib/FontIcons';

// Sadly the active prop on Link and IndexLink won't work correctly since
// they rely on context for updates and react-md uses PureComponent behind
// the scenes so the context updates don't happen.
function isActive(to, path) {
    return to === path;
}

export default class App extends Component {

    render() {
        const childrenProps = this.props.children.props;
        const {
            location: { pathname },
            children,
        } = this.props;

        return (

            <NavigationDrawer
                drawerTitle="Dry Cleaners App"
                toolbarTitle={ childrenProps.route.pageName }
                navItems={[
                    {
                        component: IndexLink,
                        to: '/',
                        active: isActive('/', pathname),
                        primaryText: 'Home',
                        leftIcon: <FontIcon>home</FontIcon>,
                    }, {
                        component: Link,
                        to: '/stores',
                        active: isActive('/stores', pathname),
                        primaryText: 'Stores',
                        leftIcon: <FontIcon>bookmark</FontIcon>,
                    }
                    , {
                        component: Link,
                        to: '/signup',
                        active: isActive('/signup', pathname),
                        primaryText: 'Signup',
                        leftIcon: <FontIcon>lock</FontIcon>,
                    }
                ]}
            >
                {children ? React.cloneElement(children, { key: pathname }) : null}
            </NavigationDrawer>
        );
    }
}

