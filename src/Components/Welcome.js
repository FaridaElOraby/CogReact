import React from "react";
import topImage from "../Images/wl47_g82i_210216_ss4mp_generated.jpg";
import GUClogo from "../Images/guc_logo_og copy.png";
import GUC from "../Images/guc_logo_og.png";

export default function Welcome() {
  return (
    <div>
      <div
        style={{
          paddingTop: "30vw",
          paddingBottom: "5vw",
          margin: "0px",
          backgroundImage: `url(${topImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          style={{
            textAlign: "right",
            fontSize: "3.4vw",
            margin: "0px",
            color: "white",
            background: "rgba(0, 0, 0, 0.5)",
            paddingRight: "5vw",
          }}
        >
          WELCOME TO THE GAME
        </h1>
        <h1
          style={{
            textAlign: "right",
            fontSize: "6vw",
            margin: "0px",
            color: "white",
            background: "rgba(0, 0, 0, 0.5)",
            paddingRight: "5vw",
          }}
        >
          REVAMP&nbsp; JOY!
        </h1>
      </div>
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          paddingLeft: "17%",
          paddingRight: "17%",
          paddingTop: "3vw",
          paddingBottom: "1vw",
          fontSize: "1.2vw",
        }}
      >
        <table
          style={{
            width: "100%",
          }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  width: "70%",
                }}
              >
                <h4>
                  You are invited to play a computer game as a participant in a
                  bachelor research study. This study is being conducted by
                  Farida ElOraby, Undergrad at Computer Science and Engineering
                  at German University in Cairo and is supervised by Prof. Dr.
                  Slim Abdennadher
                </h4>
                <h4>
                  {" "}
                  Your participation is anonymous. Do not write your name on the
                  survey. No one will be able to identify you or your answers,
                  and no one will know whether or not you participated in the
                  study. The game will take about 30 minutes to complete.
                </h4>
                <h4>
                  By completing and playing the game, you are voluntarily
                  agreeing to participate. You are free to exit the game anytime
                  and your data will not be saved.
                </h4>
                <h4>
                  There are no known risks if you decide to participate in this
                  research study. There are no costs to you for participating in
                  the study. The information you provide will be used only for
                  research purposes. The information collected may not benefit
                  you directly.
                </h4>
                <h4>
                  If you have any questions about the study or come across any
                  problem, please contact Farida ElOraby at
                  farida.eloraby@student.guc.edu.eg
                </h4>

                <h5 style={{ fontSize: "1.1vw" }}>
                  Please fill in the following survey to start the game
                </h5>
              </td>

              <td
                style={{
                  width: "30%",
                  paddingLeft: "7%",
                }}
              >
                <div>
                  <img
                    src={GUClogo}
                    alt=""
                    style={{
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  />
                </div>
                <div>
                  <img
                    src={GUC}
                    alt=""
                    style={{
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
