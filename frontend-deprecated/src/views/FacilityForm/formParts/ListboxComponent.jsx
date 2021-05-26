import React from 'react';
import { VariableSizeList } from 'react-window';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useTheme } from '@material-ui/core/styles';

const LISTBOX_PADDING = 8; // px

const OuterElementContext = React.createContext({});
const OuterElementType = React.forwardRef((props, ref) => {
    const outerProps = React.useContext(OuterElementContext);
    return <div ref={ref} {...props} {...outerProps} />;
});

function renderRow(props) {
    const { data, index, style } = props;
    return React.cloneElement(data[index], {
    style: {
        ...style,
        top: style.top + LISTBOX_PADDING,
    },
    });
}

const ListboxComponent = React.forwardRef(function ListboxComponent(props, ref) {
    const { children, ...other } = props;
    const itemData = React.Children.toArray(children);
    const itemCount = itemData.length;
    const theme = useTheme();
    const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
    const itemSize = smUp ? 36 : 48;

    const getChildSize = child => {
    if (React.isValidElement(child) && child.type === ListSubheader) {
        return 48;
    }

    return itemSize;
    };

    const getHeight = () => {
    if (itemCount > 8) {
        return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };

    return (
    <div ref={ref}>
        <OuterElementContext.Provider value={other}>
        <VariableSizeList
            itemData={itemData}
            height={getHeight() + 2 * LISTBOX_PADDING}
            width="100%"
            key={itemCount}
            outerElementType={OuterElementType}
            innerElementType="ul"
            itemSize={index => getChildSize(itemData[index])}
            itemCount={itemCount}
        >
            {renderRow}
        </VariableSizeList>
        </OuterElementContext.Provider>
    </div>
    );
});

export default ListboxComponent;