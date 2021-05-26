import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FaPaperPlane } from 'react-icons/fa';

const PhoneSchedule = ({ show, onHide, setToastMessage }) => {
    const [validated, setValidated] = useState(false);
    const [text, setText] = useState('');
    const sendSms = async (event) => {
        setValidated(true);
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            return;
        }

        await fetch('https://memailbox.herokuapp.com/sendsms', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                to: '+84332815502',
                text
            })
        })
            .then(response => response.json().then(res => {
                if (res.sid && res.status) {
                    setToastMessage('Schedule a call success!')
                    onHide();
                } else if (res.error) {
                    setToastMessage('Schedule a call error!')
                }
            }))
            .catch(err => {
                console.warn(err);
                setToastMessage('Schedule a call error!');
            })
    }

    const onChangeText = event => {
        setValidated(false);
        setText(event.target.value);
    }
    return <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <Form noValidate validated={validated} onSubmit={sendSms}>
                <Form.Control required as="textarea" placeholder="Please enter your message to me" className='shadow mt-1' value={text} onChange={onChangeText} />
                <div className='mt-2' style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="primary" type="submit">
                        Schedule a call <FaPaperPlane style={{ transform: 'rotate(45deg)' }} />
                    </Button>
                </div>
            </Form>
        </Modal.Body>
    </Modal>
}

PhoneSchedule.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired
}

export default PhoneSchedule;