import { useForm } from 'react-hook-form';
import './Forms.css';
import React, { useState } from 'react';
interface userCard {
  lastName: string;
  birthday: string;
  file: File;
  country: string;
  city: string;
  address: string;
  emailNotification: boolean;
  phoneNotification: boolean;
  coolWebsite: boolean;
  coolFroms: boolean;
  whoAreYou: string;
}

function Forms() {
  const [cards, setCards] = useState<userCard[] | []>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<userCard>();
  const submit = (data: userCard) => {
    const file = Object.values(data.file)[0];
    setCards([...cards, { ...data, file: file }]);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)} className="form-wrapper">
        <div className="personal-wrapper">
          <h3>Personal information</h3>
          <span>First and Last Name</span>
          <input
            {...register('lastName', {
              required: 'required field',
              pattern: {
                value: /^[A-Z][a-z]{2,}$/,
                message: 'start with a capital letter, need to be at least 3 characters long',
              },
            })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
          <span>Birthday</span>
          <input
            type="date"
            {...register('birthday', {
              required: 'required field',
            })}
          />
          {errors.birthday && <p>{errors.birthday.message}</p>}
          <span>Upload profile picture</span>
          <input
            type="file"
            id="input-file"
            {...register('file', {
              required: 'required field',
              pattern: {
                value: /^[A-Z][a-z]{2,}$/,
                message: 'start with a capital letter, need to be at least 3 characters long',
              },
            })}
          />
          {errors.file && <p>{errors.file.message}</p>}
        </div>
        <div className="addres-wrapper">
          <h3>Country</h3>
          <select
            {...register('country', {
              required: 'required field',
            })}
          >
            <option value="uk">ukraine</option>
            <option value="ru">russia</option>
            <option value="bel">belarus</option>
            <option value="kz">kazakhstan</option>
          </select>
          {errors.country && <p>{errors.country.message}</p>}
          <span>City</span>
          <input
            type="text"
            {...register('city', {
              required: 'required field',
              pattern: {
                value: /^[A-Z][a-z]{2,}$/,
                message: 'start with a capital letter, need to be at least 3 characters long',
              },
            })}
          />
          {errors.city && <p>{errors.city.message}</p>}
          <span>Address</span>
          <input
            type="text"
            {...register('address', {
              required: 'required field',
              pattern: {
                value: /^[A-Z][a-z]{2,}$/,
                message: 'start with a capital letter, need to be at least 3 characters long',
              },
            })}
          />
          {errors.address && <p>{errors.address.message}</p>}
        </div>
        <div className="contact-wrapper">
          <span>Email Notification</span>
          <div className="contact-item">
            <input
              type="checkbox"
              {...register('emailNotification', {
                required: { value: true, message: 'you have not choise :(' },
              })}
            />
            {errors.emailNotification && <p>{errors.emailNotification.message}</p>}
            <span>Receive notifications by mail</span>
          </div>
          <span>Phone Notification</span>
          <div className="contact-item">
            <input
              type="checkbox"
              {...register('phoneNotification', {
                required: { value: true, message: 'you have not choise :(' },
              })}
            />
            {errors.phoneNotification && <p>{errors.phoneNotification.message}</p>}
            <span>Receive notifications by sms</span>
          </div>
        </div>
        <div className="addition-wrapper">
          <span>Reviews</span>
          <div className="addition-item">
            <input
              type="checkbox"
              {...register('coolWebsite', {
                required: { value: true, message: 'you have not choise :(' },
              })}
            />
            {errors.coolWebsite && <p>{errors.coolWebsite.message}</p>}
            <label htmlFor="cool-w">Cool website</label>
          </div>
          <div className="addition-item">
            <input
              type="checkbox"
              {...register('coolFroms', {
                required: { value: true, message: 'you have not choise :(' },
              })}
            />
            {errors.coolFroms && <p>{errors.coolFroms.message}</p>}
            <label htmlFor="cool-f">Cool forms</label>
          </div>
        </div>
        <div className="radio-wrapper">
          <span>Who are you</span>
          <div className="radio-item">
            <input
              type="radio"
              id="doomer"
              className="radio-input"
              {...register('whoAreYou', {
                required: { value: true, message: 'just choose one' },
              })}
            />
            {errors.whoAreYou && <p>{errors.whoAreYou.message}</p>}
            Doomer
          </div>
          <div className="radio-item">
            <input
              type="radio"
              id="zoomer"
              className="radio-input"
              {...register('whoAreYou', {
                required: { value: true, message: 'just choose one' },
              })}
            />
            {errors.whoAreYou && <p>{errors.whoAreYou.message}</p>}
            Zoomer
          </div>
        </div>
        <button type="submit">Send</button>
      </form>
      <div className="forms-items">
        {cards.length === 0
          ? null
          : cards.map((item) => (
              <div className="form-card-wrapper" key={item.lastName}>
                <div>Name and Surname: {item.lastName}</div>
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
                <div>Who are you: {item.whoAreYou === 'on' ? 'Doomer' : 'Zoomer'}</div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Forms;
