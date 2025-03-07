// Given are two strings password and password_repeat. Check if the password is secure by the following critera:
// both passwords must match
// password must be at least 20 chars

// Return true only if all criteria are met, otherwise return false




  let pass1 = "aminaaminaaminaaminaaminaamina";
  let pass2 = "aminaaminaaminaaminaaminaamina";

  let access = false;

  if (pass1 >= 20 && pass2 === pass1) {
    access = true;
  }

  console.log(access);


