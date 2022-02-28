import { useState } from 'react';

const useForm = () => {
  const [user, setUser] = useState('');

  const updateUser = (event) => {
    setUser(event.target.value);
  };

  return { user, updateUser };
};

export default useForm;
