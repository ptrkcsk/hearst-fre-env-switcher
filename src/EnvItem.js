import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Launch from '@material-ui/icons/Launch'
import React from 'react'

const actions = {
  OPEN_IN_CURRENT_TAB: 'OPEN_IN_CURRENT_TAB',
  OPEN_IN_NEW_TAB: 'OPEN_IN_NEW_TAB'
}

function EnvItem ({ body, onAction }) {
  return (
    <ListItem>
      <Box flexGrow={1}>
        {body}
      </Box>

      <Tooltip title='Open in current tab'>
        <IconButton onClick={() => onAction(actions.OPEN_IN_CURRENT_TAB)}>
          <ArrowForward/>
        </IconButton>
      </Tooltip>
      <Tooltip title='Open in new tab'>
        <IconButton onClick={() => onAction(actions.OPEN_IN_NEW_TAB)}>
          <Launch/>
        </IconButton>
      </Tooltip>
    </ListItem>
  )
}

EnvItem.actions = actions

export default EnvItem
