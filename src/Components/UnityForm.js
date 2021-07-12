import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { backendLink } from "../keys";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function UnityForm(props) {
  const classes = useStyles();
  const setToken = props.setToken;
  const setUsername = props.setUsername;
  const changeScene = props.changeScene;

  const [errorUsername, setErrorUsername] = useState(false);
  const [errorUnique, setErrorUnique] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorGender, setErrorGender] = useState(false);
  const [errorEducation, setErrorEducation] = useState(false);
  const [errorBirthyear, setErrorBirthyear] = useState(false);
  const [data, setData] = useState({});
  const [birthOptions, setBirthOptions] = useState([]);
  const [next, setNext] = useState(false);

  useEffect(() => {
    let a = [];
    for (let i = 1925; i <= 2021; i++) {
      a.push(i);
    }
    setBirthOptions(a);
  }, []);

  function submitUser(e) {
    e.preventDefault();
    if (!data.username) {
      setErrorUsername(true);
      setErrorUnique(true);
    } else {
      setErrorUsername(false);
      setErrorUnique(false);
    }
    if (!data.password) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
    if (!data.gender) {
      setErrorGender(true);
    } else {
      setErrorGender(false);
    }
    if (!data.birthyear) {
      setErrorBirthyear(true);
    } else {
      setErrorBirthyear(false);
    }
    if (!data.education) {
      setErrorEducation(true);
    } else {
      setErrorEducation(false);
    }
    if (
      data.username &&
      data.password &&
      data.gender &&
      data.birthyear &&
      data.education
    ) {
      setNext(true);
      const sendData = {
        gender: data.gender,
        birthYear: data.birthyear + "",
        educationalLevel: data.education,
        username: data.username,
        password: data.password,
      };
      if (data.mental) {
        sendData.mentalIllness = data.mental;
      }
      if (data.notes) {
        sendData.notes = data.notes;
      }
      if (data.caffiene) {
        sendData.caffiene = data.caffiene;
      }
      axios({
        method: "POST",
        url: `${backendLink}/user/addUser`,
        data: sendData,
      })
        .then((res) => {
          if (res.data.statusCode === "000") {
            setToken(res.data.token);
            setUsername(res.data.user.username);
            changeScene();
          } else if (res.data.statusCode === "005") {
            setErrorUnique(true);
            setNext(false);
          } else {
            console.log(res.data);
          }
        })
        .catch((err) => console.log(err));
    }
    e.preventDefault();
  }

  function handleChange(key, value) {
    if (value) {
      data[key] = value;
      setData(data);
    }
    if (key === "username") {
      setErrorUsername(false);
      setErrorUnique(false);
    }
    if (key === "password") {
      setErrorPassword(false);
    }
    if (key === "education") {
      setErrorEducation(false);
    }
    if (key === "gender") {
      setErrorGender(false);
    }
    if (key === "birthyear") {
      setErrorBirthyear(false);
    }
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: "#203904",
          paddingTop: "2vw",
          paddingBottom: "2vw",
        }}
      >
        <form autocomplete="off" className={classes.root}>
          <table
            style={{
              width: "70%",
              textAlign: "center",
              marginLeft: "15%",
              marginRight: "15%",
            }}
          >
            <tbody>
              <tr>
                <td>
                  <TextField
                    id="standard-basic"
                    label="Random Username"
                    helperText="Please enter a random username and memorize it to use later"
                    style={{ width: "80%", textAlign: "center" }}
                    error={errorUsername || errorUnique}
                    required
                    defaultValue={data.username}
                    onChange={(e) => handleChange("username", e.target.value)}
                  />
                </td>
                <td>
                  <TextField
                    id="standard-basic"
                    label="Password"
                    type="password"
                    helperText="Please enter a random/trivial password and memorize it to use later"
                    style={{ width: "80%", textAlign: "center" }}
                    error={errorPassword}
                    required
                    defaultValue={data.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Gender"
                    helperText="Please select your gender"
                    style={{ width: "80%", textAlign: "center" }}
                    error={errorGender}
                    required
                    defaultValue={data.gender}
                    onChange={(e) => handleChange("gender", e.target.value)}
                  >
                    <MenuItem key={"female"} value={"female"}>
                      Female
                    </MenuItem>
                    <MenuItem key={"male"} value={"male"}>
                      Male
                    </MenuItem>
                    <MenuItem key={"none"} value={"none"}>
                      Prefer Not To Disclose
                    </MenuItem>
                  </TextField>
                </td>
                <td>
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Educational Level"
                    helperText="Please select your educational level"
                    style={{ width: "80%", textAlign: "center" }}
                    error={errorEducation}
                    required
                    defaultValue={data.education}
                    onChange={(e) => handleChange("education", e.target.value)}
                  >
                    <MenuItem key={"noEducation"} value={"noEducation"}>
                      No Formal Education
                    </MenuItem>
                    <MenuItem key={"elementry"} value={"elementry"}>
                      Elementry School
                    </MenuItem>
                    <MenuItem key={"highschool"} value={"highschool"}>
                      High School
                    </MenuItem>
                    <MenuItem key={"university"} value={"university"}>
                      University
                    </MenuItem>
                    <MenuItem key={"masters"} value={"masters"}>
                      Masters
                    </MenuItem>
                    <MenuItem key={"phd"} value={"phd"}>
                      Doctorate/PHD
                    </MenuItem>
                  </TextField>
                </td>
              </tr>
              <tr>
                <td>
                  <TextField
                    id="standard-basic"
                    label="Birthyear"
                    helperText="Please enter your birthyear"
                    style={{ width: "80%", textAlign: "center" }}
                    error={errorBirthyear}
                    select
                    required
                    defaultValue={data.birthyear}
                    onChange={(e) => handleChange("birthyear", e.target.value)}
                  >
                    {birthOptions.map((option) => {
                      return (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      );
                    })}
                  </TextField>
                </td>
                <td>
                  <TextField
                    id="standard-basic"
                    label="Caffeine"
                    type="number"
                    helperText="Please specify the number of caffeine beverage cups you consumed in the past 24 hours"
                    style={{ width: "80%", textAlign: "center" }}
                    onChange={(e) => handleChange("caffiene", e.target.value)}
                    defaultValue={data.caffiene}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <TextField
                    id="static-multiline-static"
                    multiline
                    rows={4}
                    label="Mental Illness"
                    helperText="Please specify if you have been diagnosed with any mental illness and the type of illness"
                    style={{ width: "80%", textAlign: "center" }}
                    onChange={(e) => handleChange("mental", e.target.value)}
                    defaultValue={data.mental}
                  />
                </td>
                <td>
                  <TextField
                    id="static-multiline-static"
                    label="Medication or General Notes"
                    multiline
                    rows={4}
                    helperText="Please specify if you are currently under any medication or any health related notes that you find relevant"
                    style={{ width: "80%", textAlign: "center" }}
                    onChange={(e) => handleChange("notes", e.target.value)}
                    defaultValue={data.notes}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div
            style={{
              textAlign: "right",
              paddingRight: "18vw",
              height: "3vw",
              fontSize: "1vw",
              color: "#f4132c",
              fontFamily: "Roboto",
              fontWeight: "300",
            }}
          >
            {errorBirthyear ||
            errorEducation ||
            errorGender ||
            errorUsername ||
            errorPassword
              ? "*please fill in the required fields"
              : errorUnique
              ? "*this username is already taken"
              : null}
          </div>
          <div
            style={{
              textAlign: "right",
              paddingRight: "18vw",
            }}
          >
            {next ? (
              <div
                style={{
                  textAlign: "right",
                  fontSize: "2vw",
                  margin: "0px",
                  color: "#f2f2f2",
                  fontFamily: "Roboto",
                  fontWeight: "300",
                }}
              >
                loading...
              </div>
            ) : (
              <Button variant="outlined" onClick={(e) => submitUser(e)}>
                Next
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default UnityForm;
