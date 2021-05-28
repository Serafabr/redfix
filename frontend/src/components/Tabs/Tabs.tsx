import style from './Tabs.module.scss';

const tabs = [
  'Suprimentos',
  'Ativos',
  'Histórico',
  'Checklist',
  'Arquivos',
  'Faturamentos',
  'Monitoramentos',
];

export const Tabs = () => {
  return (
    <div className={style.Tabs}>
      <ul className={style.TabList}>
        {tabs.map((tab) => (
          <li className={style.TabItem}>{tab}</li>
        ))}
      </ul>
    </div>
  )
}
