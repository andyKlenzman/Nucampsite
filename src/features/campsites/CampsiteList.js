import React from 'react'
import { useSelector } from 'react-redux'
import CampsiteCard from "./CampsiteCard";
import { Row, Col } from 'reactstrap';
import { selectAllCampsites } from './campsiteSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CampsiteList = () => {
  //This seems counterintitutive to me. We were doing a great job of keeping all of our data grabbing functions in one file, now we are sprinkling useSelecetor around the entire app...shit. 
  const campsites = useSelector(selectAllCampsites)
  // want to pass the function itself, not the return value...

  // i would export this from the slice,,,,
  const isLoading = useSelector((state) => state.campsites.isLoading);
  const errMsg = useSelector((state) => state.campsites.errMsg);
  let content = null;

  //another form of conditional render...I think for the user view, I will use the other structure. 
  if (isLoading) {
    return (
        <Row>
            <Loading />
        </Row>
    );
}

if (errMsg) {
    return (
        <Row>
            <Error errMsg={errMsg} />
        </Row>
    );
}



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