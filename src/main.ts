import './style.css';
if(new URLSearchParams(location.search).get('mode')==='explore')import('./explorer');else import('./runner');
