import { useEffect, useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { postTransactions } from '../../redux/api/slices/transactionSlice';
import { clearMessage } from '../../redux/api/slices/messageSlice';

// Components
import { Modal } from 'react-bootstrap';

// Form & Validations
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Style
import style from './customForm.module.scss';

// Utils
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter.js';
import arrayStringsToObjectKeys from '../../utils/arrayStringsToObjectKeys';

const CustomModal = (props) => {
  let { onHide, title, fields, btnname, type } = props;

  const [loading, setLoading] = useState(false);

  const { message } = useSelector((state) => state.message);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = arrayStringsToObjectKeys(fields);

  const validationSchema = Yup.object().shape({
    address: Yup.string().required('This field is required!'),
    amount: Yup.string().required('This field is required!'),
  });

  const handleOnSubmit = (formValue) => {
    setLoading(true);
    let myId = user.data._id;

    // Body Mapped
    let postBody = {
      amount: formValue.amount,
      origin: type === 'send' ? myId : formValue.address,
      destination: type === 'receive' ? myId : formValue.address,
    };

    dispatch(postTransactions(postBody))
      .unwrap()
      .then(() => {
        onHide();
        setLoading(false);
      })
      .catch((error) => {
        onHide();
        console.log(error);
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <Form>
          <Modal.Body>
            {fields.map((field, i) => {
              return (
                <div className="form-group" key={i}>
                  <label className={`${style.labelForm}`} htmlFor={field.name}>
                    {capitalizeFirstLetter(field.name)}
                  </label>
                  <Field
                    name={field.name}
                    type={field.type}
                    className="form-control"
                  />
                  <ErrorMessage
                    name={field.name}
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
              );
            })}
          </Modal.Body>
          <Modal.Footer>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>{btnname}</span>
              </button>
            </div>
          </Modal.Footer>
        </Form>
      </Formik>
      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CustomModal;
