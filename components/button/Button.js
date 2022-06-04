// Style
import { Button } from 'react-bootstrap';
import style from './Button.module.scss';

const CustomButton = (props) => {
  let { children } = props;

  return <Button {...props}>{children}</Button>;
};

export default CustomButton;
