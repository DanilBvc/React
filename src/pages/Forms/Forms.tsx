/* eslint-disable prettier/prettier */
import React, { Component, RefObject, createRef } from 'react';
import { IFormCard } from '../../types/types';
import './Forms.css'
type PartialState<State> = Partial<State> | ((prevState: State) => Partial<State>);

interface ComponentWithSetStateAsync<State> extends React.Component {
  setStateAsync(state: PartialState<State>): Promise<void>;
}
export class Forms extends Component<unknown, { cards: IFormCard[], errors: [] | string[] }> {
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
    this.state = {
      errors: [],
      cards: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  setStateAsync<State>(this: ComponentWithSetStateAsync<State>, state: PartialState<State>): Promise<void> {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
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
  async setNewError(error: string) {
    await this.setStateAsync({ cards: this.state.cards, errors: [...this.state.errors, error] })
  }
  async validation() {
    if (this.firstName.current?.value === undefined || this.firstName.current?.value.length === 0) {
      await this.setNewError('firstName')
    }
    if (this.whoAreYou.current) {
      const whoAreYou: HTMLInputElement[] = Array.from(this.whoAreYou.current.querySelectorAll('input[type="radio"]'))
      const checked = whoAreYou.find((radio: HTMLInputElement) => radio.checked)

      if (!checked) {
        await this.setNewError('whoAreYou')
      }
    }

    if (this.lastName.current?.value === undefined || this.lastName.current?.value.length === 0) {
      await this.setNewError('lastName')
    }

    if (this.birthday.current?.value === undefined || this.birthday.current?.value.length === 0) {
      await this.setNewError('birthday')
    }
    if (this.file.current?.files?.[0] === undefined || this.file.current?.files?.[0] === null) {
      await this.setNewError('files')
    }
    if (this.country.current?.value === undefined) {
      await this.setNewError('country')
    }
    if (this.address.current?.value === undefined || this.address.current?.value.length === 0) {
      await this.setNewError('address')
    }
    if (this.city.current?.value === undefined || this.city.current?.value.length === 0) {
      await this.setNewError('city')
    }
    if (this.emailNotification.current?.checked === undefined) {
      await this.setNewError('emailNotification')
    }
    if (this.phoneNotification.current?.checked === undefined) {
      await this.setNewError('phoneNotification')
    }
    if (this.coolWebsite.current?.checked === undefined) {
      await this.setNewError('coolWebsite')
    }
    if (this.coolFroms.current?.checked === undefined) {
      await this.setNewError('coolFroms')
    }
    console.log(this.state.errors)
  }
  async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await this.setStateAsync({ cards: this.state.cards, errors: [] })
    this.validation()
    const whoAreYou = this.getWhoAreYou()
    if (this.state.errors.length === 0 && whoAreYou !== null) {
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
        <form onSubmit={this.handleSubmit} className='form-wrapper'>
          <div className="personal-wrapper">
            <h3>Personal information</h3>
            <span>First Name</span>
            {this.state.errors.find((item) => item === 'firstName') ? <div className='error-text'>Bad data</div> : null}
            <input type="text" ref={this.firstName} />
            <span>Last Name</span>
            {this.state.errors.find((item) => item === 'lastName') ? <div className='error-text'>Bad data</div> : null}
            <input type="text" ref={this.lastName} />
            <span>Birthday</span>
            {this.state.errors.find((item) => item === 'birthday') ? <div className='error-text'>Bad data</div> : null}
            <input type="date" ref={this.birthday} />
            <span>Upload profile picture</span>
            {this.state.errors.find((item) => item === 'files') ? <div className='error-text'>Bad data</div> : null}
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
            {this.state.errors.find((item) => item === 'city') ? <div className='error-text'>Bad data</div> : null}
            <input type="text" ref={this.city} />
            <span>Addres</span>
            {this.state.errors.find((item) => item === 'address') ? <div className='error-text'>Bad data</div> : null}
            <input type="text" ref={this.address} />
          </div>
          <div className="contact-wrapper">
            <span>Email</span>
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

            {this.state.errors.find((item) => item === 'whoAreYou') ? <div className='error-text'>Bad data</div> : null}
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
