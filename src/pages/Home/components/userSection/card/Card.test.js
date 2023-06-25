import { render, fireEvent, screen } from "@testing-library/react";
import Card from '.'
import userProfile from '../../../../../mocks/UserProfile.json'
import MiniRepoCard from '../../../../../mocks/MiniRepoCard.json'

const checkInsideCard = () => {
    // const cardComponent = screen.getByTestId("card");
    const followersNumber = screen.getByTestId("followers-number");
    const username = screen.getByTestId("username");
    const avatarImage = screen.getByAltText("avatar-image");
    const id = screen.getByTestId("id");
    
    expect(followersNumber.textContent).toBe('760Followers')
    expect(username.textContent).toBe('lovelysweet1017')
    expect(avatarImage.src).toBe('https://avatars.githubusercontent.com/u/135192205?v=4')
    expect(id.textContent).toBe('135192205')
}

const checkInsideMiniRepoCard = () => {
    const repoName = screen.getByTestId("repo-name");
    const repoStars = screen.getByTestId("repo-stars");
    const repoDescription = screen.getByTestId("repo-description");
    
    expect(repoName.textContent).toBe('iCinema')
    expect(repoStars.textContent).toBe('3')
    expect(repoDescription.textContent).toBe('It is a most wonderful project in React')


}

describe("Card", () => {
    render(<Card user={userProfile}/>)

    beforeEach(() => {

    })

    it("should display username, id, number of followers, cover image and avatar image", () => {
        checkInsideCard()
    })
    it("should display MiniRepo component", () => {
        checkInsideMiniRepoCard()
    })
    describe("should change on hover", () => {
        render(<Card user={userProfile}/>)

        it("should display username, id and number of followers", () => {
            const cardComponent = screen.getByTestId("card");
            fireEvent.mouseEnter(cardComponent)
            checkInsideCard()
        })
        // it("should display a button that opens GH profile in new tab", () => {

        // })
        // it("should not display MiniRepo component", () => {

        // })
    })
    // afterAll(() => {

    // })
})