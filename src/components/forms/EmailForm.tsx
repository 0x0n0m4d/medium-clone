import { useState } from 'react';

interface Props {
  onSubmit: Function;
  id: string;
}

const EmailForm = ({ onSubmit, id }: Props) => {
  const [email, setEmail] = useState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(email);
      }}
    >
      <div>
        <label htmlFor={id}>Your email</label>
        <input type="email" id={id} onChange={e => setEmail(e.target.value)} />
      </div>
      <button type="submit">Continue</button>
    </form>
  );
};

export default EmailForm;
