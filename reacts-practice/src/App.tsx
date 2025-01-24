
import Book from './mycomponent'
import MyComponent from './defaultprop';
import StyledComponent from './styledcomponent';


const App: React.FC = () => {
    return (
        <div>
            <h2>welcome to my books</h2>
            {/* Render the Book component*/}
            <Book title="The Catcher in the Rye" pages={34} isActive={true}/>

            {/* Render the MyComponent component with default props*/}
            <MyComponent title="Custom Title" count ={23} color='black'/>


            <h1>App Components</h1>
            {/* Render the StyledComponent component*/}
            <StyledComponent bgColor="lightgreen" textcolor="darkgreen" />

        </div>
    );
};


export default App;