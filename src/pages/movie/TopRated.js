import { useEffect } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function TopRated() {
    const dispatch = useDispatch();

    useEffect(() => {
        getTopRatedMovies();
    }, []);

    async function getTopRatedMovies() {
        // fetch data dari axios
        const response = await axios(ENDPOINTS.TOP_RATED);
        dispatch(updateMovies(response.data.results));

    }

    return (
        <div>
            <Hero />
            <Movies title="Top Rated Movies" />
        </div>
    );
}

export default TopRated;