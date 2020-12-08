import React, { Component, useMemo } from 'react';
import Dropzone from 'react-dropzone';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

class DropArea extends Component {

  render() {

    const { handleDropFiles, handleRemoveFiles, files } = this.props;

    const filesListItems = files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    const thumbs = files.map(file => (
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img
            src={file.preview}
            style={img}
          />
        </div>
      </div>
    ));

    const previewWithList = (
      <aside>
        <p>Arquivos selecionados:</p>
        <ul>{filesListItems}</ul>
      </aside>
    );

    const previewWithThumbs = (
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    );

    return (
      <div style={{ margin: "40px 10px 10px 10px" }}>
        <Dropzone
          // accept={}
          // children={}
          disabled={false}
          // getFilesFromEvent={}
          // maxSize={}
          // minSize={}
          multiple={true}
          noClick={false}
          noDrag={false}
          noDragEventsBubbling={false}
          onDragEnter={() => {}}
          onDragLeave={() => {}}
          onDragOver={() => {}}
          onDrop={acceptedFiles => handleDropFiles(acceptedFiles)}
          // onDropAccepted={}
          // onDropRejected={}
          onFileDialogCancel={handleRemoveFiles}
          preventDropOnDocument={true}
        >
          {({
            getRootProps,
            getInputProps,
            isDragAccept,
            isDragActive,
            isDragReject
          }) => {

            const style = {
              ...baseStyle,
              ...(isDragActive ? activeStyle : {}),
              ...(isDragAccept ? acceptStyle : {}),
              ...(isDragReject ? rejectStyle : {})
            };

            return (
              <section>
                <div {...getRootProps({ style })}>
                  <input {...getInputProps()} />
                  <p>Arraste e solte os arquivos nesta área ou clique para selecionar</p>
                </div>

                {files.length === 0
                  ? <p className="text-muted mt-3">Nenhum arquivo selecionado</p>
                  // : previewWithList
                  : previewWithThumbs
                }
              </section>
            )}}
        </Dropzone>
      </div>
    );
  }
}

export default DropArea;
