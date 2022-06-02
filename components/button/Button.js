// Style
import { Button } from 'react-bootstrap';
import style from './Button.module.scss';

const CustomButton = (props) => {
  let { classes, children } = props;
  return (
    <Button className={`${classes + ' ' + style.buttonStyle}`}>
      {children}
    </Button>
  );
};

export default CustomButton;