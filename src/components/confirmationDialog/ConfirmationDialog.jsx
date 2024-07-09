import PropTypes from 'prop-types';
import './ConfirmationDialog.css';
import advertenciaImage from '../../assets/advertencia.png'; // Importa la imagen de advertencia

const ConfirmationDialog = ({ message, primaryColor, onConfirm, onCancel }) => {
    return (
        <div className="confirmation-dialog">
            <img className="confirmation-dialog-image" src={advertenciaImage} alt="Advertencia" />
            <p className="confirmation-dialog-message">
                {message} <span className="confirmation-dialog-title" style={{ color: primaryColor }}></span>
            </p>
            <button className='confirmation-yes' onClick={onConfirm}>Sí</button>
            <button className='confirmation-no' onClick={onCancel}>No</button>
        </div>
    );
};

ConfirmationDialog.propTypes = {
    message: PropTypes.string.isRequired,
    primaryColor: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default ConfirmationDialog;
