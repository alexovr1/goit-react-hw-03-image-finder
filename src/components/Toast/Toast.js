import { ToastContainer, toast } from 'react-toastify';

export const toastMessage = () => {
    return toast.error('No find image!');
}

export const ToastWrapper = () => {
    return <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
}