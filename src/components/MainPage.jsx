import { Card, Button, Input, Select, Row, Col } from "antd";
import HeadingText from "./HeadingText";
import "./MainPage.css";
import Period from "./Period";
import ClockTime from "./ClockTime";
import Graph from "./Graph";


function MainPage() {
  return (
    <div className="main-page">
      <h1>Overview</h1>

      <Card bordered={false} style={{ width: "90%" }}>
        <HeadingText text={"Time & Attendance"} />
        <Row>
          <Col span={12}>
            <div className="inner-time-container">
              <div>
                <h1 className="clock-time">00:00:00</h1>
                <p> 05-Feb-2024</p>
              </div>
              <div className="break-outer">
                <div className="break-box1">
                  <p>00:00:00</p>
                  <p>Clock In Time</p>
                </div>
                <div className="break-box2">
                  <p>00:00:00</p>
                  <p>Break Duration</p>
                </div>
              </div>
            </div>
        <Button type="primary" shape="round" size="large">
          Clock-In
        </Button>

        <Period />
        <ClockTime />
          </Col>
          <Col span={12}>
            <Graph />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default MainPage;
