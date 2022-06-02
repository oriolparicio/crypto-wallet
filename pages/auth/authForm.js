import { useEffect, useState } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';

// Slices
import { login } from '../../redux/api/slices/authSlice';
import { clearMessage } from '../../redux/api/slices/messageSlice';

// Form & Validations
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Style
import style from './authForm.module.scss';

const AuthForm = () => {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      router.push({
        pathname: '/',
        query: false,
      });
    }
  }, []);

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
              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
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
