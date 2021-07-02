import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button } from '../../components/Buttons';
import { ButtonType } from '../../components/Buttons/_types';

import style from './Receipts.module.scss';

import { Plus as PlusIcon } from '../../components/Icons';
import { MoreHorizontal as MoreIcon } from '../../components/Icons';

type ReceiptsProps = {
  location: {
    pathname: string
  }
};

const receiptsButtons = [
  <Button text="Novo comprovante" iconComponent={PlusIcon} />,
  <Button buttonType={ButtonType.Secondary} iconComponent={MoreIcon} />
];

export const Receipts = ({
  location
}: ReceiptsProps) => {
  return (
    <div>
      <TitleArea 
        title="Comprovantes"
        path={location.pathname}
        buttons={receiptsButtons}
      />
    </div>
  )
}
