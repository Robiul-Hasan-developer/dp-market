import React from 'react'; 

// Social List
export const socialLists = [
    {
        link: 'https://www.facebook.com',
        icon: <i className="fab fa-facebook-f"></i>
    },
    {
        link: 'https://www.twitter.com',
        icon: <i className="fab fa-twitter"></i>
    },
    {
        link: 'https://www.linkedin.com',
        icon: <i className="fab fa-linkedin-in"></i>
    },
    {
        link: 'https://www.pinterest.com',
        icon: <i className="fab fa-instagram"></i>
    },
    {
        link: 'https://www.youtube.com',
        icon: <i className="fab fa-youtube"></i>
    },
]

// Star Rating
export const starRatings = [
    {
        icon: <i className="fas fa-star"></i>
    },
    {
        icon: <i className="fas fa-star"></i>
    },
    {
        icon: <i className="fas fa-star"></i>
    },
    {
        icon: <i className="fas fa-star"></i>
    },
    {
        icon: <i className="fas fa-star"></i>
    },
]

// Header Nav Menu
export const navMenus = [
    {
        text: "Home",
        path: "#",
        submenus: [
            {
                text: "Home One",
                path: "/",
            },
            {
                text: "Home Two",
                path: "/home-two",
            },
        ],
    },
    {
        text: "Products",
        path: "/products",
    },
    {
      text: "Pages",
      path: "#",
      submenus: [
        {
            text: "Shopping Cart",
            path: "/cart",
        },
        {
            text: "Mailing Address",
            path: "/mailing-address",
        },
        {
            text: "Payment Method",
            path: "/cart-payment",
        },
        {
            text: "Preview Order",
            path: "/cart-preview",
        },
        {
            text: "Dashboard",
            path: "/dashboard",
        },
      ],
    },
    {
        text: "Blog",
        path: "/blog",
    },
    {
      text: "Contact",
      path: "/contact",
    },
]

// Footer Content
export const footerInfos = [ 
    {
        icon: <i className="fas fa-map-marker-alt"></i>,
        text: 'Address',
        address: '66 Broklyant, New York India'
    },
    {
        icon: <i className="fas fa-phone"></i>,
        text: 'Phone Number',
        address: '012 345 678 9101'
    }
]

export const footerQuickLinks = [ 
    {
        text: 'Reliable Rentals',
        link: '/product'
    },
    {
        text: 'Golden Key Properties',
        link: '/product'
    },
    {
        text: 'Swift Home Sales',
        link: '/product'
    },
    {
        text: 'Elite Realty Services',
        link: '/product'
    },
    {
        text: 'Dream Property Solutions',
        link: '/product'
    },
]

export const footerUsefulLinks = [ 
    {
        text: 'Product',
        link: '/product'
    },
    {
        text: 'Profile',
        link: '/profile'
    },
    {
        text: 'Shopping Cart',
        link: '/cart'
    },
    {
        text: 'Dashboard',
        link: '/login'
    },
    {
        text: 'Contact',
        link: '/contact'
    },
]

export const footerCategoryLinks = [
    {
        text: 'WordPress',
        link: '/products'
    },
    {
        text: 'React',
        link: '/products'
    },
    {
        text: 'HTML',
        link: '/products'
    },
    {
        text: 'Laravel',
        link: '/products'
    },
    {
        text: 'Figma',
        link: '/products'
    },
]

export const BottomFooterLink = [
    {
        text: 'Terms of Services',
        link: '/'
    },
    {
        text: 'Privacy Policy',
        link: '/'
    },
    {
        text: 'Cookies',
        link: '/'
    },
]