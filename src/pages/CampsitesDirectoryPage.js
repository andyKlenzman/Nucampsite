import { Container, Row, Col } from "reactstrap"
import CampsiteList from "../features/campsites/CampsiteList";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CampsitesList from '../features/campsites/CampsiteList'
import { selectCampsiteById } from "../features/campsites/campsiteSlice"
import { useState } from "react";


const CampsitesDirectoryPage = () => {
    const [campsiteId, setCampsiteId] = useState(0)
    const selectedCampsite = selectCampsiteById(campsiteId)
    console.log(campsiteId)
  return (
    <Container>
        <Row>
            <Col sm='5' md='7'>
                <CampsiteList setCampsiteId={setCampsiteId}/>
            </Col>
            <Col sm='7' md='5'>
                <CampsiteDetail campsite = {selectedCampsite} />
            </Col>
        </Row>
    </Container>
  )
}

export default CampsitesDirectoryPage