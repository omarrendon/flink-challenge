import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { logoutAction } from "../redux/actions/LoginActions";
import {
  fetchStudentData,
  fetchAllData,
} from "../redux/actions/FetchDataActions";
const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userData } = useSelector((state) => state.login);
  const { students, allCharacters } = useSelector((state) => state.fetchData);

  useEffect(() => {
    userData?.data?.staff === false
      ? dispatch(fetchStudentData())
      : dispatch(fetchAllData());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  const goToCharacter = () => {
    history.push("/character");
  };

  return (
    <div>
      <div className="">
        <Button onClick={handleLogout}>Logout</Button>
        <Button onClick={goToCharacter}>character</Button>
        {userData?.data?.name}
      </div>
      <div className="">
        {students?.map((student) => (
          <div className="" key={student.name}>
            <p>{student.name}</p>
          </div>
        ))}
        {allCharacters?.map((character) => (
          <div className="" key={character.name}>
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
