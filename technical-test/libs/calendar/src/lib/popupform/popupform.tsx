import styles from './popupform.module.scss';
import { Meetingform } from '@technical-test/calendar';

/* eslint-disable-next-line */
export interface PopupformProps {
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Popupform(props: PopupformProps) {
  return props.trigger ? (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <button onClick={() => props.setTrigger(false)}>Close</button>
        <Meetingform />
      </div>
    </div>
  ) : null;
}

export default Popupform;
