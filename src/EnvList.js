import { TextField } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import green from '@material-ui/core/colors/green'
import orange from '@material-ui/core/colors/orange'
import red from '@material-ui/core/colors/red'
import yellow from '@material-ui/core/colors/yellow'
import InputAdornment from '@material-ui/core/InputAdornment'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import EnvItem from './EnvItem'
import { switchToEnv } from './lib'

const useStyles = makeStyles({
  list: {
    minWidth: '320px',
    padding: 0,
  }
})

function EnvList () {
  const classes = useStyles()

  return (
    <List className={classes.list}>
      <ListSubheader>Switch to</ListSubheader>
      <EnvItem
        backgroundColor={red['200']}
        body={
          <Typography variant='body1'>Prod</Typography>
        }
        onAction={async () => await switchToEnv('prod')}
      />
      <EnvItem
        backgroundColor={orange['200']}
        body={
          <Typography variant='body1'>Stage</Typography>
        }
        onAction={async () => await switchToEnv('stage')}
      />
      <EnvItem
        backgroundColor={yellow['200']}
        body={
          <Typography variant='body1'>Feature</Typography>
        }
        onAction={async () => await switchToEnv('feature')}
      />
      <EnvItem
        backgroundColor={yellow['200']}
        body={
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
        }
      />
      <EnvItem
        backgroundColor={green['200']}
        body={
          <Typography variant='body1'>Local</Typography>
        }
        onAction={async () => await switchToEnv('local')}
      />
    </List>
  )
}

export default EnvList
