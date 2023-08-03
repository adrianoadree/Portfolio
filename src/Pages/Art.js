import React, { Component } from 'react';
import { Image } from 'react-bootstrap';


class Arts extends Component {
  render() {



    return (
      <>
        <div className='mt-5 shadow' style={{ backgroundColor: 'white' }}>
          <div className='center'>
            <Image
              src={require('../Assets/Projects/Woop/Woop_Logo_Outlined.png')}
              style={{ width: '300px' }}
            />
          </div>
        </div>
        <div className='row center' style={{ width: '100%', padding: '40px' }}>

          <div className='mt-3'>
            <div className='m-3' style={{ display: 'inline' }}>
              <Image
                className='shadow'
                rounded='true'
                src={require('../Assets/Projects/Woop/Woop1.png')}
                style={{ height: '500px', width: '300px' }}
              />
            </div>
            <div className='m-3' style={{ display: 'inline' }}>
              <Image
                className='shadow'
                rounded='true'
                src={require('../Assets/Projects/Woop/Woop1.png')}
                style={{ height: '500px', width: '300px' }}
              />
            </div>
            <div className='m-3' style={{ display: 'inline' }}>
              <Image
                className='shadow'
                rounded='true'
                src={require('../Assets/Projects/Woop/Woop3.png')}
                style={{ height: '500px', width: '300px' }}
              />
            </div>
          </div>

          <div className='mt-5'>
            <div className='m-3' style={{ display: 'inline' }}>
              <Image
                className='shadow'
                rounded='true'
                src={require('../Assets/Projects/Woop/Woop4.png')}
                style={{ height: '500px', width: '300px' }}
              />
            </div>
            <div className='m-3' style={{ display: 'inline' }}>
              <Image
                className='shadow'
                rounded='true'
                src={require('../Assets/Projects/Woop/Woop5.png')}
                style={{ height: '500px', width: '300px' }}
              />
            </div>
            <div className='m-3' style={{ display: 'inline' }}>
              <Image
                className='shadow'
                rounded='true'
                src={require('../Assets/Projects/Woop/Woop6.png')}
                style={{ height: '500px', width: '300px' }}
              />
            </div>
          </div>

          <div className='mt-5'>
            <div className='m-3' style={{ display: 'inline' }}>
              <Image
                className='shadow'
                rounded='true'
                src={require('../Assets/Projects/Woop/Woop7.png')}
                style={{ height: '500px', width: '300px' }}
              />
            </div>
            <div className='m-3' style={{ display: 'inline' }}>
              <Image
                className='shadow'
                rounded='true'
                src={require('../Assets/Projects/Woop/Woop8.png')}
                style={{ height: '500px', width: '300px' }}
              />
            </div>
            <div className='m-3' style={{ display: 'inline' }}>
              <Image
                className='shadow'
                rounded='true'
                src={require('../Assets/Projects/Woop/Woop9.png')}
                style={{ height: '500px', width: '300px' }}
              />
            </div>
          </div>





        </div>




      </>
    );
  }
}

export default Arts;