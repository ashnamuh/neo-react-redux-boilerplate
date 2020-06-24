import * as React from 'react'
import styled from 'styled-components'

interface Props {
  title: string;
}

const S = {
  container: styled.p`
    color: yellow;
  `
}

export default function AshComponent({ title }: Props) {
  return (
    <S.container>{title}</S.container>
  )
}
