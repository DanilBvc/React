import './Forms.css';
import React, { FormEvent, useState } from 'react';
interface userCard {
  firstName: string;
  lastName: string;
  birthday: string;
  file: File | null;
  country: string;
  city: string;
  address: string;
  emailNotification: boolean;
  phoneNotification: boolean;
  coolWebsite: boolean;
  coolFroms: boolean;
  whoAreYou: string;
}
enum Errors {
  firstName = 'FIRST_NAME',
  lastName = 'LAST_NAME',
  birthday = 'BIRTHDAY',
  file = 'FILE',
  country = 'COUNTRY',
  city = 'CITY',
  address = 'ADDRESS',
  whoAreYou = 'WHOAREYOU',
}
const defaultValue = {
  firstName: '',
  lastName: '',
  birthday: '',
  file: null,
  country: '',
  city: '',
  address: '',
  emailNotification: false,
  phoneNotification: false,
  coolWebsite: false,
  coolFroms: false,
  whoAreYou: '',
};
function Forms() {
  const [userCard, setUserCard] = useState<userCard>(defaultValue);
  const [cards, setCards] = useState<userCard[] | []>([]);
  const [errors, setErrors] = useState<string[] | []>([]);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorsArr = [];
    if (userCard.firstName.length === 0) {
      errorsArr.push(Errors.firstName);
    }
    if (userCard.lastName.length === 0) {
      errorsArr.push(Errors.lastName);
    }
    if (userCard.birthday.length === 0) {
      errorsArr.push(Errors.birthday);
    }
    if (userCard.file === null) {
      errorsArr.push(Errors.file);
    }
    if (userCard.country.length === 0) {
      errorsArr.push(Errors.country);
    }
    if (userCard.city.length === 0) {
      errorsArr.push(Errors.city);
    }
    if (userCard.address.length === 0) {
      errorsArr.push(Errors.address);
    }
    if (userCard.whoAreYou.length === 0) {
      errorsArr.push(Errors.whoAreYou);
    }
    setErrors(errorsArr);
    if (errors.length === 0) {
      setCards([...cards, userCard]);
      setUserCard(defaultValue);
    }
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="form-wrapper">
        <div className="personal-wrapper">
          <h3>Personal information</h3>
          <span>First Name</span>
          {errors.find((item) => item === Errors.firstName) ? (
            <div className="error-text">Please fill your firstName in this field.</div>
          ) : null}
          <input
            type="text"
            value={userCard.firstName}
            onChange={(e) => {
              setUserCard((prev) => {
                const updatedState = { ...prev };
                updatedState.firstName = e.target.value;
                return updatedState;
              });
            }}
          />
          <span>Last Name</span>
          {errors.find((item) => item === Errors.lastName) ? (
            <div className="error-text">Please fill in your last name this field.</div>
          ) : null}
          <input
            type="text"
            value={userCard.lastName}
            onChange={(e) => {
              setUserCard((prev) => {
                const updatedState = { ...prev };
                updatedState.lastName = e.target.value;
                return updatedState;
              });
            }}
          />
          <span>Birthday</span>
          {errors.find((item) => item === Errors.birthday) ? (
            <div className="error-text">Please fill in your birthday this field.</div>
          ) : null}
          <input
            type="date"
            value={userCard.birthday}
            onChange={(e) => {
              setUserCard((prev) => {
                const updatedState = { ...prev };
                updatedState.birthday = e.target.value;
                return updatedState;
              });
            }}
          />
          <span>Upload profile picture</span>
          {errors.find((item) => item === Errors.file) ? (
            <div className="error-text">Upload img pls.</div>
          ) : null}
          <input
            type="file"
            id="input-file"
            onChange={(e) => {
              setUserCard((prev) => {
                const updatedState = { ...prev };
                const file = e.target.files?.[0];
                if (file) {
                  updatedState.file = file;
                  return updatedState;
                } else {
                  return prev;
                }
              });
            }}
          />
        </div>
        <div className="addres-wrapper">
          <h3>Country</h3>
          <select
            onChange={(e) => {
              setUserCard((prev) => {
                const updatedState = { ...prev };
                updatedState.country = e.target.value;
                return updatedState;
              });
            }}
          >
            <option value="uk">ukraine</option>
            <option value="ru">russia</option>
            <option value="bel">belarus</option>
            <option value="kz">kazakhstan</option>
          </select>
          <span>City</span>
          {errors.find((item) => item === Errors.city) ? (
            <div className="error-text">Please fill in your city this field.</div>
          ) : null}
          <input
            type="text"
            value={userCard.city}
            onChange={(e) => {
              setUserCard((prev) => {
                const updatedState = { ...prev };
                updatedState.city = e.target.value;
                return updatedState;
              });
            }}
          />
          <span>Address</span>
          {errors.find((item) => item === Errors.address) ? (
            <div className="error-text">Please fill in your address this field.</div>
          ) : null}
          <input
            type="text"
            value={userCard.address}
            onChange={(e) => {
              setUserCard((prev) => {
                const updatedState = { ...prev };
                updatedState.address = e.target.value;
                return updatedState;
              });
            }}
          />
        </div>
        <div className="contact-wrapper">
          <span>Email Notification</span>
          <div className="contact-item">
            <input
              type="checkbox"
              onChange={() => {
                setUserCard((prev) => {
                  const updatedState = { ...prev };
                  updatedState.emailNotification = !updatedState.emailNotification;
                  return updatedState;
                });
              }}
            />
            <span>Receive notifications by mail</span>
          </div>
          <span>Phone Notification</span>
          <div className="contact-item">
            <input
              type="checkbox"
              onChange={() => {
                setUserCard((prev) => {
                  const updatedState = { ...prev };
                  updatedState.phoneNotification = !updatedState.phoneNotification;
                  return updatedState;
                });
              }}
            />
            <span>Receive notifications by sms</span>
          </div>
        </div>
        <div className="addition-wrapper">
          <span>Reviews</span>
          <div className="addition-item">
            <input
              type="checkbox"
              name=""
              id="cool-w"
              onChange={() => {
                setUserCard((prev) => {
                  const updatedState = { ...prev };
                  updatedState.coolWebsite = !updatedState.coolWebsite;
                  return updatedState;
                });
              }}
            />
            <label htmlFor="cool-w">Cool website</label>
          </div>
          <div className="addition-item">
            <input
              type="checkbox"
              name=""
              id="cool-f"
              onChange={() => {
                setUserCard((prev) => {
                  const updatedState = { ...prev };
                  updatedState.coolFroms = !updatedState.coolFroms;
                  return updatedState;
                });
              }}
            />
            <label htmlFor="cool-f">Cool forms</label>
          </div>
        </div>
        <div className="radio-wrapper">
          <span>Who are you</span>

          {errors.find((item) => item === Errors.whoAreYou) ? (
            <div className="error-text">Please select an option who you are.</div>
          ) : null}
          <div className="radio-item">
            <input
              type="radio"
              name="radio"
              id="doomer"
              className="radio-input"
              onChange={() => {
                setUserCard((prev) => {
                  const updatedState = { ...prev };
                  updatedState.whoAreYou = 'Doomer';
                  return updatedState;
                });
              }}
            />
            Doomer
          </div>
          <div className="radio-item">
            <input
              type="radio"
              name="radio"
              id="zoomer"
              className="radio-input"
              onChange={() => {
                setUserCard((prev) => {
                  const updatedState = { ...prev };
                  updatedState.whoAreYou = 'Zoomer';
                  return updatedState;
                });
              }}
            />
            Zoomer
          </div>
        </div>
        <button type="submit">Send</button>
      </form>
      <div className="forms-items">
        {cards.length === 0 || errors.length !== 0
          ? null
          : cards.map((item) => (
              <div className="form-card-wrapper" key={item.firstName}>
                <div>First Name: {item.firstName}</div>
                <div>Last Name: {item.lastName}</div>
                <div>
                  <img
                    src={URL.createObjectURL(item.file as File)}
                    alt=""
                    className="form-card-img"
                  />
                </div>
                <div>Birthday: {item.birthday}</div>
                <div>Country: {item.country}</div>
                <div>Address: {item.address}</div>
                <div>City: {item.city}</div>
                <div>Email Notification: {item.emailNotification ? '✓' : 'x'}</div>
                <div>Phone Notification: {item.phoneNotification ? '✓' : 'x'}</div>
                <div>Cool website: {item.coolWebsite ? '✓' : 'x'}</div>
                <div>Cool forms: {item.coolFroms ? '✓' : 'x'}</div>
                <div>Who are you: {item.whoAreYou}</div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Forms;
