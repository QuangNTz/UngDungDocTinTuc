'use strict';

const news_container = document.getElementById('news-container');
const btn_prev = document.getElementById('btn-prev');
const btn_next = document.getElementById('btn-next');
const page_num = document.getElementById('page-num');

const btn_submit = document.getElementById('btn-submit');
const input_query = document.getElementById('input-query');

btn_prev.classList.add('hidden');

let page = 1,
  rows = 0,
  pagemax = 0;
//!Doc du lieu userArr tu localStorage
let npp = localStorage.getItem('npp_ls');
//! Neu chua ton tai data thi tao va luu xuong localStorage
if (npp == undefined) {
  npp = 5;
  localStorage.setItem('npp_ls', JSON.stringify(npp));
}

//*------------------------------------------------*/
// render data tu API
const renderNEWS = function (data, page) {
  let bd = npp * (page - 1);
  let kt = npp * page;
  // neu trang cuoi thi gan kt = dong cuoi cua du lieu tai ve
  if (page === pagemax) kt = rows;

  news_container.innerHTML = '';

  for (let i = bd; i < kt; i++) {
    const html = `
          <div class="news-block">
              <div class="TechCrunch__img">
                  <img src="${data.articles[i].urlToImage}" />
              </div>
              <div class="info">
                  <h5 class="title">${data.articles[i].title}</h5>
                  <h6 class="author">${data.articles[i].author}</h6>
                  <p class="content">${data.articles[i].content}</p>
                  <button type="button" class="btn btn-primary">View</button>
              </div>
          </div>
        `;
    news_container.insertAdjacentHTML('beforeend', html);
  }
};

//*------------------------------------------------*/
// func search API
const search = async function (page, key) {
  try {
    //news data
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${key}&apiKey=90c66cd1c4f4437893df17b22beef641`
    );
    if (!res.ok) throw new Error('Problem getting data from API');

    const data = await res.json();
    // Du lieu max tai ve tu API server
    rows = data.totalResults;
    // tinh so trang max can thiet de hien thi du lieu tai ve
    pagemax = Math.ceil(rows / npp);
    renderNEWS(data, page);
    console.log(data);
  } catch (err) {
    console.error(`${err.message} 💥💥💥 👌`);
  }
};

//*------------------------------------------------*/
//! su kien nut search
btn_submit.addEventListener('click', function () {
  console.log('category:', input_query.value, '; npp:', npp);

  //render trang 1
  search(page, input_query.value);
});

//*------------------------------------------------*/
//! su kien nut next
btn_next.addEventListener('click', function () {
  page++;
  page_num.innerText = `${page}`;

  // An hien nut previous, next
  if (page === 1) {
    btn_prev.classList.add('hidden');
  } else {
    btn_prev.classList.remove('hidden');
  }
  // An hien nut previous, next
  if (page === pagemax) {
    btn_next.classList.add('hidden');
  } else {
    btn_next.classList.remove('hidden');
  }
  // chay ham render
  search(page, input_query.value);
});

//*------------------------------------------------*/
//! su kien nut previous
btn_prev.addEventListener('click', function () {
  page--;
  page_num.innerText = `${page}`;

  // An hien nut previous, next
  if (page === 1) {
    btn_prev.classList.add('hidden');
  } else {
    btn_prev.classList.remove('hidden');
  }
  // An hien nut previous, next
  if (page === pagemax) {
    btn_next.classList.add('hidden');
  } else {
    btn_next.classList.remove('hidden');
  }
  // chay ham render
  search(page, input_query.value);
});
