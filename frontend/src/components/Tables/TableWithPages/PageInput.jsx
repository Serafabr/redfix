import React, { Component } from 'react';

class PageInput extends Component {
  render() {
    const {
      pageOnInput,
      handleChangePageOnInput,
      handleFocusOutPageOnInput,
      handleEnterPageOnInput,
      pagesTotal
    } = this.props;
    return (
      <div className="page-input-container">
        <span className="page-input-container__page-input-label">Página:</span>
        <input className="page-input-container__page-input"
          type="text"
          name="page"
          value={pageOnInput}
          onChange={handleChangePageOnInput}
          onBlur={handleFocusOutPageOnInput(pagesTotal)}
          onKeyUp={handleEnterPageOnInput}
        />
        <span
          className="page-input-container__display-pages"
          style={{ marginLeft: "10px" }}
        >
          de <span style={{ fontWeight: "bold" }}>{pagesTotal}</span>.
        </span>
      </div>
    );
  }
}

export default PageInput;