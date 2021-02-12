import React, { Component } from 'react';
// Other Components
import FullTable from "./FullTable/FullTable";
import TableWithPages from "./TableWithPages/TableWithPages";
import CompactTable from "./CompactTable/CompactTable";

const tables = (props) => ({
  "full": (
    <FullTable {...props} />
  ),
  "just-pages": (
    <TableWithPages {...props} />
  ),
  "pages-with-search": (
    <TableWithPages hasSearch={true} {...props} />
  ),
  "raw-table": (
    <CompactTable {...props} />
  ),
});

class CustomTable extends Component {
  render() {
    const { type, ...rest } = this.props;
    return (
      tables(rest)[type]
    );
  }
}

export default CustomTable;