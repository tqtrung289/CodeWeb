let Sinhvien = [];

const submit = (e) => {
  let msv = document.getElementById('msv').value;
  let ten = document.getElementById('ten').value;
  let email = document.getElementById('email').value;
  Sinhvien.push({
    msv,
    ten,
    email,
  });
  show();
};
const show = () => {
  let result = document.getElementById('result');
  result.innerHTML = '';
  Sinhvien.forEach((item) => {
    let msv = `<span style="color: ${item.msv === 'B19DCAT199' ? 'red' : 'green'}">${
      item.msv
    }</span>`;
    result.innerHTML += `<li id="${item.msv}">
            Tên: ${item.ten}, MSV: ${msv}, Email: ${item.email} <button onclick="deleteSinhvien(event)">Xóa</button><button onclick="editSinhvien(event)">Edit</button>
        </li>`;
  });
};
const deleteSinhvien = (event) => {
  let li = event.target.parentElement;
  Sinhvien = Sinhvien.filter((item) => item.msv !== li.id);
  li.remove();
};

const editSinhvien = (event) => {
  let li = event.target.parentElement;
  let item = {};
  let index = 0;
  Sinhvien.forEach((elem, i) => {
    if (elem.msv === li.id) {
      item = elem;
      index = i;
    }
  });
  li.innerHTML = `
        <input id="msv_edit" type="text" value="${item.msv}">
        <input id="ten_edit" type="text" value="${item.ten}">
        <input id="email_edit" type="text" value="${item.email}">
        <input onclick="submitEdit(event, ${index})" type="button" value="Submit">
    `;
};

const submitEdit = (event, index) => {
  let msv = document.getElementById('msv_edit').value;
  let ten = document.getElementById('ten_edit').value;
  let email = document.getElementById('email_edit').value;
  Sinhvien[index] = {
    msv,
    ten,
    email,
  };
  show();
};
