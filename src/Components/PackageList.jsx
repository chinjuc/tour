import React, { useState } from 'react'
import { asset } from '../assets/asset';
import { Link, useNavigate, useParams } from 'react-router-dom'
import './switzerland.css'

const List = [
  {
    name: 'Swiss',
    head: 'Switzerland',
    title: "Zermatt & Matterhorn",
    cost: "30,000k",
    p: "30,000k",
    btn: "checkout",
    class: 'swis1',
    desc: "Iconic mountain peak ideal for skiing, hiking, breathtaking alpine views.",

    title1: "Lucerne",
    cost1: "30,000k",
    p1: "30,000k",
    class1: 'swis2',
    btn1: 'checkout',
    desc1: "Iconic mountain peak ideal for skiing, hiking, breathtaking alpine views.",


    title2: "Interlaken",
    cost2: "30,000k",
    p2: "30,000k",
    btn2: "checkout",
    class2: 'swis3',
    desc2: "Iconic mountain peak ideal for skiing, hiking, breathtaking alpine views.",

    title3: "Zurich",
    cost3: "30,000k",
    p3: "37,000k",
    btn3: "checkout",
    class3: 'swis4',
    desc3: "Iconic mountain peak ideal for skiing, hiking, breathtaking alpine views.",


    title4: "Lucerne",
    cost4: "30,000k",
    p4: "30,000k",
    btn4: "checkout",
    class4: 'swis5',
    desc4: "Iconic mountain peak ideal for skiing, hiking, breathtaking alpine views.",


    title5: "Bern",
    cost5: "30,000k",
    p5: "30,000k",
    btn5: "checkout",
    class5: 'swis6',
    desc5: "Iconic mountain peak ideal for skiing, hiking, breathtaking alpine views.",

    title6: "Jungfraujoch",
    cost6: "30,000k",
    p6: "30,000k",
    btn6: "checkout",
    class6: 'swis7',
    desc6: "Iconic mountain peak ideal for skiing, hiking, breathtaking alpine views.",

    title7: "Lauterbrunnen",
    cost7: "30,000k",
    p7: "30,000k",
    btn7: "checkout",
    class7: 'swis8',
    desc7: "Iconic mountain peak ideal for skiing, hiking, breathtaking alpine views.",

    title8: "Geneva",
    cost8: "30,000k",
    p8: "30,000k",
    btn8: "checkout",
    class8: 'swis9',
    desc8: "Iconic mountain peak ideal for skiing, hiking, breathtaking alpine views.",
  },
  {
    name: 'france',
    head: 'france',
    title: "Lucerne",
    cost: "30,000k",
    p: "30,000k",
    btn: "checkout",
    class: 'france1',
    desc: "Charming lakeside city with medieval bridges and mountain scenery.",

    title1: "Lucerne",
    img1: asset.swiss2,
    cost1: "30,000k",
    p1: "30,000k",
    btn1: "checkout",
    class1: 'france3',
    desc1: "Charming lakeside city with medieval bridges and mountain scenery.",

    title2: "Lucerne",
    img2: asset.swiss2,
    cost2: "30,000k",
    btn2: "checkout",
    p2: "30,000k",
    class2: 'france2',
    desc2: "Charming lakeside city with medieval bridges and mountain scenery.",

    title3: "Lucerne",
    img3: asset.swiss2,
    cost3: "30,000k",
    btn3: "checkout",
    p3: "30,000k",
    class3: 'france5',
    desc3: "Charming lakeside city with medieval bridges and mountain scenery.",

    title4: "Lucerne",
    cost4: "30,000k",
    p4: "30,000k",
    btn4: "checkout",
    class4: 'france4',
    desc4: "Charming lakeside city with medieval bridges and mountain scenery.",

    title5: "Lucerne",
    cost5: "30,000k",
    p5: "30,000k",
    btn5: "checkout",
    class5: 'france6',
    desc5: "Charming lakeside city with medieval bridges and mountain scenery.",

    title6: "Lucerne",
    cost6: "30,000k",
    p6: "30,000k",
    btn6: "checkout",
    class6: 'france7',
    desc6: "Charming lakeside city with medieval bridges and mountain scenery.",

    title7: "Lucerne",
    cost7: "30,000k",
    p7: "30,000k",
    class7: 'france8',
    btn7: "checkout",
    desc7: "Charming lakeside city with medieval bridges and mountain scenery.",

    title8: "Lucerne",
    cost8: "30,000k",
    p8: "30,000k",
    btn8: "checkout",
    class8: 'france1',
    desc8: "Charming lakeside city with medieval bridges and mountain scenery.",

  },
  {
    name: 'US',
    head: 'united state',
    title: "Lucerne",
    cost: "30,000k",
    p: "30,000k",
    btn: "checkout",
    class: 'us1',
    desc: "Charming lakeside city with medieval bridges and mountain scenery.",

    title1: "Lucerne",
    img1: asset.swiss2,
    cost1: "30,000k",
    p1: "30,000k",
    btn1: "checkout",
    class1: 'france3',
    desc1: "Charming lakeside city with medieval bridges and mountain scenery.",


    title2: "Lucerne",
    img2: asset.swiss2,
    cost2: "30,000k",
    btn2: "checkout",
    p2: "30,000k",
    class2: 'us2',
    desc2: "Charming lakeside city with medieval bridges and mountain scenery.",

    title3: "Lucerne",
    img3: asset.swiss2,
    cost3: "30,000k",
    p3: "30,000k",
    btn3: "checkout",
    class3: 'us3',
    desc3: "Charming lakeside city with medieval bridges and mountain scenery.",

    title4: "Lucerne",
    cost4: "30,000k",
    p4: "30,000k",
    btn4: "checkout",
    class4: 'us4',
    desc4: "Charming lakeside city with medieval bridges and mountain scenery.",

    title5: "Lucerne",
    cost5: "30,000k",
    p5: "30,000k",
    btn5: "checkout",
    class5: 'us5',
    desc5: "Charming lakeside city with medieval bridges and mountain scenery.",

    title6: "Lucerne",
    cost6: "30,000k",
    p6: "30,000k",
    btn6: "checkout",
    class6: 'us6',
    desc6: "Charming lakeside city with medieval bridges and mountain scenery.",

    title7: "Lucerne",
    cost7: "30,000k",
    p7: "30,000k",
    btn7: "checkout",
    class7: 'us7',
    desc7: "Charming lakeside city with medieval bridges and mountain scenery.",

    title8: "Lucerne",
    cost8: "30,000k",
    p8: "30,000k",
    btn8: "checkout",
    class8: 'france1',
    desc8: "Charming lakeside city with medieval bridges and mountain scenery.",
  },
  {
    name: 'china',
    head: 'china',
    title: "Lucerne",
    cost: "30,000k",
    btn: "checkout",
    p: "30,000k",
    class: 'china1',
    desc: "Charming lakeside city with medieval bridges and mountain scenery.",

    title1: "Lucerne",
    img1: asset.swiss2,
    cost1: "30,000k",
    btn1: "checkout",
    p1: "30,000k",
    class1: 'china2',
    desc1: "Charming lakeside city with medieval bridges and mountain scenery.",


    title2: "Lucerne",
    img2: asset.swiss2,
    cost2: "30,000k",
    p2: "30,000k",
    btn2: "checkout",
    class2: 'china3',
    desc2: "Charming lakeside city with medieval bridges and mountain scenery.",

    title3: "Lucerne",
    img3: asset.swiss2,
    cost3: "30,000k",
    btn3: "checkout",
    p3: "30,000k",
    class3: 'china4',
    desc3: "Charming lakeside city with medieval bridges and mountain scenery.",

    title4: "Lucerne",
    cost4: "30,000k",
    p4: "30,000k",
    btn4: "checkout",
    class4: 'china5',
    desc4: "Charming lakeside city with medieval bridges and mountain scenery.",

    title5: "Lucerne",
    cost5: "30,000k",
    p5: "30,000k",
    btn5: "checkout",
    class5: 'china6',
    desc5: "Charming lakeside city with medieval bridges and mountain scenery.",

    title6: "Lucerne",
    cost6: "30,000k",
    p6: "30,000k",
    btn6: "checkout",
    class6: 'china7',
    desc6: "Charming lakeside city with medieval bridges and mountain scenery.",

    title7: "Lucerne",
    cost7: "30,000k",
    p7: "30,000k",
    btn7: "checkout",
    class7: 'china8',
    desc7: "Charming lakeside city with medieval bridges and mountain scenery.",

    title8: "Lucerne",
    cost8: "30,000k",
    p8: "30,000k",
    class8: 'china9',
    btn8: "checkout",
    desc8: "Charming lakeside city with medieval bridges and mountain scenery.",
  },
  {
    name: 'italy',
    head: 'Italy',
    title: "Lucerne",
    cost: "30,000k",
    btn: "checkout",
    p: "30,000k",
    class: 'italy1',
    desc: "Charming lakeside city with medieval bridges and mountain scenery.",

    title1: "Lucerne",
    img1: asset.swiss2,
    cost1: "30,000k",
    btn1: "checkout",
    p1: "30,000k",
    class1: 'italy2',
    desc1: "Charming lakeside city with medieval bridges and mountain scenery.",


    title2: "Lucerne",
    img2: asset.swiss2,
    cost2: "30,000k",
    btn2: "checkout",
    p2: "30,000k",
    class2: 'italy3',
    desc2: "Charming lakeside city with medieval bridges and mountain scenery.",

    title3: "Lucerne",
    img3: asset.swiss2,
    cost3: "30,000k",
    btn3: "checkout",
    p3: "30,000k",
    class3: 'italy4',
    desc3: "Charming lakeside city with medieval bridges and mountain scenery.",

    title4: "Lucerne",
    cost4: "30,000k",
    p4: "30,000k",
    btn4: "checkout",
    class4: 'italy5',
    desc4: "Charming lakeside city with medieval bridges and mountain scenery.",

    title5: "Lucerne",
    cost5: "30,000k",
    p5: "30,000k",
    btn5: "checkout",
    class5: 'italy6',
    desc5: "Charming lakeside city with medieval bridges and mountain scenery.",

    title6: "Lucerne",
    cost6: "30,000k",
    p6: "30,000k",
    btn6: "checkout",
    class6: 'italy3',
    desc6: "Charming lakeside city with medieval bridges and mountain scenery.",

    title7: "Lucerne",
    cost7: "30,000k",
    p7: "30,000k",
    btn7: "checkout",
    class7: 'italy6',
    desc7: "Charming lakeside city with medieval bridges and mountain scenery.",

    title8: "Lucerne",
    cost8: "30,000k",
    p8: "30,000k",
    btn8: "checkout",
    class8: 'france1',
    desc8: "Charming lakeside city with medieval bridges and mountain scenery.",
  },
  {
    name: 'turkey',
    head: 'Turkey',
    title: "Lucerne",
    btn: "checkout",
    cost: "30,000k",
    p: "30,000k",
    class: 'france1',
    desc: "Charming lakeside city with medieval bridges and mountain scenery.",

    title1: "Lucerne",
    img1: asset.swiss2,
    cost1: "30,000k",
    btn1: "checkout",
    p1: "30,000k",
    class1: 'france3',
    desc1: "Charming lakeside city with medieval bridges and mountain scenery.",


    title2: "Lucerne",
    img2: asset.swiss2,
    cost2: "30,000k",
    btn2: "checkout",
    p2: "30,000k",
    class2: 'france2',
    desc2: "Charming lakeside city with medieval bridges and mountain scenery.",

    title3: "Lucerne",
    img3: asset.swiss2,
    cost3: "30,000k",
    btn3: "checkout",
    p3: "30,000k",
    class3: 'france2',
    desc3: "Charming lakeside city with medieval bridges and mountain scenery.",

    title4: "Lucerne",
    cost4: "30,000k",
    p4: "30,000k",
    btn4: "checkout",
    class4: 'france1',
    desc4: "Charming lakeside city with medieval bridges and mountain scenery.",

    title5: "Lucerne",
    cost5: "30,000k",
    p5: "30,000k",
    btn5: "checkout",
    class5: 'france1',
    desc5: "Charming lakeside city with medieval bridges and mountain scenery.",

    title6: "Lucerne",
    cost6: "30,000k",
    p6: "30,000k",
    btn6: "checkout",
    class6: 'france1',
    desc6: "Charming lakeside city with medieval bridges and mountain scenery.",

    title7: "Lucerne",
    cost7: "30,000k",
    p7: "30,000k",
    btn7: "checkout",
    class7: 'france1',
    desc7: "Charming lakeside city with medieval bridges and mountain scenery.",

    title8: "Lucerne",
    cost8: "30,000k",
    btn8: "checkout",
    p8: "30,000k",
    class8: 'france1',
    desc8: "Charming lakeside city with medieval bridges and mountain scenery.",
  },
  {
    name: 'thailand',
    head: 'thailand',

    title: "Lucerne",
    cost: "30,000k",
    p: "30,000k",
    btn: "checkout",
    class: 'thailand1',
    desc: "Charming lakeside city with medieval bridges and mountain scenery.",

    title1: "Lucerne",
    img1: asset.swiss2,
    cost1: "30,000k",
    btn1: "checkout",
    p1: "30,000k",
    class1: 'thailand2',
    desc1: "Charming lakeside city with medieval bridges and mountain scenery.",


    title2: "Lucerne",
    img2: asset.swiss2,
    cost2: "30,000k",
    btn2: "checkout",
    p2: "30,000k",
    class2: 'thailand3',
    desc2: "Charming lakeside city with medieval bridges and mountain scenery.",

    title3: "Lucerne",
    img3: asset.swiss2,
    cost3: "30,000k",
    p3: "30,000k",
    btn3: "checkout",
    class3: 'thailand4',
    desc3: "Charming lakeside city with medieval bridges and mountain scenery.",

    title4: "Lucerne",
    cost4: "30,000k",
    p4: "30,000k",
    btn4: "checkout",
    class4: 'thailand5',
    desc4: "Charming lakeside city with medieval bridges and mountain scenery.",

    title5: "Lucerne",
    cost5: "30,000k",
    p5: "30,000k",
    class5: 'france1',
    btn5: "checkout",
    desc5: "Charming lakeside city with medieval bridges and mountain scenery.",

    title6: "Lucerne",
    cost6: "30,000k",
    p6: "30,000k",
    class6: 'france1',
    btn6: "checkout",

    desc6: "Charming lakeside city with medieval bridges and mountain scenery.",

    title7: "Lucerne",
    cost7: "30,000k",
    p7: "30,000k",
    btn7: "checkout",

    class7: 'france1',
    desc7: "Charming lakeside city with medieval bridges and mountain scenery.",

    title8: "Lucerne",
    cost8: "30,000k",
    p8: "30,000k",
    btn8: "checkout",
    class8: 'france1',
    desc8: "Charming lakeside city with medieval bridges and mountain scenery.",
  },
  {
    name: 'london',
    head: 'london',

    title: "Lucerne",
    cost: "30,000k",
    p: "30,000k",
    btn: "checkout",

    class: 'france1',
    desc: "Charming lakeside city with medieval bridges and mountain scenery.",

    title1: "Lucerne",
    img1: asset.swiss2,
    cost1: "30,000k",
    p1: "30,000k",
    btn1: "checkout",

    class1: 'france3',
    desc1: "Charming lakeside city with medieval bridges and mountain scenery.",


    title2: "Lucerne",
    img2: asset.swiss2,
    cost2: "30,000k",
    p2: "30,000k",
    btn2: "checkout",
    class2: 'france2',
    desc2: "Charming lakeside city with medieval bridges and mountain scenery.",

    title3: "Lucerne",
    img3: asset.swiss2,
    cost3: "30,000k",
    p3: "30,000k",
    btn3: "checkout",
    class3: 'france4',
    desc3: "Charming lakeside city with medieval bridges and mountain scenery.",

    title4: "Lucerne",
    cost4: "30,000k",
    p4: "30,000k",
    btn4: "checkout",
    class4: 'france6',
    desc4: "Charming lakeside city with medieval bridges and mountain scenery.",

    title5: "Lucerne",
    cost5: "30,000k",
    p5: "30,000k",
    btn5: "checkout",
    class5: 'thailand1',
    desc5: "Charming lakeside city with medieval bridges and mountain scenery.",

    title6: "Lucerne",
    cost6: "30,000k",
    p6: "30,000k",
    btn6: "checkout",
    class6: 'thailand4',
    desc6: "Charming lakeside city with medieval bridges and mountain scenery.",

    title7: "Lucerne",
    cost7: "30,000k",
    p7: "30,000k",
    btn7: "checkout",

    class7: 'france1',
    desc7: "Charming lakeside city with medieval bridges and mountain scenery.",

    title8: "Lucerne",
    cost8: "30,000k",
    p8: "30,000k",
    btn8: "checkout",

    class8: 'thailand5',
    desc8: "Charming lakeside city with medieval bridges and mountain scenery.",
  },
  {
    name: 'thailand',
    head: 'thailand',

    title: "Lucerne",
    cost: "30,000k",
    p: "30,00k",
    btn: "checkout",
    class: 'thailand6',
    desc: "Charming lakeside city with medieval bridges and mountain scenery.",

    title1: "Lucerne",
    img1: asset.swiss2,
    cost1: "30,0k",
    p1: "30,000k",
    btn1: "checkout",
    class1: 'thailand2',
    desc1: "Charming lakeside city with medieval bridges and mountain scenery.",


    title2: "Lucerne",
    img2: asset.swiss2,
    cost2: "30,000k",
    p2: "30,000k",
    btn2: "checkout",
    class2: 'france2',
    desc2: "Charming lakeside city with medieval bridges and mountain scenery.",

    title3: "Lucerne",
    img3: asset.swiss2,
    cost3: "30,000k",
    p3: "30,000k",
    btn3: "checkout",
    class3: 'france2',
    desc3: "Charming lakeside city with medieval bridges and mountain scenery.",

    title4: "Lucerne",
    cost4: "30,000k",
    p4: "30,000k",
    btn4: "checkout",
    class4: 'france1',
    desc4: "Charming lakeside city with medieval bridges and mountain scenery.",

    title5: "Lucerne",
    cost5: "30,000k",
    p5: "30,000k",
    btn5: "checkout",
    class5: 'france1',
    desc5: "Charming lakeside city with medieval bridges and mountain scenery.",

    title6: "Lucerne",
    cost6: "30,000k",
    p6: "30,000k",
    btn6: "checkout",
    class6: 'france1',
    desc6: "Charming lakeside city with medieval bridges and mountain scenery.",

    title7: "Lucerne",
    cost7: "30,000k",
    p7: "30,000k",
    btn7: "checkout",

    class7: 'france1',
    desc7: "Charming lakeside city with medieval bridges and mountain scenery.",

    title8: "Lucerne",
    cost8: "30,000k",
    p8: "30,000k",
    btn8: "checkout",

    class8: 'france1',
    desc8: "Charming lakeside city with medieval bridges and mountain scenery.",
  },
  {
    name: 'maldives',
    head: 'maldives',

    title: "Lucerne",
    cost: "30,000k",
    p: "30,000k",
    btn: "checkout",

    class: 'mal1',
    desc: "Charming lakeside city with medieval bridges and mountain scenery.",

    title1: "Lucerne",
    img1: asset.swiss2,
    cost1: "30,000k",
    p1: "30,000k",
    btn1: "checkout",
    class1: 'mal2',
    desc1: "Charming lakeside city with medieval bridges and mountain scenery.",


    title2: "Lucerne",
    img2: asset.swiss2,
    cost2: "30,000k",
    p2: "30,000k",
    btn2: "checkout",
    class2: 'mal3',
    desc2: "Charming lakeside city with medieval bridges and mountain scenery.",

    title3: "Lucerne",
    img3: asset.swiss2,
    cost3: "30,000k",
    p3: "30,000k",
    btn3: "checkout",
    class3: 'mal4',
    desc3: "Charming lakeside city with medieval bridges and mountain scenery.",

    title4: "Lucerne",
    cost4: "30,000k",
    p4: "30,000k",
    btn4: "checkout",
    class4: 'mal5',
    desc4: "Charming lakeside city with medieval bridges and mountain scenery.",

    title5: "Lucerne",
    cost5: "30,000k",
    p5: "30,000k",
    btn5: "checkout",
    class5: 'mal6',
    desc5: "Charming lakeside city with medieval bridges and mountain scenery.",

    title6: "Lucerne",
    cost6: "30,000k",
    p6: "30,000k",
    btn6: "checkout",
    class6: 'mal7',
    desc6: "Charming lakeside city with medieval bridges and mountain scenery.",

    title7: "Lucerne",
    cost7: "30,000k",
    p7: "30,000k",
    btn7: "checkout",
    class7: 'mal1',
    desc7: "Charming lakeside city with medieval bridges and mountain scenery.",

    title8: "Lucerne",
    cost8: "30,000k",
    p8: "30,000k",
    btn8: "checkout",
    class8: 'mal4',
    desc8: "Charming lakeside city with medieval bridges and mountain scenery.",
  },
  {
    name: 'tajmahal',
    head: 'tajmahal',

    title: "Lucerne",
    cost: "30,000k",
    p: "30,000k",
    btn: "checkout",
    class: 'france1',
    desc: "Charming lakeside city with medieval bridges and mountain scenery.",

    title1: "Lucerne",
    img1: asset.swiss2,
    cost1: "30,000k",
    p1: "30,000k",
    btn1: "checkout",
    class1: 'france3',
    desc1: "Charming lakeside city with medieval bridges and mountain scenery.",


    title2: "Lucerne",
    img2: asset.swiss2,
    cost2: "30,000k",
    btn2: "checkout",
    p2: "30,000k",
    class2: 'france2',
    desc2: "Charming lakeside city with medieval bridges and mountain scenery.",

    title3: "Lucerne",
    img3: asset.swiss2,
    cost3: "30,000k",
    p3: "30,000k",
    btn3: "checkout",
    class3: 'france2',
    desc3: "Charming lakeside city with medieval bridges and mountain scenery.",

    title4: "Lucerne",
    cost4: "30,000k",
    p4: "30,000k",
    btn4: "checkout",
    class4: 'france1',
    desc4: "Charming lakeside city with medieval bridges and mountain scenery.",

    title5: "Lucerne",
    cost5: "30,000k",
    p5: "30,000k",
    btn5: "checkout",
    class5: 'france1',
    desc5: "Charming lakeside city with medieval bridges and mountain scenery.",

    title6: "Lucerne",
    cost6: "30,000k",
    p6: "30,000k",
    btn6: "checkout",
    class6: 'france1',
    desc6: "Charming lakeside city with medieval bridges and mountain scenery.",

    title7: "Lucerne",
    cost7: "30,000k",
    p7: "30,000k",
    btn7: "checkout",
    class7: 'france1',
    desc7: "Charming lakeside city with medieval bridges and mountain scenery.",

    title8: "Lucerne",
    cost8: "30,000k",
    p8: "30,000k",
    btn8: "checkout",
    class8: 'france1',
    desc8: "Charming lakeside city with medieval bridges and mountain scenery.",
  },
  {
    name: 'jammu',
    head: 'jammu',

    title: "Lucerne",
    cost: "30,000k",
    p: "30,000k",
    btn: "checkout",
    class: 'kerala1',
    desc: "Charming lakeside city with medieval bridges and mountain scenery.",

    title1: "Lucerne",
    img1: asset.swiss2,
    cost1: "30,000k",
    btn1: "checkout",
    p1: "30,000k",
    class1: 'kerala2',
    desc1: "Charming lakeside city with medieval bridges and mountain scenery.",


    title2: "Lucerne",
    img2: asset.swiss2,
    cost2: "30,000k",
    p2: "30,000k",
    btn2: "checkout",
    class2: 'france2',
    desc2: "Charming lakeside city with medieval bridges and mountain scenery.",

    title3: "Lucerne",
    img3: asset.swiss2,
    cost3: "30,000k",
    p3: "30,000k",
    btn3: "checkout",
    class3: 'france2',
    desc3: "Charming lakeside city with medieval bridges and mountain scenery.",

    title4: "Lucerne",
    cost4: "30,000k",
    p4: "30,000k",
    btn4: "checkout",
    class4: 'france1',
    desc4: "Charming lakeside city with medieval bridges and mountain scenery.",

    title5: "Lucerne",
    cost5: "30,000k",
    p5: "30,000k",
    btn5: "checkout",
    class5: 'france1',
    desc5: "Charming lakeside city with medieval bridges and mountain scenery.",

    title6: "Lucerne",
    cost6: "30,000k",
    p6: "30,000k",
    btn6: "checkout",
    class6: 'france1',
    desc6: "Charming lakeside city with medieval bridges and mountain scenery.",

    title7: "Lucerne",
    cost7: "30,000k",
    p7: "30,000k",
    btn7: "checkout",
    class7: 'france1',
    desc7: "Charming lakeside city with medieval bridges and mountain scenery.",

    title8: "Lucerne",
    cost8: "30,000k",
    btn8: "checkout",
    p8: "30,000k",
    class8: 'france1',
    desc8: "Charming lakeside city with medieval bridges and mountain scenery.",
  },
  {
    name: 'kerala',
    head: 'kerala',

    title: "Lucerne",
    cost: "30,000k",
    p: "30,000k",
    btn: "checkout",
    class: 'kerala1',
    desc: "Charming lakeside city with medieval bridges and mountain scenery.",

    title1: "Lucerne",
    img1: asset.swiss2,
    cost1: "30,000k",
    btn1: "checkout",
    p1: "30,000k",
    class1: 'kerala2',
    desc1: "Charming lakeside city with medieval bridges and mountain scenery.",


    title2: "Lucerne",
    img2: asset.swiss2,
    cost2: "30,000k",
    p2: "30,000k",
    btn2: "checkout",
    class2: 'kerala3',
    desc2: "Charming lakeside city with medieval bridges and mountain scenery.",

    title3: "Lucerne",
    img3: asset.swiss2,
    cost3: "30,000k",
    p3: "30,000k",
    btn3: "checkout",
    class3: 'kerala4',
    desc3: "Charming lakeside city with medieval bridges and mountain scenery.",

    title4: "Lucerne",
    cost4: "30,000k",
    p4: "30,000k",
    btn4: "checkout",
    class4: 'kerala5',
    desc4: "Charming lakeside city with medieval bridges and mountain scenery.",

    title5: "Lucerne",
    cost5: "30,000k",
    p5: "30,000k",
    btn5: "checkout",
    class5: 'kerala6',
    desc5: "Charming lakeside city with medieval bridges and mountain scenery.",

    title6: "Lucerne",
    cost6: "30,000k",
    p6: "30,000k",
    btn6: "checkout",
    class6: 'kerala7',
    desc6: "Charming lakeside city with medieval bridges and mountain scenery.",

    title7: "Lucerne",
    cost7: "30,000k",
    p7: "30,000k",
    btn7: "checkout",
    class7: 'kerala1',
    desc7: "Charming lakeside city with medieval bridges and mountain scenery.",

    title8: "Lucerne",
    cost8: "30,000k",
    p8: "30,000k",
    btn8: "checkout",
    class8: 'kerala4',
    desc8: "Charming lakeside city with medieval bridges and mountain scenery.",
  },
]

function PackageList() {
  const Navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false);
  const { placelist } = useParams();
  const placelists = List.find((Lists) => Lists.name.toLowerCase() === placelist.toLowerCase())



  return (
    <div>
       <nav>
              <div className='nav-top'>
                <div className='nav-left'>
                  <h1 className='text-gray-900'>Heaven Fantasy</h1>
                </div>
      
                <div className='nav-toggle' onClick={() => setShowMenu(!showMenu)}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
      
                <div className={`nav-right ${showMenu ? 'active' : ''}`}>
                  <Link to='/home'>Home</Link>
                  <Link to='/package'>Packages </Link>
                  <Link to='/about'>About </Link>
                  <Link to='/contact'>Contact </Link>
                  <img src={asset.icon} onClick={() => Navigate('/login')} style={{ width: '40px', borderRadius: '50%', marginRight: '20px', cursor: 'pointer' }} alt="" />
                </div>
              </div>
            </nav>
      <h2 className='text-center text-4xl head'>{placelists.head} </h2>
      <div className='swis-head'>
        <div className={`swis-sub ${placelists.class}`}>
          <h1>{placelists.title}</h1>
          <em>{placelists.p}</em>
          <p>{placelists.desc}</p>
          <Link to='/checking'><button className='btn-1'>{placelists.btn}</button></Link>
        </div>

        <div className={`swis-sub ${placelists.class1}`}>
          <h1>{placelists.title1}</h1>
          <em>{placelists.p1}</em>
          <p>{placelists.desc1}</p>
          <Link to='/checking'><button className='btn-1'>{placelists.btn}</button></Link>        </div>


        <div className={`swis-sub ${placelists.class2}`}>
          <h1>{placelists.title2}</h1>
          <em>{placelists.p2}</em>
          <p>{placelists.desc2}</p>
          <Link to='/checking'><button className='btn-1'>{placelists.btn}</button></Link>
        </div>

        <div className={`swis-sub ${placelists.class3}`}>
          <h1>{placelists.title3}</h1>
          <em>{placelists.p3}</em>
          <p>{placelists.desc3}</p>
          <Link to='/checking'><button className='btn-1'>{placelists.btn}</button></Link>
        </div>

        <div className={`swis-sub ${placelists.class4}`}>
          <h1>{placelists.title4}</h1>
          <em>{placelists.p4}</em>
          <p>{placelists.desc4}</p>
          <Link to='/checking'><button className='btn-1'>{placelists.btn}</button></Link>
        </div>

        <div className={`swis-sub ${placelists.class5}`}>
          <h1>{placelists.title5}</h1>
          <em>{placelists.p5}</em>
          <p>{placelists.desc5}</p>
          <Link to='/checking'><button className='btn-1'>{placelists.btn}</button></Link>
        </div>

        <div className={`swis-sub ${placelists.class6}`}>
          <h1>{placelists.title6}</h1>
          <em>{placelists.p6}</em>
          <p>{placelists.desc6}</p>
          <Link to='/checking'><button className='btn-1'>{placelists.btn}</button></Link>        
          </div>

        <div className={`swis-sub ${placelists.class7}`}>
          <h1>{placelists.title7}</h1>
          <em>{placelists.p7}</em>
          <p>{placelists.desc7}</p>
          <Link to='/checking'><button className='btn-1'>{placelists.btn}</button></Link>       
           </div>

        <div className={`swis-sub ${placelists.class8}`}>
          <h1>{placelists.title8}</h1>
          <em>{placelists.p8}</em>
          <p>{placelists.desc8}</p>
          <Link to='/checking'><button className='btn-1'>{placelists.btn}</button></Link>        
          </div>
        <div className="swis-video">

        </div>

      </div>
    </div>
  )
}

export default PackageList