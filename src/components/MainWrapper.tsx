import styled from "styled-components";
import ColorPalette from "../values/ColorPalette.tsx";

const MainWrapper = () => {
    return (
        <Columns>
            <Column><Box height={'20%'}/> <Box/></Column>
            <Column>2</Column>
            <Column>3</Column>
            <Column>4</Column>
        </Columns>
    )
}

const Columns = styled.div`
    display: flex;
    height: 100%;
`

const Column = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
const Box = styled.div<{height?: string}>`
    background-color: ${ColorPalette.header.hex};
    border-radius: 20px;
    width: 100%;
    height: ${props => props.height || '100%'};
`

export default MainWrapper