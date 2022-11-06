import React from 'react'
import CampsiteCard from "./CampsiteCard";
import { Row, Col } from 'reactstrap';
import { selectAllCampsites } from './campsiteSlice';

const CampsiteList = () => {
  const campsites = selectAllCampsites()
  return (
    <div>
        <Row className="ms-auto">
        {campsites.map((site) => {
            return(<Col 
                      md='5' 
                      className="m-4" 
                      key={site.id}
                      >
                <CampsiteCard campsite={site}/>
            </Col>
            )
        })}
        </Row>
    </div>
  )
}

export default CampsiteList