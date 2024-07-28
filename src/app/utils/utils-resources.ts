export const BRAND_BASE_INFO: { [key: string] : string} ={
    COMPANY_NAME: "3D Web Studio",
    BRAND_NAME: "3D Web Studio",
    COMPANY_SITE_NAME:"3dwebstudio.eu",
    COMPANY_SITE_URL:"https://www.3dwebstudio.eu",
    CONTACT_US_EMAIL: "support@3dwebstudio.eu",
    FAVICON: "https://tiledesk.com/wp-content/uploads/2022/07/tiledesk_v13-300x300.png",
    META_TITLE:"Design Studio",
    LOGO_CHAT:"https://widget.tiledesk.com/v2/assets/images/tiledesk_logo_white_small.svg",
    POWERED_BY:"<a tabindex='-1' target='_blank' ref='https://www.3dwebstudio.eu/'><span>Powered by 3D Web Studio</span></a>",
}

export const LOGOS_ITEMS: { [key: string] : { label: string, icon: string }} ={
    COMPANY_LOGO: {label: BRAND_BASE_INFO.COMPANY_NAME,  icon: 'assets/logos/tiledesk_logo.svg'},
    COMPANY_LOGO_NO_TEXT: {label: BRAND_BASE_INFO.COMPANY_NAME, icon: 'assets/logos/tiledesk_logo_no_text.svg'},
    BASE_LOGO: {label: BRAND_BASE_INFO.BRAND_NAME,  icon: 'assets/logos/tiledesk_logo.svg'},
    BASE_LOGO_NO_TEXT: {label: BRAND_BASE_INFO.BRAND_NAME, icon: 'assets/logos/tiledesk_logo_no_text.svg'},
    BASE_LOGO_WHITE: { label: BRAND_BASE_INFO.BRAND_NAME, icon: '"assets/logos/tiledesk-logo_new_white.svg'},
    BASE_LOGO_WHITE_NO_TEXT: { label: BRAND_BASE_INFO.BRAND_NAME, icon: '"assets/logos/tiledesk-logo_new_white.svg'},
    BASE_LOGO_GRAY: { label: BRAND_BASE_INFO.BRAND_NAME, icon: 'https://support-pre.tiledesk.com/dashboard/assets/img/logos/tiledesk-logo_new_gray.svg'}
}
