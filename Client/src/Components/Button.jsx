import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Button = () => {
    const handleChange = async (e) => {
        try {
            e.preventDefault();

            const formData = new FormData();
            formData.append("photo", e.target.files[0]);

            let res = await axios.post("http://localhost:4000/save", formData);
            // console.log(res.data);
            toast.success(res.data.message);
            window.location.reload();
        } catch (error) {
            console.log(error);
            toast.error(`${error}`);
        }
    };

    return (
        <>
            <label className="btn btn-info position-absolute" htmlFor="file_picker" style={{right:100, top:100}}>
                <span className="bg-info fs-4">
                    +
                </span>
                <input
                    hidden
                    type="file"
                    name="file_picker"
                    id="file_picker"
                    onChange={(e) => handleChange(e)}
                />
            </label>
        </>
    );
};

export default Button;
