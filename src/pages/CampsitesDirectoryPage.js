import { Container, Row, Col } from "reactstrap"
import CampsiteList from "../features/campsites/CampsiteList";



const CampsitesDirectoryPage = () => {

  return (
    <Container>
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