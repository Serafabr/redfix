import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// CSS
import './Body.css'

const propTypes = {
  columnId: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired
};

// Icons made by <a href="https://www.flaticon.com/authors/dimitry-miroliubov" title="Dimitry Miroliubov">Dimitry Miroliubov</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
const iconFileFormats = {
  'pdf': require('../../../../assets/img/files/pdf.png'),
  'doc': require('../../../../assets/img/files/doc.png'), 
  'docx': require('../../../../assets/img/files/docx.png'), 
  'txt': require('../../../../assets/img/files/txt.png'),
  'xls': require('../../../../assets/img/files/xls.png'), 
  'xlsx': require('../../../../assets/img/files/xlsx.png'), 
  'csv': require('../../../../assets/img/files/csv.png'),
  'ppt': require('../../../../assets/img/files/ppt.png'), 
  'pps': require('../../../../assets/img/files/pps.png'), 
  'pptx': require('../../../../assets/img/files/pptx.png'),
  'bmp': require('../../../../assets/img/files/bmp.png'), 
  'jpg': require('../../../../assets/img/files/jpg.png'), 
  'jpeg': require('../../../../assets/img/files/jpeg.png'), 
  'gif': require('../../../../assets/img/files/gif.png'), 
  'png': require('../../../../assets/img/files/png.png'), 
  'svg': require('../../../../assets/img/files/svg.png'),
  'msg': require('../../../../assets/img/files/msg.png'), 
  'ost': require('../../../../assets/img/files/ost.png'),
  'zip': require('../../../../assets/img/files/zip.png'), 
  'rar': require('../../../../assets/img/files/rar.png'),
  'py': require('../../../../assets/img/files/py.png'),
  'unknown': require('../../../../assets/img/files/unknown.png'),
}

export default function FileIconElement({
  columnId,
  format
}) {
  const iconImage = iconFileFormats[format] || iconFileFormats['unknown'];
  return (
    <td
      className={classNames({
        "table-body__cell": true,
      })}
      key={columnId}
    >
      <div
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <img
          alt={'Icon Image'}
          style={{ width: "35px", height: "35px", cursor: "pointer" }}
          src={iconImage}
        />
      </div>
    </td>
  );
}

FileIconElement.propTypes = propTypes;