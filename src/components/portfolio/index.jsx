import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaGithub, FaLongArrowAltRight } from 'react-icons/fa';
import { throttle } from 'lodash';

const useOnScreen = (options) => {
    const ref = useRef();
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), options)
        if (ref.current) {
            observer.observe(ref.current)
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [ref, options])
    return [ ref, isIntersecting];
}
// const useVisible = (offset = 0, throttleMilliseconds = 100) => {
//     const [isVisible, setIsVisible] = useState(false);
//     const currentElement = useRef();

//     const onScroll = () => {
//         if (!currentElement.current) {
//             setIsVisible(false);
//             return;
//         }
//         const top = currentElement.current.getBoundingClientRect().top;
//         setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', onScroll)
//         return window.removeEventListener('scroll', onScroll)
//     })

//     return [currentElement, isVisible]
// }


const Portfolio = props => {
    const [eleOneRef, eleOneVisible] = useOnScreen({
        root: null,
        rootMargin: '600px',
        threshold: 1.0
    });
    const [eleTwoRef, eleTwoVisible] = useOnScreen({
        root: null,
        rootMargin: '600px',
        threshold: 1.0
    });
    const [eleThrRef, eleThrVisible] = useOnScreen({
        root: null,
        rootMargin: '600px',
        threshold: 1.0
    });
    // const [eleOneRef, eleOneVisible] = useVisible(-100);
    // const [eleTwoRef, eleTwoVisible] = useVisible(100);
    // const [eleThrRef, eleThrVisible] = useVisible(200);
    // useEffect(() => {
    //     window.addEventListener('scroll', () => {})
    //      //document.querySelectorAll("*").forEach(element => element.addEventListener("scroll", ({target}) => console.log(target, target.parent)));
    // },[])
    console.log(eleOneVisible, eleTwoVisible, eleThrVisible)
    return <Container fluid className='root-container'>
        <section>
            <div className='content'>
                <div ref={eleOneRef}>
                    <div className='head'>
                        <Row>
                            <Col lg={1} md={1} xs={2}>
                                <img alt="" src={process.env.PUBLIC_URL + '/htlogo.png'} width={45} height={45} />
                            </Col>
                            <Col lg={11} md={11} xs={10} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                <p>trinhhaik59@gmail.com</p>
                            </Col>
                        </Row>
                    </div>
                    <div className='body'>
                        <div className='left'>
                            <div className='top'>
                                <h3>Hi,</h3>
                                <h3>I'm <span>Hai Trinh</span></h3>
                                <h6>Frontend Developer</h6>
                            </div>
                            <div className='bottom'>
                                <Button className='button' variant="primary">
                                    <div>Hire me</div>
                                    <div style={{ background: 'rgba(217, 211, 210, .4)', width: 30, borderRadius: 5 }}><FaLongArrowAltRight /></div>
                                </Button>
                            </div>
                        </div>
                        <div className='right'>
                            <h6 style={{ color: '#eb5746' }}>Expert on</h6>
                            <h2>Based in Vietnam i'm developer</h2>
                            <h6>Hey are looking for developer to build your brand and grow your business?let's shake hands with me</h6>
                        </div>
                    </div>
                    <div className='end'>
                        <div>
                            <FaFacebook />
                        </div>
                        <div>
                            <FaInstagram />
                        </div>
                        <div>
                            <FaGithub />
                        </div>
                    </div>
                </div>
                <div ref={eleTwoRef} className={eleTwoVisible ? 'animation' : ''}>
                    <div className='head'>
                        <Row>
                            <Col lg={1} md={1} xs={2}>
                                <img alt="" src={process.env.PUBLIC_URL + '/htlogo.png'} width={45} height={45} />
                            </Col>
                            <Col lg={11} md={11} xs={10} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                <p>trinhhaik59@gmail.com</p>
                            </Col>
                        </Row>
                    </div>
                    <div className='body'>
                        <div className='left'>
                            <div className='top'>
                                <h3>Hi,</h3>
                                <h3>I'm <span>Hai Trinh</span></h3>
                                <h6>Frontend Developer</h6>
                            </div>
                            <div className='bottom'>
                                <Button className='button' variant="primary">
                                    <div>Hire me</div>
                                    <div style={{ background: 'rgba(217, 211, 210, .4)', width: 30, borderRadius: 5 }}><FaLongArrowAltRight /></div>
                                </Button>
                            </div>
                        </div>
                        <div className='right'>
                            <h6 style={{ color: '#eb5746' }}>Expert on</h6>
                            <h2>Based in Vietnam i'm developer</h2>
                            <h6>Hey are looking for developer to build your brand and grow your business?let's shake hands with me</h6>
                        </div>
                    </div>
                    <div className='end'>
                        <div>
                            <FaFacebook />
                        </div>
                        <div>
                            <FaInstagram />
                        </div>
                        <div>
                            <FaGithub />
                        </div>
                    </div>
                </div>
                <div ref={eleThrRef}></div>
            </div>
        </section>
    </Container>
}

export default Portfolio;