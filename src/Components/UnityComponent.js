import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/Build28June2.loader.js",
  dataUrl: "build/Build28June2.data",
  frameworkUrl: "build/Build28June2.framework.js",
  codeUrl: "build/Build28June2.wasm",
  productName: "Cognition Game",
  productVersion: "1.0.0",
  companyName: "Farida ElOraby",
});

function UnityComponent() {
  const [progression, setProgression] = useState(0);

  useEffect(function () {
    unityContext.on("progress", function (progression) {
      setProgression(progression);
    });
    unityContext.on(
      "SimpleDetectionLink",
      function (round, reactionTime, type) {
        console.log(round + " " + reactionTime + " " + type);
      }
    );
    unityContext.on("PatternAnswerLink", function (correct12Pattern) {
      console.log(correct12Pattern);
    });
    unityContext.on(
      "PatternEvaluationLink",
      function (chosenPattern, round, evaluation, timePassed) {
        console.log(
          chosenPattern + " " + round + " " + evaluation + " " + timePassed
        );
      }
    );
    unityContext.on("PatternMetaLink", function (metaAnswer) {
      console.log(metaAnswer);
    });
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
        console.log(
          correctAnswer +
            " " +
            userAnswer +
            " " +
            evaluation +
            " " +
            OpenBags +
            " " +
            OpenClothes +
            " " +
            timeStamp +
            " " +
            round
        );
      }
    );
    unityContext.on("ReyAudiLink", function (round, word, timeStamp) {
      console.log(round + " " + word + " " + timeStamp);
    });
    unityContext.on("LexicalLink", function (word) {
      console.log(word);
    });
    unityContext.on("LogLink", function (action, timeStamp, type) {
      console.log(action + " " + timeStamp + " " + type);
    });
  }, []);

  return (
    <div>
      {progression < 1 ? (
        <div>
          <p>Loading {progression * 100} percent...</p>
        </div>
      ) : (
        <div>
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
      )}
    </div>
  );
}

export default UnityComponent;
