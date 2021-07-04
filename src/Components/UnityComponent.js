import React, { useState, useEffect, useRef } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import axios from "axios";
import { backendLink } from "../keys";

const unityContext = new UnityContext({
  loaderUrl: "build/Build4July2.loader.js",
  dataUrl: "build/Build4July2.data",
  frameworkUrl: "build/Build4July2.framework.js",
  codeUrl: "build/Build4July2.wasm",
  productName: "Joy Game",
  productVersion: "1.0.0",
  companyName: "Farida ElOraby",
});

function UnityComponent(props) {
  const [progression, setProgression] = useState(0);
  const username = props.username;
  const token = props.token;

  useEffect(function () {
    ////////////////////////////////////////////////////////////////////////////
    unityContext.on("progress", function (progression) {
      setProgression(progression);
    });
    ////////////////////////////////////////////////////////////////////////////
    unityContext.on(
      "SimpleDetectionLink",
      function (round, reactionTime, type) {
        axios({
          method: "POST",
          url: `${backendLink}/simpleDetection/addRecord`,
          headers: {
            Authorization: token,
          },
          data: {
            round: round,
            username: username,
            reactionTime: reactionTime,
            type: type,
          },
        })
          .then((res) => {
            if (res.data.statusCode === "000") {
              console.log("reaction time");
            } else {
              console.log(res.data);
            }
          })
          .catch((err) => console.log(err));
      }
    );
    ////////////////////////////////////////////////////////////////////////////
    unityContext.on("PatternAnswerLink", function (correct12Pattern) {
      axios({
        method: "POST",
        url: `${backendLink}/patternAnswer/addRecord`,
        headers: {
          Authorization: token,
        },
        data: { modelAnswer: correct12Pattern, username: username },
      })
        .then((res) => {
          if (res.data.statusCode === "000") {
            console.log("pattern answer");
          } else {
            console.log(res.data);
          }
        })
        .catch((err) => console.log(err));
    });
    ////////////////////////////////////////////////////////////////////////////
    unityContext.on(
      "PatternEvaluationLink",
      function (chosenPattern, round, evaluation, timePassed) {
        axios({
          method: "POST",
          url: `${backendLink}/patternEvaluation/addRecord`,
          headers: {
            Authorization: token,
          },
          data: {
            chosenPattern: chosenPattern,
            username: username,
            round: round,
            evaluation: evaluation,
            timePassed: timePassed,
          },
        })
          .then((res) => {
            if (res.data.statusCode === "000") {
              console.log("pattern eval");
            } else {
              console.log(res.data);
            }
          })
          .catch((err) => console.log(err));
      }
    );
    ////////////////////////////////////////////////////////////////////////////
    unityContext.on("PatternMetaLink", function (metaAnswer) {
      axios({
        method: "POST",
        url: `${backendLink}/patternMeta/addRecord`,
        headers: {
          Authorization: token,
        },
        data: { metaAnswer: metaAnswer, username: username },
      })
        .then((res) => {
          if (res.data.statusCode === "000") {
            console.log("pattern meta");
          } else {
            console.log(res.data);
          }
        })
        .catch((err) => console.log(err));
    });
    ////////////////////////////////////////////////////////////////////////////
    unityContext.on(
      "InfoSamplingLink",
      function (
        correctAnswer,
        userAnswer,
        evaluation,
        OpenBags,
        OpenClothes,
        timeStamp,
        round
      ) {
        axios({
          method: "POST",
          url: `${backendLink}/infoSampling/addRecord`,
          headers: {
            Authorization: token,
          },
          data: {
            evaluation: evaluation,
            username: username,
            round: round,
            openBags: OpenBags,
            openClothes: OpenClothes,
            correctAnswer: correctAnswer,
            userAnswer: userAnswer,
            timePassed: timeStamp,
          },
        })
          .then((res) => {
            if (res.data.statusCode === "000") {
              console.log("infoSamp");
            } else {
              console.log(res.data);
            }
          })
          .catch((err) => console.log(err));
      }
    );
    ////////////////////////////////////////////////////////////////////////////
    unityContext.on("ReyAudiLink", function (round, word, timeStamp) {
      console.log(round + " " + word + " " + timeStamp);
      axios({
        method: "POST",
        url: `${backendLink}/reyAuditory/addRecord`,
        headers: {
          Authorization: token,
        },
        data: {
          word: word,
          username: username,
          round: round,
          timeStamp: timeStamp,
        },
      })
        .then((res) => {
          if (res.data.statusCode === "000") {
            console.log("rey");
          } else {
            console.log(res.data);
          }
        })
        .catch((err) => console.log(err));
    });
    ////////////////////////////////////////////////////////////////////////////
    unityContext.on("LexicalLink", function (word) {
      axios({
        method: "POST",
        url: `${backendLink}/lexical/addRecord`,
        headers: {
          Authorization: token,
        },
        data: {
          word: word,
          username: username,
        },
      })
        .then((res) => {
          if (res.data.statusCode === "000") {
            console.log("lexical");
          } else {
            console.log(res.data);
          }
        })
        .catch((err) => console.log(err));
    });
    ////////////////////////////////////////////////////////////////////////////
    unityContext.on("LogsLink", function (action, timeStamp, type, scene) {
      axios({
        method: "POST",
        url: `${backendLink}/log/addRecord`,
        headers: {
          Authorization: token,
        },
        data: {
          action: action,
          username: username,
          timeStamp: timeStamp,
          type: type,
          scene: scene,
        },
      })
        .then((res) => {
          if (res.data.statusCode === "000") {
            console.log("log");
          } else {
            console.log(res.data);
          }
        })
        .catch((err) => console.log(err));
    });
    ////////////////////////////////////////////////////////////////////////////
    unityContext.on("GameOverLink", function () {
      axios({
        method: "POST",
        url: `${backendLink}/user/validateUser`,
        headers: {
          Authorization: token,
        },
        data: {
          username: username,
        },
      })
        .then((res) => {
          if (res.data.statusCode === "000") {
            console.log("gameover");
          } else {
            console.log(res.data);
          }
        })
        .catch((err) => console.log(err));
    });
    ////////////////////////////////////////////////////////////////////////////
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({
      behavior: "smooth",
    });

  useEffect(
    function () {
      if (progression === 1) {
        executeScroll();
      }
    },
    [progression]
  );

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <div>
        <p
          style={{
            color: "#f2f2f2",
            textAlign: "center",
            fontSize: "3vw",
            margin: "0px",
            paddingTop: "7vw",
            paddingBottom: "4.5vw",
            fontFamily: "Roboto",
            fontWeight: "500",
          }}
        >
          {progression < 0.1
            ? `Loading...`
            : progression < 1
            ? `Loading  ${Math.round(progression * 100)}%...`
            : `Welcome, ${username}`}
        </p>
      </div>

      <div
        style={{
          textAlign: "center",
          paddingBottom: "7vw",
          paddingTop: "2.5vw",
        }}
        ref={myRef}
      >
        <Unity
          unityContext={unityContext}
          style={{
            height: "42.86vw",
            width: "90vw",
            border: "2px solid black",
            background: "grey",
          }}
        />
      </div>
    </div>
  );
}

export default UnityComponent;
