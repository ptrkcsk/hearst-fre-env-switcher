import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import EnvItem from './EnvItem'
import { switchEnv } from './lib'
import PrEnvItem from './PrEnvItem'

const useStyles = makeStyles({
  list: {
    minWidth: '250px',
    padding: 0,
  }
})

function getSwitchEnv (env) {
  return async function (newTab) {
    debugger
    await switchEnv({ env, newTab })
  }
}

function EnvList () {
  const classes = useStyles()

  return (
    <List className={classes.list}>
      <ListSubheader>Switch FRE environment</ListSubheader>

      <EnvItem
        body={
          <Typography variant='body1'>Prod</Typography>
        }
        onOpen={getSwitchEnv('prod')}
      />

      <EnvItem
        body={
          <Typography variant='body1'>Stage</Typography>
        }
        onOpen={getSwitchEnv('stage')}
      />

      <EnvItem
        body={
          <Typography variant='body1'>Feature</Typography>
        }
        onOpen={getSwitchEnv('feature')}
      />

      <PrEnvItem/>

      <EnvItem
        body={
          <Typography variant='body1'>Local</Typography>
        }
        onOpen={getSwitchEnv('local')}
      />
    </List>
  )
}

export default EnvList
