import { render, fireEvent, screen } from "@testing-library/react";
import MiniRepoCard from '.'
import MiniRepoProfile from '../../../../../../../mocks/MiniRepoProfile.json'

const checkInsideMiniRepoCard = () => {
    const repoName = screen.getByTestId("repo-name");
    const repoStars = screen.getByTestId("repo-stars");
    const repoDescription = screen.getByTestId("repo-description");
    
    expect(repoName.textContent).toBe('iCinema')
    expect(repoStars.textContent).toBe('3')
    expect(repoDescription.textContent).toBe('It is a most wonderful project in React')


}

describe("MiniRepoCard", () => {
    render(<MiniRepoCard user={MiniRepoProfile}/>)

    beforeEach(() => {

    })

    it("should display repo name, description and amount of stars", () => {
        checkInsideMiniRepoCard()
    })
    it("should display MiniRepo component", () => {
        checkInsideMiniRepoCard()
    })
    describe("should change on hover", () => {
        render(<MiniRepoCard repo={MiniRepoProfile}/>)

        // it("should display username, id and number of followers", () => {
        //     const cardComponent = screen.getByTestId("card");
        //     fireEvent.mouseEnter(cardComponent)
        //     chekInsideCard()
        // })
        // it("should display a button that opens GH profile in new tab", () => {

        // })
        // it("should not display MiniRepo component", () => {

        // })
    })
    // afterAll(() => {

    // })
})