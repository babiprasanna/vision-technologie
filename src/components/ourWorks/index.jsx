import React, { useState } from 'react';
import images from "../../assets/web_a3.webp"
import "./index.css"

const data = [
    { id: 1, name: 'Graphic Design', category: 'Graphic Design' },
    { id: 2, name: 'Web Design', category: 'Web Development' },
    { id: 3, name: 'Logo Design', category: 'Graphic Design' },
    { id: 4, name: 'SEO', category: 'Digital Marketing' },
    { id: 5, name: 'Content Marketing', category: 'Digital Marketing' },
    { id: 6, name: 'Portrait Photography', category: 'Photography' },
    { id: 7, name: 'Landscape Photography', category: 'Photography' },
    { id: 8, name: 'Print Advertising', category: 'Advertising' },
    { id: 9, name: 'Online Advertising', category: 'Advertising' },
    { id: 10, name: 'E-commerce Websites', category: 'Websites' },
    { id: 11, name: 'Portfolio Websites', category: 'Websites' },
  ];

function OurWorks(){
    const [category, setCategory] = useState('Web Development');
  
  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  
    return(<div className="container mt-4">
          <h2 className="about2">Our Works</h2>
        <div className="row">
            <div className="col-12 d-flex flex-column col-md-2">
        <button className={(category === 'Graphic Design') ? "graphic2":"graphic"} onClick={() => handleCategoryClick('Graphic Design')}>
          Graphic Design
        </button>
        
        <button className={(category === 'Web Development') ? "graphic2":"graphic"} onClick={() => handleCategoryClick('Web Development')}>
          Web Development
        </button>

        <button className={(category === 'Digital Marketing') ? "graphic2":"graphic"} onClick={() => handleCategoryClick('Digital Marketing')}>
          Digital Marketing
        </button>

        <button className={(category === 'Photography') ? "graphic2":"graphic"} onClick={() => handleCategoryClick('Photography')}>
          Photography
        </button>

        <button className={(category === 'Advertising') ? "graphic2":"graphic"} onClick={() => handleCategoryClick('Advertising')}>
          Advertising
        </button>

        <button className={(category === 'Websites') ? "graphic2":"graphic"} onClick={() => handleCategoryClick('Websites')}>
          Websites
        </button>
      
      </div>
      <div className='col-12 col-md-10 align'>
        <ul className='items'>
          {data
            .filter(item => category ? item.category === category : true)
            .map(item => (
              <li key={item.id} className='container-image'> <div class="overlay">
            
            </div></li> 
            ))}
        </ul>
      </div>
    </div>
    </div>)
}

export default OurWorks;