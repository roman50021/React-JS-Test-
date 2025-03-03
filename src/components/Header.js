import React from "react";

class Header extends React.Component{
    render() {
        return(
            <header className={"header"}>
                {this.props.title}

            </header>
        )
    }

    componentDidUpdate(prevProps) {
        if(this.state.helpText !== "Help")
            console.log("Some")
    }
}

export default Header