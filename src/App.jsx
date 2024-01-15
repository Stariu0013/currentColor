import { useState } from "react";
import FilterIcon from "./components/FilterIcon";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className="m-10">
            <h1
                className="text-3xl mb-2 font-bold underline text-primary"
                onClick={onClick}
            >
                Click me
            </h1>
            {isOpen ? <FilterIcon className="text-tertiary" /> : <FilterIcon />}
        </div>
    );
}

export default App;
