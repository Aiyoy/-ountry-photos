import { Button, Dialog, Select } from 'element-react';

import './dialog.css';

const dialogTextObj = {
  title: 'Выберите размер фотографии, котору следует загрузить',
  downloadButton: 'Загрузить',
  cancleButton: 'Отменить',
}

const selectLabel = (value: string): string => {
  switch (value) {
    case 'original':
      return 'Оригинальный';
    case 'large2x':
      return 'Двучкратное увеличение';
    case 'large':
      return 'Большой';
    case 'medium':
      return 'Средний';
    case 'small':
      return 'Маленький';
    case 'portrait':
      return 'Портрет';
    case 'landscape':
      return 'Пейзаж';
    case 'tiny':
      return 'Крошечный';
    default:
      return 'Оригинальный';
  }
}

const DownloadDialog = (props: { srcArr: ImgSrcType, close: () => void }): JSX.Element => {
  return (      
    <Dialog
      visible={ true }
      onCancel={ () => props.close() }
    >
      <Dialog.Body>
        <div className='dialog-title'>{dialogTextObj.title}</div>
        <Select>
          {Object.entries(props.srcArr).map((el, index) => {
            const label: string = selectLabel(el[0]);
            return <Select.Option label={label} value={el[1]} selected={ index === 0 ? true : false }></Select.Option>
          })}
        </Select>
      </Dialog.Body>

      <Dialog.Footer className="dialog-footer">
        <Button type="primary" onClick={ () => {} }>{dialogTextObj.downloadButton}</Button>
        <Button onClick={ () => props.close() }>{dialogTextObj.cancleButton}</Button>
      </Dialog.Footer>
    </Dialog>
  )
}

export default DownloadDialog;
