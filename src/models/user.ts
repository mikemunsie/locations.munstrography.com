export class UserModel {
  id = -1;
  email = "";
  created_on = new Date();
  last_login = new Date();
  is_deleted = false;
  role = "";
  instagram_username = "";

  constructor(params = {}) {
    Object.assign(this, params);
  }
}
