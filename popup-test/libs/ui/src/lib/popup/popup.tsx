import styles from './popup.module.css';

/* eslint-disable-next-line */
export interface PopupProps {
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Popup(props: PopupProps) {
  return props.trigger ? (
    <div className={styles.modal}>
      <div className={styles.modalcontent}>
        <button
          className={styles.closebtn}
          onClick={() => props.setTrigger(false)}
        >
          Close
        </button>
        <h1>Welcomen to popup !</h1>
      </div>
    </div>
  ) : null;
}

export default Popup;
