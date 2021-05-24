import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaGithub, FaLongArrowAltRight } from 'react-icons/fa';
import ScrollAnimation from '../scroll';

// const useOnScreen = (options) => {
//     const ref = useRef();
//     const [isIntersecting, setIntersecting] = useState(false);
//     useEffect(() => {
//         const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), options)
//         const element = ref.current;
//         if (ref.current) {
//             observer.observe(ref.current)
//         }
//         return () => {
//             if (element) {
//                 observer.unobserve(element)
//             }
//         }
//     }, [ref, options])
//     return [ref, isIntersecting];
// }
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

// const useVisible = (contentRef, elementRef, offset = 0, throttleMilliseconds = 100) => {
//     const [isVisible, setIsVisible] = useState(false);
//     const onScroll = throttle(() => {
//         if (!elementRef.current) {
//             setIsVisible(false);
//             return;
//         }
//         const rect = elementRef.current.getBoundingClientRect();
//         const top = rect.top;
//         // console.log(top + offset, top - offset, 'innerH', window.innerHeight)
//         // const bottom = elementRef.current.getBoundingClientRect().bottom
//         setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight)
//     }, throttleMilliseconds)

//     useEffect(() => {
//         const contentElement = contentRef.current;
//         contentElement.addEventListener('scroll', onScroll);
//         return () => contentElement.removeEventListener('scroll', onScroll);
//     }, [contentRef, elementRef])
//     return isVisible;
// }


const Portfolio = props => {
    const [up, setUp] = useState(false)
    // const [eleOneRef, eleOneVisible] = useOnScreen({
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: 1.0
    // });
    // const [eleTwoRef, eleTwoVisible] = useOnScreen({
    //     root: null,
    //     rootMargin: '100px',
    //     threshold: 1.0
    // });
    // const [eleThrRef, eleThrVisible] = useOnScreen({
    //     root: null,
    //     rootMargin: '100px',
    //     threshold: 1.0
    // });
    // const [eleOneRef, eleOneVisible] = useVisible(-100);
    // const [eleTwoRef, eleTwoVisible] = useVisible(100);
    // const [eleThrRef, eleThrVisible] = useVisible(200);
    // useEffect(() => {
    //     window.addEventListener('scroll', () => {})
    //      //document.querySelectorAll("*").forEach(element => element.addEventListener("scroll", ({target}) => console.log(target, target.parent)));
    // },[])
    // const contentRef = useRef();
    // const eleOneRef = useRef();
    // const eleTwoRef = useRef();
    // const eleThrRef = useRef();
    // const eleOneVisible = useVisible(contentRef, eleOneRef, -100);
    // const eleTwoVisible = useVisible(contentRef, eleTwoRef, 200);
    // const eleThrVisible = useVisible(contentRef, eleThrRef, 200);
    // console.log(eleOneVisible, eleTwoVisible, eleThrVisible)
    // const urlCursor = resizeUrlCursor();
    const onScroll = event => {
        if (event.wheelDelta) {
            setUp(event.wheelDelta > 0)
        } else {
            setUp(event.deltaY < 0)
        }
    }
    useEffect(() => {
        const element = document.querySelector('.content');
        if (element) {
            element.addEventListener('wheel', onScroll)
        }
        return () => element.removeEventListener('scroll', onScroll)
    })
    return <Container fluid className='root-container'>
        <section>
            <div className='content'>
                <div>
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
                                <h3>Hi, </h3>
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
                <ScrollAnimation className='mt-c position-relative' animateOnce={false} animateIn={up ? 'fadeInDown' : 'fadeInUp'} duration={2} delay={300} scrollableParentSelector='.content' initiallyVisible={false}>
                    <div className='head'>
                    </div>
                    <div className='body'>
                        <div className='to-center'>
                            <div className='item'>
                                <h3>2014</h3>
                                <div style={{maxWidth: '50%'}}>
                                    <p>Studied at the University of Engineering and Technology, Vietnam National University Hanoi </p>
                                </div>
                            </div>
                            <div className='item'>
                                <h3>2018</h3>
                                <div style={{maxWidth: '50%'}}>
                                    <p>Graduated from University of Engineering and Technology, Vietnam National University Hanoi with a bachelor's degree in mechatronics </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='end'>
                    </div>
                    <ScrollAnimation className='title-abs' animateOnce={false} animateIn={up ? 'fadeInDownBig' : 'fadeInUpBig'} duration={3} delay={300} scrollableParentSelector='.content' initiallyVisible={false}>
                        <h3>Education</h3>
                    </ScrollAnimation>
                </ScrollAnimation>
                <ScrollAnimation className='mt-c' animateOnce={false} animateIn={up ? 'fadeInDown' : 'fadeInUp'} duration={2} delay={300} scrollableParentSelector='.content' initiallyVisible={false}>
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
                        <div className='left-row'>
                            <div className='item'>
                                <h4>
                                    The skills I have accumulated through the work that I do and through projects, hours of learning new skills
                                </h4>
                            </div>
                            <div className='item'></div>
                        </div>
                        <div className='right'>
                            <h6 style={{ color: '#eb5746' }}>Skills</h6>
                            <div className='skill'>
                                <div className='skill-level'>
                                    <div className='label'><span>JavaScript</span></div>
                                    <ProgressBar variant="warning" now={80} style={{ width: '90%' }} />
                                </div>
                                <div className='skill-level'>
                                    <div className='label'><span>Angular 8+</span></div>
                                    <ProgressBar variant="warning" now={90} style={{ width: '90%' }} />
                                </div>
                                <div className='skill-level'>
                                    <div className='label'><span>ReactJS</span></div>
                                    <ProgressBar variant="warning" now={90} style={{ width: '90%' }} />
                                </div>
                                <div className='skill-level'>
                                    <div className='label'><span>React Native</span></div>
                                    <ProgressBar variant="warning" now={85} style={{ width: '90%' }} />
                                </div>
                                <div className='skill-level'>
                                    <div className='label'><span>.NET Core API</span></div>
                                    <ProgressBar variant="warning" now={80} style={{ width: '90%' }} />
                                </div>
                                <div className='skill-level'>
                                    <div className='label'><span>MySQL</span></div>
                                    <ProgressBar variant="warning" now={90} style={{ width: '90%' }} />
                                </div>
                                <div className='skill-level'>
                                    <div className='label'><span>SQL</span></div>
                                    <ProgressBar variant="warning" now={90} style={{ width: '90%' }} />
                                </div>
                                <div className='skill-level'>
                                    <div className='label'><span>HTML CSS</span></div>
                                    <ProgressBar variant="warning" now={80} style={{ width: '90%' }} />
                                </div>
                                <div className='skill-level'>
                                    <div className='label'><span>C/C++</span></div>
                                    <ProgressBar variant="warning" now={70} style={{ width: '90%' }} />
                                </div>
                            </div>
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
                </ScrollAnimation>
                <ScrollAnimation className='mt-c' animateOnce={false} animateIn={up ? 'fadeInDown' : 'fadeInUp'} duration={2} delay={300} scrollableParentSelector='.content' initiallyVisible={false}>
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
                                <h3>Hi, </h3>
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
                </ScrollAnimation>
            </div>
        </section>
    </Container>
}

export default Portfolio;