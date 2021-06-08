import style from './Logs.module.scss';

import ellipseBlue from '../../../../../assets/icons/log/ellipse-blue.svg';
import ellipseRed from '../../../../../assets/icons/log/ellipse-red.svg';
import ellipseOrange from '../../../../../assets/icons/log/ellipse-orange.svg';

export const Logs = () => {
  return (
    <div>
      <img src={ellipseBlue} alt="" />
      <img src={ellipseRed} alt="" />
      <img src={ellipseOrange} alt="" />
      Histórico
    </div>
  )
}
