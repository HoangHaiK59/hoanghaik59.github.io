import { Toast } from 'react-bootstrap';

const ToastNotify = ({ show, onHide, message }) => {
    return <div className='toastAbs'>
        <Toast onClose={onHide} show={show} delay={2500} autohide style={{background: '#fff'}}>
            <Toast.Header>
                <img
                    src="holder.js/20x20?text=%20"
                    className="rounded mr-2"
                    alt=""
                />
                {/* <strong className="mr-auto">Bootstrap</strong>
                <small>11 mins ago</small> */}
            </Toast.Header>
            <Toast.Body style={{color: '#000'}}>{message}</Toast.Body>
        </Toast>
    </div>
}

export default ToastNotify;