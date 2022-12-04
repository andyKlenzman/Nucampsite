import React from "react";
import {
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Col,
} from "reactstrap";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateCommentForm } from "../../utils/validateCommentForm";
import { useDispatch } from "react-redux";
import { addComment } from "./commentSlice";

const CommentForm = ({ campsiteId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch()



  const handleSubmit = (values, { resetForm }) => {
    const comment = {
      campsiteId: parseInt(campsiteId),
      rating: values.rating,
      author: values.author,
      text: values.commentText,
      date: new Date(Date.now()).toISOString()
    };
    console.log("form values:", comment);
    dispatch(addComment(comment));
    // I wonder how this works when communicating with a database and all thoes async functions that I don't understand
    setModalOpen(false);
    // resetForm();
  };

  return (
    <div>
      <Button onClick={() => setModalOpen(true)}>
        {" "}
        <i className="fa fa-pencil fa-lg" /> Add Comment
      </Button>
      <Modal isOpen={modalOpen}>
        <ModalHeader toggle={() => setModalOpen(false)}>
          Add Comment
        </ModalHeader>
        <ModalBody>
          campsite: {campsiteId}
          <Formik
          
          initialValues={{
            rating:undefined,
            author:'',
            commentText: ''
          }}
          onSubmit={handleSubmit}
          validate={validateCommentForm}
        >
            <Form>
              <FormGroup row>
                <Label htmlFor="rating" md="2">
                  Rating
                </Label>
                <Col md="10">
                <Field
                                    name='rating'
                                    as='select'
                                    className='form-control'
                                >
                                    <option>Select...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Field>
                  <ErrorMessage name="rating">
                    {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="author" md="2">
                  Your Name
                </Label>
                <Col md="10">
                <Field
                                    name='author'
                                    placeholder='Your Name'
                                    className='form-control'
                                />
                  <ErrorMessage name="author">
                    {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
                </Col>
              </FormGroup>

              <FormGroup row>
              <Label htmlFor="commentText" md="2">
                  Comment
                </Label>
                <Col md="10">
                
                <Field
                                    name='commentText'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                />
                </Col>
              </FormGroup>




              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CommentForm;
