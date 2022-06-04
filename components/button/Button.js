// Style
import { Button } from 'react-bootstrap';
import style from './Button.module.scss';

const CustomButton = (props) => {
  let { classes, children, onClickEvent } = props;
  const onClickHandler = (e) => {
    return onClickEvent ? onClickEvent() : e.preventDefault();
  };
  return (
    <Button
      className={`${classes + ' ' + style.buttonStyle}`}
      onClick={(e) => onClickHandler(e)}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
