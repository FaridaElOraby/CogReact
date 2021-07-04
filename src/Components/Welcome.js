import React from "react";
import topImage from "../Images/wl47_g82i_210216_ss4mp_generated.jpg";
import GUClogo from "../Images/guc_logo_og copy.png";
import GUC from "../Images/guc_logo_og.png";

export default function Welcome() {
  const Mailto = ({ email, subject, body, children }) => {
    return (
      <a
        href={`mailto:${email}?subject=${
          encodeURIComponent(subject) || ""
        }&body=${encodeURIComponent(body) || ""}`}
      >
        {children}
      </a>
    );
  };

  return (
    <div>
      <div
        style={{
          paddingTop: "25vw",
          paddingBottom: "7vw",
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
            color: "#f2f2f2",
            background: "rgba(0, 0, 0, 0.5)",
            paddingRight: "10vw",
            fontFamily: "Roboto",
            fontWeight: "700",
          }}
        >
          WELCOME TO THE GAME
        </h1>
        <h1
          style={{
            textAlign: "right",
            fontSize: "6vw",
            margin: "0px",
            color: "#f2f2f2",
            background: "rgba(0, 0, 0, 0.5)",
            paddingRight: "10vw",
            fontFamily: "Roboto",
            fontWeight: "700",
          }}
        >
          REVAMP JOY!
        </h1>
        <div
          style={{
            textAlign: "left",
            height: "60px",
            paddingLeft: "7vw",
            paddingTop: "1vw",
          }}
        >
          <img
            src="https://img.icons8.com/ios-glyphs/90/f2f2f2/down--v1.png"
            alt=""
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#f2f2f2",
          color: "black",
          paddingLeft: "17%",
          paddingRight: "17%",
          paddingTop: "3vw",
          paddingBottom: "1vw",
          fontSize: "1.35vw",
          lineHeight: "2vw",
          fontFamily: "Roboto",
          fontWeight: "400",
        }}
      >
        <table
          style={{
            width: "100%",
            fontFamily: "Roboto",
            fontWeight: "400",
          }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  width: "70%",
                  fontFamily: "Roboto",
                  fontWeight: "400",
                }}
              >
                <h4
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "500",
                  }}
                >
                  You are invited to play a computer game as a participant in a
                  bachelor research study. This study is being conducted by
                  Farida ElOraby, Undergrad at Computer Science and Engineering
                  at German University in Cairo and is supervised by Prof. Dr.
                  Slim Abdennadher
                </h4>
                <h4
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "500",
                  }}
                >
                  {" "}
                  Your participation is anonymous. Do not write your name on the
                  survey. No one will be able to identify you or your answers,
                  and no one will know whether or not you participated in the
                  study. The game will take about 15 minutes to complete. Please
                  make sure that you are in a quiet and comfortable place before
                  starting playing the game. External distractions may affect
                  the results of this study.
                </h4>
                <h4
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "500",
                  }}
                >
                  By completing and playing the game, you are voluntarily
                  agreeing to participate. You are free to exit the game anytime
                  and your data will not be saved.
                </h4>
                <h4
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "500",
                  }}
                >
                  There are no known risks if you decide to participate in this
                  research study. There are no costs to you for participating in
                  the study. The information you provide will be used only for
                  research purposes. The information collected may not benefit
                  you directly.
                </h4>
                <h4
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "500",
                  }}
                >
                  If you have any questions about the study or come across any
                  problem, please contact Farida ElOraby at:
                </h4>
                <Mailto
                  email="farida.eloraby@student.guc.edu.eg"
                  subject="Bachelor Reseacrch Inquiry"
                >
                  farida.eloraby@student.guc.edu.eg
                </Mailto>

                <h5
                  style={{
                    fontSize: "1.2vw",
                    fontFamily: "Roboto",
                    fontWeight: "500",
                  }}
                >
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
