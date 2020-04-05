import Box from '@material-ui/core/Box'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import React, { useEffect, useState } from 'react'
import EnvItem from './EnvItem'
import { switchEnv } from './lib'

function PrEnvItem () {
  const [envItemDisabled, setEnvItemDisabled] = useState(false)
  const [prNumber, setPrNumber] = useState('')
  const [prNumberFocused, setPrNumberFocused] = useState(false)
  const [textFieldError, setTextFieldError] = useState(false)

  /**
   * @param {KeyboardEvent} event
   */
  async function handleKeydown (event) {
    if (!prNumberFocused || event.key !== 'Enter') return

    const newTab = event.ctrlKey || event.metaKey
    await handleOpen(newTab)
  }

  async function handleOpen (newTab) {
    if (prNumber) return await switchEnv({ env: prNumber, newTab })

    setEnvItemDisabled(true)
    setTextFieldError(true)
  }

  useEffect(function () {
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  })

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
              onBlur={() => setPrNumberFocused(false)}
              onChange={function ({ target: { value } }) {
                setEnvItemDisabled(false)
                setTextFieldError(false)
                setPrNumber(value)
              }}
              onFocus={() => setPrNumberFocused(true)}
              required
              size='small'
              value={prNumber}
              variant='outlined'
            />
          </Box>
        </Box>
      }
      disabled={envItemDisabled}
      onOpen={handleOpen}
    />
  )
}

export default PrEnvItem
