import { Container, Row, Col } from "reactstrap"
import CampsiteList from "../features/campsites/CampsiteList";
import SubHeader from "../components/SubHeader";


const CampsitesDirectoryPage = () => {

  return (
    <Container>
      <SubHeader current="Directory"/>
        <Row>
            <Col sm='5' md='7'>
                {/* <CampsiteList setCampsiteId={setCampsiteId}/> */}
                <CampsiteList />

            </Col>

        </Row>
    </Container>
  )
}

export default CampsitesDirectoryPage