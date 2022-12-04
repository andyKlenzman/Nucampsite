import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsiteSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';
import { useSelector } from 'react-redux';
import Error from '../components/Error';
import Loading from '../components/Loading';
const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();

    const campsite = useSelector(selectCampsiteById(campsiteId)) ;
    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);
    let content = null;



        // another form of conditional rendering....maybe a little more readable...it is is not 
    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else {
        content = (
            <>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </>
        );
    }


    //good example of conditional rendering to avoid error when dealing w/ async. I've dealt with this a lot
    // 
    return (
        <Container>
            {campsite && <SubHeader current={campsite.name} detail={true} />}
            <Row>
                {content}
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;