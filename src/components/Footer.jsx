import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{
      background:'#1f1f1f',
      pt:1.5,
      pb:1.5
    }}>
      <Typography
          className="copyright"
          variant="body2"
          sx={{ color: "#fff",textAlign:'center' }}
        >
          Website made by: Vedant Otari
          <br/>
          <i><a href="mailto:vedantmotari24@gmail.com">vedantmotari24@gmail.com</a></i>
        </Typography>
    </Box>
  )
}

export default Footer