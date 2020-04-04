import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import EnvItem from './EnvItem'
import { switchToEnv } from './lib'
import PrEnvItem from './PrEnvItem'

const useStyles = makeStyles({
  list: {
    minWidth: '250px',
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

      <PrEnvItem/>

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
