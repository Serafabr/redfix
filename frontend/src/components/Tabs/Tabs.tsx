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
    <div>
      <div className={style.Tabs}>
        <div className={style.TabsContainer}>
          <ul className={style.TabList}>
            {tabs.map((tab) => (
              <li className={style.TabItem}>{tab}</li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ margin: "100px" }}>
        TabePane
      </div>
    </div>
  )
}
