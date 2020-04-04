import { TextField } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import InputAdornment from '@material-ui/core/InputAdornment'
import Typography from '@material-ui/core/Typography'
import React, { useState } from 'react'
import EnvItem from './EnvItem'
import { switchToEnv } from './lib'

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
          <Box marginLeft='1rem'>
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
      onAction={async function () {
        if (prNumber) return await switchToEnv(prNumber)

        setEnvItemDisabled(true)
        setTextFieldError(true)
      }}
    />
  )
}

export default PrEnvItem
