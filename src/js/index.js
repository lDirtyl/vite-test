// import { load, save } from './localstorage-api';
import * as localstorageAPI from './localstorage-api';

const greetUser = () => {
  // const userInfoFromLS = load('user-info');
  const userInfoFromLS = localstorageAPI.load('user-info');
  if (userInfoFromLS !== undefined) {
    alert(`Wellcome ${userInfoFromLS.firstName} ${userInfoFromLS.lastName}`);
    return;
  }

  const firstName = prompt('What is your first mane?');
  const lastName = prompt('What is your last name?');

  const userInfo = {
    firstName,
    lastName,
  };

  // save('user-info', userInfo);
  localstorageAPI.save('user-info', userInfo);

  alert(`Wellcome ${userInfo.firstName} ${userInfo.lastName}`);
};

greetUser();
