interface StyledComponentprops {
    bgColor?: string;
    textcolor?: string;
}

const StyledComponent: React.FC<StyledComponentprops> = ({  bgColor = 'lightblue', textColor='black' }) => {
    const containerStyle: React.CSSProperties = {
        backgroundColor: bgColor,
        textAlign: 'center',
        padding: '10px',
        borderRadius: '5px',
    }
    const textStyle: React.CSSProperties = {
        color: textColor,
        fontSize: '16px',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyle}>
            <p style={textStyle}>This is a styled component</p>
        </div>
    )
}

export default StyledComponent;