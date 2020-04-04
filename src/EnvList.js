import { TextField } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import green from '@material-ui/core/colors/green'
import orange from '@material-ui/core/colors/orange'
import red from '@material-ui/core/colors/red'
import yellow from '@material-ui/core/colors/yellow'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListSubheader from '@material-ui/core/ListSubheader'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Launch from '@material-ui/icons/Launch'
import React from 'react'

const useStyles = makeStyles({
  featureListItem: {
    background: yellow['200'],
  },
  localListItem: {
    background: green['200'],
  },
  prodListItem: {
    background: red['200'],
  },
  stageListItem: {
    background: orange['200'],
  }
})

function EnvList ({ onSwitch }) {
  const classes = useStyles()

  return (
    <List>
      <ListSubheader>Switch to</ListSubheader>
      <ListItem
        className={classes.prodListItem}
        onClick={() => onSwitch('prod')}
      >
        <Box flexGrow={1}>
          <Typography variant='body1'>
            Prod
          </Typography>
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
      <ListItem
        className={classes.stageListItem}
        onClick={() => onSwitch('stage')}
      >
        <Box flexGrow={1}>
          <Typography variant='body1'>
            Stage
          </Typography>
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
      <ListItem
        className={classes.featureListItem}
        onClick={() => onSwitch('feature')}
      >
        <Box flexGrow={1}>
          <Typography variant='body1'>
            Feature
          </Typography>
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
      <ListItem
        className={classes.featureListItem}
        onClick={() => onSwitch('pr')}
      >
        <Box
          alignItems='center'
          display='flex'
          flexDirection='row'
          flexGrow={1}
        >
          <Typography variant='body1'>
            PR{' '}
          </Typography>
          <Box marginLeft='1rem'>
          <TextField
            required
            size='small'
            variant='outlined'
            InputProps={{
              startAdornment: <InputAdornment>#</InputAdornment>
            }}
          />
          </Box>
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
      <ListItem
        className={classes.localListItem}
        onClick={() => onSwitch('local')}
      >
        <Box flexGrow={1}>
          <Typography variant='body1'>
            Local
          </Typography>
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
    </List>
  )
}

export default EnvList
