import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/breadcrumb.css";

const breadcrumbMap = {
"/software-development": [
{ name: "Home", link: "/" },
{ name: "Software Development", link: "#" },
{ name: "Software Development" }
],

"/seo-services": [
{ name: "Home", link: "/" },
{ name: "SEO & Lead Generation", link: "#" },
{ name: "SEO Strategy" }
],

"/about": [
{ name: "Home", link: "/" },
{ name: "Who We Are", link: "#" },
{ name: "About Us" }
],

"/full-stack-web-development": [
{ name: "Home", link: "/" },
{ name: "Website Development", link: "#" },
{ name: "Product & Inventory Management" }
],

"/seo-ai-search-optimization": [
{ name: "Home", link: "/" },
{ name: "Software Development", link: "#" },    
{ name: " Progressive Web Apps (PWA)" }
],


"/ecommerce-development-optimization": [              
{ name: "Home", link: "/" },
{ name: "Software Development", link: "#" },    
{ name: "Ecommerce" }
],

"/contact": [
{ name: "Home", link: "/" },
{ name: "Who We Are", link: "#" },    
{ name: "Contact Us" }
],


"/ai-web-application-development": [
{ name: "Home", link: "/" },
{ name: "Software Development", link: "#" },    
{ name: "API Development & Integration" }
],

"/ai-website-design-development": [
{ name: "Home", link: "/" },
{ name: "Software Development", link: "#" },    
{ name: "Website Design" }
],

"/ai-software-development": [
{ name: "Home", link: "/" },
{ name: "Software Development", link: "#" },    
{ name: "Seo Services" }
],

"/website-maintenance-performance-security": [    
{ name: "Home", link: "/" },
{ name: "Website Development", link: "#" },
{ name: "Conversion Optimization" }
]
};

const Breadcrumb = () => {
const location = useLocation();

if (location.pathname === "/") return null;

const crumbs = breadcrumbMap[location.pathname];

if (!crumbs) return null;

return ( <div className="breadcrumb-wrap"> <div className="breadcrumb-container">
{crumbs.map((item, index) => (
<React.Fragment key={index}>
{item.link ? ( <Link to={item.link}>{item.name}</Link>
) : ( <span className="active">{item.name}</span>
)}


        {index !== crumbs.length - 1 && <span>›</span>}
      </React.Fragment>
    ))}
  </div>
</div>

);
};

export default Breadcrumb;
