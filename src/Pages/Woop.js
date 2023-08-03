import { Image } from 'react-bootstrap';

function Woop() {

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

            <div className='center fontRubik text-justify mt-3'>
                <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                    Woop! Bicycle Errand Services <span style={{ color: '#FF8400' }}>(Internship Project 2023)</span>
                </p>
            </div>
            <div className='center fontRubik text-justify'>
                <p>Woop! Is a bicycle errand service based in Naga City. The project composed of 3 components, 2 mobile applications for the biker and customer of Woop! And 1 web application for the administrators of the application. Woop offers errand services such as Pasa-Buy, Parcel Pickups, and Bills payment. Pasa-Buy is composed of 3 different types. Food, Medicine, and Grocery. The images shown are the screenshots from the Mobile-User Component of the project </p>
                <Image
                    className='shadow'
                    rounded='true'
                    src={require('../Assets/Skills/flutter-review.jpeg')}
                    style={{ height: '75px' }}

                />
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
                            src={require('../Assets/Projects/Woop/Woop2.png')}
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

                <div className='mt-5'>
                    <div className='m-3' style={{ display: 'inline' }}>
                        <Image
                            className='shadow'
                            rounded='true'
                            src={require('../Assets/Projects/Woop/Woop10.png')}
                            style={{ height: '500px', width: '300px' }}
                        />
                    </div>
                    <div className='m-3' style={{ display: 'inline' }}>
                        <Image
                            className='shadow'
                            rounded='true'
                            src={require('../Assets/Projects/Woop/Woop11.png')}
                            style={{ height: '500px', width: '300px' }}
                        />
                    </div>

                </div>




            </div>




        </>
    );
}
export default Woop;
