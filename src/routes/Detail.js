import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMouse = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMouse();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.large_cover_image} alt={json.id} />{" "}
          <h1>{movie.title}</h1> <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}
export default Detail;
