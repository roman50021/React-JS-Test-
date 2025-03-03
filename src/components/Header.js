import React from "react";
import Button from "./Button";

class Header extends React.Component{
    render() {
        return(
            <header className={"header"}>
                {this.props.title}
                <Button text="Button"/>

            </header>
        )
    }

    componentDidUpdate(prevProps) {
        if(this.state.helpText !== "Help")
            console.log("Some")
    }
}

export default Header