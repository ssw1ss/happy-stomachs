/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { Box } from "ui"

const Section = ({ bg, children, ...props }) => {
  return (
    <Box sx={{ bg, height: "100%" }} {...props}>
      <Box
        sx={{
          px: [3, 4],
          maxWidth: "44rem",
          margin: "0 auto",
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Section
