import { Zoom, toast } from "react-toastify";

const showSuccessToast = (text) => {
    toast.success(text, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
    });
}

const showErrorToast = (text) => {
    toast.error(text, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
    });
}

export {
    showErrorToast,
    showSuccessToast,
}