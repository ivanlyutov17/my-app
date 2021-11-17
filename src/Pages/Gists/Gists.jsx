import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { selectGistsLoading } from "../../Store/Gists/selectors";
import { selectGistsError } from "../../Store/Gists/selectors";
import { selectGists } from "../../Store/Gists/selectors";
import { getAllGists } from "../../Store/Gists/actions";
export const API_URL_PUBLIC = "https://api.github.com/gists/public";
export const API_URL_GIST = "https://api.github.com/gists/";


export const GistsList = () => {
const dispatch = useDispatch();

  const gists = useSelector(selectGists);
  const error = useSelector(selectGistsError);
  const loading = useSelector(selectGistsLoading);

  const requestGists = () => {
    dispatch(getAllGists());
  };

  useEffect(() => {
    requestGists();
  }, []);

  const renderGist = useCallback(
    (gist) => <li key={gist.id}>{gist.description}</li>,
    []
  );

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <>
        <h3>Error</h3>
        <button onClick={requestGists}>Retry</button>
      </>
    );
    }
    
    console.log(gists)

  return <ul>{gists.map(renderGist)}</ul>;
};