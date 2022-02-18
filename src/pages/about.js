import * as React from 'react'
import Layout from '../components/layout'


const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <main className="site-grid-main">
        <p className="main__p">My name is Egil J. Swenning Leyser from Uppsala, Sweden, currently studying Frontend Development at Hyper Island. </p>
        <h2>Earlier Work</h2>
        <ul className="main__ul about-list">
          <li>2020-2021 R2B Software</li>
          <li>2020 Saco-S at Uppsala University</li>
          <li>2015-2021 BHS Coordinator, Swedavia</li>
          <li>2012-2020 Baggage Technician, Swedavia</li>
        </ul>
        <h2>Internships</h2>
        <ul className="main__ul about-list">
          <li>2016-2017 Frontend developer, 株式会社ikkai</li>
          <li>2010-2011 Photographer Assistant for Johan Wahlgren</li>
          <li>2010 Frontend developer, das Duell</li>
        </ul>
        <h2>Education</h2>
        <ul className="main__ul about-list">
          <li>2022 - Frontend Developer, Hyper Island</li>
          <li>2021 Frontend Developer, Changemaker Eduacation</li>
          <li>2014 - 2021 Bachelor of Science in Informatics, Kristianstad University</li>
          <li>2011 - 2012 カイ日本語スクール – Kai Japanese Language School</li>
        </ul>
        <h2>Contact me at</h2>
        <ul className="main__ul about-list">
          <li className="twitter-list"><i className="fab fa-twitter"></i>Twitter <a href="#">@egiiiiil</a></li>
          <li className="github-list"><i className="fab fa-github"></i>GitHub <a href="https://github.com/egiiiiil">egiiiiil</a></li>
          <li className="mail-list"><i className="far fa-envelope"></i>Email <a href="mailto:hello@egiljswenningleyser.se">hello@egiljswenning<wbr />leyser.se</a></li>
        </ul>
      </main>
    </Layout>
  )
}

export default AboutPage