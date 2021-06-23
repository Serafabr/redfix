export {};

// import { AddSelectBox, FilterButton, AlignList } from '../../../../components/Buttons';
// import { OnSelectItemType } from '../../../../components/SelectBox/SelectBox';
// import style from './FilterButton.module.scss';

// import quickIcon from '../../../../assets/icons/quick.svg';


// const quickFilterItems = {
//   entryBox: {
//     name: 'Caixa de entrada',
//     selected: false,
//   },
//   myTasks: {
//     name: 'Minhas tarefas',
//     selected: false,
//   },
//   coemant: {
//     name: 'Criadas - Coemant',
//     selected: false,
//   },
//   rcsTec: {
//     name: 'RCS Tecnologia',
//     selected: false,
//   },
//   noFilter: {
//     name: 'Sem filtro',
//     selected: false,
//   },
// };

// type Props = {
//   onSelectItem: OnSelectItemType
// }


// export const QuickFilter = ({
//   onSelectItem
// }: Props) => {
  
//   const selectedItems = Object.keys(options).forEach((itemId) => {
//     if (selected[itemId]) {
//       return 
//     }
//   });
  
  
//   let name = 'Filtro rápido';
  
//   // if (selectedItems.length === 1) {
//   //   const filterId = selectedItems[0];
//   //   name = quickFilterItems.filter((item) => item.id === filterId)[0].name
//   // } else if (selectedItems.length > 1) {
//   //   name = '2 filtros';
//   // }
  
//   // console.log('name');
//   // console.log(name);
  
//   return (
//     <div>
//       <AddSelectBox 
//         listItems={quickFilterItems}
//         selected={selected}
//         alignList={AlignList.Left}
//         boxWidth={220}
//         searchable={true}
//         onSelectItem={onSelectItem}
//       >
//         {(onClick, isOpen) => (
//           <FilterButton 
//             text={name}
//             iconComponent={quickIcon}
//             onClick={onClick}
//           />
//         )}
//       </AddSelectBox>
//     </div>
//   )
// }