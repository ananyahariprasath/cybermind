import React, { useState, useEffect } from 'react';
import Enterprise from "../src/assets/EnterpriseScale.png"
import realTimeApp from "../src/assets/realTimeApp.png"
import interactive from "../src/assets/interactive.png"
import dataHeavy from "../src/assets/dataHeavy.png"
import blazingFast from '../src/assets/blazingFast.png'
import awardWinning from '../src/assets/awardWinning.webp'
import yCombinator from '../src/assets/yCombinator.png'
import farmyungAward from '../src/assets/farmyngAward.webp'
import './App.css';
import ContactForm from './pages/Contact';
import Careers from './pages/Careers';
import WhyUs from './pages/WhyUs';
import Services from './pages/Services';
import demo1 from '../src/assets/demo1.png';
import demo2 from '../src/assets/demo2.png';
import freelance1 from './assets/freelance1.png';
import freelance2 from './assets/freelance2.png';
import aatchitamizh from './assets/aatchitamizhlogo.webp';
import BB from './assets/BBlogo.png';
import captain from './assets/captainLogo.webp';
import DMK from './assets/DmkLogo.webp';
import farmyng from './assets/farmyngclub.png';
import hyperlaunch from './assets/hyperlaunch.png';
import inesh from './assets/inesh.webp';
import ivb from './assets/ivbLogo.jpg';
import jobzshala from './assets/jobzshala.png';
import moneyrush from './assets/MoneyRushLogo.webp';
import ovhqlogo from './assets/ovhqlogo.png';
import schoolnet from './assets/schoolnetLogo.webp';
import skilllync from './assets/SkillLyncLogo.png';
// import Profitabill, { CallToAction, Features, Review } from './pages/Profitabill';



function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <WorksSection />
      <BrandCarousel />
      <CardsContainer />
      <ContactForm />
      <Careers />
      <AppscaleRecognition />
      <WhyUs />
      <Services />
      {/* <Profitabill />
      <Review />
      <CallToAction />
      <Features /> */}
      <IdeaSection />
      <Footer /> 
    </div>
  );
}

function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo-text">CyberMind Works</h1>
      </div>
      
      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#portfolio">Portfolio</a></li>
          
          <li className="nav-item dropdown">
            <a href="#services" onClick={(e) => {
              e.preventDefault();
              setServicesOpen(!servicesOpen);
            }}>
              Services 
              <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </a>
            {servicesOpen && (
              <ul className="dropdown-menu">
                <li><a href="#web-apps">Web Apps</a></li>
                <li><a href="#mobile-apps">Mobile Apps</a></li>
              </ul>
            )}
          </li> 
                  
          
          <li className="nav-item dropdown">
            <a href="#products" onClick={(e) => {
              e.preventDefault();
              setProductsOpen(!productsOpen);
            }}>
              Products 
              <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5H7z" />
              </svg> 
            </a>
            {productsOpen && (
              <ul className="dropdown-menu">
                <li><a href="#profitabill">Profitabill</a></li>
                <li><a href="#farmyng club">Farmyng Club</a></li>
              </ul>
            )}
          </li>
          
          <li className="nav-item"><a href="#blog">Blog</a></li>
          <li className="nav-item"><a href="#careers">Careers</a></li>
        </ul>
      </nav>
      
      <button className="contact-button">Contact Us</button>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Get a software for your business that is 
          <span className="gradient-text">Fast<br /></span>
          <span className="gradient-text">Reliable <br /></span>
          <span className="gradient-text"> Scalable<br /></span>
          <span className="gradient-text">Secure<br /></span>
        </h1>
        
        <p className="hero-subtitle">
          We specialize in creating custom software solutions from 
          the ground up for startups and mid-sized enterprises.
        </p>
        
        <div className="trusted-by">
          <p>Trusted by</p>
          <div className="trusted-logo">
            <img src={yCombinator} alt="Y Combinator" />
            <p>founders</p>
          </div>
        </div>
      </div>
    </section>
  );
}
const projectsData = {
  enterprise: [
      {
        title: '5 Million + leads in CRM',
        description: 'Slick application with complex tailor made business reports rendered in seconds - all while munching huge amounts of dataicon',
        image: Enterprise,
      },
      {
        title:'Near real-time Lead Prioritization',
        description:'Get an agent assigned to your hot leads in few seconds all while running complicated lead assignment and prioritization algorithms',
         image: Enterprise,
    },
    {
        title:'360 degree tracking across products',
        description:'Track every activity of a lead - website visits, form fills, inbound calls, emails, social media ads and more..',
         image: Enterprise,
    }
    ],
    learning: [
      {
        title: 'Coding Judge, Audio/Video tests',
        description:'We built a platform that can host MCQs, Coding questions, Audio, Video (Listening, Reading tests), File submission.',
        image: realTimeApp ,
      },
      {
        title: 'Student skill profilling',
        description: 'Complete skills profiling of a student, areas of strength/weakness. Suggestions to improve the same.',
        image: realTimeApp,
      },
      {
        title: 'AI integrated- GPT 3.5',
        description: 'Automated creation of question banks, assessment of subjective questions, and crafting individualized reports for students.',
        image: realTimeApp,
      },
    ],
    interactive: [
      {
        title: 'Realtime multi user collaborative editor',
        description: 'Google docs like interactivity and notion like interface built into one.',
       image: interactive,
      //  isSpecialLayout: true,
      },
      {
        title:'Not just Text',
        description:'Editor supports MCQs, Coding editor and many such components built according to client’s needs',
        image:interactive,
      },
      {
        title:'Version control, Auto save and more...',
        description:'WebRTC based editor, very fast. Supports large number of users. Content exportable as E-Books, PPT, Webpage.',
        image:interactive,
      },
    ],
    // // You can add projects for other categories as needed
    // enterprise: [
    //   {
    //     title: '5 Million + leads in CRM',
    //     description: 'Slick application with complex tailor made business reports rendered in seconds - all while munching huge amounts of dataicon',
    //     image: Enterprise,
    //   },
    //   {
    //     title:'Near real-time Lead Prioritization',
    //     description:'Get an agent assigned to your hot leads in few seconds all while running complicated lead assignment and prioritization algorithms',
    //      image: Enterprise,
    // },
    // {
    //     title:'360 degree tracking across products',
    //     description:'Track every activity of a lead - website visits, form fills, inbound calls, emails, social media ads and more..',
    //      image: Enterprise,
    // }
    // ],
    data: [
      {
        title: '100,000,000 + records migrated',
        description:'Handling large amounts of data, we have migrated entire data store for a client with very minimal infra cost',
       image: dataHeavy,
      },
      {
        title: 'Tera bytes of fast data movement ',
        description:'We optimised data movement,running custom scripts,fine tuning infrastructure-completing migration in less than 48 hours',
        image: dataHeavy,
      },
],
    blazing: [
      {
        title: 'Millions of visits',
        description:'We have built websites that handle millions of visitors, while still operating at peak performance',
        image: blazingFast,
    },
    {
        title:'Lightning speed - 90 + score',
        description:"We have bulit websites that have consistency ranked hign in google page audits",
        image: blazingFast,
    },
    {
        title:'Crazy Optimization',
        description:'We implemented optimization techniques - lazy loading, dynamic image optimization, gzip compression & leveraged JAM stack',
        image:blazingFast,
    },
    ],
    award: [
      {
        title: 'Recognized by Google',
        description:'We were trained by Google in partnership with the Ministry of Electronics and Information Technology - Appscale academy',
        image: awardWinning,
      },
      {
        title:'National News coverage',
        description:'Our association with Google Appscale academy was conveyed in all major new-pappers ',
        image: awardWinning,
      },
      {
        title:'Loved by Users',
        description:'4 + star rated and downloade by more than 10,000 users in playstore',
        image: awardWinning,
      },
    ],
  };

function WorksSection() {
  const [activeCategory, setActiveCategory] = useState('learning');
  const [activeSlide, setActiveSlide] = useState(0);

  const categories = [
    { id: 'enterprise', name: 'Enterprise scale', tags: ['#SaaS', '#CRM'] },
    { id: 'learning', name: 'Learning platform', tags: ['#LMS'] },
    { id: 'interactive', name: 'Interactive', tags: ['#LMS'] },
    { id: 'data', name: 'Data heavy', tags: ['#ETL'] },
    { id: 'blazing', name: 'Blazing fast', tags: ['#JAMStack'] },
    { id: 'award', name: 'Award winning app', tags: ['#Flutter'] },
  ];

 
  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const projects = projectsData[activeCategory] || [];
    if (projects.length === 0) return;
    
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % projects.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeCategory]);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveSlide(0); // Reset to first slide when changing categories
  };

  const renderProjects = () => {
    const projects = projectsData[activeCategory] || [];
    if (projects.length === 0) {
      return <div className="no-projects">No projects to display for this category.</div>;
    }

    return (
      <div className="projects-showcase">
        <div className="showcase-container">
          {/* Left Column - Project Features */}
          <div className="project-features">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`project-feature ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
              >
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" className="lightning-icon">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor" />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Column - Image Showcase */}
          <div className="image-showcase">
            {projects[activeSlide]?.isSpecialLayout ? (
              <div className="hackathon-display">
                <div className="hackathon-main">
                  <img src="C:\cybermind\assets\EnterpriseScale.png" alt="24 Hour Programming Hackathon" />
                </div>
                <div className="hackathon-details">
                  <img src="/hackathon-card.png" alt="Hackathon Details" />
                  <img src="/hackathon-schedule.png" alt="Hackathon Schedule" />
                </div>
              </div>
            ) : (
              <div className="image-container">
                <img 
                  src={projects[activeSlide]?.image} 
                  alt={projects[activeSlide]?.title}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="works-section">
      <h2 className="section-title">Some of our works</h2>
      
      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category.id)}
          >
            <h3>{category.name}</h3>
            <div className="tags">
              {category.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Active Indicator */}
      <div className="active-indicator">
        <div 
          className="indicator-line" 
          style={{ 
            left: `${categories.findIndex(cat => cat.id === activeCategory) * (100 / categories.length)}%`,
            width: `${100 / categories.length}%`
          }}
        ></div>
      </div>
      
      {/* Projects Display */}
      {renderProjects()}
      
      {/* Slide Indicators */}
      <div className="slide-indicators">
        {(projectsData[activeCategory] || []).map((_, index) => (
          <button 
            key={index}
            className={`indicator ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
 
function BrandCarousel() {
  // Array of brand data with logos and names
  const brands = [
    { name: "Aatchitamizh", logo: aatchitamizh },
    { name: "BB", logo: BB },
    { name: "Captain Fresh", logo: captain },
    { name: "DMK", logo: DMK },
    { name: "Farmyng Club", logo: farmyng },
    { name: "Hyperlaunch", logo: hyperlaunch },
    { name: "Inesh", logo: inesh },
    { name: "IVB", logo: ivb },
    { name: "Jobzshala", logo: jobzshala },
    { name: "MoneyRush", logo: moneyrush },
    { name: "Overqualified Housewives", logo: ovhqlogo },
    { name: "Schoolnet", logo: schoolnet },
    { name: "Skill-Lync", logo: skilllync },
  ];

    return (
    <section className="brands-section">
      <div className="container">
        <h2 className="brands-heading">Brands that trust us.</h2>
        
        <div className="brands-carousel">
          <div className="brands-track">
            {/* First set of logos */}
            <div className="brands-track-section">
              {brands.map((brand) => (
                <div key={`first-${brand.id}`} className="brand-item">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`} 
                    className="brand-logo"
                  />
                </div>
              ))}
            </div>
            
            {/* Duplicate set for infinite scrolling */}
            <div className="brands-track-section">
              {brands.map((brand) => (
                <div key={`second-${brand.id}`} className="brand-item">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`} 
                    className="brand-logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider at bottom */}
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
}

const Card = ({ title, images, features }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="w-full max-w-md bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <div 
          className="transition-transform duration-1000 ease-in-out"
          style={{ 
            transform: isHovered ? 'translateY(-50%)' : 'translateY(0)',
            height: '200%'
          }}
        >
          {/* First image */}
          <div className="h-64 w-full">
            <img 
              src="/api/placeholder/400/320" 
              alt={`${title} preview 1`}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Second image (revealed on hover) */}
          <div className="h-64 w-full">
            <img 
              src="/api/placeholder/400/320" 
              alt={`${title} preview 2`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        
        <div className="flex flex-wrap gap-2 mb-2">
          {features.map((feature, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

 function CardsContainer() {
  const cardsData = [
    {
      title: "Demo Portal",
      images: [demo1, demo2],
      features: ["Realtime Matching", "Calendar sync", "Notifications", "Reports"],
    },
    {
      title: "Freelance platform",
      images: [freelance1, freelance2],
      features: ["Freelance Directory", "Custom Quotation", "Track Progress", "Rating & Reviews"],
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardsData.map((card, index) => (
            <Card 
              key={index}
              title={card.title}
              features={card.features}
              images={card.images}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div>
      <Services />
    </div>
  );
};

function AppscaleRecognition() {
  return (
    <div className="appscale-container">
      <div className="award-card">
        <img src={farmyungAward} alt="Appscale Academy Award" className="award-image" />
      </div>
      <p className="description-text">
        Our project, <span className="highlight">Farmyng Club</span>, has been acknowledged<br />
        by Google's Appscale Academy.
      </p>
    </div>
  );
};


function IdeaSection () {
  return (
    <section className="idea-section">
      <h2 className="idea-title">Have an idea?</h2>
      <p className="idea-description">
        Need help in turning your idea into a successful product? <br />
        Talk to us. We can help you build your product quickly and <br />
        ensure it can scale infinitely.
      </p>
      <button className="idea-button">Get Free Consulting</button>
    </section>
  );
};


    
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
        </div>
        
        <div className="footer-links">
          <div className='link-column'>
            <h3>About Us</h3>
            <ul>
              <li>< a href='#why us'>Why Us</a></li>
               <li>< a href='#privacy terms'>Privacy Terms</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Portfolio</h3>
             <ul>
              <li><a href="#sales crm">Sales CRM</a></li>
             <li><a href="#marketing jobverse">Marketing Jobverse</a></li>
             <li><a href="#uthsav">Uthsav</a></li>
             <li><a href="#learning platform">Learning platform</a></li>
             <li><a href="#profitabill">Profitabill</a></li>
               <li><a href="#baabee">Baabee Tv</a></li>
              <li><a href="#inesh">Inesh</a></li>
                <li><a href="#political">Political App</a></li>
             <li><a href="#farmyung club app">Farmyng Club App</a></li>
            </ul>
           </div>
          
          <div className="link-column">
             <h3>Offerings</h3>
          <ul>
         <li><a href="#Products">Products</a></li>
               <li><a href="#Services">Services</a></li>
              <li><a href="#Web App">Web App</a></li>
           <li><a href="# Development">Development</a></li> 
            <li><a href="#Mobile App">Mobile App </a></li>
             <li><a href="#Development">Development</a></li>
           </ul>
          </div>
          <div className="link-column">
           <h3>Careers</h3>
           <ul>
           <li><a href="#">We are hiring!</a></li>
             </ul>
         </div>
          
         <div className="link-column">
           <h1>CyberMind Works LLP</h1>
             <ul>
              <li><a href="mailto:info@cybermindworks.com"><br /> 
                 10/15 K.M Towers - 1st Floor, Chakrapani Road,<br />
              Guindy, Chennai, Tamil Nadu, 60004</a></li>
              <li><a href="tel:+1234567890">ph: +01 75000 53535</a></li>
               <li><a href='#'>www.cybermindworks.com</a></li>
             <li><a href="mailto:info@cybermindworks.com">contact@cybermindworks.com</a></li>
          </ul> 
        </div>
      </div>
    </div>
<div className="copyright">
     <p>Copyright © 2025, CyberMind Works | All rights reserved.</p>
    </div>
  </footer>
);
 }

 export default App;