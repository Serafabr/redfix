import React, { Component } from 'react';
import FileTemplateTab from '../../../components/Tabs/FileTab/FileTemplateTab';
import files from '../../../utils/fakeData/filesFake';

export default function FilesTab(props) {
  return (
    <FileTemplateTab 
      data={files}
    />
  );
}