import { Card, Container } from "reactstrap";
import { useState } from "react";

function App() {
  const box = "https://img.icons8.com/ios/50/null/open-parcel.png";
  const stone =
    "https://img.icons8.com/external-icongeek26-flat-icongeek26/50/null/external-stone-geography-icongeek26-flat-icongeek26.png";
  const paper = "https://img.icons8.com/ios/50/null/matt-paper.png";
  const scissor = "https://img.icons8.com/ios/50/null/scissors.png";

  const [mystate, setmystate] = useState(box);
  const [robotstate, setrobotstate] = useState(box);
  const [msg, setmsgstate] = useState("start");
  function playHandler(num) {
    if (num == 0) {
      setmystate(stone);
    }
    if (num == 1) {
      setmystate(paper);
    }
    if (num == 2) {
      setmystate(scissor);
    }
    let rnum = Math.floor(Math.random() * 3);
    if (rnum == 0) {
      setrobotstate(stone);
    }
    if (rnum == 1) {
      setrobotstate(paper);
    }
    if (rnum == 2) {
      setrobotstate(scissor);
    }
    if (num == rnum) {
      setmsgstate("draw");
    } else if (num == 0 && rnum == 1) {
      setmsgstate("robot wins");
    } else if (num == 0 && rnum == 2) {
      setmsgstate("you wins");
    } else if (num == 1 && rnum == 0) {
      setmsgstate("You wins");
    } else if (num == 1 && rnum == 2) {
      setmsgstate("robot wins");
    } else if (num == 2 && rnum == 1) {
      setmsgstate("You wins");
    } else if (num == 2 && rnum == 0) {
      setmsgstate("robot wins");
    }
  }

  return (
    <>
      <Container className=" d-flex justify-content-center">
        <Card className="p-5">
          <div className="d-flex justify-content-center mb-5">
            <img src="https://img.icons8.com/arcade/64/null/robot-2.png" />
            <h1 className="mt-4">Robot</h1>
          </div>

          <div className="d-flex justify-content-center">
            <img className="border p-3 m-1" src={box} />
            <img className="border p-3 m-1" src={box} />
            <img className="border p-3 m-1" src={box} />
          </div>

          <div className="d-flex justify-content-center mt-5 ">
            <img className="border p-3 m-1 border-danger" src={robotstate} />
          </div>
          <div className="text-center mt-3">
            <h1>{msg} !!!</h1>
          </div>
          <div className="d-flex justify-content-center mt-2 ">
            <img className="border p-3 m-1 border-danger" src={mystate} />
          </div>
          <div className="d-flex justify-content-center mt-5">
            <img src="https://img.icons8.com/color/58/null/lady-skin-type-4.png" />
            <h1 className="mt-4">ME</h1>
          </div>
          <div className="d-flex justify-content-center m-4">
            <img
              style={{ cursor: "pointer" }}
              className="border p-3 m-1"
              src={stone}
              onClick={() => playHandler(0)}
            />

            <img
              style={{ cursor: "pointer" }}
              className="border p-3 m-1"
              src={paper}
              onClick={() => playHandler(1)}
            />
            <img
              style={{ cursor: "pointer" }}
              className="border p-3 m-1"
              src={scissor}
              onClick={() => playHandler(2)}
            />
          </div>
        </Card>
      </Container>
    </>
  );
}

export default App;
