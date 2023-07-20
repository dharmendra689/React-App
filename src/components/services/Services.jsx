import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Skilled in crafting intuitive and visually appealing UI/UX designs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Strong eye for aesthetics, blending creativity with functionality.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating elegant UX/UI for engaging experiences..</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adaptable to diverse project requirements, from web to mobile interfaces.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adaptable to diverse project requirements, from web to mobile interfaces.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Striving to elevate brands through delightful and user-friendly designs.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Proficient in HTML, CSS, and JavaScript for building responsive websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Committed to delivering high-quality web solutions.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced in front-end frameworks like React and Angular.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Strong understanding of responsive design for optimal performance across devices.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Strong problem-solving abilities, troubleshooting issues with precision.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Skillful in optimizing websites for speed and performance.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>SEO researced posts and articles.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Capable of creating visually captivating multimedia content to enhance user engagement.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Captivating readers with creative storytelling and visuals.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Fueling curiosity with thought-provoking and informative pieces.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Empowering others with valuable knowledge and expertise.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Strong storytelling skills to inspire and educate.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>

    </section>
  )
}

export default Services;