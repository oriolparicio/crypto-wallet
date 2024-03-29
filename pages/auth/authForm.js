import { useEffect, useState } from 'react';

// Components
import Button from '../../components/button/Button';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Slices
import { login } from '../../redux/api/slices/authSlice';
import { clearMessage } from '../../redux/api/slices/messageSlice';

// Form & Validations
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Style
import style from '../../components/customModal/customForm.module.scss';
import btnStyle from '../../components/button/Button.module.scss';

const AuthForm = () => {
  const [loading, setLoading] = useState(false);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('This field is required!'),
    password: Yup.string().required('This field is required!'),
  });
  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    setLoading(true);
    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        props.history.push('/');
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className={`col-md-12 ${style.loginForm}`}>
      <div className={`${style.card} card-container`}>
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className={`${style.profileImgCard}`}
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form>
            <div className="form-group">
              <label className={`${style.labelForm}`} htmlFor="username">
                Username
              </label>
              <Field name="username" type="text" className="form-control" />
              <ErrorMessage
                name="username"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label className={`${style.labelForm}`} htmlFor="password">
                Password
              </label>
              <Field name="password" type="password" className="form-control" />
              <ErrorMessage
                name="password"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              {/* <Button classes={'defaultTextPlus'} onClickEvent={handleModal}>
                <Upload /> Send
              </Button> */}
              <Button
                type="submit"
                className={`${btnStyle.buttonStyle} ${btnStyle.loginBtn}`}
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
