import React, { Component } from 'react';
import FileTemplateTab from '../../../components/Tabs/FileTab/FileTemplateTab';
import files from '../../../utils/fakeData/filesFake';

class FilesTab extends Component {
  render() {
    const { data } = this.props;
    return (
      <FileTemplateTab 
        data={files}
      />
    );
  }
}

export default FilesTab;