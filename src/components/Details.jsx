import { useParams, useHistory } from "react-router-dom";

const Details = () => {
    const { listingId } = useParams();

    return (
        <>
            <h1>Welcome to the Details page</h1>
            <p>The listing ID = {listingId}</p>
        </>
    )
};

export default Details;