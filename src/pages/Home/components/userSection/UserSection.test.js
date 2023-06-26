import { render, screen } from "@testing-library/react"
import UserSection from '.'
import UsersMock from '../../../../mocks/Users.json'

test("should render title and items with designated length", () => {
    render(<UserSection title={"My title"} users={UsersMock}/>)

    const renderedCards = screen.queryAllByTestId("card")
    const renderedTitle = screen.getByTestId("section-title")

    expect(renderedCards.length).toBe(3)
    expect(renderedTitle).toHaveTextContent("My title")
})