import Box from '@material-ui/core/Box'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import React, { useState } from 'react'
import EnvItem from './EnvItem'
import { switchEnv } from './lib'

function PrEnvItem () {
  const [envItemDisabled, setEnvItemDisabled] = useState(false)
  const [prNumber, setPrNumber] = useState('')
  const [textFieldError, setTextFieldError] = useState(false)

  return (
    <EnvItem
      body={
        <Box
          alignItems='center'
          display='flex'
          flexDirection='row'
          flexGrow={1}
        >
          <Typography variant='body1'>PR</Typography>
          <Box marginLeft='0.5rem'>
            <TextField
              error={textFieldError}
              InputProps={{
                startAdornment: <InputAdornment>#</InputAdornment>
              }}
              onChange={function ({ target: { value } }) {
                setEnvItemDisabled(false)
                setTextFieldError(false)
                setPrNumber(value)
              }}
              required
              size='small'
              value={prNumber}
              variant='outlined'
            />
          </Box>
        </Box>
      }
      disabled={envItemDisabled}
      onOpen={async function (newTab) {
        if (prNumber) return await switchEnv({env: prNumber, newTab})

        setEnvItemDisabled(true)
        setTextFieldError(true)
      }}
    />
  )
}

export default PrEnvItem
