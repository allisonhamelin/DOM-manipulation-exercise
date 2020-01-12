const jqScript = document.createElement('script');
jqScript.src = "https://code.jquery.com/jquery-3.4.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqScript);

setTimeout(() => {
    const displayModal = () => {
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.bottom = '0';
        container.style.left = '0';
        container.style.zIndex = '10000';
        container.style.backgroundColor = 'white';
        container.style.width = '100vw';
        container.style.height = '40%';
        container.style.overflow = 'scroll';

        container.innerHTML = '<div style="height: 25%; background-color: #0096D6; display: flex; justify-content: center; align-items: center">\n' +
            '    <svg viewBox="0 -59 512.001 512" height="65px" style="fill: white; margin-right: 15px" xmlns="http://www.w3.org/2000/svg"><path d="m507.605469 143.394531-139-139c-5.859375-5.859375-15.355469-5.859375-21.214844 0l-225.40625 225.40625c-5.859375 5.859375-5.859375 15.355469 0 21.214844l26.390625 26.390625h-66.023438c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h96.023438l82.609375 82.609375c2.8125 2.8125 6.628906 4.394531 10.605469 4.394531 3.980468 0 7.796875-1.582031 10.609375-4.394531l225.40625-225.410156c2.816406-2.8125 4.394531-6.625 4.394531-10.605469 0-3.976562-1.578125-7.792969-4.394531-10.605469zm-345.40625 105.410157 102.050781-24.199219-5.964844 120.285156zm300.28125-108.109376-120.285157 5.964844 24.199219-102.050781zm-160.144531 44.046876-121.734376 28.867187 150.59375-150.59375zm-7.691407 32.65625 23.613281-5.597657c5.515626-1.308593 9.824219-5.617187 11.132813-11.136719l5.597656-23.609374 123.890625-6.144532-170.378906 170.378906zm0 0"/><path d="m82.351562 66.113281h155.945313c8.285156 0 15-6.71875 15-15 0-8.285156-6.714844-15-15-15h-155.945313c-8.285156 0-15 6.714844-15 15 0 8.28125 6.714844 15 15 15zm0 0"/><path d="m34.96875 129.234375h92.820312c8.285157 0 15-6.714844 15-15 0-8.28125-6.714843-15-15-15h-92.820312c-8.285156 0-15 6.71875-15 15 0 8.285156 6.714844 15 15 15zm0 0"/><path d="m170.945312 337.40625h-155.945312c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h155.945312c8.285157 0 15-6.714844 15-15s-6.714843-15-15-15zm0 0"/></svg></svg>\n' +
            '    <h1 style="color: white; font-size: 32px; font-weight: 800;">FREE</h1>\n' +
            '</div>\n' +
            '<div style="position: relative; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 40px 0;">\n' +
            '    <span style="width: 75%; max-width: 900px; color: #333333">Get $10 credit towards your plan and try HP Instant Ink for <strong>FREE</strong> today. No commitments or fees - change or cancel your plan anytime.</span>\n' +
            '    <button style="display: inline-block;\n' +
            '    border-radius: 5px;\n' +
            '    padding: 1rem 3.5rem;\n' +
            '    margin: 0;\n' +
            '    text-decoration: none;\n' +
            '    border: 2px solid #0096D6;\n' +
            '    background: transparent;\n' +
            '    color: #0096D6;\n' +
            '    cursor: pointer;\n' +
            '    text-align: center; font-size: 16px">Get my free ink</button>\n' +
            '    <div style="position: absolute; top: 15px; right: 15px">\n' +
            '        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"\n' +
            '             style="enable-background:new 0 0 512 512;" width="30px" xml:space="preserve" fill="#333333">\n' +
            '<g>\n' +
            '\t<g>\n' +
            '\t\t<path d="M256,0C114.508,0,0,114.497,0,256c0,141.493,114.497,256,256,256c141.492,0,256-114.497,256-256\n' +
            '\t\t\tC512,114.507,397.503,0,256,0z M256,472c-119.384,0-216-96.607-216-216c0-119.385,96.607-216,216-216\n' +
            '\t\t\tc119.384,0,216,96.607,216,216C472,375.385,375.393,472,256,472z"/>\n' +
            '\t</g>\n' +
            '</g>\n' +
            '            <g>\n' +
            '\t<g>\n' +
            '\t\t<path d="M343.586,315.302L284.284,256l59.302-59.302c7.81-7.81,7.811-20.473,0.001-28.284c-7.812-7.811-20.475-7.81-28.284,0\n' +
            '\t\t\tL256,227.716l-59.303-59.302c-7.809-7.811-20.474-7.811-28.284,0c-7.81,7.811-7.81,20.474,0.001,28.284L227.716,256\n' +
            '\t\t\tl-59.302,59.302c-7.811,7.811-7.812,20.474-0.001,28.284c7.813,7.812,20.476,7.809,28.284,0L256,284.284l59.303,59.302\n' +
            '\t\t\tc7.808,7.81,20.473,7.811,28.284,0C351.398,335.775,351.397,323.112,343.586,315.302z"/>\n' +
            '\t</g>\n' +
            '</g>\n' +
            '</svg>\n' +
            '\n' +
            '    </div>\n' +
            '</div>';

        document.body.appendChild(container);
    };

    const topOfPlansSection = $("#plans-section").offset().top;

    $(window).on('scroll', () => {
        if ($(window).scrollTop() > topOfPlansSection) {
            displayModal();
            $(window).off('scroll');
        }
    });
}, 500);
