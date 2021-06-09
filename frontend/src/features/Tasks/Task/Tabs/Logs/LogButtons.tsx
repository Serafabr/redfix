import React from 'react'
import { PlainButton } from '../../../../../components/Buttons/PlainButton/PlainButton'

import plusIcon from '../../../../../assets/icons/plus-blue.svg';

export const NewMessage = () => {
  return (
    <PlainButton>
      Nova Mensagem
      <img src={plusIcon} alt="Nova mensagem" />
    </PlainButton>
  )
}
