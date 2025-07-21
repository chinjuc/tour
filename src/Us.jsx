import React from 'react'
import './switzerland.css'
import { asset } from './assets/asset'
const Us = () => {
  const france = [
    {
      title: "Zermatt & Matterhorn",
      img: asset.france1,
      cost: "30,000k",
      p: "30,000k",
      class: 'france1',
      desc: "Iconic mountain peak ideal for skiing, hiking, breathtaking alpine views."
    },
    {
      title: "Lucerne",
      img: asset.france2,
      cost: "30,000k",
      p: "30,000k",
      class: 'france2',
      desc: "Charming lakeside city with medieval bridges and mountain scenery."
    },
    {
      title: "Interlaken",
      img: asset.swiss3,
      cost: "30,000k",
      p: "30,000k",
      class: 'france3',
      desc: "Adventure capital surrounded by lakes and snow-covered alpine peaks."
    },
    {
      title: "Jungfraujoch",
      img: asset.swiss4,
      cost: "30,000k",
      p: "30,000k",
      class: 'france4',

      desc: "Europe’s highest railway station with glaciers and panoramic mountain views."
    },
    {
      title: "Matterhorn",
      img: asset.swiss5,
      cost: "30,000k",
      p: "30,000k",
      class: 'swis5 ',

      desc: "Elegant lake bordered by vineyards, castles, and vibrant cultural cities."
    },
    {
      title: "Lake Geneva",
      img: asset.swiss6,
      cost: "30,000k",
      p: "30,000k",
      class: 'swis1',

      desc: "Switzerland’s capital with medieval charm, clock towers, riverside beauty."
    },
    {
      title: "Bern",
      img: asset.swiss,
      cost: "30,000k",
      p: "30,000k",
      class: 'swis2',

      desc: "Deep valley filled with waterfalls, cliffs, and alpine villages."
    },
    {
      title: "Montreux",
      img: asset.swiss1,
      cost: "30,000k",
      p: "30,000k",
      class: 'swis6',

      desc: "Lakeside resort town known for jazz, vineyards, and Chillon Castle."
    },
  ]
  return (
    <div>
      <h1 className='text-center text-6xl font-thin swise'>france</h1>
      <div className='swis-head'>
        {france.map((swis, index) => (
          <div key={index} className={`swis-sub ${swis.class}`}>
            <h1>{swis.title}</h1>
            {/* <h2>{swis.cost}</h2> */}
            <em>{swis.p}</em>
            {/* <button>checkout</button> */}
            <p>{swis.desc}</p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Us