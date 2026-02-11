import { useMutation } from '@tanstack/react-query';

export const useContactMutation = () => {
    return useMutation({
        mutationFn: async (data) => {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("phone", data.phone);
            formData.append("message", data.message);
            formData.append("access_key", import.meta.env.VITE_EMAIL_ACCESS_KEY);

            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            return res.json();
        }
    });
};
