import PropTypes from 'prop-types';
import './modal.css';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ show, onClose, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                <div className="button-modal" type="button" onClick={onClose}><CloseIcon sx={{fontSize:25}}/></div>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;