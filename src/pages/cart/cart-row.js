import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import CartTable from './cart-table'


const Styles = makeStyles({
    align: {
        textAlign: "justify"
    }
})

export default function CartRows() {

    const classes = Styles();
    return <>
        <Grid container justify="center" spacing={3} className={classes.align} direction="row">
            <Grid item xs={4}>
                In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present.
                Dummy data can be used as a placeholder for both testing and operational purposes.
    </Grid>
            <Grid item xs={4}>
                In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present.
                Dummy data can be used as a placeholder for both testing and operational purposes.
    </Grid>
            <Grid item xs={4}>
                In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present.
                Dummy data can be used as a placeholder for both testing and operational purposes.
    </Grid>
        </Grid>
        <br />
        <CartTable />
    </>
}