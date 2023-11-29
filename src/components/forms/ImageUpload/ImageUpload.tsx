import { useRef, useState } from 'react';
import clsx from 'clsx';

import { Input } from '@/components/forms';
import { CancelIcon } from '@/components/icons';

import styles from './ImageUpload.module.scss';

export interface IImageUploadProps {
  exWidth: number;
  exHeight: number;
  className?: string;
  rounded?: boolean;
  updateBaseImage?: (src: File) => void;
  labelEnhancer?: (_width: number, _height: number) => string;
}

export function ImageUpload({
  exWidth,
  exHeight,
  className = '',
  rounded = false,
  updateBaseImage = () => {},
  labelEnhancer = () => `Image pixel size:${exWidth} wide X ${exHeight} height`,
}: IImageUploadProps) {
  const [imageSrc, setImageSrc] = useState<string>('');
  const imgInputRef = useRef<HTMLInputElement>(null);

  const onUploadChange = (e: any) => {
    if (!e.target.files.length) return;

    const reader = new FileReader();
    reader.addEventListener('load', function (e: ProgressEvent<FileReader>) {
      if (!e.target || !e.target?.result) return;
      setImageSrc(e.target?.result.toString());
    });
    reader.readAsDataURL(e.target.files[0]);

    updateBaseImage(e.target.files[0]);
  };

  const onUploadCancel = () => {
    setImageSrc('');
    if (imgInputRef.current) imgInputRef.current.value = '';
  };

  const classes = clsx(styles.root, rounded ? styles.rounded : '', className);

  return (
    <div className={classes}>
      {exWidth !== 0 && exHeight !== 0 && (
        <p>{labelEnhancer(exWidth, exHeight)}</p>
      )}
      <div className={styles.body}>
        <div className={styles.imgSelector}>
          <Input type="file" updateValue={onUploadChange} ref={imgInputRef} />
          {imageSrc !== '' && <CancelIcon onClick={onUploadCancel} />}
        </div>
        {imageSrc !== '' && (
          <img
            alt="The image to be uploaded"
            src={imageSrc.toString()}
            className={styles.imgViewer}
          />
        )}
      </div>
    </div>
  );
}
