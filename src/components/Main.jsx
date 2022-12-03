import { useState } from "react";

function Main() {
    function useHover() {
        const [hovering, setHovering] = useState(false)
        const onHoverProps = {
            onMouseEnter: () => setHovering(true),
            onMouseLeave: () => setHovering(false),
        }
        return [hovering, onHoverProps]
    }

    const [wordAIsHovering, wordAHoverProps] = useHover()
    const [wordBIsHovering, wordBHoverProps] = useHover()
    const [wordCIsHovering, wordCHoverProps] = useHover()

    return (
        <main>
            <ul>
                <li><a href="#projects"><h2 {...wordAHoverProps}>{wordAIsHovering ? "PROJCTS" : "HELLO"}</h2></a></li>
                <li><a href="#about"><h2 {...wordBHoverProps}>{wordBIsHovering ? "ABOUT" : "NICE"}</h2></a></li>
                <li><a href="#contact"><h2 {...wordCHoverProps}>{wordCIsHovering ? "CONTACT" : "SEEING-U"}</h2></a></li>
            </ul>
        </main>
    );
}

export default Main;