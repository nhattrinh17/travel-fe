import classNames from 'classnames/bind';
import styles from './flashMessage.module.scss';
import { useEffect } from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconDefinition, faCheck, faCircleExclamation, faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

interface ParamsFlashMessage {
  id: any;
  icon?: IconDefinition;
  type: string;
  color?: string;
  backgroundColor?: string;
  title?: string;
  desc: string;
  handleDeleteFlashMessage: (id: any) => void;
}

function FlashMessage(params: ParamsFlashMessage): JSX.Element {
  let { id, type, desc, icon, title, backgroundColor, handleDeleteFlashMessage } = params;

  useEffect(() => {
    setTimeout(() => handleDeleteFlashMessage(id), 5000);
    // eslint-disable-next-line
  }, []);

  if (!backgroundColor) {
    switch (type) {
      case 'warning':
        backgroundColor = backgroundColor || '#ffc107';
        title = title || 'Cảnh báo';
        icon = faTriangleExclamation;
        break;
      case 'successful':
        backgroundColor = backgroundColor || '#0dcaf0';
        title = title || 'Thông báo';
        icon = faCheck;
        break;
      case 'failed':
        backgroundColor = backgroundColor || '#dc3545';
        title = title || 'Thất bại';
        icon = faCircleExclamation;
        break;
      default:
        break;
    }
  }

  return (
    <div className={cx('wrapper')} style={{ backgroundColor: `${backgroundColor}` }}>
      <div className={cx('box__close')}>
        <FontAwesomeIcon icon={faXmark} color="white" className="text-xl cursor-pointer" onClick={() => handleDeleteFlashMessage(id)} />
      </div>
      <div className={cx('content')}>
        <h3 className={cx('content__heading')}>{title}</h3>
        <p className={cx('content__desc')}>{desc}</p>
      </div>
      <div className={cx('box__left')}>{icon && <FontAwesomeIcon icon={icon} className={cx('box__left--icon')} color="currentColor" />}</div>
    </div>
  );
}

export default FlashMessage;
