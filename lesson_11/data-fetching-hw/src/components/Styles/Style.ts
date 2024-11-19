export const buttonPrimary = {
    backgroundColor: 'navy',
    color: 'black',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '7px'
}

export const buttonGray = {
    backgroundColor: 'gray',
    color: 'white',
    border: 'none',
    padding: '5px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '7px'
}

export const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export const errorAlert = () => {
    const alertBox = document.createElement('div');
    alertBox.textContent = 'Please type a name for your theme';
    alertBox.style.position = 'fixed';
    alertBox.style.bottom = '20px';
    alertBox.style.right = '20px';
    alertBox.style.backgroundColor = '#dc3545';
    alertBox.style.color = 'white';
    alertBox.style.padding = '10px';
    alertBox.style.borderRadius = '5px';
    document.body.appendChild(alertBox);
    setTimeout(() => {
        document.body.removeChild(alertBox);
    }, 3000);
}

export const successAlert = () => {
    const alertBox = document.createElement('div');
    alertBox.textContent = 'New theme has been saved successfully!';
    alertBox.style.position = 'fixed';
    alertBox.style.bottom = '20px';
    alertBox.style.right = '20px';
    alertBox.style.backgroundColor = '#28a745';
    alertBox.style.color = 'white';
    alertBox.style.padding = '10px';
    alertBox.style.borderRadius = '5px';
    document.body.appendChild(alertBox);
    setTimeout(() => {
        document.body.removeChild(alertBox);
    }, 3000);
}