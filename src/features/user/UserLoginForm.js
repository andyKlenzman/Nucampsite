import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser, selectCurrentUser } from "./userSlice";
import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Button,
  Col,
} from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import defaultAvatar from "../../app/assets/img/unicorn.png";
import { validateUserLoginForm } from "../../utils/validateUserLoginForm";

const UserLoginForm = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogin = (values) => {
    const currentUser = {
      id: Date.now(),
      avatar: defaultAvatar,
      username: values.username,
      password: values.password,
    };
    dispatch(setCurrentUser(currentUser));
    setLoginModalOpen(false);
  };

  return (
    <>
      {/* conditional formatting for action button */}
      {currentUser ? (
        <div style={{ width: "4rem", height: "4rem" }}>
          <img
            src={currentUser.avatar}
            alt={"user"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      ) : (
        <Button
          outline
          onClick={() => setLoginModalOpen(true)}
          style={{ color: "white", border: "1px solid white" }}
        >
          <i className="fa fa-sign-in fa-lg" /> Login
        </Button>
      )}

      <Modal isOpen={loginModalOpen}>
        <ModalHeader toggle={() => setLoginModalOpen(false)}>Login</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={handleLogin}
            validate={validateUserLoginForm}
          >
            <Form>
              <FormGroup row>
                <Label htmlFor="username" md="2">
                  Username{" "}
                </Label>
                <Col md="10">
                  <Field
                    name="username"
                    placeholder="Your Username"
                    className="form-control"
                  />
                  <ErrorMessage name="username">
                    {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="password" md="2">
                  password{" "}
                </Label>
                <Col md="10">
                  <Field
                    name="password"
                    placeholder="Enter Password"
                    className="form-control"
                  />
                  <ErrorMessage name="password">
                    {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
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
    </>
  );
};

export default UserLoginForm;
