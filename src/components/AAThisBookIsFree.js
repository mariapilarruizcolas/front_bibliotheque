import React, { useEffect } from 'react';
import axios from 'axios';

function ThisBookIsFree(props) {
    const { bookId, data, setData } = props;
    // bookId = { bookId } isFree = { isFree } setIsFree = { setIsFree }
    // const bookId = 1;
    // const [data, setData] = useState("");
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/books/${bookId}`)
            .then((res) => setData(res.data.isFree));

    }, []);
    console.log(data);

    //let disponible = "";
    //available == data.isFree;

    //if (data.isFree) { available = "Oui" } else { available = "Non" };
    return (
        <div>
            <p>Le livre numero  {bookId} est disponible?</p>
            <p>{data}</p>
        </div>
    )


}

export default ThisBookIsFree;