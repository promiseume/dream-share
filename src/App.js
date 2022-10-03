import Hero from "./component/hero";
import { useState, useEffect } from "react";
import DreamShare from "./component/dreamShare";
import HolidayIdeas from "./component/holidayIdeas";
import MeetPartners from "./component/meetPartner";
import Footer from "./component/footer";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      try {
        const movieOptions = {
          method: "GET",
          url: "https://streaming-availability.p.rapidapi.com/search/basic",
          params: {
            country: "us",
            service: "netflix",
            type: "movie",
            genre: "18",
            page: "1",
            output_language: "en",
            language: "en",
          },
          headers: {
            "X-RapidAPI-Key":
              "dfce299a75msh29b57254b31b008p1f6210jsnd50563791028",
            "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
          },
        };

        const { data: movieData } = await axios.request(movieOptions);
        setMovies(movieData.results.splice(2, 3));
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <>
      <Hero />
      <div className="container">
        <DreamShare movies={movies} />
        <MeetPartners />
        <HolidayIdeas />
      </div>
      <Footer />
    </>
  );
}

export default App;
