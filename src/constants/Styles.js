// Styles

export const mainBlock = {
    display: 'flex'
};



export const clientStyle = {
    width: '100%',
    height: '500px',
    border: '1px solid rgb(172, 172, 172)',
    borderRadius: '0.8rem',
    textAlign: 'left',
    backgroundColor: '#FCFCFC',
    color: '#00000',
    fontFamily: "'Lato', 'PT Sans', Helvetica, sans-serif"
};

export const noDisplayInit = {

display: 'none'
};


export const clientStyleInit ={
borderRadius: '0.8rem',
marginLeft: '35%',
width: '30%',
border: '1px solid #ACACAC',
textAlign: 'left',
backgroundColor: '#FCFCFC',
color: '#00000',
paddingBottom: '15%'
};


export const userBlock = {
    border: '1px solid rgb(172, 172, 172)',
    borderRadius: '0.8rem',
    display: 'block',
    width: '50%',
    textAlign: 'left',
    backgroundColor: '#FCFCFC',
    color: '#00000',
    fontFamily: "'Lato', 'PT Sans', Helvetica, sans-serif"
    
}

export const footerStyle = {
    display: 'flex',
    flexDirection: 'row',
    
    
};

export const footerStyleInit = {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '10%',
    color: 'red'
    
};


export const userList = {
    cursor: 'pointer',
    //backgroundColor: '#ACACAC',
    marginTop: '1px',
    marginBottom: '1px'
};

export const buttonStyle = {
    
    margin: '3px',
    fontSize: '10px',
    padding: '5px',
    cursor: 'pointer',
   // WebkitBoxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)',
   // boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)'
    
    
    borderRadius: '.2rem'
};
export const disabledButtonStyle = Object.assign({}, buttonStyle, {
    
    cursor: 'not-allowed',
    
    
    borderRadius: '.2rem'
});
export const recipientStyle = {
    fontSize: '14px',
    lineHeight: '12px',
    padding: '5px 5px 0',
    color: '#89b9df'};
export const senderStyle = {
    fontSize: '14px',
    lineHeight: '14px',
    padding: '5px 5px 0',
    color: '#c76499'};
export const historyContainerStyle = {
    
    height: '63.35%',
    width: '100%'
};
export const historyStyle = {
    height: '100%',
    width: '100%',
    overflow: 'scroll',
    margin: '0px',
    padding: '0px',
    fontSize: '20px',
    fontFamily: 'Arial, sans-serif',
};
export const statusStyle = {
    fontSize: '17px',
    lineHeight: '15px',
    padding: '10px 5px 0 5px',
    flexGrow: '2',
    textAlign: 'center',
    color: '#1A73E8',
    fontFamily: 'Product_Sans_Bold'
};
export const errorStatusStyle = Object.assign({}, statusStyle, {
    color: '#EA4335',
    textAlign: 'center'
});
export const fieldStyle = {
    margin: '10px',
    fontFamily: 'Google_Sans_Regular'
};
export const labelStyle = {
    marginRight: '10px'
};
