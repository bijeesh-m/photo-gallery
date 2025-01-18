import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import Grid from "./Components/Grid";
import toast, {Toaster} from 'react-hot-toast'
import Footer from "./Components/Footer";
import axios from "axios";

const App = () => {
    const [photos, setPhotos] = useState([]);
    // console.log(photos);
    const getData = async () => {
        try {
            let res = await axios.get("http://localhost:4000/getData");
            // console.log(res.data.data);
            setPhotos(res.data.data);
            // message.success('Successfully Fetched')
        } catch (error) {
            toast.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (

        <div className="bg-black">
          <Toaster/>
            <Navbar />
            <Button  />
            <Grid photos={photos} />
            <Footer />
        </div>
    );
};

export default App;
