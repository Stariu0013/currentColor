import { useState } from "react";
import FilterIcon from "./components/FilterIcon";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className="m-10">
            <FilterIcon
                onClick={onClick}
                className={isOpen ? "text-tertiary" : ""}
            />
        </div>
    );
}

export default App;
