import React from 'react'
import './Ads.css'
import { people } from '../../Data'


const Ads = () => {
  return (
    <div className='ads_section'>
      <div className='ads'>
        <h1>ADS</h1>
      </div>

      <div className='ads_people'>
        <h1>People also Viewed</h1>
          {people.map((items, index) => {
          return (
            <div className="ads_body">
              <div>
                <img src={items.image.type} alt="" />
              </div>

              <div className='ads_text'>
                <div>
                  <h1 className="ads_name">{items.name}</h1>
                  <p className=" ads_paragraph">{items.paragraph}</p>
                  <button>{items.follow}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  )
}

export default Ads