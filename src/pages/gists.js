import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGists } from "../store/gists";
import { getBySearchGists } from "../store/gistsBySearch";
// const getGists = async (page = 1) => {
//   const URL = `https://api.github.com/gists/public?page=${page}`;
//   const response = await fetch(URL);

//   const data = await response.json();

//   return data;
// };

const buttons = Array.from({ length: 10 }).map((_, index) => index + 1);

export const GistsPage = () => {
  const { gists, pending, error } = useSelector((state) => state.gists);
  const { gistsBySearch, pendingBySearch, errorBySearch } = useSelector((state) => state.gistsBySearch);
  const dispatch = useDispatch();
  // const [gists, setGists] = useState([]);
  // const [pending, setPending] = useState(false);
  // const [error, setError] = useState(null);

  // async function fetchData(page) {
  //   try {
  //     setPending(true);
  //     const data = await getGists(page);

  //     setGists(data);
  //   } catch (e) {
  //     setError("ERROR");
  //   } finally {
  //     setPending(false);
  //   }
  // }

  useEffect(() => {
    if (!gists.length) {
      dispatch(getGists());
    }
  }, [dispatch, gists]);

  useEffect(() => {
    if (!gistsBySearch.length) {
      dispatch(getBySearchGists());
    }
  }, [dispatch, gistsBySearch]);


  if (errorBySearch ) {
    if (errorBySearch) console.log("Error by search gists: ", errorBySearch);
    //return <h1>error ...</h1>;
  }

  if (error ) {
    if (error) console.log("Error gists: ", error);
   // return <h1>error ...</h1>;
  }

  return (
    <div>
      <h1>GistsPage</h1>

      {buttons.map((btn, index) => {
        return (
          <button onClick={() => dispatch(getGists(btn))} key={index}>
            {btn}
          </button>
        );
      })}
        <button onClick={() => dispatch(getBySearchGists())} >
            By search
          </button>
      
      <hr />

      {pending ? (
        <h1>pending...</h1>
      ) : (
        gists.map((gist, index) => {
          return (
            <div key={index}>
              <h2>{gist.url}</h2>
            </div>
          );
        })
      )}
      < hr/>
      { pendingBySearch ? (<h1>pending...</h1> ) : (
          gistsBySearch.map((gistsBySearch, index) => {
            return (
              <div key={index}>
                <h2>{gistsBySearch.url}</h2>
              </div>
            );
          })
        )
      }
      
    </div>
    
  );
};
