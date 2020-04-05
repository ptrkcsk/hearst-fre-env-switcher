import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Launch from '@material-ui/icons/Launch'
import React from 'react'

function EnvItem ({ body, disabled, onOpen }) {
  return (
    <ListItem>
      <Box flexGrow={1}>
        {body}
      </Box>

      <Tooltip title='Open in current tab' enterDelay={500}>
        <IconButton
          disabled={disabled}
          onClick={() => onOpen(false)}
        >
          <ArrowForward/>
        </IconButton>
      </Tooltip>
      <Tooltip title='Open in new tab'>
        <IconButton
          disabled={disabled}
          onClick={() => onOpen(true)}
        >
          <Launch/>
        </IconButton>
      </Tooltip>
    </ListItem>
  )
}

export default EnvItem
