import { Box, Button, Container, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/ducks/counterReducer'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: theme.spacing(2)
    }
}))

const Counter = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { count } = useSelector(state => state.counter)

    const handeleIncrement = _ => {
        dispatch(increment())
    }
    const handleDecrement = _ => {
        dispatch(decrement())
    }
    return (
        <Container>
            <Paper className={classes.root}>
                <Box>
                    <Typography variant="h5">Count: {count}</Typography>
                </Box>
                <Box className={classes.box}>
                    <Button onClick={handeleIncrement} type="submit" variant="container" color="primary">Increment</Button>
                    <Button onClick={handleDecrement} type="submit" variant="container" color="decrement">Increment</Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default Counter
