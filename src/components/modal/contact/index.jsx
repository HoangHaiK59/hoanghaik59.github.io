import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FaPaperPlane } from 'react-icons/fa';

const ContactLetter = ({ show, onHide }) => {
    const [emailTo, setEmailTo] = useState('');
    const [name, setName] = useState('');
    const sendEmail = async () => {
        await fetch('https://us6.admin.mailchimp.com/3.0/messages/send.json',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                key: '070ca660472362725c99b221ffb44746-us6',
                message: {
                    from_email: 'trinhhaik59@gmail.com',
                    to: [
                        {
                            email: emailTo,
                            name: name,
                            type: 'to'
                        }
                    ],
                    autotext: true,
                    subject: 'Hello',
                    html: `<p>Dear Mr/Mrs</p>
                    <p>Thank you for contacting me, if you have anything to discuss, please add contact me via Skype: trinhhaik59@outlook.com.vn, Zalo 0332815502, if you send JD please send this email to me, thank you very much.</p>
                    <p>Best regards<br />HaiTV</p>`
                }
            })
        })
        .then(res => {
            // console.log(res.json())
        })
        .catch(error => console.warn(error))
    }
    return <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <input placeholder="Your email" className='shadow' value={emailTo} onChange={e => setEmailTo(e.target.value)} />
            <input placeholder="Name(optional)" className='shadow mt-1' value={name} onChange={e => setName(e.target.value)} />
            <div className='mt-2' style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="primary" onClick={sendEmail}>
                    Contact me <FaPaperPlane style={{ transform: 'rotate(45deg)' }} />
                </Button>
            </div>
        </Modal.Body>
    </Modal>
}

ContactLetter.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired
}

export default ContactLetter;