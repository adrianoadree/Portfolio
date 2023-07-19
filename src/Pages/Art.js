import React, { Component } from 'react';
import { Image, Button, Tabs, Tab } from 'react-bootstrap';
import styles from '../custom.css'

class Arts extends Component {
  render() {

    return (
      <>
        <div className='row center' style={{ width: '100%', padding: '40px' }}>
          <div className='card shadow bgImage' style={{ width: '100%', padding: '50px', borderRadius: '30px' }}>
            <h2 className='fontRubik font-weight-bold' style={{ padding: '40px' }}>
              <span style={{ color: '#27374D', fontWeight: 'bold' }}>
                Hello World! my name is <span style={{ color: '#19A7CE' }}>Adrian Adriano</span>
              </span>
              <br />
              <span className='text-color1 font-weight-bold' style={{ color: '#526D82' }}>I'm a Front-End Developer</span>
            </h2>
            <span className='text-color1 font-weight-bold' style={{ color: '#9DB2BF' }}>
              I create user-centered User Interface for Web and Mobile Applications
            </span>
          </div>
          <div className='row' style={{ height: '50px' }}></div>
          <div className='row center mt-5'>
            <h6 className='fontRubik' style={{ fontWeight: 'bold' }} >scroll down to know more  <span style={{ color: '#19A7CE' }}>about me</span></h6>
            <div className='row' style={{ height: '50px' }} />
          </div>
        </div>

        <div className='row' style={{ paddingLeft: '300px', paddingRight: '300px', paddingTop: '20px', backgroundColor: '#EDE4FF' }}>
          <div className='row center'>

            <div class="card-body">
              <div className='separator'>
                <h4 className='fontRubik' style={{ fontWeight: 'bold' }}>EDUCATIONAL <span style={{ color: '#FF8400' }}>BACKGROUND</span></h4>
              </div>
              <div class="d-flex justify-content-center mb-3" >
                <div class="p-2">
                  <Image src={require('../Assets/Ateneo_de_Naga_University_logo.png')} roundedCircle='true' style={{ height: '150px' }} />
                </div>
                <div class="p-2 ">
                  <br />
                  <div className='fontKanit'>
                    <span >Bachelor of Science in Information Technology</span><br />
                    <span>Ateneo de Naga University</span><br />
                    <span>Naga City, Camarines Sur</span><br />
                    <span>Class of 2023</span><br />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body pt-5">
              <div className='separator'>
                <h4 className='fontRubik' style={{ fontWeight: 'bold' }}>INTERNSHIP <span style={{ color: '#FF8400' }}>EXPERIENCE</span></h4>
              </div>
              <div class="d-flex justify-content-center mb-3" >
                <div class="p-2">
                  <Image src={require('../Assets/pandalivery-logo.jpg')} rounded='true' style={{ height: '180px' }} />
                </div>
                <div class="p-2">
                  <span className='fontKanit'>Intern / Mobile Application Developer</span><br />
                  <span className='fontKanit'>Pandalivery Naga</span><br />
                  <span className='fontKanit'>Naga City, Camarines Sur</span><br />
                  <span className='fontInconsolata' style={{ fontSize: '14px' }}>- Responsible for the front-end development of the mobile Application. Flutter technology was
                    used to develop to cater Android and iOS users of Woop! a bicycle based errand services</span>
                </div>
              </div>
            </div>
          </div>
        </div >

        <div className='row mt-5'>
          <div className='row center' style={{ justifyContent: 'center' }}>
            <button className='mx-2 fontKanit' style={{ width: '350px', height: '70px', border: '1px solid gray', borderRadius: '20px', fontWeight: 'bold', backgroundColor: '#EDE4FF' }}>PROJECTS</button>
            <button className='mx-2 fontKanit' style={{ width: '350px', height: '70px', border: '1px solid gray', borderRadius: '20px', fontWeight: 'bold', backgroundColor: '#EDE4FF' }}>DIGITAL ARTS</button>
          </div>
        </div>

        <div className='row mt-3'>
          <div className='row center' style={{ justifyContent: 'center' }}>
            <div className='guide shadow' style={{ width: '720px', height: '1500px', border: '1px solid gray', borderRadius: '20px', backgroundColor: '#EDE4FF' }}>
              <svg viewBox="0 0 960 300">
                <symbol id="s-text">
                  <text text-anchor="middle" x="50%" y="80%">ARTS </text>
                  <text text-anchor="middle" x="51%" y="80%">ARTS </text>

                </symbol>

                <g class="g-ants">
                  <use xlinkHref="#s-text" class="text-copy"></use>
                  <use xlinkHref="#s-text" class="text-copy"></use>
                  <use xlinkHref="#s-text" class="text-copy"></use>
                  <use xlinkHref="#s-text" class="text-copy"></use>
                  <use xlinkHref="#s-text" class="text-copy"></use>
                </g>
              </svg>

            </div>
          </div>
        </div>






      </>
    );
  }
}

export default Arts;