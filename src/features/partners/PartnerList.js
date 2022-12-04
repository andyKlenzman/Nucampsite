import { Row, Col } from 'reactstrap';
import { selectAllPartners } from './partnersSlice'
import Partner from "./Partner";
import { useSelector } from 'react-redux'
import Loading from '../../components/Loading';
import Error from '../../components/Error';


const PartnerList = () => {
    const isLoading = useSelector((state) => state.partners.isLoading);
    const errMsg = useSelector((state) => state.partners.errMsg);

    const partners = useSelector(selectAllPartners);
    console.log(partners, "fwebiufbewubfuewb")


    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
   
        <Col className='mt-4'>
            <Row>
                {partners.map((partner) => {
                    return (
                        <div className='d-flex mb-5' key={partner.id}>
                            <Partner partner={partner} />
                        </div>
                    );
                })}
            </Row>
        </Col>
    );
}

export default PartnerList


