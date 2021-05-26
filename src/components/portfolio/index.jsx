import { useEffect, useState } from 'react';
import { Container, Row, Col, ProgressBar, Card } from 'react-bootstrap';
import { FaGithub, FaPhoneAlt, FaSkype } from 'react-icons/fa';
import ScrollAnimation from '../scroll';

import fsoft from '../../assets/svg/fsoft.svg';
import etc from '../../assets/images/etc.png';
import sunshine from '../../assets/svg/sunshine.svg';
import ContactLetter from '../modal/contact';
import ToastNotify from '../toast/notify';
import PhoneSchedule from '../modal/schedule';
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
    const [up, setUp] = useState(false);
    const [show, setShow] = useState(false);
    const [toast, setShowToast] = useState(false);
    const [message, setMessage] = useState('');
    const [popup, setPopup] = useState(false)
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
    useEffect(() => {
        const element = document.querySelector('.content');
        if (element) {
            element.addEventListener('wheel', onScroll)
        }
        return () => element.removeEventListener('scroll', onScroll)
    })
    const onScroll = event => {
        if (event.wheelDelta) {
            setUp(event.wheelDelta > 0)
        } else {
            setUp(event.deltaY < 0)
        }
    }
    const onHide = () => setShow(false);
    const onHideToast = () => setShowToast(false);
    const setToastMessage = (message) => {
        setMessage(message);
        setShowToast(true);
    }
    const onHidePopup = () => setPopup(false);
    const gotoGithub = () => {
        window.open('https://github.com/HoangHaiK59', '_self')
    }
    const gotoSkype = () => {
        window.open('https://join.skype.com/invite/oFltJxbmeC4m', '_self')
    }
    // const gotoFacebook = () => {
    //     window.open('https://www.facebook.com/profile.php?id=100034391243424', '_self')
    // }
    return <Container fluid className='root-container'>
        <section>
            <div className='content'>
                <div>
                    <div className='head'>
                        <Row>
                            <Col lg={1} md={1} xs={2}>
                                <img alt="" src={process.env.PUBLIC_URL + '/htlogo.png'} width={45} height={45} />
                            </Col>
                            <Col lg={9} md={9} xs={5} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                <p>trinhhaik59@gmail.com</p>
                            </Col>
                            <Col lg={2} md={2} xs={5} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', textAlign: 'end' }}>
                                <p onClick={() => setPopup(true)} style={{ cursor: 'pointer' }}><FaPhoneAlt color='#eb5457' style={{ marginRight: '.5rem' }} /> Schedule a call</p>
                            </Col>
                        </Row>
                    </div>
                    <div className='body'>
                        <div className='left'>
                            <div className='top'>
                                <h3 style={{ letterSpacing: 1 }}>Hi, </h3>
                                <h3 style={{ letterSpacing: 1 }}>I'm <span style={{ color: '#ed3438' }}>Hai Trinh</span></h3>
                                <h6 style={{ letterSpacing: 1 }}>I'm Frontend Developer</h6>
                            </div>
                            <div className='bottom'>
                                {/* <Button className='button' variant="primary" onClick={() => setShow(true)}>
                                    <p style={{ fontSize: '1rem', fontWeight: 500, letterSpacing: 1, marginBottom: 0 }}>Contact me</p>
                                </Button> */}
                            </div>
                        </div>
                        <div className='right'>
                            <h6 style={{ color: '#eb5746' }}>Expert on</h6>
                            <h2>In Vietnam, I am a Frontend and React Navitive developer</h2>
                            <h6>Hey are looking for developer to build your brand and grow your business? let's shake hands with me</h6>
                        </div>
                    </div>
                    <div className='end'>
                        <div className='itemRow'>
                            <div className='rsm'>
                                <h6>Email</h6>
                                <p style={{ letterSpacing: 1 }}>trinhhaik59@gmail.com</p>
                            </div>
                            <div className='rsm'>
                                <h6>Phone</h6>
                                <p style={{ letterSpacing: 1 }}>0332815502</p>
                            </div>
                            <div className='rsm'>
                                <h6>Location</h6>
                                <p style={{ letterSpacing: 1 }}>Hanoi Vietnam</p>
                            </div>
                        </div>
                        <div className='itemColSm' style={{justifyContent: 'flex-end'}}>
                            <div style={{cursor: 'pointer'}}>
                                <FaSkype onClick={gotoSkype} size={20} />
                            </div>
                            <div style={{cursor: 'pointer'}}>
                                <FaGithub onClick={gotoGithub} size={20} />
                            </div>
                        </div>
                    </div>
                </div>
                <ScrollAnimation className='mt-k position-relative' animateOnce={false} animateIn={up ? 'fadeInDown' : 'fadeInUp'} duration={2} delay={300} scrollableParentSelector='.content' initiallyVisible={false}>
                    <div className='head'>
                    </div>
                    <div className='body'>
                        <div className='to-center'>
                            <div className='item'>
                                <h3>2014</h3>
                                <div style={{ maxWidth: '50%' }}>
                                    <p>Studied at the University of Engineering and Technology, Vietnam National University Hanoi </p>
                                </div>
                            </div>
                            <div className='item'>
                                <h3>2018</h3>
                                <div style={{ maxWidth: '50%' }}>
                                    <p>Graduated from University of Engineering and Technology, Vietnam National University Hanoi with a bachelor's degree in mechatronics </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ScrollAnimation className='title-abs' animateOnce={false} animateIn={up ? 'fadeInDownBig' : 'fadeInUpBig'} duration={2} delay={300} scrollableParentSelector='.content' initiallyVisible={false}>
                        <h3>Education</h3>
                    </ScrollAnimation>
                </ScrollAnimation>
                <ScrollAnimation className='mt-c' animateOnce={false} animateIn={up ? 'fadeInDown' : 'fadeInUp'} duration={2} delay={300} scrollableParentSelector='.content' initiallyVisible={false}>
                    <div className='head'>
                    </div>
                    <div className='body'>
                        <div className='left-row'>
                            <ScrollAnimation className='item' animateOnce={false} animateIn={up ? 'slideInDown' : 'slideInUp'} duration={2} delay={100} scrollableParentSelector='.content' initiallyVisible={false}>
                                <h4>
                                    What can i do ?
                                </h4>
                            </ScrollAnimation>
                            <div className='item'></div>
                        </div>
                        <ScrollAnimation className='right' animateOnce={false} animateIn={up ? 'slideInDown' : 'slideInUp'} duration={3} delay={100} scrollableParentSelector='.content' initiallyVisible={false}>
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
                        </ScrollAnimation>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateOnce={false} animateIn={up ? 'fadeInDown' : 'fadeInUp'} duration={2} delay={300} scrollableParentSelector='.content' initiallyVisible={false}>
                    <ScrollAnimation className='head' animateOnce={false} animateIn={up ? 'fadeInDown' : 'fadeInUp'} duration={1} delay={100} scrollableParentSelector='.content' initiallyVisible={false}>
                        <h3>Experience</h3>
                    </ScrollAnimation>
                    <div className='body'>
                        <div className='to-center'>
                            <Container fluid>
                                <Row >
                                    <Col lg={12} md={12} xs={12}>
                                        <Row>
                                            <Col lg={6} md={6} xs={12}>
                                                <ScrollAnimation className='card-c' animateOnce={false} animateIn={up ? 'fadeInDown' : 'fadeInUp'} duration={1} delay={100} scrollableParentSelector='.content' initiallyVisible={false}>
                                                    <Card style={{ background: 'rgba(23, 22, 22, .4)' }}>
                                                        <Card.Body>
                                                            <h3>Work at FPT Software</h3>
                                                            <h6>Time: 05/2018 - 05/2019</h6>
                                                            <h6>Position: C/C++</h6>
                                                            <h6>Other: JavaScript</h6>
                                                        </Card.Body>
                                                    </Card>
                                                </ScrollAnimation>
                                            </Col>
                                            <Col lg={6} md={6} xs={0}></Col>
                                        </Row>
                                    </Col>
                                    <Col lg={12} md={12} xs={12}>
                                        <Row>
                                            <Col lg={6} md={6} xs={0}></Col>
                                            <Col lg={6} md={6} xs={12}>
                                                <ScrollAnimation className='card-c' animateOnce={false} animateIn={up ? 'fadeInDown' : 'fadeInUp'} duration={1} delay={100} scrollableParentSelector='.content' initiallyVisible={false}>
                                                    <Card style={{ background: 'rgba(23, 22, 22, .4)' }}>
                                                        <Card.Body>
                                                            <h3>Work at ETC</h3>
                                                            <h6>Time: 06/2019 - 03/2020</h6>
                                                            <h6>Position: C/C++ and ReactJS</h6>
                                                        </Card.Body>
                                                    </Card>
                                                </ScrollAnimation>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={12} md={12} xs={12}>
                                        <Row>
                                            <Col lg={6} md={6} xs={12}>
                                                <ScrollAnimation className='card-c' animateOnce={false} animateIn={up ? 'fadeInDown' : 'fadeInUp'} duration={1} delay={100} scrollableParentSelector='.content' initiallyVisible={false}>
                                                    <Card style={{ background: 'rgba(23, 22, 22, .4)' }}>
                                                        <Card.Body>
                                                            <h3>Work at Sunshine Group</h3>
                                                            <h6>Time: 03/2020 - now</h6>
                                                            <h6>Position: Frontend Developer</h6>
                                                        </Card.Body>
                                                    </Card>
                                                </ScrollAnimation>
                                            </Col>
                                            <Col lg={6} md={6} xs={0}></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation className='mt-c' animateOnce={false} style={{ cursor: 'default' }} animateIn={up ? 'fadeInDown' : 'fadeInUp'} duration={2} delay={300} scrollableParentSelector='.content' initiallyVisible={false}>
                    <ScrollAnimation className='head' animateOnce={false} animateIn={up ? 'fadeInDown' : 'fadeInUp'} duration={1} delay={100} scrollableParentSelector='.content' initiallyVisible={false}>
                        <h3>Company</h3>
                    </ScrollAnimation>
                    <div className='body'>
                        <div className='to-center'>
                            <Container fluid>
                                <Row >
                                    <Col lg={4} md={4} xs={6}>
                                        <ScrollAnimation className='card-h' animateOnce={false} animateIn={up ? 'fadeInDown' : 'fadeInUp'} duration={2} delay={200} scrollableParentSelector='.content' initiallyVisible={false}>
                                            <Card style={{ height: '100%', backgroundColor: 'transparent', border: 'none' }}>
                                                <Card.Body>
                                                    <img alt='Fpt Software' src={fsoft} width={120} height={120} />
                                                    {/* <h3>FPT Software</h3> */}
                                                </Card.Body>
                                            </Card>
                                        </ScrollAnimation>
                                    </Col>
                                    <Col lg={4} md={4} xs={6}>
                                        <ScrollAnimation className='card-h' animateOnce={false} animateIn={up ? 'fadeInDown' : 'fadeInUp'} duration={3} delay={200} scrollableParentSelector='.content' initiallyVisible={false}>
                                            <Card style={{ height: '100%', backgroundColor: 'transparent', border: 'none' }}>
                                                <Card.Body>
                                                    <img alt='ETC' src={etc} width={120} height={120} />
                                                    {/* <h3>ETC</h3> */}
                                                </Card.Body>
                                            </Card>
                                        </ScrollAnimation>
                                    </Col>
                                    <Col lg={4} md={4} xs={6}>
                                        <ScrollAnimation className='card-h' animateOnce={false} animateIn={up ? 'fadeInDown' : 'fadeInUp'} duration={4} delay={200} scrollableParentSelector='.content' initiallyVisible={false}>
                                            <Card style={{ height: '100%', backgroundColor: 'transparent', border: 'none' }}>
                                                <Card.Body>
                                                    <img alt='Sunshine Group' src={sunshine} width={120} height={120} />
                                                    {/* <h3>Sunshine Group</h3> */}
                                                </Card.Body>
                                            </Card>
                                        </ScrollAnimation>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
            {
                show && <ContactLetter show={show} onHide={onHide} setToastMessage={setToastMessage} />
            }
            {
                toast && <ToastNotify show={toast} onHide={onHideToast} message={message} />
            }
            {
                popup && <PhoneSchedule show={popup} onHide={onHidePopup} setToastMessage={setToastMessage}/>
            }
        </section>
    </Container>
}

export default Portfolio;