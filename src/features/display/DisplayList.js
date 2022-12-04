import { Col, Row } from 'reactstrap'
// import DisplayCard from './DisplayCard'
import { useSelector } from 'react-redux'
import { selectFeaturedCampsite } from '../campsites/campsiteSlice'
import { selectFeaturedPromotion } from '../promotions/promotionSlice'
import { selectFeaturedPartner } from '../partners/partnersSlice'
import AnimatedDisplayCard from './AnimatedDisplayCard'
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const DisplayList = () => {
  // i do not quite understand this arrow function...it is a callback function that is passing the state to all of these different functions....do they not give the return value like the other one
  // use selector is how you access redux state
    const items = useSelector((state) => [selectFeaturedCampsite(state), selectFeaturedPromotion(state), selectFeaturedPartner(state)])

    // conditional rendering to confirm thst the item exists
  return (
    
       <Row>
            {items.map((item, idx) => {
                const { featuredItem, isLoading, errMsg } = item;
                if (isLoading) {
                    return <Loading key={idx} />;
                }
                if (errMsg) {
                    return <Error errMsg={errMsg} key={idx} />;
                }
                return (
                    featuredItem && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={featuredItem} />
                        </Col>
                    )
                );
            })}
        </Row>
    
  )
}

export default DisplayList