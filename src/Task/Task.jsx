import { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact_card from "./Contact_card";

const Task = () => {
    const name = useRef(null);
    const email = useRef(null);
    const [data, setData] = useState(()=>{
        const storedContacts = localStorage.getItem("contacts");
        return storedContacts ? JSON.parse(storedContacts) : []
    });

    useEffect(() => {
        localStorage.setItem("user_contacts", JSON.stringify(data));
    }, [data]);

    const handleClick = () => {
        const user_name = name.current.value.trim();
        const user_email = email.current.value.trim();

        if (!user_name) {
            toast.error("Name is required");
            return;
        }
        if (!user_email) {
            toast.error("Email is empty");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(user_email)) {
            toast.error("Enter a valid email address");
            return;
        }

        name.current.value = "";
        email.current.value = "";

        setData((prev) => [...prev, { name: user_name, email: user_email }]);
        toast.success("Contact submitted Successfully")
    };

    const handleDelete = (nameToDelete) => {
        setData((prev) => prev.filter((item) => item.name !== nameToDelete));
    };

    return (
        <div>
            <div>
                <input type="text" name="Name" placeholder="Name" ref={name} />
                <input type="email" name="Email" placeholder="Email" ref={email} />
                <button onClick={handleClick}>Submit</button>
                <Contact_card data={data} onDelete={handleDelete} />
            </div>
        </div>
    );
};

export default Task;
