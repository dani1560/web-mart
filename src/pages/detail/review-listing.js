import ReviewCards from './review-card'
import { reviews } from '../../data/reviews'
import Grid from '@material-ui/core/Grid'

export default function ReviewsListings() {
    return <><Grid container spacing={2}>
        {reviews.map(review => <Grid item xs={4} key={review.id}><ReviewCards rev={review} /></Grid>)}
    </Grid>
    </>
}