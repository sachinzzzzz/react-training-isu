import React from 'react'
import styled from '@emotion/styled'





const LibCssDemo = () => {

        const Text = styled.h5`
    color: orange;
    background-color: black;
    `

  return (
    <div>
      <Text>css from in-js libraries</Text>
    </div>
  )
}

export default LibCssDemo