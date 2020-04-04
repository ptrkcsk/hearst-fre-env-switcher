import { TextField } from '@material-ui/core'
import Box from '@material-ui/core/Box'
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
      <ListSubheader>Switch FRE environment</ListSubheader>

      <EnvItem
        body={
          <Typography variant='body1'>Prod</Typography>
        }
        onAction={async () => await switchToEnv('prod')}
      />
      <EnvItem
        body={
          <Typography variant='body1'>Stage</Typography>
        }
        onAction={async () => await switchToEnv('stage')}
      />
      <EnvItem
        body={
          <Typography variant='body1'>Feature</Typography>
        }
        onAction={async () => await switchToEnv('feature')}
      />
      <EnvItem
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
        body={
          <Typography variant='body1'>Local</Typography>
        }
        onAction={async () => await switchToEnv('local')}
      />
    </List>
  )
}

export default EnvList
