import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Rating from '@material-ui/lab/Rating'

import CardActionArea from '@material-ui/core/CardActionArea'

export default function ReviewCards(props) {
    const { username, date, rating, review } = props.rev;
    return <>


        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5">{username}</Typography>
                    <Rating value={rating} />
                    <br />
                    <Typography variant="p">{review}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>


    </>
}