import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FirebaseContext from "../Firebase/context";
import { useAuth } from "./Auth";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/ClipLoader";
import { Card, Typography, Grow } from "@material-ui/core";
import { Line } from "react-chartjs-2";

const useAppStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cards: {
    width: "600px",
    fontFamily: "Open Sans",
  },
});

const override = css`
  display: block;
  margin: 0 auto;
  margintop: 30px;
`;

const EmotionHistory = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#19BD9D");
  const [emotions, setEmotions] = useState([]);
  const [labels, setLabels] = useState([]);
  const [positiveDataArray, setPositiveDataArray] = useState([]);
  const [negativeDataArray, setNegativedataArray] = useState([]);

  const userAuth = useAuth();
  const firestore = useContext(FirebaseContext);
  const classes = useAppStyles();

  useEffect(() => {
    const db = firestore
      .collection(`UserData/${userAuth.currentUser.uid}/user-emotions`)
      .onSnapshot(
        (items) => {
          setLoading(false);
          const emotionData = [];
          const labels = [];
          items.forEach((item) => {
            let data = item.data();
            emotionData.push(data);
            const dateString = data.date.toDate().toString().substring(0, 16);
            if (!labels.includes(dateString)) {
              labels.push(dateString);
            }
          });
          const positiveDataArray = new Array(labels.length).fill(0);
          const negativeDataArray = new Array(labels.length).fill(0);
          items.forEach((item) => {
            let data = item.data();
            const dateString = data.date.toDate().toString().substring(0, 16);
            if (data.emotionType == "Positive") {
              positiveDataArray[labels.indexOf(dateString)]++;
            } else {
              negativeDataArray[labels.indexOf(dateString)]--;
            }
          });
          setEmotions(emotionData);
          setLabels(labels);
          setPositiveDataArray(positiveDataArray);
          setNegativedataArray(negativeDataArray);
        },
        (err) => {
          console.log(`Encountered error: ${err}`);
        }
      );
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Negative Emotions",
        data: negativeDataArray,
        fill: true,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },

      {
        label: "Positive Emotions",
        data: positiveDataArray,
        fill: true,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgb(54, 162, 235, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const checkColor = (color) => {
    if (color == undefined) {
      return "rgb(246, 166, 182)";
    } else return color;
  };

  return (
    <div className={classes.root}>
      <div className={classes.cards}>
        {loading ? (
          <div className="sweet-loading">
            <h5 style={{ marginTop: "10px" }}>Loading your emotion history</h5>
            <HashLoader
              color={color}
              loading={loading}
              css={override}
              size={100}
            />
          </div>
        ) : (
          <div>
            <h5 style={{ marginTop: "10px" }}>Your emotion history</h5>

            <div style={{ maxHeight: "40vh", overflowY: "scroll" }}>
              {emotions.map((item) => {
                console.log(`${item} = ${item.color}`);
                return (
                  <Card
                    style={{
                      marginTop: "20px",
                      padding: "15px",
                      backgroundColor: `${checkColor(item.color)}`,
                      color: "#fff",
                    }}
                  >
                    <div>{item.emotion}</div>
                    <div>
                      Recorded at{" "}
                      {`${item.date.toDate().toDateString()} ${item.date
                        .toDate()
                        .toLocaleTimeString("en-US")}`}
                    </div>
                  </Card>
                );
              })}
            </div>
            <div style={{ marginTop: "50px" }}>
              <Line data={data} options={options} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmotionHistory;
