import { Component } from "react";
import { Label, Input, Button, FormWrapper } from "./Form.styled";
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'

export class FormContact extends Component {
  state = {
    name: '',
    number: ''
  };

    schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(6).required(),
  })

  handleInputChange = event => {
    const { name, value, number } = event.currentTarget;
      this.setState({[name]: value,[number]: value })
  };

  handleSubmit = (values, {resetForm}) => {
    this.props.onSubmit(values)
    console.log(values);
    resetForm();
  }

  render() {
    return (
      <Formik
        initialValues={this.state}
        onSubmit={this.handleSubmit}
        validationSchema={this.schema}
      >
        <FormWrapper  >
            <Label>
              Name
                <Input
                  type="text"
                  name="name"
                />
                <ErrorMessage name="name" />
                
            </Label>
            <Label>
              Number
                <Input
                  type="text"
                  name="number"
                />
                <ErrorMessage name="number" />
            </Label>
            <Button type='submit'>Add contact</Button>
          </FormWrapper>
        </Formik>
    )
  }
}

FormContact.propTypes = {
  onSubmit: PropTypes.func,
}