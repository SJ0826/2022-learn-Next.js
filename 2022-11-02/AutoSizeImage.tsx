import React from 'react'
import styled from '@emotion/styled'

export default function AutoSizeImage({ src }: { src: string }) {
  return (
    <AutoSizeImageWrapper>
      <Image src={image} alt="" layout="fill" objectFit="contain" />
    </AutoSizeImageWrapper>
  )
}

const AutoSizeImageWrapper = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
`
