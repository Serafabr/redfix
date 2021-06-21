import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button } from '../../components/Buttons';
import { ButtonType } from '../../components/Buttons/_types';

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
  <Button buttonType={ButtonType.Secondary} iconComponent={MoreIcon} />
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
