import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FaPaperPlane } from 'react-icons/fa';

const ContactLetter = ({ show, onHide, setToastMessage }) => {
    const [emailTo, setEmailTo] = useState('');
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('');
    const sendEmail = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() == false) {
            return;
        }
        // await fetch('https://mandrillapp.com/api/1.0/messages/send.json',{
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         key: 'mgS-O-UqNFRrVGFwiqj-Cw',
        //         message: {
        //             from_email: 'trinhhaik59@gmail.com',
        //             to: [
        //                 {
        //                     email: emailTo,
        //                     name: name,
        //                     type: 'to'
        //                 }
        //             ],
        //             autotext: true,
        //             subject: 'Hello',
        //             html: `<p>Dear Mr/Mrs</p>
        //             <p>Thank you for contacting me, if you have anything to discuss, please add contact me via Skype: trinhhaik59@outlook.com.vn, Zalo 0332815502, if you send JD please send this email to me, thank you very much.</p>
        //             <p>Best regards<br />HaiTV</p>`
        //         }
        //     })
        // })
        // .then(res => {
        // })
        // .catch(error => console.warn(error))

        if (emailTo !== '') {
            await fetch('https://memailbox.herokuapp.com/sendmail', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    to: emailTo,
                    subject: 'Thank you for contacting me',
                    html: `<p>Dear Mr/Ms ${name}</p>
                    <p>Thank you for contacting me, if you have anything to discuss, please add contact me via Skype: trinhhaik59@outlook.com.vn, Zalo <span style="color:blue;">0332815502</span>, if you send JD please send this email to me, thank you very much.</p>
                    <p>Best regards<br />HaiTV</p>`
                })
            })
                .then(response => response.json().then(res => {
                    if (res.message) {
                        setToastMessage('Send email successfull!')
                        onHide();
                    } else if (res.err) {
                        setToastMessage('Send email error!')
                    }
                }))
                .catch(err => {
                    console.warn(err);
                    setToastMessage('Send email error!');
                })
        }
    }
    const onChangeEmail = event => {
        if (event.target.value === '') {
            setValidated(false);
        } else {
            setValidated(true);
        }
        setEmailTo(event.target.value);
    }
    return <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <Form noValidate validated={validated} onSubmit={sendEmail}>
                <Form.Control required type="email" placeholder="Your email" className='shadow' value={emailTo} onChange={onChangeEmail} />
                <Form.Control.Feedback type="invalid">Invalid email</Form.Control.Feedback>
                <Form.Control type="text" placeholder="Your name(optional)" className='shadow mt-1' value={name} onChange={e => setName(e.target.value)} />
                <div className='mt-2' style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="primary" type="submit">
                        Contact me <FaPaperPlane style={{ transform: 'rotate(45deg)' }} />
                    </Button>
                </div>
            </Form>
        </Modal.Body>
    </Modal>
}

ContactLetter.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired
}

export default ContactLetter;