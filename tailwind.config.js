module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          'bgheader': '#19191B',
          'bgpicture': '#F2EAEC',
          'bgrectangle1': '#32323E',
          'bgrectangle2': '#292929',
          'bgrectangle3': '#303036',
          'bgrectangle4': '#2B2A35',
          'bgrectangle5': '#EFE6E8',
          'bgrectangle6': '#484853',
          'bghero': '#303036',
          'footerButtons': '#2E2E46'
        },
        orange: {
          'bgbutton': '#FF6810',
          'bgrectangle': '#F46614',
          'bgbody2': '#FFEED9'
        }
      },
      fontFamily: {
        'circularstd': ['Circular Std Book'],
        'airbnb': ['Airbnb Cereal App']
      },
      fontSize: {
        sm1: ['12px', '19.2px'],
        sm2: ['14px', '22.4px'],
        md1: ['16px', '25.6px'],
        md2: ['18px', '28.8px'],
        md3: ['42px', '52.08px'],
        md4: ['24px', '26.88px'],
        md5: ['28px', '35.56px'],
        lg1: ['54px', '64.8px']
      },
      fontWeight: {
        'normal': 400
      },
      textColor: {
        'cardtext': '#828282',
        'testimonialheader': '#2E2E46',
        'testimonialparagraph': '#222831'
      },
      spacing: {
        '40p': '40%',
        '5': '5px',
        '6': '6px',
        '7px': '7px',
        '8px': '8px',
        '9px': '9px',
        '10px': '10px',
        '12px': '12px',
        '13px': '13px',
        '14': '14px',
        '15': '15px',
        '16': '16px',
        '18': '18px',
        '19': '19px',
        '19.34': '19.34px',
        '20': '20px',
        '21': '21px',
        '22': '22px',
        '23': '23px',
        '24px': '24px',
        '25px': '25px',
        '26': '26px',
        '27': '27px',
        '28': '28px',
        '29.93': '29.93px',
        '30': '30px',
        '31': '31px',
        '36': '36.25px',
        '38': '38px',
        '38.33': '38.33px',
        '40': '40px',
        '40.4': '40.4px',
        '42': '42px',
        '44': '44px',
        '45': '45px',
        '46': '46px',
        '48': '48px',
        '49': '49px',
        '50': '50px',
        '52': '52px',
        '54': '54.9px',
        '55': '55px',
        '56': '56px',
        '60': '60px',
        '61px': '61px',
        '61': '61.11px',
        '63': '63.19px',
        '64': '64px',
        '70': '70px',
        '72': '72.9px',
        '74': '74px',
        '76': '76.93px',
        '80': '80px',
        '84': '84.5px',
        '88': '88.05px',
        '89': '89.08px',
        '90': '90px',
        '93': '93.22px',
        '94': '94px',
        '100': '100px',
        '102': '102.55px',
        '103': '103px',
        '111': '111px',
        '119': '119.12px',
        '122': '122.23px',
        '133': '133px',
        '134': '134px',
        '135': '135px',
        '139': '139px',
        '141': '141px',
        '142': '142.94px',
        '143': '143.98px',
        '144': '144px',
        '154': '154.4px',
        '156': '156px',
        '157': '157px',
        '159': '159px',
        '169': '169px',
        '178': '178px',
        '185': '185px',
        '200': '200px',
        '210': '210px',
        '220': '220px',
        '232': '232px',
        '240': '240px',
        '245': '245.05px',
        '262': '262px',
        '272': '272.7px',
        '279': '279px',
        '300': '300px',
        '303': '303px',
        '322': '322px',
        '330': '330px',
        '348': '348px',
        '349': '349.07px',
        '352': '352px',
        '360': '360px',
        '374': '374px',
        '378': '378px',
        '401': '401px',
        '406': '406px',
        '425': '425px',
        '451': '451px',
        '457': '457px',
        '472': '472px',
        '486': '486.47px',
        '487': '487px',
        '509': '509px',
        '517': '517px',
        '519': '519px',
        '520': '520px',
        '528': '528px',
        '547': '547px',
        '601': '601px',
        '665': '665px',
        '715': '715px',
        '720': '720px',
        '800': '800px',
        '833': '833.98px',
        '870': '870px',
        '1110': '1110px',
        '1170': '1170px',
        '20p': '20%',
        '50p': '50%'
      },
      borderRadius: {
        '6': '6px',
        '10': '10px',
        '12': '12px',
        '61': '61.79px'
      },
      borderWidth: {
        '05px': '0.5px',
        '1px': '1px',
        '12px': '12px'
      },
      borderColor: {
        'red1': '#e51400',
        'orange1': '#FF6810',
        'testimonialborder': 'rgba(118, 129, 146, 0.1)'
      },
      border: {
        'footerBorder': '1px solid rgba(105, 120, 131, 0.4)'
      },
      opacity: {
        '6': '0.06',
      },
      backgroundImage: {
        'split-colors': "linear-gradient(90deg, #FFEED9 50% , white 50%);",
        'split-bottom': "linear-gradient(to bottom, #FFEED9 50% , white 50%);",
        'germany': "linear-gradient(to bottom, #333 33% , #e51400 33% , #e51400 66% , #f8de1f 66% );",
        'canada': "linear-gradient(to right, #e51400 25%, white 25%, white 75%, #e51400 75%);",
        'irland': "linear-gradient(to right, #2B9F5A 25%, white 25%, white 75%, #2B9F5A 75%);"
      },
      boxShadow: {
        'custom': '32px 49px 80px rgba(125, 149, 169, 0.12)',
        'testimonial': '4px 20px 100px rgba(8, 21, 38, 0.06)',
        'inner': 'inset 0px -6px 8px rgba(12, 65, 109, 0.08), inset 0px 4px 8px rgba(8, 46, 78, 0.25)'
      },
      lineHeight: {
        '40px': '40px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
