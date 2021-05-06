import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button, ButtonType } from '../../components/Buttons';

import style from './Facilities.module.scss';

import { Plus as PlusIcon } from '../../components/Icons';
import { MoreHorizontal as MoreIcon } from '../../components/Icons';

type FacilitiesProps = {
  location: {
    pathname: string
  }
};

const facilitiesButtons = [
  <Button text="Novo edifício" iconComponent={PlusIcon} />,
  <Button buttonType={ButtonType.Secondary} justIcon iconComponent={MoreIcon} />
];

export const Facilities = ({
  location
}: FacilitiesProps) => {
  return (
    <div>
      <TitleArea 
        title="Edifícios"
        path={location.pathname}
        buttons={facilitiesButtons}
      />
    </div>
  )
}
