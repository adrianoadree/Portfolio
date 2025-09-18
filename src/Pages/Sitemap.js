import Footer from '../Components/Footer';
import ContactMe from '../Components/ContactMe';

const Sitemap = () => {



    return (
        <>
            <div className='row px-5' style={{ height: 'auto', minHeight: '100vh', backgroundColor: '#1d1d1dff' }}>
                <div style={{ marginTop: '10em' }}>
                    <h1 className='fade-text text-center fontTitle px-5 pt-5 m-auto' style={{ marginTop: '.2em', fontSize: "10em", color: "wheat" }}>
                        Sitemap
                    </h1>
                    <div className="fontRaleway p-5" style={{ marginTop: '1em', fontSize: "2em", color: "#948979", textAlign: 'justify' }}>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about-me">About Me</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <ul>
                                <li><a href="/projects/simoat">SimOat</a></li>
                                <li><a href="/projects/woop">Woop!</a></li>
                                <li><a href="/projects/ims">IMS</a></li>
                                <li><a href="/projects/tuwayan">Tuwayan</a></li>
                                <li><a href="/projects/brickbreaker">BrickBreaker</a></li>
                            </ul>
                            <li><a href="/arts">Arts</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <ContactMe />
            <Footer />
        </>
    )

};

export default Sitemap;


