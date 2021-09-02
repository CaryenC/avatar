import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

// a list of items to show in the sidebar
export const SidebarData = [
    {
        title: 'Home', // the text showing
        path: '/home', // the user-defined path
        icon: <AiIcons.AiFillHome/>, // the icon
        iconClosed: <RiIcons.RiArrowDownSFill/>, // the icon
        iconOpened: <RiIcons.RiArrowUpSFill/>, // the icon
        subNav:[
            {
                title: 'Home 1', // the text showing
                path: '/home/home1', // the user-defined path
            },
            {
                title: 'Home 2', // the text showing
                path: '/home/home2', // the user-defined path
            },
        ],
        className: 'nav-text' // the class name
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>, // the icon
        iconOpened: <RiIcons.RiArrowUpSFill/>, // the icon
        subNav:[
            {
                title: 'Product 1', // the text showing
                path: '/products/product1', // the user-defined path
            },
            {
                title: 'Product 2', // the text showing
                path: '/products/product2', // the user-defined path
            },
        ],
        className: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper/>,
        className: 'nav-text'
    },
]
