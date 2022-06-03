// Style
import { Button } from 'react-bootstrap';
import style from './Button.module.scss';

const CustomButton = (props) => {
  let { classes, children, onClickEvent } = props;
  return (
    <Button
      className={`${classes + ' ' + style.buttonStyle}`}
      onClick={(e) => onClickEvent() || e.preventDefault()}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
