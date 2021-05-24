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
                <ScrollAnimation className='mt-c' animateOnce={false} animateIn='fadeInRight' duration={2} delay={300} scrollableParentSelector='.content' initiallyVisible={false}>
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
                <ScrollAnimation className='mt-c' animateOnce={false} animateIn='fadeInRight' duration={2} delay={300} scrollableParentSelector='.content' initiallyVisible={false}>
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
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <span>JS</span>
                                <ProgressBar variant="success" now={80} style={{width: '90%'}} />
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <span>JS</span>
                                <ProgressBar variant="warning" now={80} style={{width: '90%'}} />
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <span>JS</span>
                                <div><ProgressBar variant="danger" now={80}style={{width: '90%'}} /></div>
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
                <ScrollAnimation className='mt-c' animateOnce={false} animateIn='fadeInRight' duration={2} delay={300} scrollableParentSelector='.content' initiallyVisible={false}>
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