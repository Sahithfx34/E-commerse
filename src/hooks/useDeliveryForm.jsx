import { useState } from "react";

const useDeliveryForm = () => {
    const [deliveryDetails, setDeliveryDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    });

    const validate = () => {
        const errors = [];
        if (!deliveryDetails.firstname) errors.push("First name is required.");
        if (!deliveryDetails.lastname) errors.push("Last name is required.");
        if (!deliveryDetails.email || !/\S+@\S+\.\S+/.test(deliveryDetails.email)) {
            errors.push("A valid email is required.");
        }
        if (!deliveryDetails.street) errors.push("Street is required.");
        if (!deliveryDetails.city) errors.push("City is required.");
        if (!deliveryDetails.state) errors.push("State is required.");
        if (!deliveryDetails.zipcode || deliveryDetails.zipcode.length !== 6) {
            errors.push("A valid 5-digit Zipcode is required.");
        }
        if (!deliveryDetails.country) errors.push("Country is required.");
        if (!deliveryDetails.phone || deliveryDetails.phone.length !== 10) {
            errors.push("A valid 10-digit phone number is required.");
        }
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDeliveryDetails((prev) => ({ ...prev, [name]: value }));
    };

    const resetForm = () => {
        setDeliveryDetails({
            firstname: "",
            lastname: "",
            email: "",
            street: "",
            city: "",
            state: "",
            zipcode: "",
            country: "",
            phone: ""
        });
    };

    return {
        deliveryDetails,
        handleChange,
        validate,
        resetForm,
    };
};

export default useDeliveryForm;
