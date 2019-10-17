let login = function (lightdm, $) {
  let selectedUser = null;
  let password = null;
  let $user = $('#user');
  let $pass = $('#pass');

  let setupUserList = function () {
    let $list = $user;
    let toAppend = null;

    $.each(lightdm.users, function (i) {
      let username = lightdm.users[i].name;
      let dispname = lightdm.users[i].displayName;

      $list.append(`<option value="${username}">${dispname}</option>`);
    });
  };

  let selectUserFromList = function (idx) {
    let idx = idx || 0;

    findAndDisplayUserPicture(idx);

    if (lightdm._username) {
      lightdm.cancelAuthentication();
    }

    selectedUser = lightdm.users[idx].name;

    if (selectedUser !== null) {
      window.startAuthentication(selectedUser);
    }

    $pass.trigger('focus');
  };
}