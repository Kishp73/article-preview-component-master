// getting buttom for display share container

const button = document.querySelector('#share_display');

// geting the elements to be displayed

const element_share_container = document.querySelector('#share_container');
const element_profile_static = document.querySelector('#profile_container');

const element_social_media_container = document.querySelector('#social_media_container');

const main = document.getElementsByTagName('body');
screen_size = parseInt(main[0].offsetWidth);

let display_sharesmobile = false;
let display_sharedesktop = true;

button.addEventListener('click',()=>{
    if (screen_size < 600){

        if (display_sharesmobile == false){

            element_social_media_container.style.cssText = 'background-color: var(--Very-Dark-Grayish-Blue); padding: 0 25px 0;';
            element_profile_static.style.display = 'none';
            element_share_container.style.display = 'flex';
            display_sharesmobile = true;

        }else{

            element_social_media_container.style.cssText = 'background-color: var(--white); padding: 0 25px 0;';
            element_profile_static.style.display = 'grid';
            element_share_container.style.display = 'none';
            display_sharesmobile = false;

        }

    }else if (screen_size > 600){
        if (display_sharedesktop){
            element_share_container.className = 'mobile';
            element_share_container.style.display = 'flex';
            display_sharedesktop = false;
        }else{
            element_share_container.removeAttribute('class');
            element_share_container.style.display = 'none';
            display_sharedesktop = true;
        }

    }

})
