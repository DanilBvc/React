/* eslint-disable prettier/prettier */
import React, { Component, RefObject, createRef } from 'react';
import { IFormCard } from '../../types/types';

export class Forms extends Component<unknown, { cards: IFormCard[] }> {
  firstName: RefObject<HTMLInputElement>;
  lastName: RefObject<HTMLInputElement>;
  birthday: RefObject<HTMLInputElement>;
  file: RefObject<HTMLInputElement>;
  country: RefObject<HTMLSelectElement>;
  city: RefObject<HTMLInputElement>;
  address: RefObject<HTMLInputElement>;
  emailNotification: RefObject<HTMLInputElement>;
  phoneNotification: RefObject<HTMLInputElement>;
  coolWebsite: RefObject<HTMLInputElement>;
  coolFroms: RefObject<HTMLInputElement>;
  whoAreYou: RefObject<HTMLInputElement>;
  errors: [] | string[];
  constructor(props: IFormCard) {
    super(props);
    this.firstName = createRef();
    this.lastName = createRef();
    this.birthday = createRef();
    this.file = createRef();
    this.country = createRef();
    this.city = createRef();
    this.address = createRef();
    this.emailNotification = createRef();
    this.phoneNotification = createRef();
    this.coolWebsite = createRef();
    this.coolFroms = createRef();
    this.whoAreYou = createRef();
    this.errors = [];
    this.state = {
      cards: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getWhoAreYou() {
    if (this.whoAreYou.current) {
      const whoAreYou: HTMLInputElement[] = Array.from(this.whoAreYou.current.querySelectorAll('input[type="radio"]'))
      const checked = whoAreYou.find((radio: HTMLInputElement) => radio.checked)

      if (!checked) {
        return null
      }
      return checked.id
    }
  }
  validation() {
    if (this.firstName.current?.value === undefined || this.firstName.current?.value.length === 0) {
      this.errors = [...this.errors, 'firstName']
    }
    if (this.whoAreYou.current) {
      const whoAreYou: HTMLInputElement[] = Array.from(this.whoAreYou.current.querySelectorAll('input[type="radio"]'))
      const checked = whoAreYou.find((radio: HTMLInputElement) => radio.checked)

      if (!checked) {
        this.errors = [...this.errors, 'whoAreYou']
      }
    }

    if (this.lastName.current?.value === undefined || this.lastName.current?.value.length === 0) {
      this.errors = [...this.errors, 'lastName']
    }

    if (this.birthday.current?.value === undefined || this.birthday.current?.value.length === 0) {
      this.errors = [...this.errors, 'birthday']
    }
    if (this.file.current?.files?.[0] === undefined || this.file.current?.files?.[0] === null) {
      this.errors = [...this.errors, 'files']
    }
    if (this.country.current?.value === undefined) {
      this.errors = [...this.errors, 'country']
    }
    if (this.address.current?.value === undefined || this.address.current?.value.length === 0) {
      this.errors = [...this.errors, 'address']
    }
    if (this.city.current?.value === undefined || this.city.current?.value.length === 0) {
      this.errors = [...this.errors, 'city']
    }
    if (this.emailNotification.current?.checked === undefined) {
      this.errors = [...this.errors, 'emailNotification']
    }
    if (this.phoneNotification.current?.checked === undefined) {
      this.errors = [...this.errors, 'phoneNotification']
    }
    if (this.coolWebsite.current?.checked === undefined) {
      this.errors = [...this.errors, 'coolWebsite']
    }
    if (this.coolFroms.current?.checked === undefined) {
      this.errors = [...this.errors, 'coolFroms']
    }
  }
  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.validation()
    const whoAreYou = this.getWhoAreYou()
    if (this.errors.length === 0 && whoAreYou !== null) {
      this.setState({
        cards: [...this.state.cards, {
          firstName: this.firstName.current?.value as string,
          lastName: this.lastName.current?.value as string,
          birthday: this.birthday.current?.value as string,
          file: this.file.current?.files?.[0] as File,
          country: this.country.current?.value as string,
          addres: this.address.current?.value as string,
          city: this.city.current?.value as string,
          emailNotification: this.emailNotification.current?.checked as boolean,
          phoneNotification: this.phoneNotification.current?.checked as boolean,
          coolWebsite: this.coolWebsite.current?.checked as boolean,
          coolFroms: this.coolFroms.current?.checked as boolean,
          whoAreYou: whoAreYou as string,
        }]
      })

    }


  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="personal-wrapper">
            <h3>Personal information</h3>
            <span>First Name</span>
            <input type="text" ref={this.firstName} />
            <span>Last Name</span>
            <input type="text" ref={this.lastName} />
            <span>Birthday</span>
            <input type="date" ref={this.birthday} />
            <span>Upload profile picture</span>
            <input type="file" id="" ref={this.file} />
          </div>
          <div className="addres-wrapper">
            <h3>Addres</h3>
            <select ref={this.country}>
              <option value="uk">ukraine</option>
              <option value="ru">russia</option>
              <option value="bel">belarus</option>
              <option value="kz">kazakhstan</option>
            </select>
            <span>City</span>
            <input type="text" ref={this.city} />
            <span>Addres</span>
            <input type="text" ref={this.address} />
          </div>
          <div className="contact-wrapper">
            <span>email</span>
            <div className="contact-item">
              <input type="checkbox" ref={this.emailNotification} />
              <span>Receive notifications by mail</span>
            </div>
            <span>Phone</span>
            <div className="contact-item">
              <input type="checkbox" ref={this.phoneNotification} />
              <span>Receive notifications by sms</span>
            </div>
          </div>
          <div className="addition-wrapper">
            <span>Reviews</span>
            <div className="addition-item">
              <input type="checkbox" name="" id="cool-w" ref={this.coolWebsite} />
              <label htmlFor="cool-w">Cool website</label>
            </div>
            <div className="addition-item">
              <input type="checkbox" name="" id="cool-f" ref={this.coolFroms} />
              <label htmlFor="cool-f">Cool forms</label>
            </div>
          </div>
          <div className="radio-wrapper" ref={this.whoAreYou}>
            <span>Who are you</span>
            <div className="radio-item">
              <input type="radio" name="radio" id="doomer" className='radio-input' />
              Doomer
            </div>
            <div className="radio-item">
              <input type="radio" name="radio" id="zoomer" className='radio-input' />
              Zoomer
            </div>
          </div>
          <button type="submit">Send</button>
        </form>
        <div className="forms-items">
          {this.state.cards.length === 0
            ? null
            : this.state.cards.map((item) => (
              <div className="form-card-wrapper" key={item.firstName}>
                <div>{item.firstName}</div>
                <div>{item.lastName}</div>
                <div><img src={URL.createObjectURL(item.file)} alt="" /></div>
                <div>{item.birthday}</div>
                <div>{item.addres}</div>
                <div>{item.city}</div>
                <div>Email notifications: {item.emailNotification ? '✓' : 'x'}</div>
                <div>Phone notifications:{item.phoneNotification ? '✓' : 'x'}</div>
                <div>Cool website:{item.coolWebsite ? '✓' : 'x'}</div>
                <div>Cool forms:{item.coolFroms ? '✓' : 'x'}</div>
                <div>{item.whoAreYou}</div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Forms;
