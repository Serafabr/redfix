import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button } from '../../components/Buttons';
import { ButtonType } from '../../components/Buttons/_types';

import style from './Billings.module.scss';

import { Plus as PlusIcon } from '../../components/Icons';
import { MoreHorizontal as MoreIcon } from '../../components/Icons';

type BillingsProps = {
  location: {
    pathname: string
  }
};

const billtingsButtons = [
  <Button text="Nova fatura" iconComponent={PlusIcon} />,
  <Button buttonType={ButtonType.Secondary} iconComponent={MoreIcon} />
];

export const Billings = ({
  location
}: BillingsProps) => {
  return (
    <div>
      <TitleArea 
        title="Faturamentos"
        path={location.pathname}
        buttons={billtingsButtons}
      />
    </div>
  )
}
