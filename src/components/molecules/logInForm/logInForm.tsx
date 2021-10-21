import React, { useState } from 'react';
import Button from '../../atoms/button/button';
import Input from '../../atoms/input/input';
import Label from '../../atoms/label/label';
import './loginForm.scss';

const LogInForm = () => {
  return (
    <form className="logInForm">
      <Label htmlFor="name" className="atom_style_label">
        User Name
      </Label>
      <Input placeholder="Input user name" id="name" type="text" required />
      <Label htmlFor="password" className="atom_style_label">
        Password
      </Label>
      <Input placeholder="Input password" id="password" type="password" required />
      <Button type="submit" className="atom_style_button">
        Log in
      </Button>
    </form>
  );
};

export default LogInForm;
