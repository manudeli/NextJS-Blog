import styles from './alert.module.css';
import cn from 'classnames';

interface AlertProps {
  children;
  type: 'success' | 'error';
}

export default function Alert({ children, type }: AlertProps) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}
