import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Launch from '@material-ui/icons/Launch'
import React from 'react'

const useStyles = makeStyles({
  root: {
    backgroundColor: props => props.backgroundColor,
  }
})

function EnvItem ({ backgroundColor, body }) {
  const classes = useStyles({ backgroundColor })

  return (
    <ListItem className={classes.root}>
      <Box flexGrow={1}>
        {body}
      </Box>

      <Tooltip title='Open in this tab'>
        <IconButton>
          <ArrowForward/>
        </IconButton>
      </Tooltip>
      <Tooltip title='Open in new tab'>
        <IconButton>
          <Launch/>
        </IconButton>
      </Tooltip>
    </ListItem>
  )
}

export default EnvItem
