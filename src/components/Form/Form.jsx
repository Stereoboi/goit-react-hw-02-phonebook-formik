import { Component } from "react";
import { Label, Input, FormWrapper, Button } from "./Form.styled";
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    number: ''
  };

  handleInputChange = event => {
    const { name, value, number } = event.currentTarget;
      this.setState({[name]: value,[number]: value })
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state)
    this.reset();  
  }

  reset = () => {
    this.setState({ name: '', number:'' })
  };

  render() {
    return (
        <FormWrapper onSubmit={this.handleSubmit} >
          <Label>
            Name
              <Input
                type="text"
                name="name"
                value={this.state.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleInputChange}
              />
          </Label>
          <Label>
            Number
              <Input
                  type="tel"
                  name="number"
                  value={this.state.number}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  onChange={this.handleInputChange}
                />
          </Label>
          <Button type='submit'>Add contact</Button>
        </FormWrapper>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
}