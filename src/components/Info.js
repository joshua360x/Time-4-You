import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Info.css'

function Info() {
  return (
    <>
      <Row>
    <Col>
    <div className="icon-text">
    <i class="far fa-calendar-alt fa-5x"></i>
    <p className="info">
      Having days that are full can be stressful. Let us take the time to redesign the way you see your Days
    </p>
    </div>
    </Col>

    <Col><div className="icon-text">
    <i class="fas fa-child fa-5x"></i>
    <p className="info">
      People are so busy, so why should you leave them hanging. Those Days are over. Freedom awaits
    </p>
    </div>
    </Col>

    <Col><div className="icon-text">
    <i class="far fa-clock fa-5x"></i>
    <p className="info">
      Are you tired of thinking when the day will be over, or when it will start. Time to Change
          </p>
    </div>
    </Col>
  </Row>
    </>
  )
}

export default Info
