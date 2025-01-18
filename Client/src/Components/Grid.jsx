import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Grid = ({ photos }) => {
    const handleDelete = async (id) => {
        try {
            let res = await axios.delete(`http://localhost:4000/remove/${id}`);
            console.log(res.data);
            toast.success(res.data.message);
            window.location.reload();
        } catch (error) {
            toast.error(`${error}`);
        }
    };

    return (
        <>
            <div className="container grid ">
                <div className="head">
                    <h1 className=" text-light mt-4">Our Gallery</h1>
                    <hr />
                </div>
                <div className="row">
                    {photos.length > 0 ? (
                        photos.map((e, i) => (
                            <div className="col-10 col-sm-10 col-md-6 col-lg-4 col-xl-4 my-5" key={i}>
                                <div className="card">
                                    <img
                                        src={`http://localhost:4000/uploads/${e.photo}`}
                                        className="card-img-top"
                                        height="300"
                                        width={50}
                                        alt="item"
                                    />
                                    <div className="card-body">
                                        <button className="btn btn-danger" onClick={() => handleDelete(e._id)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h4 className="text-center mt-5">Gallery is Empty</h4>
                    )}
                </div>
            </div>
        </>
    );
};

export default Grid;
