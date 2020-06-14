const checkboxItem = document.querySelector('.theme-switch input[type="checkbox"]');

function ifChecked (e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

checkboxItem.addEventListener('change', ifChecked, false);