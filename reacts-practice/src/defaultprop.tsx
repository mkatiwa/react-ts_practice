interface MyComponentprop {
    title?: string;
    count?: number;
    color?: string;
}

const MyComponent: React.FC<MyComponentprop> = ({ title, count = 0, color = 'black' }) => {
    return (
        <div style={{ backgroundColor: color }}>
            <h1>{title || 'Hello World'}</h1>
            <p>count: {count}</p>
        </div>
    );
};

export default MyComponent;